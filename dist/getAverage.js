"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAverage = void 0;
const grades_1 = require("./grades");
/**
 * Calcula el promedio de una o mas notas, con sus ponderaciones.
 *
 * @example const average = getAverage(scale, { grades: [3,4,6] })
 */
const getAverage = (scale, params) => {
    /**
     * Redondeamos las notas.
     */
    const grades = params.grades.map((grade) => (0, grades_1.gradeRound)(scale, grade));
    /**
     * - Si vienen las ponderaciones entonces las usamos para calcular el promedio
     * - Si no, entonces usamos las notas y calculamos las ponderaciones de forma lineal según la cantidad de notas.
     */
    const weights = params.weights
        ? params.weights
        : grades.map(() => 100 / grades.length);
    /**
     * Si no hay notas entonces retornamos la nota mínima de la escala.
     */
    if (grades.length === 0 || grades.length !== weights.length) {
        return {
            value: (0, grades_1.gradeRound)(scale, scale.min),
            valueFormatted: (0, grades_1.gradeFormat)(scale, scale.min),
            status: (0, grades_1.gradeStatus)(scale, null),
        };
    }
    /**
     * Promedio calculado.
     */
    let average = 0;
    const sumAverages = weights.reduce((acc, weight) => acc + weight, 0);
    grades.forEach((grade, index) => {
        average += grade * (weights[`${index}`] / sumAverages);
    });
    /**
     * Si el promedio es menor al mínimo de la escala entonces lo seteamos como mínimo.
     */
    if (average < scale.min) {
        average = scale.min;
    }
    return {
        value: (0, grades_1.gradeRound)(scale, average),
        valueFormatted: (0, grades_1.gradeFormat)(scale, average),
        status: (0, grades_1.gradeStatus)(scale, average),
    };
};
exports.getAverage = getAverage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QXZlcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2xpYi9nZXRBdmVyYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUErRDtBQUcvRDs7OztHQUlHO0FBQ0ksTUFBTSxVQUFVLEdBQUcsQ0FDeEIsS0FBc0IsRUFDdEIsTUFBcUIsRUFDRixFQUFFO0lBQ3JCOztPQUVHO0lBQ0gsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUEsbUJBQVUsRUFBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQTtJQUVyRTs7O09BR0c7SUFDSCxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTztRQUM1QixDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU87UUFDaEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUV6Qzs7T0FFRztJQUNILElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxPQUFPLENBQUMsTUFBTSxFQUFFO1FBQzNELE9BQU87WUFDTCxLQUFLLEVBQUUsSUFBQSxtQkFBVSxFQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDO1lBQ25DLGNBQWMsRUFBRSxJQUFBLG9CQUFXLEVBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDN0MsTUFBTSxFQUFFLElBQUEsb0JBQVcsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDO1NBQ2pDLENBQUE7S0FDRjtJQUVEOztPQUVHO0lBQ0gsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFBO0lBQ2YsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDcEUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUM5QixPQUFPLElBQUksS0FBSyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQTtJQUN4RCxDQUFDLENBQUMsQ0FBQTtJQUVGOztPQUVHO0lBQ0gsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLEdBQUcsRUFBRTtRQUN2QixPQUFPLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQTtLQUNwQjtJQUVELE9BQU87UUFDTCxLQUFLLEVBQUUsSUFBQSxtQkFBVSxFQUFDLEtBQUssRUFBRSxPQUFPLENBQUM7UUFDakMsY0FBYyxFQUFFLElBQUEsb0JBQVcsRUFBQyxLQUFLLEVBQUUsT0FBTyxDQUFDO1FBQzNDLE1BQU0sRUFBRSxJQUFBLG9CQUFXLEVBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQztLQUNwQyxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBakRZLFFBQUEsVUFBVSxjQWlEdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncmFkZUZvcm1hdCwgZ3JhZGVSb3VuZCwgZ3JhZGVTdGF0dXMgfSBmcm9tICcuL2dyYWRlcydcbmltcG9ydCB7IFNjYWxlQXR0cmlidXRlcywgUXVhbGlmaWNhdGlvblR5cGUsIEF2ZXJhZ2VQYXJhbXMgfSBmcm9tICcuL3R5cGVzJ1xuXG4vKipcbiAqIENhbGN1bGEgZWwgcHJvbWVkaW8gZGUgdW5hIG8gbWFzIG5vdGFzLCBjb24gc3VzIHBvbmRlcmFjaW9uZXMuXG4gKlxuICogQGV4YW1wbGUgY29uc3QgYXZlcmFnZSA9IGdldEF2ZXJhZ2Uoc2NhbGUsIHsgZ3JhZGVzOiBbMyw0LDZdIH0pXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRBdmVyYWdlID0gKFxuICBzY2FsZTogU2NhbGVBdHRyaWJ1dGVzLFxuICBwYXJhbXM6IEF2ZXJhZ2VQYXJhbXMsXG4pOiBRdWFsaWZpY2F0aW9uVHlwZSA9PiB7XG4gIC8qKlxuICAgKiBSZWRvbmRlYW1vcyBsYXMgbm90YXMuXG4gICAqL1xuICBjb25zdCBncmFkZXMgPSBwYXJhbXMuZ3JhZGVzLm1hcCgoZ3JhZGUpID0+IGdyYWRlUm91bmQoc2NhbGUsIGdyYWRlKSlcblxuICAvKipcbiAgICogLSBTaSB2aWVuZW4gbGFzIHBvbmRlcmFjaW9uZXMgZW50b25jZXMgbGFzIHVzYW1vcyBwYXJhIGNhbGN1bGFyIGVsIHByb21lZGlvXG4gICAqIC0gU2kgbm8sIGVudG9uY2VzIHVzYW1vcyBsYXMgbm90YXMgeSBjYWxjdWxhbW9zIGxhcyBwb25kZXJhY2lvbmVzIGRlIGZvcm1hIGxpbmVhbCBzZWfDum4gbGEgY2FudGlkYWQgZGUgbm90YXMuXG4gICAqL1xuICBjb25zdCB3ZWlnaHRzID0gcGFyYW1zLndlaWdodHNcbiAgICA/IHBhcmFtcy53ZWlnaHRzXG4gICAgOiBncmFkZXMubWFwKCgpID0+IDEwMCAvIGdyYWRlcy5sZW5ndGgpXG5cbiAgLyoqXG4gICAqIFNpIG5vIGhheSBub3RhcyBlbnRvbmNlcyByZXRvcm5hbW9zIGxhIG5vdGEgbcOtbmltYSBkZSBsYSBlc2NhbGEuXG4gICAqL1xuICBpZiAoZ3JhZGVzLmxlbmd0aCA9PT0gMCB8fCBncmFkZXMubGVuZ3RoICE9PSB3ZWlnaHRzLmxlbmd0aCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogZ3JhZGVSb3VuZChzY2FsZSwgc2NhbGUubWluKSxcbiAgICAgIHZhbHVlRm9ybWF0dGVkOiBncmFkZUZvcm1hdChzY2FsZSwgc2NhbGUubWluKSxcbiAgICAgIHN0YXR1czogZ3JhZGVTdGF0dXMoc2NhbGUsIG51bGwpLFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9tZWRpbyBjYWxjdWxhZG8uXG4gICAqL1xuICBsZXQgYXZlcmFnZSA9IDBcbiAgY29uc3Qgc3VtQXZlcmFnZXMgPSB3ZWlnaHRzLnJlZHVjZSgoYWNjLCB3ZWlnaHQpID0+IGFjYyArIHdlaWdodCwgMClcbiAgZ3JhZGVzLmZvckVhY2goKGdyYWRlLCBpbmRleCkgPT4ge1xuICAgIGF2ZXJhZ2UgKz0gZ3JhZGUgKiAod2VpZ2h0c1tgJHtpbmRleH1gXSAvIHN1bUF2ZXJhZ2VzKVxuICB9KVxuXG4gIC8qKlxuICAgKiBTaSBlbCBwcm9tZWRpbyBlcyBtZW5vciBhbCBtw61uaW1vIGRlIGxhIGVzY2FsYSBlbnRvbmNlcyBsbyBzZXRlYW1vcyBjb21vIG3DrW5pbW8uXG4gICAqL1xuICBpZiAoYXZlcmFnZSA8IHNjYWxlLm1pbikge1xuICAgIGF2ZXJhZ2UgPSBzY2FsZS5taW5cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdmFsdWU6IGdyYWRlUm91bmQoc2NhbGUsIGF2ZXJhZ2UpLFxuICAgIHZhbHVlRm9ybWF0dGVkOiBncmFkZUZvcm1hdChzY2FsZSwgYXZlcmFnZSksXG4gICAgc3RhdHVzOiBncmFkZVN0YXR1cyhzY2FsZSwgYXZlcmFnZSksXG4gIH1cbn1cbiJdfQ==