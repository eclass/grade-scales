import { ScaleAttributes } from '../types'

/**
 * Recibe una nota y la redondea segun el formato de la escala.
 *
 * @example const rounded = gradeRound(scale, 30.522)
 */
const roundWithDecimals = (value: number, decimals: number): number => {
  const scaled = Math.round(Number(`${value}e${decimals}`))
  return Number(`${scaled}e-${decimals}`)
}

export const gradeRound = (scale: ScaleAttributes, grade: number): number => {
  try {
    let rounded: number | string = 0
    if (grade === null || grade === undefined || !Number.isFinite(grade)) {
      return Number(0)
    }
    if (scale.decimals > 0) {
      if (String(grade).toLowerCase().includes('e')) {
        rounded = Number(grade.toFixed(scale.decimals))
      } else if (scale.decimals === 1) {
        rounded = roundWithDecimals(grade, scale.decimals + 1)
        rounded = roundWithDecimals(rounded, scale.decimals)
      } else {
        rounded = roundWithDecimals(grade, scale.decimals)
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
