import { ScaleAttributes, QualificationType } from './types';
/**
 * Calcula una nota en base al puntaje obtenido y el puntaje total y la devuelve formateada.
 *
 * @example
 *  const grade = getGradeQualification(scale, 5, 3)
 */
export declare const getGradeQualification: (scale: ScaleAttributes, total: number, obtained: number) => QualificationType;
/**
 * Formatea el objeto con la nota.
 *
 * @example
 *  const grade = getQualification(scale, 5.7, true | false)
 */
export declare const getQualification: (scale: ScaleAttributes, grade: number, approved?: boolean) => QualificationType;
//# sourceMappingURL=getGradeFormatted.d.ts.map