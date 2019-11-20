import { ScaleAttributes } from './types';
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
- Si el puntaje obtenido es >= al total entonces asigna la nota máxima de la escala.
- Si el puntaje obtenido es <= 0 entonces asigna la nota minima de la escala.
- Si está en el rango > 0 y < total entonces calcula la nota considerando la ponderación.
 *
 * @example const grade = getGrade({ total: 4, obtained: 4 }, scale)
 */
declare const getGrade: (scores: Scores, scale: ScaleAttributes) => number;
export default getGrade;
//# sourceMappingURL=getGrade.d.ts.map