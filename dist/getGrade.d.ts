import { ScaleAttributes } from './types';
interface CalcGradeResult {
    grade: number;
    approveMinPoints: number;
}
/**
 * Hace el cálculo de la nota en base al puntaje obtenido y el total con la Escala de notas
 *
 * @example const grade = calcGrade(scale, total, obtained)
 */
export declare const calcGrade: (scale: ScaleAttributes, total: number, obtained: number) => CalcGradeResult;
/**
 * Recibe los puntajes y calcula la nota.
 * - Si el puntaje obtenido es >= al total entonces asigna la nota máxima de la escala.
 * - Si el puntaje obtenido es <= 0 entonces asigna la nota minima de la escala.
 * - Si está en el rango > 0 y < total entonces calcula la nota considerando la ponderación.
 *
 * @example const grade = getGrade(scale, 10, 5)
 */
export declare const getGrade: (scale: ScaleAttributes, total: number, obtained: number) => number;
export {};
//# sourceMappingURL=getGrade.d.ts.map