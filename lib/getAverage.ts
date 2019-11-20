import { gradeFormat, gradeRound, gradeStatus } from './grades'
import { ScaleAttributes, QualificationType } from './grades/types'

type AverageParams = {
  /**
   * Notas.
   */
  grades: number[]

  /**
   * Ponderaciones.
   */
  weights?: number[]
}

/**
 * Calcula el promedio de una o mas notas, con sus ponderaciones.
 *
 * @example const average = getAverage(scale, { grades: [3,4,6] })
 */
export const getAverage = (
  scale: ScaleAttributes,
  params: AverageParams
): QualificationType => {
  /**
   * Redondeamos las notas.
   */
  const grades = params.grades.map(grade => gradeRound(scale, grade))

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
      value: gradeRound(scale, scale.min),
      valueFormatted: gradeFormat(scale, scale.min),
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
    value: gradeRound(scale, average),
    valueFormatted: gradeFormat(scale, average),
    status: gradeStatus(scale, average)
  }
}
