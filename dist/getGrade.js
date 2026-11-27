"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGrade = exports.calcGrade = void 0;
const grades_1 = require("./grades");
/**
 * Hace el cálculo de la nota en base al puntaje obtenido y el total con la Escala de notas
 *
 * @example const grade = calcGrade(scale, total, obtained)
 */
const calcGrade = (scale, total, obtained) => {
    if (total <= 0) {
        return { grade: scale.min, approveMinPoints: 0 };
    }
    let grade = 0;
    const passingPercentage = scale.passingPercentage / 100;
    const approveMinPoints = total * passingPercentage;
    if (scale.passingPercentage > 0) {
        let weight;
        let calcWeight;
        if (obtained > approveMinPoints) {
            if (total === approveMinPoints) {
                return { grade: scale.max, approveMinPoints };
            }
            weight = (scale.max - scale.passingGrade) / (total - approveMinPoints);
            calcWeight = scale.max - weight * total;
        }
        else {
            weight = (scale.passingGrade - scale.min) / approveMinPoints;
            calcWeight = scale.passingGrade - weight * total * passingPercentage;
        }
        const prevGrade = weight * obtained + calcWeight;
        grade = (100 * prevGrade) / 100;
    }
    else {
        grade = (scale.max * obtained) / total;
    }
    return { grade, approveMinPoints };
};
exports.calcGrade = calcGrade;
/**
 * Recibe los puntajes y calcula la nota.
 * - Si el puntaje obtenido es >= al total entonces asigna la nota máxima de la escala.
 * - Si el puntaje obtenido es <= 0 entonces asigna la nota minima de la escala.
 * - Si está en el rango > 0 y < total entonces calcula la nota considerando la ponderación.
 *
 * @example const grade = getGrade(scale, 10, 5)
 */
