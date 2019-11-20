import gradeFormat from './grades/gradeFormat'
import gradeRound from './grades/gradeRound'
import gradeStatus from './grades/gradeStatus'
import { ScaleAttributes, QualificationType } from './grades/types'

type AverageParams = {
  /**
   * Notas.
   */
  grades: number[]

  /**
   * Ponderaciones.
   */
  weights: number[]
}

/**
 * Calcula el promedio de una o mas notas, con sus ponderaciones.
 *
 * @example const average = getAverage(scale, { grades: [3,4,6] })
 */
const average = (
  scale: ScaleAttributes,
  params: AverageParams
): QualificationType => {
  if (!scale) {
    throw new Error('No existe la escala consultada')
  }

  /**
   * Redondeamos las notas.
   */
  const grades = params.grades.map(grade => gradeRound(grade, scale))

  /**
   * - Si vienen las ponderaciones entonces las usamos para calcular el promedio
   * - Si no, entonces usamos las notas y calculamos las ponderaciones de forma lineal según la cantidad de notas.
   */
  const weights = params.weights
    ? params.weights
    : grades.map(grade => 100 / grades.length)

  /**
   * Si no hay notas entonces retornamos la nota mínima de la escala.
   */
  if (grades.length === 0 || grades.length !== weights.length) {
    return {
      value: gradeRound(scale.min, scale),
      valueFormatted: gradeFormat(scale.min, scale),
      status: gradeStatus(scale, null)
    }
  }

  /**
   * Promedio calculado.
   */
  let average = 0
  const sumAverages = weights.reduce((acc, weight) => acc + weight, 0)
  grades.forEach((grade, index) => {
    average += grade * (weights[index] / sumAverages)
  })

  /**
   * Si el promedio es menor al mínimo de la escala entonces lo seteamos como mínimo.
   */
  if (average < scale.min) {
    average = scale.min
  }

  return {
    value: gradeRound(average, scale),
    valueFormatted: gradeFormat(average, scale),
    status: gradeStatus(scale, average)
  }
}

export default average
