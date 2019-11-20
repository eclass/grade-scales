import { Scores } from './getGrade';
import { ScaleAttributes, QualificationType } from './grades/types';
/**
 * Calcula una nota en base al puntaje obtenido y el puntaje total.
 *
 * @example
 *  const grade = await Scale.getGrade('Chile50', { total: 5, obtained: 3 })
 */
export declare const getQualification: (scale: ScaleAttributes, scores: Scores) => QualificationType;
//# sourceMappingURL=getQualification.d.ts.map