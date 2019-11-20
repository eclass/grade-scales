import { ScaleAttributes, QualificationType } from './grades/types';
declare type AverageParams = {
    /**
     * Notas.
     */
    grades: number[];
    /**
     * Ponderaciones.
     */
    weights: number[];
};
/**
 * Calcula el promedio de una o mas notas, con sus ponderaciones.
 *
 * @example const average = getAverage(scale, { grades: [3,4,6] })
 */
declare const average: (scale: ScaleAttributes, params: AverageParams) => QualificationType;
export default average;
//# sourceMappingURL=getAverage.d.ts.map