const getGrade = (scale, total, obtained) => {
    if (obtained >= total) {
        return scale.max;
    }
    else if (obtained <= 0) {
        return scale.min;
    }
    else {
        let { grade, approveMinPoints } = (0, exports.calcGrade)(scale, total, obtained);
        grade = (0, grades_1.gradeRound)(scale, grade);
        if (obtained < approveMinPoints && scale.passingGrade === grade) {
            grade = (0, grades_1.gradeRound)(scale, scale.passingGrade -
                (scale.decimals > 0 ? Math.pow(10, -scale.decimals) : 1));
        }
        return grade;
    }
};
exports.getGrade = getGrade;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0R3JhZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvZ2V0R3JhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXFDO0FBUXJDOzs7O0dBSUc7QUFDSSxNQUFNLFNBQVMsR0FBRyxDQUN2QixLQUFzQixFQUN0QixLQUFhLEVBQ2IsUUFBZ0IsRUFDQyxFQUFFO0lBQ25CLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtRQUNkLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLEVBQUUsQ0FBQTtLQUNqRDtJQUNELElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQTtJQUNiLE1BQU0saUJBQWlCLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixHQUFHLEdBQUcsQ0FBQTtJQUN2RCxNQUFNLGdCQUFnQixHQUFHLEtBQUssR0FBRyxpQkFBaUIsQ0FBQTtJQUVsRCxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLEVBQUU7UUFDL0IsSUFBSSxNQUFjLENBQUE7UUFDbEIsSUFBSSxVQUFrQixDQUFBO1FBRXRCLElBQUksUUFBUSxHQUFHLGdCQUFnQixFQUFFO1lBQy9CLElBQUksS0FBSyxLQUFLLGdCQUFnQixFQUFFO2dCQUM5QixPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQTthQUM5QztZQUNELE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLGdCQUFnQixDQUFDLENBQUE7WUFDdEUsVUFBVSxHQUFHLEtBQUssQ0FBQyxHQUFHLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FBQTtTQUN4QzthQUFNO1lBQ0wsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsZ0JBQWdCLENBQUE7WUFDNUQsVUFBVSxHQUFHLEtBQUssQ0FBQyxZQUFZLEdBQUcsTUFBTSxHQUFHLEtBQUssR0FBRyxpQkFBaUIsQ0FBQTtTQUNyRTtRQUNELE1BQU0sU0FBUyxHQUFHLE1BQU0sR0FBRyxRQUFRLEdBQUcsVUFBVSxDQUFBO1FBQ2hELEtBQUssR0FBRyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUE7S0FDaEM7U0FBTTtRQUNMLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFBO0tBQ3ZDO0lBQ0QsT0FBTyxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxDQUFBO0FBQ3BDLENBQUMsQ0FBQTtBQWhDWSxRQUFBLFNBQVMsYUFnQ3JCO0FBRUQ7Ozs7Ozs7R0FPRztBQUNJLE1BQU0sUUFBUSxHQUFHLENBQ3RCLEtBQXNCLEVBQ3RCLEtBQWEsRUFDYixRQUFnQixFQUNSLEVBQUU7SUFDVixJQUFJLFFBQVEsSUFBSSxLQUFLLEVBQUU7UUFDckIsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFBO0tBQ2pCO1NBQU0sSUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFO1FBQ3hCLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQTtLQUNqQjtTQUFNO1FBQ0wsSUFBSSxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLElBQUEsaUJBQVMsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFBO1FBQ25FLEtBQUssR0FBRyxJQUFBLG1CQUFVLEVBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBRWhDLElBQUksUUFBUSxHQUFHLGdCQUFnQixJQUFJLEtBQUssQ0FBQyxZQUFZLEtBQUssS0FBSyxFQUFFO1lBQy9ELEtBQUssR0FBRyxJQUFBLG1CQUFVLEVBQ2hCLEtBQUssRUFDTCxLQUFLLENBQUMsWUFBWTtnQkFDaEIsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUMzRCxDQUFBO1NBQ0Y7UUFFRCxPQUFPLEtBQUssQ0FBQTtLQUNiO0FBQ0gsQ0FBQyxDQUFBO0FBdkJZLFFBQUEsUUFBUSxZQXVCcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncmFkZVJvdW5kIH0gZnJvbSAnLi9ncmFkZXMnXG5pbXBvcnQgeyBTY2FsZUF0dHJpYnV0ZXMgfSBmcm9tICcuL3R5cGVzJ1xuXG5pbnRlcmZhY2UgQ2FsY0dyYWRlUmVzdWx0IHtcbiAgZ3JhZGU6IG51bWJlclxuICBhcHByb3ZlTWluUG9pbnRzOiBudW1iZXJcbn1cblxuLyoqXG4gKiBIYWNlIGVsIGPDoWxjdWxvIGRlIGxhIG5vdGEgZW4gYmFzZSBhbCBwdW50YWplIG9idGVuaWRvIHkgZWwgdG90YWwgY29uIGxhIEVzY2FsYSBkZSBub3Rhc1xuICpcbiAqIEBleGFtcGxlIGNvbnN0IGdyYWRlID0gY2FsY0dyYWRlKHNjYWxlLCB0b3RhbCwgb2J0YWluZWQpXG4gKi9cbmV4cG9ydCBjb25zdCBjYWxjR3JhZGUgPSAoXG4gIHNjYWxlOiBTY2FsZUF0dHJpYnV0ZXMsXG4gIHRvdGFsOiBudW1iZXIsXG4gIG9idGFpbmVkOiBudW1iZXIsXG4pOiBDYWxjR3JhZGVSZXN1bHQgPT4ge1xuICBpZiAodG90YWwgPD0gMCkge1xuICAgIHJldHVybiB7IGdyYWRlOiBzY2FsZS5taW4sIGFwcHJvdmVNaW5Qb2ludHM6IDAgfVxuICB9XG4gIGxldCBncmFkZSA9IDBcbiAgY29uc3QgcGFzc2luZ1BlcmNlbnRhZ2UgPSBzY2FsZS5wYXNzaW5nUGVyY2VudGFnZSAvIDEwMFxuICBjb25zdCBhcHByb3ZlTWluUG9pbnRzID0gdG90YWwgKiBwYXNzaW5nUGVyY2VudGFnZVxuXG4gIGlmIChzY2FsZS5wYXNzaW5nUGVyY2VudGFnZSA+IDApIHtcbiAgICBsZXQgd2VpZ2h0OiBudW1iZXJcbiAgICBsZXQgY2FsY1dlaWdodDogbnVtYmVyXG5cbiAgICBpZiAob2J0YWluZWQgPiBhcHByb3ZlTWluUG9pbnRzKSB7XG4gICAgICBpZiAodG90YWwgPT09IGFwcHJvdmVNaW5Qb2ludHMpIHtcbiAgICAgICAgcmV0dXJuIHsgZ3JhZGU6IHNjYWxlLm1heCwgYXBwcm92ZU1pblBvaW50cyB9XG4gICAgICB9XG4gICAgICB3ZWlnaHQgPSAoc2NhbGUubWF4IC0gc2NhbGUucGFzc2luZ0dyYWRlKSAvICh0b3RhbCAtIGFwcHJvdmVNaW5Qb2ludHMpXG4gICAgICBjYWxjV2VpZ2h0ID0gc2NhbGUubWF4IC0gd2VpZ2h0ICogdG90YWxcbiAgICB9IGVsc2Uge1xuICAgICAgd2VpZ2h0ID0gKHNjYWxlLnBhc3NpbmdHcmFkZSAtIHNjYWxlLm1pbikgLyBhcHByb3ZlTWluUG9pbnRzXG4gICAgICBjYWxjV2VpZ2h0ID0gc2NhbGUucGFzc2luZ0dyYWRlIC0gd2VpZ2h0ICogdG90YWwgKiBwYXNzaW5nUGVyY2VudGFnZVxuICAgIH1cbiAgICBjb25zdCBwcmV2R3JhZGUgPSB3ZWlnaHQgKiBvYnRhaW5lZCArIGNhbGNXZWlnaHRcbiAgICBncmFkZSA9ICgxMDAgKiBwcmV2R3JhZGUpIC8gMTAwXG4gIH0gZWxzZSB7XG4gICAgZ3JhZGUgPSAoc2NhbGUubWF4ICogb2J0YWluZWQpIC8gdG90YWxcbiAgfVxuICByZXR1cm4geyBncmFkZSwgYXBwcm92ZU1pblBvaW50cyB9XG59XG5cbi8qKlxuICogUmVjaWJlIGxvcyBwdW50YWplcyB5IGNhbGN1bGEgbGEgbm90YS5cbiAqIC0gU2kgZWwgcHVudGFqZSBvYnRlbmlkbyBlcyA+PSBhbCB0b3RhbCBlbnRvbmNlcyBhc2lnbmEgbGEgbm90YSBtw6F4aW1hIGRlIGxhIGVzY2FsYS5cbiAqIC0gU2kgZWwgcHVudGFqZSBvYnRlbmlkbyBlcyA8PSAwIGVudG9uY2VzIGFzaWduYSBsYSBub3RhIG1pbmltYSBkZSBsYSBlc2NhbGEuXG4gKiAtIFNpIGVzdMOhIGVuIGVsIHJhbmdvID4gMCB5IDwgdG90YWwgZW50b25jZXMgY2FsY3VsYSBsYSBub3RhIGNvbnNpZGVyYW5kbyBsYSBwb25kZXJhY2nDs24uXG4gKlxuICogQGV4YW1wbGUgY29uc3QgZ3JhZGUgPSBnZXRHcmFkZShzY2FsZSwgMTAsIDUpXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRHcmFkZSA9IChcbiAgc2NhbGU6IFNjYWxlQXR0cmlidXRlcyxcbiAgdG90YWw6IG51bWJlcixcbiAgb2J0YWluZWQ6IG51bWJlcixcbik6IG51bWJlciA9PiB7XG4gIGlmIChvYnRhaW5lZCA+PSB0b3RhbCkge1xuICAgIHJldHVybiBzY2FsZS5tYXhcbiAgfSBlbHNlIGlmIChvYnRhaW5lZCA8PSAwKSB7XG4gICAgcmV0dXJuIHNjYWxlLm1pblxuICB9IGVsc2Uge1xuICAgIGxldCB7IGdyYWRlLCBhcHByb3ZlTWluUG9pbnRzIH0gPSBjYWxjR3JhZGUoc2NhbGUsIHRvdGFsLCBvYnRhaW5lZClcbiAgICBncmFkZSA9IGdyYWRlUm91bmQoc2NhbGUsIGdyYWRlKVxuXG4gICAgaWYgKG9idGFpbmVkIDwgYXBwcm92ZU1pblBvaW50cyAmJiBzY2FsZS5wYXNzaW5nR3JhZGUgPT09IGdyYWRlKSB7XG4gICAgICBncmFkZSA9IGdyYWRlUm91bmQoXG4gICAgICAgIHNjYWxlLFxuICAgICAgICBzY2FsZS5wYXNzaW5nR3JhZGUgLVxuICAgICAgICAgIChzY2FsZS5kZWNpbWFscyA+IDAgPyBNYXRoLnBvdygxMCwgLXNjYWxlLmRlY2ltYWxzKSA6IDEpLFxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiBncmFkZVxuICB9XG59XG4iXX0=