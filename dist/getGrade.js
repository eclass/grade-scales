"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gradeRound_1 = require("./grades/gradeRound");
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
/**
 * Recibe los puntajes y calcula la nota.
 * - Si el puntaje obtenido es >= al total entonces asigna la nota máxima de la escala.
 * - Si el puntaje obtenido es <= 0 entonces asigna la nota minima de la escala.
 * - Si está en el rango > 0 y < total entonces calcula la nota considerando la ponderación.
 *
 * @example const grade = getGrade({ total: 4, obtained: 4 }, scale)
 */
const getGrade = (scores, scale) => {
    const { total, obtained } = scores;
    if (obtained >= total) {
        return scale.max;
    }
    else if (obtained <= 0) {
        return scale.min;
    }
    else {
        const grade = calcGrade(scale, total, obtained);
        return gradeRound_1.default(grade, scale);
    }
};
exports.default = getGrade;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0R3JhZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvZ2V0R3JhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvREFBNEM7QUFHNUM7Ozs7R0FJRztBQUNILE1BQU0sU0FBUyxHQUFHLENBQ2hCLEtBQXNCLEVBQ3RCLEtBQWEsRUFDYixRQUFnQixFQUNSLEVBQUU7SUFDVixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUE7SUFDYixJQUFJLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLEVBQUU7UUFDL0IsTUFBTSxpQkFBaUIsR0FBRyxLQUFLLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxDQUFBO1FBQ3ZELE1BQU0sZ0JBQWdCLEdBQUcsS0FBSyxHQUFHLGlCQUFpQixDQUFBO1FBRWxELElBQUksTUFBYyxDQUFBO1FBQ2xCLElBQUksVUFBa0IsQ0FBQTtRQUV0QixJQUFJLFFBQVEsR0FBRyxnQkFBZ0IsRUFBRTtZQUMvQixNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxDQUFBO1lBQ3RFLFVBQVUsR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUE7U0FDeEM7YUFBTTtZQUNMLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLGdCQUFnQixDQUFBO1lBQzVELFVBQVUsR0FBRyxLQUFLLENBQUMsWUFBWSxHQUFHLE1BQU0sR0FBRyxLQUFLLEdBQUcsaUJBQWlCLENBQUE7U0FDckU7UUFDRCxNQUFNLFNBQVMsR0FBRyxNQUFNLEdBQUcsUUFBUSxHQUFHLFVBQVUsQ0FBQTtRQUNoRCxLQUFLLEdBQUcsQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFBO0tBQ2hDO1NBQU07UUFDTCxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQTtLQUN2QztJQUNELE9BQU8sS0FBSyxDQUFBO0FBQ2QsQ0FBQyxDQUFBO0FBb0JEOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLFFBQVEsR0FBRyxDQUFDLE1BQWMsRUFBRSxLQUFzQixFQUFVLEVBQUU7SUFDbEUsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsR0FBRyxNQUFNLENBQUE7SUFFbEMsSUFBSSxRQUFRLElBQUksS0FBSyxFQUFFO1FBQ3JCLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQTtLQUNqQjtTQUFNLElBQUksUUFBUSxJQUFJLENBQUMsRUFBRTtRQUN4QixPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUE7S0FDakI7U0FBTTtRQUNMLE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFBO1FBQy9DLE9BQU8sb0JBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUE7S0FDaEM7QUFDSCxDQUFDLENBQUE7QUFFRCxrQkFBZSxRQUFRLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3JhZGVSb3VuZCBmcm9tICcuL2dyYWRlcy9ncmFkZVJvdW5kJ1xuaW1wb3J0IHsgU2NhbGVBdHRyaWJ1dGVzIH0gZnJvbSAnLi9ncmFkZXMvdHlwZXMnXG5cbi8qKlxuICogSGFjZSBlbCBjw6FsY3VsbyBkZSBsYSBub3RhIGVuIGJhc2UgYWwgcHVudGFqZSBvYnRlbmlkbyB5IGVsIHRvdGFsIGNvbiBsYSBFc2NhbGEgZGUgbm90YXNcbiAqXG4gKiBAZXhhbXBsZSBjb25zdCBncmFkZSA9IGNhbGNHcmFkZShzY2FsZSwgdG90YWwsIG9idGFpbmVkKVxuICovXG5jb25zdCBjYWxjR3JhZGUgPSAoXG4gIHNjYWxlOiBTY2FsZUF0dHJpYnV0ZXMsXG4gIHRvdGFsOiBudW1iZXIsXG4gIG9idGFpbmVkOiBudW1iZXJcbik6IG51bWJlciA9PiB7XG4gIGxldCBncmFkZSA9IDBcbiAgaWYgKHNjYWxlLnBhc3NpbmdQZXJjZW50YWdlID4gMCkge1xuICAgIGNvbnN0IHBhc3NpbmdQZXJjZW50YWdlID0gc2NhbGUucGFzc2luZ1BlcmNlbnRhZ2UgLyAxMDBcbiAgICBjb25zdCBhcHByb3ZlTWluUG9pbnRzID0gdG90YWwgKiBwYXNzaW5nUGVyY2VudGFnZVxuXG4gICAgbGV0IHdlaWdodDogbnVtYmVyXG4gICAgbGV0IGNhbGNXZWlnaHQ6IG51bWJlclxuXG4gICAgaWYgKG9idGFpbmVkID4gYXBwcm92ZU1pblBvaW50cykge1xuICAgICAgd2VpZ2h0ID0gKHNjYWxlLm1heCAtIHNjYWxlLnBhc3NpbmdHcmFkZSkgLyAodG90YWwgLSBhcHByb3ZlTWluUG9pbnRzKVxuICAgICAgY2FsY1dlaWdodCA9IHNjYWxlLm1heCAtIHdlaWdodCAqIHRvdGFsXG4gICAgfSBlbHNlIHtcbiAgICAgIHdlaWdodCA9IChzY2FsZS5wYXNzaW5nR3JhZGUgLSBzY2FsZS5taW4pIC8gYXBwcm92ZU1pblBvaW50c1xuICAgICAgY2FsY1dlaWdodCA9IHNjYWxlLnBhc3NpbmdHcmFkZSAtIHdlaWdodCAqIHRvdGFsICogcGFzc2luZ1BlcmNlbnRhZ2VcbiAgICB9XG4gICAgY29uc3QgcHJldkdyYWRlID0gd2VpZ2h0ICogb2J0YWluZWQgKyBjYWxjV2VpZ2h0XG4gICAgZ3JhZGUgPSAoMTAwICogcHJldkdyYWRlKSAvIDEwMFxuICB9IGVsc2Uge1xuICAgIGdyYWRlID0gKHNjYWxlLm1heCAqIG9idGFpbmVkKSAvIHRvdGFsXG4gIH1cbiAgcmV0dXJuIGdyYWRlXG59XG5cblxuXG4vKipcbiAqIFB1bnRhamVzIHRvdGFsZXMgeSBvYnRlbmlkb3MuXG4gKi9cbmV4cG9ydCB0eXBlIFNjb3JlcyA9IHtcbiAgLyoqXG4gICAqIFB1bnRhamUgdG90YWwuXG4gICAqL1xuICB0b3RhbDogbnVtYmVyXG5cbiAgLyoqXG4gICAqIFB1bnRhamUgT2J0ZW5pZG8uXG4gICAqL1xuICBvYnRhaW5lZDogbnVtYmVyXG59XG5cblxuLyoqXG4gKiBSZWNpYmUgbG9zIHB1bnRhamVzIHkgY2FsY3VsYSBsYSBub3RhLlxuICogLSBTaSBlbCBwdW50YWplIG9idGVuaWRvIGVzID49IGFsIHRvdGFsIGVudG9uY2VzIGFzaWduYSBsYSBub3RhIG3DoXhpbWEgZGUgbGEgZXNjYWxhLlxuICogLSBTaSBlbCBwdW50YWplIG9idGVuaWRvIGVzIDw9IDAgZW50b25jZXMgYXNpZ25hIGxhIG5vdGEgbWluaW1hIGRlIGxhIGVzY2FsYS5cbiAqIC0gU2kgZXN0w6EgZW4gZWwgcmFuZ28gPiAwIHkgPCB0b3RhbCBlbnRvbmNlcyBjYWxjdWxhIGxhIG5vdGEgY29uc2lkZXJhbmRvIGxhIHBvbmRlcmFjacOzbi5cbiAqXG4gKiBAZXhhbXBsZSBjb25zdCBncmFkZSA9IGdldEdyYWRlKHsgdG90YWw6IDQsIG9idGFpbmVkOiA0IH0sIHNjYWxlKVxuICovXG5jb25zdCBnZXRHcmFkZSA9IChzY29yZXM6IFNjb3Jlcywgc2NhbGU6IFNjYWxlQXR0cmlidXRlcyk6IG51bWJlciA9PiB7XG4gIGNvbnN0IHsgdG90YWwsIG9idGFpbmVkIH0gPSBzY29yZXNcblxuICBpZiAob2J0YWluZWQgPj0gdG90YWwpIHtcbiAgICByZXR1cm4gc2NhbGUubWF4XG4gIH0gZWxzZSBpZiAob2J0YWluZWQgPD0gMCkge1xuICAgIHJldHVybiBzY2FsZS5taW5cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBncmFkZSA9IGNhbGNHcmFkZShzY2FsZSwgdG90YWwsIG9idGFpbmVkKVxuICAgIHJldHVybiBncmFkZVJvdW5kKGdyYWRlLCBzY2FsZSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRHcmFkZVxuIl19