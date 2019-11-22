import { ScaleAttributes, QualificationType } from './grades/types';
declare type AverageParams = {
    /**
     * Notas.
     */
    grades: number[];
    /**
     * Ponderaciones.
     */
    weights?: number[];
};
/**
 * Calcula el promedio de una o mas notas, con sus ponderaciones.
 *
 * @example const average = getAverage(scale, { grades: [3,4,6] })
 */
export declare const getAverage: (scale: ScaleAttributes, params: AverageParams) => QualificationType;
export {};
//# sourceMappingURL=getAverage.d.ts.map