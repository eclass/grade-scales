import { gradeRound } from './gradeRound'
import { ScaleAttributes } from './types'

/**
 * Recibe una nota y en base a la escala verifica si está aprobada o reprobada.
 *
 * @example const approved = gradeIsApproved(scale, grade)
 */
export const gradeIsApproved = (
  scale: ScaleAttributes,
  grade: number
): boolean => {
  const rounded = gradeRound(scale, grade)
  return rounded >= scale.passingGrade
}
