import gradeRound from './gradeRound'
import { ScaleAttributes } from './types'

/**
 * Recibe una nota y en base a la escala verifica si está aprobada o reprobada.
 *
 * @example const approved = gradeIsApproved(grade, scale)
 */
const gradeIsApproved = (grade: number, scale: ScaleAttributes): boolean => {
  const rounded = gradeRound(grade, scale)
  return rounded >= scale.passingGrade
}

export default gradeIsApproved
