import gradeRound from './gradeRound'
import { ScaleAttributes } from './types'

/**
 * Puntajes totales y obtenidos.
 */
export type Scores = {
  /**
   * Puntaje total.
   */
  total: number

  /**
   * Puntaje Obtenido.
   */
  obtained: number
}

/**
 * Hace el cálculo de la nota.
 *
 * @example const grade = calcGrade(scale, total, obtained)
 * @param scale
 * @param total
 * @param obtained
 */
const calcGrade = (
  scale: ScaleAttributes,
  total: number,
  obtained: number
): number => {
  let grade = 0
  if (scale.passingPercentage > 0) {
    const passingPercentage = scale.passingPercentage / 100
    const approveMinPoints = total * passingPercentage

    let weight: number
    let calcWeight: number

    if (obtained > approveMinPoints) {
      weight = (scale.max - scale.passingGrade) / (total - approveMinPoints)
      calcWeight = scale.max - weight * total
    } else {
      weight = (scale.passingGrade - scale.min) / approveMinPoints
      calcWeight = scale.passingGrade - weight * total * passingPercentage
    }
    const prevGrade = weight * obtained + calcWeight
    grade = (100 * prevGrade) / 100
  } else {
    grade = (scale.max * obtained) / total
  }
  return grade
}

/**
 * Recibe los puntajes y calcula la nota.
- Si el puntaje obtenido es >= al total entonces asigna la nota máxima de la escala.
- Si el puntaje obtenido es <= 0 entonces asigna la nota minima de la escala.
- Si está en el rango > 0 y < total entonces calcula la nota considerando la ponderación.
 *
 * @example const grade = getGrade({ total: 4, obtained: 4 }, scale)
 */
const getGrade = (scores: Scores, scale: ScaleAttributes): number => {
  const { total, obtained } = scores

  if (obtained >= total) {
    return scale.max
  } else if (obtained <= 0) {
    return scale.min
  } else {
    const grade = calcGrade(scale, total, obtained)
    return gradeRound(grade, scale)
  }
}

export default getGrade
