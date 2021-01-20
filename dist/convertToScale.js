"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToScale = void 0;
const grades_1 = require("./grades/");
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
const convertToScale = (convert, scale) => {
    // Redondeamos nota actual.
    const grade = grades_1.gradeRound(convert.scale, convert.grade);
    // calculamos ambos rangos (antiguo y nuevo)
    const oldRange = convert.scale.max - convert.scale.min;
    const newRange = scale.max - scale.min;
    // transformamos la nota
    const newGrade = ((grade - convert.scale.min) * newRange) / oldRange + scale.min;
    // redondeamos
    return grades_1.gradeRound(scale, newGrade);
};
exports.convertToScale = convertToScale;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydFRvU2NhbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvY29udmVydFRvU2NhbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0Esc0NBQXNDO0FBT3RDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQ0c7QUFDSSxNQUFNLGNBQWMsR0FBRyxDQUM1QixPQUEwQixFQUMxQixLQUFzQixFQUNkLEVBQUU7SUFDViwyQkFBMkI7SUFDM0IsTUFBTSxLQUFLLEdBQUcsbUJBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUV0RCw0Q0FBNEM7SUFDNUMsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUE7SUFDdEQsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFBO0lBRXRDLHdCQUF3QjtJQUN4QixNQUFNLFFBQVEsR0FDWixDQUFDLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsUUFBUSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUE7SUFFakUsY0FBYztJQUNkLE9BQU8sbUJBQVUsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUE7QUFDcEMsQ0FBQyxDQUFBO0FBakJZLFFBQUEsY0FBYyxrQkFpQjFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NhbGVBdHRyaWJ1dGVzIH0gZnJvbSAnLi90eXBlcydcbmltcG9ydCB7IGdyYWRlUm91bmQgfSBmcm9tICcuL2dyYWRlcy8nXG5cbnR5cGUgQ29udmVydEF0dHJpYnV0ZXMgPSB7XG4gIHNjYWxlOiBTY2FsZUF0dHJpYnV0ZXNcbiAgZ3JhZGU6IG51bWJlclxufVxuXG4vKipcbiAqIFRyYW5zZm9ybWEgdW5hIG5vdGEgYSBvdHJhIHNlZ8O6biBsYSBlc2NhbGEgZGUgZGVzdGluby5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IHNjYWxlID0ge1xuICogIG5hbWU6IFwiQ2hpbGUgNTAlICgxLTcsIGFwcm9iYWNpw7NuIDUwJSwgbm90YSA0KVwiLFxuICogIGtleW5hbWU6IFwiQ2hpbGU1MFwiLFxuICogIG1pbjogMSxcbiAqICBtYXg6IDcsXG4gKiAgcGFzc2luZ0dyYWRlOiA0LFxuICogIHBhc3NpbmdQZXJjZW50YWdlOiA1MCxcbiAqICByb3VuZFR5cGU6IFwicm91bmRcIixcbiAqICBwcmVwZW5kOiBcIlwiLFxuICogIGFwcGVuZDogXCJcIixcbiAqICBkZWNpbWFsczogMSxcbiAqICBkZWNpbWFsU2VwYXJhdG9yOiBcIixcIlxuICogfVxuICpcbiAqIGNvbnN0IG5ld1NjYWxlID0ge1xuICogIG5hbWU6IFwiUG9yY2VudGFqZSAoMS0xMDAlLCBhcHJvYmFjacOzbiA2MCUsIG5vdGEgNzApXCIsXG4gKiAga2V5bmFtZTogXCJQb3JjZW50YWplXzEtMTAwXzYwXCIsXG4gKiAgbWluOiAxLFxuICogIG1heDogMTAwLFxuICogIHBhc3NpbmdHcmFkZTogNzAsXG4gKiAgcGFzc2luZ1BlcmNlbnRhZ2U6IDYwLFxuICogIHJvdW5kVHlwZTogXCJyb3VuZFwiLFxuICogIHByZXBlbmQ6IFwiXCIsXG4gKiAgYXBwZW5kOiBcIiVcIixcbiAqICBkZWNpbWFsczogMCxcbiAqICBkZWNpbWFsU2VwYXJhdG9yOiBcIixcIlxuICogfVxuICogY29uc3QgY29udmVydGVkID0gY29udmVydFRvU2NhbGUoeyBzY2FsZSwgZ3JhZGU6IDQuNiB9LCBuZXdTY2FsZSlcbiAqL1xuZXhwb3J0IGNvbnN0IGNvbnZlcnRUb1NjYWxlID0gKFxuICBjb252ZXJ0OiBDb252ZXJ0QXR0cmlidXRlcyxcbiAgc2NhbGU6IFNjYWxlQXR0cmlidXRlc1xuKTogbnVtYmVyID0+IHtcbiAgLy8gUmVkb25kZWFtb3Mgbm90YSBhY3R1YWwuXG4gIGNvbnN0IGdyYWRlID0gZ3JhZGVSb3VuZChjb252ZXJ0LnNjYWxlLCBjb252ZXJ0LmdyYWRlKVxuXG4gIC8vIGNhbGN1bGFtb3MgYW1ib3MgcmFuZ29zIChhbnRpZ3VvIHkgbnVldm8pXG4gIGNvbnN0IG9sZFJhbmdlID0gY29udmVydC5zY2FsZS5tYXggLSBjb252ZXJ0LnNjYWxlLm1pblxuICBjb25zdCBuZXdSYW5nZSA9IHNjYWxlLm1heCAtIHNjYWxlLm1pblxuXG4gIC8vIHRyYW5zZm9ybWFtb3MgbGEgbm90YVxuICBjb25zdCBuZXdHcmFkZSA9XG4gICAgKChncmFkZSAtIGNvbnZlcnQuc2NhbGUubWluKSAqIG5ld1JhbmdlKSAvIG9sZFJhbmdlICsgc2NhbGUubWluXG5cbiAgLy8gcmVkb25kZWFtb3NcbiAgcmV0dXJuIGdyYWRlUm91bmQoc2NhbGUsIG5ld0dyYWRlKVxufVxuIl19