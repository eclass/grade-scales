import { getGrade, Scores } from './getGrade'
import { ScaleAttributes, QualificationType } from './grades/types'

import { gradeRound, gradeFormat, gradeStatus } from './grades/'

/**
 * Calcula una nota en base al puntaje obtenido y el puntaje total.
 *
 * @example
 *  const grade = await Scale.getGrade('Chile50', { total: 5, obtained: 3 })
 */
export const getQualification = (
  scale: ScaleAttributes,
  scores: Scores
): QualificationType => {
  const grade = getGrade(scores, scale)

  return {
    value: gradeRound(grade, scale),
    valueFormatted: gradeFormat(grade, scale),
    status: gradeStatus(scale, grade)
  }
}
