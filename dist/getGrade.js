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
    let grade = 0;
    if (scale.passingPercentage > 0) {
        const passingPercentage = scale.passingPercentage / 100;
        const approveMinPoints = total * passingPercentage;
        let weight;
        let calcWeight;
        if (obtained > approveMinPoints) {
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
    return grade;
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
        return grades_1.gradeRound(scale, exports.calcGrade(scale, total, obtained));
    }
};
exports.getGrade = getGrade;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0R3JhZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvZ2V0R3JhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXFDO0FBR3JDOzs7O0dBSUc7QUFDSSxNQUFNLFNBQVMsR0FBRyxDQUN2QixLQUFzQixFQUN0QixLQUFhLEVBQ2IsUUFBZ0IsRUFDUixFQUFFO0lBQ1YsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFBO0lBQ2IsSUFBSSxLQUFLLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxFQUFFO1FBQy9CLE1BQU0saUJBQWlCLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixHQUFHLEdBQUcsQ0FBQTtRQUN2RCxNQUFNLGdCQUFnQixHQUFHLEtBQUssR0FBRyxpQkFBaUIsQ0FBQTtRQUVsRCxJQUFJLE1BQWMsQ0FBQTtRQUNsQixJQUFJLFVBQWtCLENBQUE7UUFFdEIsSUFBSSxRQUFRLEdBQUcsZ0JBQWdCLEVBQUU7WUFDL0IsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQTtZQUN0RSxVQUFVLEdBQUcsS0FBSyxDQUFDLEdBQUcsR0FBRyxNQUFNLEdBQUcsS0FBSyxDQUFBO1NBQ3hDO2FBQU07WUFDTCxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQTtZQUM1RCxVQUFVLEdBQUcsS0FBSyxDQUFDLFlBQVksR0FBRyxNQUFNLEdBQUcsS0FBSyxHQUFHLGlCQUFpQixDQUFBO1NBQ3JFO1FBQ0QsTUFBTSxTQUFTLEdBQUcsTUFBTSxHQUFHLFFBQVEsR0FBRyxVQUFVLENBQUE7UUFDaEQsS0FBSyxHQUFHLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtLQUNoQztTQUFNO1FBQ0wsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUE7S0FDdkM7SUFDRCxPQUFPLEtBQUssQ0FBQTtBQUNkLENBQUMsQ0FBQTtBQTFCWSxRQUFBLFNBQVMsYUEwQnJCO0FBRUQ7Ozs7Ozs7R0FPRztBQUNJLE1BQU0sUUFBUSxHQUFHLENBQ3RCLEtBQXNCLEVBQ3RCLEtBQWEsRUFDYixRQUFnQixFQUNSLEVBQUU7SUFDVixJQUFJLFFBQVEsSUFBSSxLQUFLLEVBQUU7UUFDckIsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFBO0tBQ2pCO1NBQU0sSUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFO1FBQ3hCLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQTtLQUNqQjtTQUFNO1FBQ0wsT0FBTyxtQkFBVSxDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQTtLQUM1RDtBQUNILENBQUMsQ0FBQTtBQVpZLFFBQUEsUUFBUSxZQVlwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdyYWRlUm91bmQgfSBmcm9tICcuL2dyYWRlcydcbmltcG9ydCB7IFNjYWxlQXR0cmlidXRlcyB9IGZyb20gJy4vdHlwZXMnXG5cbi8qKlxuICogSGFjZSBlbCBjw6FsY3VsbyBkZSBsYSBub3RhIGVuIGJhc2UgYWwgcHVudGFqZSBvYnRlbmlkbyB5IGVsIHRvdGFsIGNvbiBsYSBFc2NhbGEgZGUgbm90YXNcbiAqXG4gKiBAZXhhbXBsZSBjb25zdCBncmFkZSA9IGNhbGNHcmFkZShzY2FsZSwgdG90YWwsIG9idGFpbmVkKVxuICovXG5leHBvcnQgY29uc3QgY2FsY0dyYWRlID0gKFxuICBzY2FsZTogU2NhbGVBdHRyaWJ1dGVzLFxuICB0b3RhbDogbnVtYmVyLFxuICBvYnRhaW5lZDogbnVtYmVyXG4pOiBudW1iZXIgPT4ge1xuICBsZXQgZ3JhZGUgPSAwXG4gIGlmIChzY2FsZS5wYXNzaW5nUGVyY2VudGFnZSA+IDApIHtcbiAgICBjb25zdCBwYXNzaW5nUGVyY2VudGFnZSA9IHNjYWxlLnBhc3NpbmdQZXJjZW50YWdlIC8gMTAwXG4gICAgY29uc3QgYXBwcm92ZU1pblBvaW50cyA9IHRvdGFsICogcGFzc2luZ1BlcmNlbnRhZ2VcblxuICAgIGxldCB3ZWlnaHQ6IG51bWJlclxuICAgIGxldCBjYWxjV2VpZ2h0OiBudW1iZXJcblxuICAgIGlmIChvYnRhaW5lZCA+IGFwcHJvdmVNaW5Qb2ludHMpIHtcbiAgICAgIHdlaWdodCA9IChzY2FsZS5tYXggLSBzY2FsZS5wYXNzaW5nR3JhZGUpIC8gKHRvdGFsIC0gYXBwcm92ZU1pblBvaW50cylcbiAgICAgIGNhbGNXZWlnaHQgPSBzY2FsZS5tYXggLSB3ZWlnaHQgKiB0b3RhbFxuICAgIH0gZWxzZSB7XG4gICAgICB3ZWlnaHQgPSAoc2NhbGUucGFzc2luZ0dyYWRlIC0gc2NhbGUubWluKSAvIGFwcHJvdmVNaW5Qb2ludHNcbiAgICAgIGNhbGNXZWlnaHQgPSBzY2FsZS5wYXNzaW5nR3JhZGUgLSB3ZWlnaHQgKiB0b3RhbCAqIHBhc3NpbmdQZXJjZW50YWdlXG4gICAgfVxuICAgIGNvbnN0IHByZXZHcmFkZSA9IHdlaWdodCAqIG9idGFpbmVkICsgY2FsY1dlaWdodFxuICAgIGdyYWRlID0gKDEwMCAqIHByZXZHcmFkZSkgLyAxMDBcbiAgfSBlbHNlIHtcbiAgICBncmFkZSA9IChzY2FsZS5tYXggKiBvYnRhaW5lZCkgLyB0b3RhbFxuICB9XG4gIHJldHVybiBncmFkZVxufVxuXG4vKipcbiAqIFJlY2liZSBsb3MgcHVudGFqZXMgeSBjYWxjdWxhIGxhIG5vdGEuXG4gKiAtIFNpIGVsIHB1bnRhamUgb2J0ZW5pZG8gZXMgPj0gYWwgdG90YWwgZW50b25jZXMgYXNpZ25hIGxhIG5vdGEgbcOheGltYSBkZSBsYSBlc2NhbGEuXG4gKiAtIFNpIGVsIHB1bnRhamUgb2J0ZW5pZG8gZXMgPD0gMCBlbnRvbmNlcyBhc2lnbmEgbGEgbm90YSBtaW5pbWEgZGUgbGEgZXNjYWxhLlxuICogLSBTaSBlc3TDoSBlbiBlbCByYW5nbyA+IDAgeSA8IHRvdGFsIGVudG9uY2VzIGNhbGN1bGEgbGEgbm90YSBjb25zaWRlcmFuZG8gbGEgcG9uZGVyYWNpw7NuLlxuICpcbiAqIEBleGFtcGxlIGNvbnN0IGdyYWRlID0gZ2V0R3JhZGUoc2NhbGUsIDEwLCA1KVxuICovXG5leHBvcnQgY29uc3QgZ2V0R3JhZGUgPSAoXG4gIHNjYWxlOiBTY2FsZUF0dHJpYnV0ZXMsXG4gIHRvdGFsOiBudW1iZXIsXG4gIG9idGFpbmVkOiBudW1iZXJcbik6IG51bWJlciA9PiB7XG4gIGlmIChvYnRhaW5lZCA+PSB0b3RhbCkge1xuICAgIHJldHVybiBzY2FsZS5tYXhcbiAgfSBlbHNlIGlmIChvYnRhaW5lZCA8PSAwKSB7XG4gICAgcmV0dXJuIHNjYWxlLm1pblxuICB9IGVsc2Uge1xuICAgIHJldHVybiBncmFkZVJvdW5kKHNjYWxlLCBjYWxjR3JhZGUoc2NhbGUsIHRvdGFsLCBvYnRhaW5lZCkpXG4gIH1cbn1cbiJdfQ==