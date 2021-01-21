import { ScaleAttributes, QualificationType, Scores } from './types';
declare type GradeList = {
    /**
     * Puntos evaluados.
     */
    points: Scores;
    /**
     * Nota calculada.
     */
    grade: number;
    /**
     * Nota formateada y el estado
     */
    qualification: QualificationType;
    /**
     * Estado aprobada o reprobada.
     */
    isApproved: boolean;
    /**
     * Nota formateada segun la escala.
     */
    formatted: string;
};
/**
 * Calcula todas las notas según el total y el inicio (minPoints)
 *
 * @example
 *  const grades = getGrades(scale, 12, 0)
 */
export declare const getGrades: (scale: ScaleAttributes, total: number, minPoints?: number) => Array<GradeList>;
export {};
//# sourceMappingURL=getGrades.d.ts.map