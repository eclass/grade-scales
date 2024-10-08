import { gradeRound } from './gradeRound'
import { ScaleAttributes } from '../types'

/**
 * Formatea una nota según la escala recibida por parámetro.
Agrega puntos, comas, caracteres antes o despues de la nota.
 *
 * @example const formated = gradeFormat(scale, grade)
 */
export const gradeFormat = (scale: ScaleAttributes, grade: number): string => {
  if (grade === null) {
    grade = 0
  }
  let round = `${gradeRound(scale, grade)}`

  if (round.length === 1 && scale.append === '' && scale.base !== 'Peru') {
    round = `${round}.0`
  }

  return [
    scale.prepend,
    round.replace('.', scale.decimalSeparator),
    scale.append,
  ]
    .join('')
    .trim()
}
