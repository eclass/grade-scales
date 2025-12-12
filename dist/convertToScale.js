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
    const grade = (0, grades_1.gradeRound)(convert.scale, convert.grade);
    // calculamos ambos rangos (antiguo y nuevo)
    const oldRange = convert.scale.max - convert.scale.min;
    const newRange = scale.max - scale.min;
    // transformamos la nota
    const newGrade = ((grade - convert.scale.min) * newRange) / oldRange + scale.min;
    // redondeamos
    return (0, grades_1.gradeRound)(scale, newGrade);
};
exports.convertToScale = convertToScale;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydFRvU2NhbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvY29udmVydFRvU2NhbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0Esc0NBQXNDO0FBT3RDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQ0c7QUFDSSxNQUFNLGNBQWMsR0FBRyxDQUM1QixPQUEwQixFQUMxQixLQUFzQixFQUNkLEVBQUU7SUFDViwyQkFBMkI7SUFDM0IsTUFBTSxLQUFLLEdBQUcsSUFBQSxtQkFBVSxFQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRXRELDRDQUE0QztJQUM1QyxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQTtJQUN0RCxNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUE7SUFFdEMsd0JBQXdCO0lBQ3hCLE1BQU0sUUFBUSxHQUNaLENBQUMsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxRQUFRLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQTtJQUVqRSxjQUFjO0lBQ2QsT0FBTyxJQUFBLG1CQUFVLEVBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFBO0FBQ3BDLENBQUMsQ0FBQTtBQWpCWSxRQUFBLGNBQWMsa0JBaUIxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjYWxlQXR0cmlidXRlcyB9IGZyb20gJy4vdHlwZXMnXG5pbXBvcnQgeyBncmFkZVJvdW5kIH0gZnJvbSAnLi9ncmFkZXMvJ1xuXG50eXBlIENvbnZlcnRBdHRyaWJ1dGVzID0ge1xuICBzY2FsZTogU2NhbGVBdHRyaWJ1dGVzXG4gIGdyYWRlOiBudW1iZXJcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm1hIHVuYSBub3RhIGEgb3RyYSBzZWfDum4gbGEgZXNjYWxhIGRlIGRlc3Rpbm8uXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiBjb25zdCBzY2FsZSA9IHtcbiAqICBuYW1lOiBcIkNoaWxlIDUwJSAoMS03LCBhcHJvYmFjacOzbiA1MCUsIG5vdGEgNClcIixcbiAqICBrZXluYW1lOiBcIkNoaWxlNTBcIixcbiAqICBtaW46IDEsXG4gKiAgbWF4OiA3LFxuICogIHBhc3NpbmdHcmFkZTogNCxcbiAqICBwYXNzaW5nUGVyY2VudGFnZTogNTAsXG4gKiAgcm91bmRUeXBlOiBcInJvdW5kXCIsXG4gKiAgcHJlcGVuZDogXCJcIixcbiAqICBhcHBlbmQ6IFwiXCIsXG4gKiAgZGVjaW1hbHM6IDEsXG4gKiAgZGVjaW1hbFNlcGFyYXRvcjogXCIsXCJcbiAqIH1cbiAqXG4gKiBjb25zdCBuZXdTY2FsZSA9IHtcbiAqICBuYW1lOiBcIlBvcmNlbnRhamUgKDEtMTAwJSwgYXByb2JhY2nDs24gNjAlLCBub3RhIDcwKVwiLFxuICogIGtleW5hbWU6IFwiUG9yY2VudGFqZV8xLTEwMF82MFwiLFxuICogIG1pbjogMSxcbiAqICBtYXg6IDEwMCxcbiAqICBwYXNzaW5nR3JhZGU6IDcwLFxuICogIHBhc3NpbmdQZXJjZW50YWdlOiA2MCxcbiAqICByb3VuZFR5cGU6IFwicm91bmRcIixcbiAqICBwcmVwZW5kOiBcIlwiLFxuICogIGFwcGVuZDogXCIlXCIsXG4gKiAgZGVjaW1hbHM6IDAsXG4gKiAgZGVjaW1hbFNlcGFyYXRvcjogXCIsXCJcbiAqIH1cbiAqIGNvbnN0IGNvbnZlcnRlZCA9IGNvbnZlcnRUb1NjYWxlKHsgc2NhbGUsIGdyYWRlOiA0LjYgfSwgbmV3U2NhbGUpXG4gKi9cbmV4cG9ydCBjb25zdCBjb252ZXJ0VG9TY2FsZSA9IChcbiAgY29udmVydDogQ29udmVydEF0dHJpYnV0ZXMsXG4gIHNjYWxlOiBTY2FsZUF0dHJpYnV0ZXMsXG4pOiBudW1iZXIgPT4ge1xuICAvLyBSZWRvbmRlYW1vcyBub3RhIGFjdHVhbC5cbiAgY29uc3QgZ3JhZGUgPSBncmFkZVJvdW5kKGNvbnZlcnQuc2NhbGUsIGNvbnZlcnQuZ3JhZGUpXG5cbiAgLy8gY2FsY3VsYW1vcyBhbWJvcyByYW5nb3MgKGFudGlndW8geSBudWV2bylcbiAgY29uc3Qgb2xkUmFuZ2UgPSBjb252ZXJ0LnNjYWxlLm1heCAtIGNvbnZlcnQuc2NhbGUubWluXG4gIGNvbnN0IG5ld1JhbmdlID0gc2NhbGUubWF4IC0gc2NhbGUubWluXG5cbiAgLy8gdHJhbnNmb3JtYW1vcyBsYSBub3RhXG4gIGNvbnN0IG5ld0dyYWRlID1cbiAgICAoKGdyYWRlIC0gY29udmVydC5zY2FsZS5taW4pICogbmV3UmFuZ2UpIC8gb2xkUmFuZ2UgKyBzY2FsZS5taW5cblxuICAvLyByZWRvbmRlYW1vc1xuICByZXR1cm4gZ3JhZGVSb3VuZChzY2FsZSwgbmV3R3JhZGUpXG59XG4iXX0=