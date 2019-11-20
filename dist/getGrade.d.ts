import { ScaleAttributes } from './grades/types';
/**
 * Hace el cálculo de la nota en base al puntaje obtenido y el total con la Escala de notas
 *
 * @example const grade = calcGrade(scale, total, obtained)
 */
export declare const calcGrade: (scale: ScaleAttributes, total: number, obtained: number) => number;
/**
 * Puntajes totales y obtenidos.
 */
export declare type Scores = {
    /**
     * Puntaje total.
     */
    total: number;
    /**
     * Puntaje Obtenido.
     */
    obtained: number;
};
/**
 * Recibe los puntajes y calcula la nota.
 * - Si el puntaje obtenido es >= al total entonces asigna la nota máxima de la escala.
 * - Si el puntaje obtenido es <= 0 entonces asigna la nota minima de la escala.
 * - Si está en el rango > 0 y < total entonces calcula la nota considerando la ponderación.
 *
 * @example const grade = getGrade({ total: 4, obtained: 4 }, scale)
 */
export declare const getGrade: (scores: Scores, scale: ScaleAttributes) => number;
//# sourceMappingURL=getGrade.d.ts.map