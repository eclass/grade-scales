import { gradeIsApproved } from './gradeIsApproved'
import { ScaleAttributes, StatusReturn } from './types'

/**
 * @example const checkStatus = gradeStatus(grade, scale)
 */
export const gradeStatus = (
  scale: ScaleAttributes,
  grade?: number
): StatusReturn => {
  const approved = gradeIsApproved(grade, scale)
  const status = new Map([
    [
      null,
      {
        id: 0,
        name: 'Pendiente',
        detail: '',
        style: 'pending',
        enabled: false
      }
    ],
    [
      true,
      {
        id: 1,
        name: 'Aprobado',
        detail: 'La nota está aprobada',
        style: 'approved',
        enabled: true
      }
    ],
    [
      false,
      {
        id: 2,
        name: 'Reprobado',
        detail: 'La nota está reprobada',
        style: 'reprobate',
        enabled: false
      }
    ]
  ])

  return grade ? status.get(approved) : status.get(null)
}
