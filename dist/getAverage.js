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
    const grades = params.grades.map(grade => grades_1.gradeRound(scale, grade));
    /**
     * - Si vienen las ponderaciones entonces las usamos para calcular el promedio
     * - Si no, entonces usamos las notas y calculamos las ponderaciones de forma lineal según la cantidad de notas.
     */
    const weights = params.weights
        ? params.weights
        : grades.map(grade => 100 / grades.length);
    /**
     * Si no hay notas entonces retornamos la nota mínima de la escala.
     */
    if (grades.length === 0 || grades.length !== weights.length) {
        return {
            value: grades_1.gradeRound(scale, scale.min),
            valueFormatted: grades_1.gradeFormat(scale, scale.min),
            status: grades_1.gradeStatus(scale, null)
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
        value: grades_1.gradeRound(scale, average),
        valueFormatted: grades_1.gradeFormat(scale, average),
        status: grades_1.gradeStatus(scale, average)
    };
};
exports.getAverage = getAverage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QXZlcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2xpYi9nZXRBdmVyYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUErRDtBQUcvRDs7OztHQUlHO0FBQ0ksTUFBTSxVQUFVLEdBQUcsQ0FDeEIsS0FBc0IsRUFDdEIsTUFBcUIsRUFDRixFQUFFO0lBQ3JCOztPQUVHO0lBQ0gsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxtQkFBVSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFBO0lBRW5FOzs7T0FHRztJQUNILE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPO1FBQzVCLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTztRQUNoQixDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7SUFFNUM7O09BRUc7SUFDSCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssT0FBTyxDQUFDLE1BQU0sRUFBRTtRQUMzRCxPQUFPO1lBQ0wsS0FBSyxFQUFFLG1CQUFVLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDbkMsY0FBYyxFQUFFLG9CQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDN0MsTUFBTSxFQUFFLG9CQUFXLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQztTQUNqQyxDQUFBO0tBQ0Y7SUFFRDs7T0FFRztJQUNILElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQTtJQUNmLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ3BFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDOUIsT0FBTyxJQUFJLEtBQUssR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUE7SUFDeEQsQ0FBQyxDQUFDLENBQUE7SUFFRjs7T0FFRztJQUNILElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUU7UUFDdkIsT0FBTyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUE7S0FDcEI7SUFFRCxPQUFPO1FBQ0wsS0FBSyxFQUFFLG1CQUFVLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQztRQUNqQyxjQUFjLEVBQUUsb0JBQVcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDO1FBQzNDLE1BQU0sRUFBRSxvQkFBVyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUM7S0FDcEMsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQWpEWSxRQUFBLFVBQVUsY0FpRHRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3JhZGVGb3JtYXQsIGdyYWRlUm91bmQsIGdyYWRlU3RhdHVzIH0gZnJvbSAnLi9ncmFkZXMnXG5pbXBvcnQgeyBTY2FsZUF0dHJpYnV0ZXMsIFF1YWxpZmljYXRpb25UeXBlLCBBdmVyYWdlUGFyYW1zIH0gZnJvbSAnLi90eXBlcydcblxuLyoqXG4gKiBDYWxjdWxhIGVsIHByb21lZGlvIGRlIHVuYSBvIG1hcyBub3RhcywgY29uIHN1cyBwb25kZXJhY2lvbmVzLlxuICpcbiAqIEBleGFtcGxlIGNvbnN0IGF2ZXJhZ2UgPSBnZXRBdmVyYWdlKHNjYWxlLCB7IGdyYWRlczogWzMsNCw2XSB9KVxuICovXG5leHBvcnQgY29uc3QgZ2V0QXZlcmFnZSA9IChcbiAgc2NhbGU6IFNjYWxlQXR0cmlidXRlcyxcbiAgcGFyYW1zOiBBdmVyYWdlUGFyYW1zXG4pOiBRdWFsaWZpY2F0aW9uVHlwZSA9PiB7XG4gIC8qKlxuICAgKiBSZWRvbmRlYW1vcyBsYXMgbm90YXMuXG4gICAqL1xuICBjb25zdCBncmFkZXMgPSBwYXJhbXMuZ3JhZGVzLm1hcChncmFkZSA9PiBncmFkZVJvdW5kKHNjYWxlLCBncmFkZSkpXG5cbiAgLyoqXG4gICAqIC0gU2kgdmllbmVuIGxhcyBwb25kZXJhY2lvbmVzIGVudG9uY2VzIGxhcyB1c2Ftb3MgcGFyYSBjYWxjdWxhciBlbCBwcm9tZWRpb1xuICAgKiAtIFNpIG5vLCBlbnRvbmNlcyB1c2Ftb3MgbGFzIG5vdGFzIHkgY2FsY3VsYW1vcyBsYXMgcG9uZGVyYWNpb25lcyBkZSBmb3JtYSBsaW5lYWwgc2Vnw7puIGxhIGNhbnRpZGFkIGRlIG5vdGFzLlxuICAgKi9cbiAgY29uc3Qgd2VpZ2h0cyA9IHBhcmFtcy53ZWlnaHRzXG4gICAgPyBwYXJhbXMud2VpZ2h0c1xuICAgIDogZ3JhZGVzLm1hcChncmFkZSA9PiAxMDAgLyBncmFkZXMubGVuZ3RoKVxuXG4gIC8qKlxuICAgKiBTaSBubyBoYXkgbm90YXMgZW50b25jZXMgcmV0b3JuYW1vcyBsYSBub3RhIG3DrW5pbWEgZGUgbGEgZXNjYWxhLlxuICAgKi9cbiAgaWYgKGdyYWRlcy5sZW5ndGggPT09IDAgfHwgZ3JhZGVzLmxlbmd0aCAhPT0gd2VpZ2h0cy5sZW5ndGgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGdyYWRlUm91bmQoc2NhbGUsIHNjYWxlLm1pbiksXG4gICAgICB2YWx1ZUZvcm1hdHRlZDogZ3JhZGVGb3JtYXQoc2NhbGUsIHNjYWxlLm1pbiksXG4gICAgICBzdGF0dXM6IGdyYWRlU3RhdHVzKHNjYWxlLCBudWxsKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9tZWRpbyBjYWxjdWxhZG8uXG4gICAqL1xuICBsZXQgYXZlcmFnZSA9IDBcbiAgY29uc3Qgc3VtQXZlcmFnZXMgPSB3ZWlnaHRzLnJlZHVjZSgoYWNjLCB3ZWlnaHQpID0+IGFjYyArIHdlaWdodCwgMClcbiAgZ3JhZGVzLmZvckVhY2goKGdyYWRlLCBpbmRleCkgPT4ge1xuICAgIGF2ZXJhZ2UgKz0gZ3JhZGUgKiAod2VpZ2h0c1tgJHtpbmRleH1gXSAvIHN1bUF2ZXJhZ2VzKVxuICB9KVxuXG4gIC8qKlxuICAgKiBTaSBlbCBwcm9tZWRpbyBlcyBtZW5vciBhbCBtw61uaW1vIGRlIGxhIGVzY2FsYSBlbnRvbmNlcyBsbyBzZXRlYW1vcyBjb21vIG3DrW5pbW8uXG4gICAqL1xuICBpZiAoYXZlcmFnZSA8IHNjYWxlLm1pbikge1xuICAgIGF2ZXJhZ2UgPSBzY2FsZS5taW5cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdmFsdWU6IGdyYWRlUm91bmQoc2NhbGUsIGF2ZXJhZ2UpLFxuICAgIHZhbHVlRm9ybWF0dGVkOiBncmFkZUZvcm1hdChzY2FsZSwgYXZlcmFnZSksXG4gICAgc3RhdHVzOiBncmFkZVN0YXR1cyhzY2FsZSwgYXZlcmFnZSlcbiAgfVxufVxuIl19