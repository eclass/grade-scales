import { ScaleAttributes } from './types';
declare type ConvertAttributes = {
    scale: ScaleAttributes;
    grade: number;
};
/**
 * Transforma una nota a otra según la escala de destino.
 *
 * @example
 *
 * const scale = {
 *  name: "Chile 50% (1-7, aprobación 50%, nota 4)",
 *  keyname: "Chile50",
 *  min: 1,
 *  max: 7,
 *  passingGrade: 4,
 *  passingPercentage: 50,
 *  roundType: "round",
 *  prepend: "",
 *  append: "",
 *  decimals: 1,
 *  decimalSeparator: ","
 * }
 *
 * const newScale = {
 *  name: "Porcentaje (1-100%, aprobación 60%, nota 70)",
 *  keyname: "Porcentaje_1-100_60",
 *  min: 1,
 *  max: 100,
 *  passingGrade: 70,
 *  passingPercentage: 60,
 *  roundType: "round",
 *  prepend: "",
 *  append: "%",
 *  decimals: 0,
 *  decimalSeparator: ","
 * }
 * const converted = convertToScale({ scale, grade: 4.6 }, newScale)
 */
export declare const convertToScale: (convert: ConvertAttributes, scale: ScaleAttributes) => number;
export {};
//# sourceMappingURL=convertToScale.d.ts.map