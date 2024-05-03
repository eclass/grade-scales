import { gradeIsApproved } from './gradeIsApproved'
import { ScaleAttributes, StatusReturn } from '../types'

/**
 * @example const checkStatus = gradeStatus(scale, grade)
 */
export const gradeStatus = (
  scale: ScaleAttributes,
  grade?: number,
  isApproved = true,
): StatusReturn => {
  /**
   * Si la nota viene nula la marcamos como pendiente.
   */
  if (!grade && isApproved && scale.min !== 0) {
    return {
      id: 0,
      name: 'Pendiente',
      detail: '',
      style: 'pending',
      enabled: false,
    }
  }

  /**
   * Calculamos si está aprobada y luego retornamos el estado.
   */
  const approved = isApproved ? gradeIsApproved(scale, grade) : isApproved
  const status: Map<boolean, StatusReturn> = new Map([
    [
      true,
      {
        id: 1,
        name: 'Aprobado',
        detail: 'La nota está aprobada',
        style: 'approved',
        enabled: true,
      },
    ],
    [
      false,
      {
        id: 2,
        name: 'Reprobado',
        detail: 'La nota está reprobada',
        style: 'reprobate',
        enabled: false,
      },
    ],
  ])

  return status.get(approved)
}
