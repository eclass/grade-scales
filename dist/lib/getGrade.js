"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grades_1 = require("./grades");
/**
 * Hace el cálculo de la nota en base al puntaje obtenido y el total con la Escala de notas
 *
 * @example const grade = calcGrade(scale, total, obtained)
 */
exports.calcGrade = (scale, total, obtained) => {
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
 * @example const grade = getGrade(scale, 10, 5)
 */
exports.getGrade = (scale, total, obtained) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0R3JhZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvZ2V0R3JhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBcUM7QUFHckM7Ozs7R0FJRztBQUNVLFFBQUEsU0FBUyxHQUFHLENBQ3ZCLEtBQXNCLEVBQ3RCLEtBQWEsRUFDYixRQUFnQixFQUNSLEVBQUU7SUFDVixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUE7SUFDYixJQUFJLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLEVBQUU7UUFDL0IsTUFBTSxpQkFBaUIsR0FBRyxLQUFLLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxDQUFBO1FBQ3ZELE1BQU0sZ0JBQWdCLEdBQUcsS0FBSyxHQUFHLGlCQUFpQixDQUFBO1FBRWxELElBQUksTUFBYyxDQUFBO1FBQ2xCLElBQUksVUFBa0IsQ0FBQTtRQUV0QixJQUFJLFFBQVEsR0FBRyxnQkFBZ0IsRUFBRTtZQUMvQixNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxDQUFBO1lBQ3RFLFVBQVUsR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUE7U0FDeEM7YUFBTTtZQUNMLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLGdCQUFnQixDQUFBO1lBQzVELFVBQVUsR0FBRyxLQUFLLENBQUMsWUFBWSxHQUFHLE1BQU0sR0FBRyxLQUFLLEdBQUcsaUJBQWlCLENBQUE7U0FDckU7UUFDRCxNQUFNLFNBQVMsR0FBRyxNQUFNLEdBQUcsUUFBUSxHQUFHLFVBQVUsQ0FBQTtRQUNoRCxLQUFLLEdBQUcsQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFBO0tBQ2hDO1NBQU07UUFDTCxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQTtLQUN2QztJQUNELE9BQU8sS0FBSyxDQUFBO0FBQ2QsQ0FBQyxDQUFBO0FBRUQ7Ozs7Ozs7R0FPRztBQUNVLFFBQUEsUUFBUSxHQUFHLENBQ3RCLEtBQXNCLEVBQ3RCLEtBQWEsRUFDYixRQUFnQixFQUNSLEVBQUU7SUFDVixJQUFJLFFBQVEsSUFBSSxLQUFLLEVBQUU7UUFDckIsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFBO0tBQ2pCO1NBQU0sSUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFO1FBQ3hCLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQTtLQUNqQjtTQUFNO1FBQ0wsT0FBTyxtQkFBVSxDQUFDLEtBQUssRUFBRSxpQkFBUyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQTtLQUM1RDtBQUNILENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdyYWRlUm91bmQgfSBmcm9tICcuL2dyYWRlcydcbmltcG9ydCB7IFNjYWxlQXR0cmlidXRlcyB9IGZyb20gJy4vZ3JhZGVzL3R5cGVzJ1xuXG4vKipcbiAqIEhhY2UgZWwgY8OhbGN1bG8gZGUgbGEgbm90YSBlbiBiYXNlIGFsIHB1bnRhamUgb2J0ZW5pZG8geSBlbCB0b3RhbCBjb24gbGEgRXNjYWxhIGRlIG5vdGFzXG4gKlxuICogQGV4YW1wbGUgY29uc3QgZ3JhZGUgPSBjYWxjR3JhZGUoc2NhbGUsIHRvdGFsLCBvYnRhaW5lZClcbiAqL1xuZXhwb3J0IGNvbnN0IGNhbGNHcmFkZSA9IChcbiAgc2NhbGU6IFNjYWxlQXR0cmlidXRlcyxcbiAgdG90YWw6IG51bWJlcixcbiAgb2J0YWluZWQ6IG51bWJlclxuKTogbnVtYmVyID0+IHtcbiAgbGV0IGdyYWRlID0gMFxuICBpZiAoc2NhbGUucGFzc2luZ1BlcmNlbnRhZ2UgPiAwKSB7XG4gICAgY29uc3QgcGFzc2luZ1BlcmNlbnRhZ2UgPSBzY2FsZS5wYXNzaW5nUGVyY2VudGFnZSAvIDEwMFxuICAgIGNvbnN0IGFwcHJvdmVNaW5Qb2ludHMgPSB0b3RhbCAqIHBhc3NpbmdQZXJjZW50YWdlXG5cbiAgICBsZXQgd2VpZ2h0OiBudW1iZXJcbiAgICBsZXQgY2FsY1dlaWdodDogbnVtYmVyXG5cbiAgICBpZiAob2J0YWluZWQgPiBhcHByb3ZlTWluUG9pbnRzKSB7XG4gICAgICB3ZWlnaHQgPSAoc2NhbGUubWF4IC0gc2NhbGUucGFzc2luZ0dyYWRlKSAvICh0b3RhbCAtIGFwcHJvdmVNaW5Qb2ludHMpXG4gICAgICBjYWxjV2VpZ2h0ID0gc2NhbGUubWF4IC0gd2VpZ2h0ICogdG90YWxcbiAgICB9IGVsc2Uge1xuICAgICAgd2VpZ2h0ID0gKHNjYWxlLnBhc3NpbmdHcmFkZSAtIHNjYWxlLm1pbikgLyBhcHByb3ZlTWluUG9pbnRzXG4gICAgICBjYWxjV2VpZ2h0ID0gc2NhbGUucGFzc2luZ0dyYWRlIC0gd2VpZ2h0ICogdG90YWwgKiBwYXNzaW5nUGVyY2VudGFnZVxuICAgIH1cbiAgICBjb25zdCBwcmV2R3JhZGUgPSB3ZWlnaHQgKiBvYnRhaW5lZCArIGNhbGNXZWlnaHRcbiAgICBncmFkZSA9ICgxMDAgKiBwcmV2R3JhZGUpIC8gMTAwXG4gIH0gZWxzZSB7XG4gICAgZ3JhZGUgPSAoc2NhbGUubWF4ICogb2J0YWluZWQpIC8gdG90YWxcbiAgfVxuICByZXR1cm4gZ3JhZGVcbn1cblxuLyoqXG4gKiBSZWNpYmUgbG9zIHB1bnRhamVzIHkgY2FsY3VsYSBsYSBub3RhLlxuICogLSBTaSBlbCBwdW50YWplIG9idGVuaWRvIGVzID49IGFsIHRvdGFsIGVudG9uY2VzIGFzaWduYSBsYSBub3RhIG3DoXhpbWEgZGUgbGEgZXNjYWxhLlxuICogLSBTaSBlbCBwdW50YWplIG9idGVuaWRvIGVzIDw9IDAgZW50b25jZXMgYXNpZ25hIGxhIG5vdGEgbWluaW1hIGRlIGxhIGVzY2FsYS5cbiAqIC0gU2kgZXN0w6EgZW4gZWwgcmFuZ28gPiAwIHkgPCB0b3RhbCBlbnRvbmNlcyBjYWxjdWxhIGxhIG5vdGEgY29uc2lkZXJhbmRvIGxhIHBvbmRlcmFjacOzbi5cbiAqXG4gKiBAZXhhbXBsZSBjb25zdCBncmFkZSA9IGdldEdyYWRlKHNjYWxlLCAxMCwgNSlcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEdyYWRlID0gKFxuICBzY2FsZTogU2NhbGVBdHRyaWJ1dGVzLFxuICB0b3RhbDogbnVtYmVyLFxuICBvYnRhaW5lZDogbnVtYmVyXG4pOiBudW1iZXIgPT4ge1xuICBpZiAob2J0YWluZWQgPj0gdG90YWwpIHtcbiAgICByZXR1cm4gc2NhbGUubWF4XG4gIH0gZWxzZSBpZiAob2J0YWluZWQgPD0gMCkge1xuICAgIHJldHVybiBzY2FsZS5taW5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZ3JhZGVSb3VuZChzY2FsZSwgY2FsY0dyYWRlKHNjYWxlLCB0b3RhbCwgb2J0YWluZWQpKVxuICB9XG59XG4iXX0=