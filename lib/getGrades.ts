import { ScaleAttributes, QualificationType, Scores } from './grades/types'

import { getGrade, gradeFormat, getGradeQualification } from './'
import { gradeIsApproved } from './grades'

type GradeList = {
  /**
   * Puntos evaluados.
   */
  points: Scores

  /**
   * Nota calculada.
   */
  grade: number

  /**
   * Nota formateada y el estado
   */
  qualification: QualificationType

  /**
   * Estado aprobada o reprobada.
   */
  isApproved: boolean

  /**
   * Nota formateada segun la escala.
   */
  formatted: string
}

/**
 * Calcula todas las notas según el total y el inicio (minPoints)
 *
 * @example
 *  const grades = getGrades(scale, 12, 0)
 */
export const getGrades = (
  scale: ScaleAttributes,
  total: number,
  minPoints = 0
): Array<GradeList> => {
  if (minPoints > total) {
    throw new Error('Puntaje mínimo no puede ser mayor al máximo.')
  } else if (total <= 0) {
    throw new Error('Puntos máximos no pueden ser menor o igual a 0')
  }

  const grades: Array<GradeList> = []

  for (minPoints; minPoints <= total; minPoints++) {
    const grade = getGrade(scale, total, minPoints)
    grades.push({
      points: {
        obtained: minPoints,
        total
      },
      grade,
      qualification: getGradeQualification(scale, total, minPoints),
      isApproved: gradeIsApproved(scale, grade),
      formatted: gradeFormat(scale, grade)
    })
  }

  return grades
}
