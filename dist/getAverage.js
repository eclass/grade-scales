"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gradeFormat_1 = require("./grades/gradeFormat");
const gradeRound_1 = require("./grades/gradeRound");
const gradeStatus_1 = require("./grades/gradeStatus");
/**
 * Calcula el promedio de una o mas notas, con sus ponderaciones.
 *
 * @example const average = getAverage(scale, { grades: [3,4,6] })
 */
const average = (scale, params) => {
    if (!scale) {
        throw new Error('No existe la escala consultada');
    }
    /**
     * Redondeamos las notas.
     */
    const grades = params.grades.map(grade => gradeRound_1.default(grade, scale));
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
            value: gradeRound_1.default(scale.min, scale),
            valueFormatted: gradeFormat_1.default(scale.min, scale),
            status: gradeStatus_1.default(scale, null)
        };
    }
    /**
     * Promedio calculado.
     */
    let average = 0;
    const sumAverages = weights.reduce((acc, weight) => acc + weight, 0);
    grades.forEach((grade, index) => {
        average += grade * (weights[index] / sumAverages);
    });
    /**
     * Si el promedio es menor al mínimo de la escala entonces lo seteamos como mínimo.
     */
    if (average < scale.min) {
        average = scale.min;
    }
    return {
        value: gradeRound_1.default(average, scale),
        valueFormatted: gradeFormat_1.default(average, scale),
        status: gradeStatus_1.default(scale, average)
    };
};
exports.default = average;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QXZlcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2xpYi9nZXRBdmVyYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0RBQThDO0FBQzlDLG9EQUE0QztBQUM1QyxzREFBOEM7QUFlOUM7Ozs7R0FJRztBQUNILE1BQU0sT0FBTyxHQUFHLENBQ2QsS0FBc0IsRUFDdEIsTUFBcUIsRUFDRixFQUFFO0lBQ3JCLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDVixNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUE7S0FDbEQ7SUFFRDs7T0FFRztJQUNILE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsb0JBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQTtJQUVuRTs7O09BR0c7SUFDSCxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTztRQUM1QixDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU87UUFDaEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBRTVDOztPQUVHO0lBQ0gsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLE9BQU8sQ0FBQyxNQUFNLEVBQUU7UUFDM0QsT0FBTztZQUNMLEtBQUssRUFBRSxvQkFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDO1lBQ25DLGNBQWMsRUFBRSxxQkFBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDO1lBQzdDLE1BQU0sRUFBRSxxQkFBVyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUM7U0FDakMsQ0FBQTtLQUNGO0lBRUQ7O09BRUc7SUFDSCxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUE7SUFDZixNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUNwRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFO1FBQzlCLE9BQU8sSUFBSSxLQUFLLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUE7SUFDbkQsQ0FBQyxDQUFDLENBQUE7SUFFRjs7T0FFRztJQUNILElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUU7UUFDdkIsT0FBTyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUE7S0FDcEI7SUFFRCxPQUFPO1FBQ0wsS0FBSyxFQUFFLG9CQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztRQUNqQyxjQUFjLEVBQUUscUJBQVcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO1FBQzNDLE1BQU0sRUFBRSxxQkFBVyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUM7S0FDcEMsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQUVELGtCQUFlLE9BQU8sQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncmFkZUZvcm1hdCBmcm9tICcuL2dyYWRlcy9ncmFkZUZvcm1hdCdcbmltcG9ydCBncmFkZVJvdW5kIGZyb20gJy4vZ3JhZGVzL2dyYWRlUm91bmQnXG5pbXBvcnQgZ3JhZGVTdGF0dXMgZnJvbSAnLi9ncmFkZXMvZ3JhZGVTdGF0dXMnXG5pbXBvcnQgeyBTY2FsZUF0dHJpYnV0ZXMsIFF1YWxpZmljYXRpb25UeXBlIH0gZnJvbSAnLi9ncmFkZXMvdHlwZXMnXG5cbnR5cGUgQXZlcmFnZVBhcmFtcyA9IHtcbiAgLyoqXG4gICAqIE5vdGFzLlxuICAgKi9cbiAgZ3JhZGVzOiBudW1iZXJbXVxuXG4gIC8qKlxuICAgKiBQb25kZXJhY2lvbmVzLlxuICAgKi9cbiAgd2VpZ2h0czogbnVtYmVyW11cbn1cblxuLyoqXG4gKiBDYWxjdWxhIGVsIHByb21lZGlvIGRlIHVuYSBvIG1hcyBub3RhcywgY29uIHN1cyBwb25kZXJhY2lvbmVzLlxuICpcbiAqIEBleGFtcGxlIGNvbnN0IGF2ZXJhZ2UgPSBnZXRBdmVyYWdlKHNjYWxlLCB7IGdyYWRlczogWzMsNCw2XSB9KVxuICovXG5jb25zdCBhdmVyYWdlID0gKFxuICBzY2FsZTogU2NhbGVBdHRyaWJ1dGVzLFxuICBwYXJhbXM6IEF2ZXJhZ2VQYXJhbXNcbik6IFF1YWxpZmljYXRpb25UeXBlID0+IHtcbiAgaWYgKCFzY2FsZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gZXhpc3RlIGxhIGVzY2FsYSBjb25zdWx0YWRhJylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWRvbmRlYW1vcyBsYXMgbm90YXMuXG4gICAqL1xuICBjb25zdCBncmFkZXMgPSBwYXJhbXMuZ3JhZGVzLm1hcChncmFkZSA9PiBncmFkZVJvdW5kKGdyYWRlLCBzY2FsZSkpXG5cbiAgLyoqXG4gICAqIC0gU2kgdmllbmVuIGxhcyBwb25kZXJhY2lvbmVzIGVudG9uY2VzIGxhcyB1c2Ftb3MgcGFyYSBjYWxjdWxhciBlbCBwcm9tZWRpb1xuICAgKiAtIFNpIG5vLCBlbnRvbmNlcyB1c2Ftb3MgbGFzIG5vdGFzIHkgY2FsY3VsYW1vcyBsYXMgcG9uZGVyYWNpb25lcyBkZSBmb3JtYSBsaW5lYWwgc2Vnw7puIGxhIGNhbnRpZGFkIGRlIG5vdGFzLlxuICAgKi9cbiAgY29uc3Qgd2VpZ2h0cyA9IHBhcmFtcy53ZWlnaHRzXG4gICAgPyBwYXJhbXMud2VpZ2h0c1xuICAgIDogZ3JhZGVzLm1hcChncmFkZSA9PiAxMDAgLyBncmFkZXMubGVuZ3RoKVxuXG4gIC8qKlxuICAgKiBTaSBubyBoYXkgbm90YXMgZW50b25jZXMgcmV0b3JuYW1vcyBsYSBub3RhIG3DrW5pbWEgZGUgbGEgZXNjYWxhLlxuICAgKi9cbiAgaWYgKGdyYWRlcy5sZW5ndGggPT09IDAgfHwgZ3JhZGVzLmxlbmd0aCAhPT0gd2VpZ2h0cy5sZW5ndGgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGdyYWRlUm91bmQoc2NhbGUubWluLCBzY2FsZSksXG4gICAgICB2YWx1ZUZvcm1hdHRlZDogZ3JhZGVGb3JtYXQoc2NhbGUubWluLCBzY2FsZSksXG4gICAgICBzdGF0dXM6IGdyYWRlU3RhdHVzKHNjYWxlLCBudWxsKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9tZWRpbyBjYWxjdWxhZG8uXG4gICAqL1xuICBsZXQgYXZlcmFnZSA9IDBcbiAgY29uc3Qgc3VtQXZlcmFnZXMgPSB3ZWlnaHRzLnJlZHVjZSgoYWNjLCB3ZWlnaHQpID0+IGFjYyArIHdlaWdodCwgMClcbiAgZ3JhZGVzLmZvckVhY2goKGdyYWRlLCBpbmRleCkgPT4ge1xuICAgIGF2ZXJhZ2UgKz0gZ3JhZGUgKiAod2VpZ2h0c1tpbmRleF0gLyBzdW1BdmVyYWdlcylcbiAgfSlcblxuICAvKipcbiAgICogU2kgZWwgcHJvbWVkaW8gZXMgbWVub3IgYWwgbcOtbmltbyBkZSBsYSBlc2NhbGEgZW50b25jZXMgbG8gc2V0ZWFtb3MgY29tbyBtw61uaW1vLlxuICAgKi9cbiAgaWYgKGF2ZXJhZ2UgPCBzY2FsZS5taW4pIHtcbiAgICBhdmVyYWdlID0gc2NhbGUubWluXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHZhbHVlOiBncmFkZVJvdW5kKGF2ZXJhZ2UsIHNjYWxlKSxcbiAgICB2YWx1ZUZvcm1hdHRlZDogZ3JhZGVGb3JtYXQoYXZlcmFnZSwgc2NhbGUpLFxuICAgIHN0YXR1czogZ3JhZGVTdGF0dXMoc2NhbGUsIGF2ZXJhZ2UpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXZlcmFnZVxuIl19