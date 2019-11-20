import { gradeRound } from './gradeRound'
import { ScaleAttributes } from './types'

/**
 * Formatea una nota según la escala recibida por parámetro.
Agrega puntos, comas, caracteres antes o despues de la nota.
 *
 * @example const formated = gradeFormat(grade, scale)
 */
export const gradeFormat = (grade: number, scale: ScaleAttributes): string => {
  return [
    scale.prepend,
    String(gradeRound(grade, scale)).replace('.', scale.decimalSeparator),
    scale.append
  ].join('')
}
