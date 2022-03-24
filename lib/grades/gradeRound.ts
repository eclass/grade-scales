import { ScaleAttributes } from '../types'

/**
 * Recibe una nota y la redondea segun el formato de la escala.
 *
 * @example const rounded = gradeRound(scale, 30.522)
 */
export const gradeRound = (scale: ScaleAttributes, grade: number): number => {
  try {
    let rounded: number | string
    if (scale.decimals > 0) {
      if (scale.decimals === 1) {
        rounded = Number(
          Math.round(Number(grade + 'e' + scale.decimals + 1)) +
            'e-' +
            scale.decimals +
            1,
        )
        rounded = Number(
          Math.round(Number(rounded + 'e' + scale.decimals)) +
            'e-' +
            scale.decimals,
        )
      } else {
        rounded = Number(
          Math.round(Number(grade + 'e' + scale.decimals)) +
            'e-' +
            scale.decimals,
        )
      }
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
