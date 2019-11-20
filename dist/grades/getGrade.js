"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gradeRound_1 = require("./gradeRound");
/**
 * Hace el cálculo de la nota.
 *
 * @example const grade = calcGrade(scale, total, obtained)
 * @param scale
 * @param total
 * @param obtained
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
- Si el puntaje obtenido es >= al total entonces asigna la nota máxima de la escala.
- Si el puntaje obtenido es <= 0 entonces asigna la nota minima de la escala.
- Si está en el rango > 0 y < total entonces calcula la nota considerando la ponderación.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0R3JhZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvZ3JhZGVzL2dldEdyYWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQXFDO0FBa0JyQzs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxTQUFTLEdBQUcsQ0FDaEIsS0FBc0IsRUFDdEIsS0FBYSxFQUNiLFFBQWdCLEVBQ1IsRUFBRTtJQUNWLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQTtJQUNiLElBQUksS0FBSyxDQUFDLGlCQUFpQixHQUFHLENBQUMsRUFBRTtRQUMvQixNQUFNLGlCQUFpQixHQUFHLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyxHQUFHLENBQUE7UUFDdkQsTUFBTSxnQkFBZ0IsR0FBRyxLQUFLLEdBQUcsaUJBQWlCLENBQUE7UUFFbEQsSUFBSSxNQUFjLENBQUE7UUFDbEIsSUFBSSxVQUFrQixDQUFBO1FBRXRCLElBQUksUUFBUSxHQUFHLGdCQUFnQixFQUFFO1lBQy9CLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLGdCQUFnQixDQUFDLENBQUE7WUFDdEUsVUFBVSxHQUFHLEtBQUssQ0FBQyxHQUFHLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FBQTtTQUN4QzthQUFNO1lBQ0wsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsZ0JBQWdCLENBQUE7WUFDNUQsVUFBVSxHQUFHLEtBQUssQ0FBQyxZQUFZLEdBQUcsTUFBTSxHQUFHLEtBQUssR0FBRyxpQkFBaUIsQ0FBQTtTQUNyRTtRQUNELE1BQU0sU0FBUyxHQUFHLE1BQU0sR0FBRyxRQUFRLEdBQUcsVUFBVSxDQUFBO1FBQ2hELEtBQUssR0FBRyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUE7S0FDaEM7U0FBTTtRQUNMLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFBO0tBQ3ZDO0lBQ0QsT0FBTyxLQUFLLENBQUE7QUFDZCxDQUFDLENBQUE7QUFFRDs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxRQUFRLEdBQUcsQ0FBQyxNQUFjLEVBQUUsS0FBc0IsRUFBVSxFQUFFO0lBQ2xFLE1BQU0sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEdBQUcsTUFBTSxDQUFBO0lBRWxDLElBQUksUUFBUSxJQUFJLEtBQUssRUFBRTtRQUNyQixPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUE7S0FDakI7U0FBTSxJQUFJLFFBQVEsSUFBSSxDQUFDLEVBQUU7UUFDeEIsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFBO0tBQ2pCO1NBQU07UUFDTCxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQTtRQUMvQyxPQUFPLG9CQUFVLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFBO0tBQ2hDO0FBQ0gsQ0FBQyxDQUFBO0FBRUQsa0JBQWUsUUFBUSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdyYWRlUm91bmQgZnJvbSAnLi9ncmFkZVJvdW5kJ1xuaW1wb3J0IHsgU2NhbGVBdHRyaWJ1dGVzIH0gZnJvbSAnLi90eXBlcydcblxuLyoqXG4gKiBQdW50YWplcyB0b3RhbGVzIHkgb2J0ZW5pZG9zLlxuICovXG5leHBvcnQgdHlwZSBTY29yZXMgPSB7XG4gIC8qKlxuICAgKiBQdW50YWplIHRvdGFsLlxuICAgKi9cbiAgdG90YWw6IG51bWJlclxuXG4gIC8qKlxuICAgKiBQdW50YWplIE9idGVuaWRvLlxuICAgKi9cbiAgb2J0YWluZWQ6IG51bWJlclxufVxuXG4vKipcbiAqIEhhY2UgZWwgY8OhbGN1bG8gZGUgbGEgbm90YS5cbiAqXG4gKiBAZXhhbXBsZSBjb25zdCBncmFkZSA9IGNhbGNHcmFkZShzY2FsZSwgdG90YWwsIG9idGFpbmVkKVxuICogQHBhcmFtIHNjYWxlXG4gKiBAcGFyYW0gdG90YWxcbiAqIEBwYXJhbSBvYnRhaW5lZFxuICovXG5jb25zdCBjYWxjR3JhZGUgPSAoXG4gIHNjYWxlOiBTY2FsZUF0dHJpYnV0ZXMsXG4gIHRvdGFsOiBudW1iZXIsXG4gIG9idGFpbmVkOiBudW1iZXJcbik6IG51bWJlciA9PiB7XG4gIGxldCBncmFkZSA9IDBcbiAgaWYgKHNjYWxlLnBhc3NpbmdQZXJjZW50YWdlID4gMCkge1xuICAgIGNvbnN0IHBhc3NpbmdQZXJjZW50YWdlID0gc2NhbGUucGFzc2luZ1BlcmNlbnRhZ2UgLyAxMDBcbiAgICBjb25zdCBhcHByb3ZlTWluUG9pbnRzID0gdG90YWwgKiBwYXNzaW5nUGVyY2VudGFnZVxuXG4gICAgbGV0IHdlaWdodDogbnVtYmVyXG4gICAgbGV0IGNhbGNXZWlnaHQ6IG51bWJlclxuXG4gICAgaWYgKG9idGFpbmVkID4gYXBwcm92ZU1pblBvaW50cykge1xuICAgICAgd2VpZ2h0ID0gKHNjYWxlLm1heCAtIHNjYWxlLnBhc3NpbmdHcmFkZSkgLyAodG90YWwgLSBhcHByb3ZlTWluUG9pbnRzKVxuICAgICAgY2FsY1dlaWdodCA9IHNjYWxlLm1heCAtIHdlaWdodCAqIHRvdGFsXG4gICAgfSBlbHNlIHtcbiAgICAgIHdlaWdodCA9IChzY2FsZS5wYXNzaW5nR3JhZGUgLSBzY2FsZS5taW4pIC8gYXBwcm92ZU1pblBvaW50c1xuICAgICAgY2FsY1dlaWdodCA9IHNjYWxlLnBhc3NpbmdHcmFkZSAtIHdlaWdodCAqIHRvdGFsICogcGFzc2luZ1BlcmNlbnRhZ2VcbiAgICB9XG4gICAgY29uc3QgcHJldkdyYWRlID0gd2VpZ2h0ICogb2J0YWluZWQgKyBjYWxjV2VpZ2h0XG4gICAgZ3JhZGUgPSAoMTAwICogcHJldkdyYWRlKSAvIDEwMFxuICB9IGVsc2Uge1xuICAgIGdyYWRlID0gKHNjYWxlLm1heCAqIG9idGFpbmVkKSAvIHRvdGFsXG4gIH1cbiAgcmV0dXJuIGdyYWRlXG59XG5cbi8qKlxuICogUmVjaWJlIGxvcyBwdW50YWplcyB5IGNhbGN1bGEgbGEgbm90YS5cbi0gU2kgZWwgcHVudGFqZSBvYnRlbmlkbyBlcyA+PSBhbCB0b3RhbCBlbnRvbmNlcyBhc2lnbmEgbGEgbm90YSBtw6F4aW1hIGRlIGxhIGVzY2FsYS5cbi0gU2kgZWwgcHVudGFqZSBvYnRlbmlkbyBlcyA8PSAwIGVudG9uY2VzIGFzaWduYSBsYSBub3RhIG1pbmltYSBkZSBsYSBlc2NhbGEuXG4tIFNpIGVzdMOhIGVuIGVsIHJhbmdvID4gMCB5IDwgdG90YWwgZW50b25jZXMgY2FsY3VsYSBsYSBub3RhIGNvbnNpZGVyYW5kbyBsYSBwb25kZXJhY2nDs24uXG4gKlxuICogQGV4YW1wbGUgY29uc3QgZ3JhZGUgPSBnZXRHcmFkZSh7IHRvdGFsOiA0LCBvYnRhaW5lZDogNCB9LCBzY2FsZSlcbiAqL1xuY29uc3QgZ2V0R3JhZGUgPSAoc2NvcmVzOiBTY29yZXMsIHNjYWxlOiBTY2FsZUF0dHJpYnV0ZXMpOiBudW1iZXIgPT4ge1xuICBjb25zdCB7IHRvdGFsLCBvYnRhaW5lZCB9ID0gc2NvcmVzXG5cbiAgaWYgKG9idGFpbmVkID49IHRvdGFsKSB7XG4gICAgcmV0dXJuIHNjYWxlLm1heFxuICB9IGVsc2UgaWYgKG9idGFpbmVkIDw9IDApIHtcbiAgICByZXR1cm4gc2NhbGUubWluXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZ3JhZGUgPSBjYWxjR3JhZGUoc2NhbGUsIHRvdGFsLCBvYnRhaW5lZClcbiAgICByZXR1cm4gZ3JhZGVSb3VuZChncmFkZSwgc2NhbGUpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0R3JhZGVcbiJdfQ==