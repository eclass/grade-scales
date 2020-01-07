import { getGrade } from './getGrade'
import { ScaleAttributes, QualificationType } from './grades/types'

import { gradeRound, gradeFormat, gradeStatus } from './grades'

/**
 * Calcula una nota en base al puntaje obtenido y el puntaje total y la devuelve formateada.
 *
 * @example
 *  const grade = getGradeQualification(scale, 5, 3)
 */
export const getGradeQualification = (
  scale: ScaleAttributes,
  total: number,
  obtained: number
): QualificationType => {
  const grade = getGrade(scale, total, obtained)
  return {
    value: gradeRound(scale, grade),
    valueFormatted: gradeFormat(scale, grade),
    status: gradeStatus(scale, grade)
  }
}

/**
 * Formatea el objeto con la nota.
 *
 * @example
 *  const grade = getQualification(scale, 5.7, true | false)
 */
export const getQualification = (
  scale: ScaleAttributes,
  grade: number,
  approved = true
): QualificationType => {
  return {
    value: gradeRound(scale, grade),
    valueFormatted: gradeFormat(scale, grade),
    status: gradeStatus(scale, grade, approved)
  }
}
