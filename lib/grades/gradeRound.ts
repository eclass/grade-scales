import { ScaleAttributes } from './types'

/**
 * Recibe una nota y la redondea segun el formato de la escala.
 *
 * @example const rounded = gradeRound(60.522, scale)
 */
const gradeRound = (grade: number, scale: ScaleAttributes): number => {
  try {
    let rounded: any
    if (scale.decimals > 0) {
      rounded = Number(
        Math.round(Number(grade + 'e' + scale.decimals)) + 'e-' + scale.decimals
      )
    } else if (scale.decimals <= 0) {
      if (scale.roundType === 'ceil') {
        rounded = Math.ceil(grade)
      } else if (scale.roundType === 'floor') {
        rounded = Math.floor(grade)
      } else {
        rounded = grade.toFixed(0)
      }
    }
    return Number(rounded)
  } catch (e) {
    // En caso de fallar el redondeo entonces devolvemos un 0 por defecto.
    return 0
  }
}

export default gradeRound
