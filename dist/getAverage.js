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
    if (sumAverages <= 0) {
        return {
            value: (0, grades_1.gradeRound)(scale, scale.min),
            valueFormatted: (0, grades_1.gradeFormat)(scale, scale.min),
            status: (0, grades_1.gradeStatus)(scale, null),
        };
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QXZlcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2xpYi9nZXRBdmVyYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUErRDtBQUcvRDs7OztHQUlHO0FBQ0ksTUFBTSxVQUFVLEdBQUcsQ0FDeEIsS0FBc0IsRUFDdEIsTUFBcUIsRUFDRixFQUFFO0lBQ3JCOztPQUVHO0lBQ0gsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUEsbUJBQVUsRUFBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQTtJQUVyRTs7O09BR0c7SUFDSCxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTztRQUM1QixDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU87UUFDaEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUV6Qzs7T0FFRztJQUNILElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxPQUFPLENBQUMsTUFBTSxFQUFFO1FBQzNELE9BQU87WUFDTCxLQUFLLEVBQUUsSUFBQSxtQkFBVSxFQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDO1lBQ25DLGNBQWMsRUFBRSxJQUFBLG9CQUFXLEVBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDN0MsTUFBTSxFQUFFLElBQUEsb0JBQVcsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDO1NBQ2pDLENBQUE7S0FDRjtJQUVEOztPQUVHO0lBQ0gsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFBO0lBQ2YsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDcEUsSUFBSSxXQUFXLElBQUksQ0FBQyxFQUFFO1FBQ3BCLE9BQU87WUFDTCxLQUFLLEVBQUUsSUFBQSxtQkFBVSxFQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDO1lBQ25DLGNBQWMsRUFBRSxJQUFBLG9CQUFXLEVBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDN0MsTUFBTSxFQUFFLElBQUEsb0JBQVcsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDO1NBQ2pDLENBQUE7S0FDRjtJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDOUIsT0FBTyxJQUFJLEtBQUssR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUE7SUFDeEQsQ0FBQyxDQUFDLENBQUE7SUFFRjs7T0FFRztJQUNILElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUU7UUFDdkIsT0FBTyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUE7S0FDcEI7SUFFRCxPQUFPO1FBQ0wsS0FBSyxFQUFFLElBQUEsbUJBQVUsRUFBQyxLQUFLLEVBQUUsT0FBTyxDQUFDO1FBQ2pDLGNBQWMsRUFBRSxJQUFBLG9CQUFXLEVBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQztRQUMzQyxNQUFNLEVBQUUsSUFBQSxvQkFBVyxFQUFDLEtBQUssRUFBRSxPQUFPLENBQUM7S0FDcEMsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQXhEWSxRQUFBLFVBQVUsY0F3RHRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3JhZGVGb3JtYXQsIGdyYWRlUm91bmQsIGdyYWRlU3RhdHVzIH0gZnJvbSAnLi9ncmFkZXMnXG5pbXBvcnQgeyBTY2FsZUF0dHJpYnV0ZXMsIFF1YWxpZmljYXRpb25UeXBlLCBBdmVyYWdlUGFyYW1zIH0gZnJvbSAnLi90eXBlcydcblxuLyoqXG4gKiBDYWxjdWxhIGVsIHByb21lZGlvIGRlIHVuYSBvIG1hcyBub3RhcywgY29uIHN1cyBwb25kZXJhY2lvbmVzLlxuICpcbiAqIEBleGFtcGxlIGNvbnN0IGF2ZXJhZ2UgPSBnZXRBdmVyYWdlKHNjYWxlLCB7IGdyYWRlczogWzMsNCw2XSB9KVxuICovXG5leHBvcnQgY29uc3QgZ2V0QXZlcmFnZSA9IChcbiAgc2NhbGU6IFNjYWxlQXR0cmlidXRlcyxcbiAgcGFyYW1zOiBBdmVyYWdlUGFyYW1zLFxuKTogUXVhbGlmaWNhdGlvblR5cGUgPT4ge1xuICAvKipcbiAgICogUmVkb25kZWFtb3MgbGFzIG5vdGFzLlxuICAgKi9cbiAgY29uc3QgZ3JhZGVzID0gcGFyYW1zLmdyYWRlcy5tYXAoKGdyYWRlKSA9PiBncmFkZVJvdW5kKHNjYWxlLCBncmFkZSkpXG5cbiAgLyoqXG4gICAqIC0gU2kgdmllbmVuIGxhcyBwb25kZXJhY2lvbmVzIGVudG9uY2VzIGxhcyB1c2Ftb3MgcGFyYSBjYWxjdWxhciBlbCBwcm9tZWRpb1xuICAgKiAtIFNpIG5vLCBlbnRvbmNlcyB1c2Ftb3MgbGFzIG5vdGFzIHkgY2FsY3VsYW1vcyBsYXMgcG9uZGVyYWNpb25lcyBkZSBmb3JtYSBsaW5lYWwgc2Vnw7puIGxhIGNhbnRpZGFkIGRlIG5vdGFzLlxuICAgKi9cbiAgY29uc3Qgd2VpZ2h0cyA9IHBhcmFtcy53ZWlnaHRzXG4gICAgPyBwYXJhbXMud2VpZ2h0c1xuICAgIDogZ3JhZGVzLm1hcCgoKSA9PiAxMDAgLyBncmFkZXMubGVuZ3RoKVxuXG4gIC8qKlxuICAgKiBTaSBubyBoYXkgbm90YXMgZW50b25jZXMgcmV0b3JuYW1vcyBsYSBub3RhIG3DrW5pbWEgZGUgbGEgZXNjYWxhLlxuICAgKi9cbiAgaWYgKGdyYWRlcy5sZW5ndGggPT09IDAgfHwgZ3JhZGVzLmxlbmd0aCAhPT0gd2VpZ2h0cy5sZW5ndGgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGdyYWRlUm91bmQoc2NhbGUsIHNjYWxlLm1pbiksXG4gICAgICB2YWx1ZUZvcm1hdHRlZDogZ3JhZGVGb3JtYXQoc2NhbGUsIHNjYWxlLm1pbiksXG4gICAgICBzdGF0dXM6IGdyYWRlU3RhdHVzKHNjYWxlLCBudWxsKSxcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUHJvbWVkaW8gY2FsY3VsYWRvLlxuICAgKi9cbiAgbGV0IGF2ZXJhZ2UgPSAwXG4gIGNvbnN0IHN1bUF2ZXJhZ2VzID0gd2VpZ2h0cy5yZWR1Y2UoKGFjYywgd2VpZ2h0KSA9PiBhY2MgKyB3ZWlnaHQsIDApXG4gIGlmIChzdW1BdmVyYWdlcyA8PSAwKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBncmFkZVJvdW5kKHNjYWxlLCBzY2FsZS5taW4pLFxuICAgICAgdmFsdWVGb3JtYXR0ZWQ6IGdyYWRlRm9ybWF0KHNjYWxlLCBzY2FsZS5taW4pLFxuICAgICAgc3RhdHVzOiBncmFkZVN0YXR1cyhzY2FsZSwgbnVsbCksXG4gICAgfVxuICB9XG4gIGdyYWRlcy5mb3JFYWNoKChncmFkZSwgaW5kZXgpID0+IHtcbiAgICBhdmVyYWdlICs9IGdyYWRlICogKHdlaWdodHNbYCR7aW5kZXh9YF0gLyBzdW1BdmVyYWdlcylcbiAgfSlcblxuICAvKipcbiAgICogU2kgZWwgcHJvbWVkaW8gZXMgbWVub3IgYWwgbcOtbmltbyBkZSBsYSBlc2NhbGEgZW50b25jZXMgbG8gc2V0ZWFtb3MgY29tbyBtw61uaW1vLlxuICAgKi9cbiAgaWYgKGF2ZXJhZ2UgPCBzY2FsZS5taW4pIHtcbiAgICBhdmVyYWdlID0gc2NhbGUubWluXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHZhbHVlOiBncmFkZVJvdW5kKHNjYWxlLCBhdmVyYWdlKSxcbiAgICB2YWx1ZUZvcm1hdHRlZDogZ3JhZGVGb3JtYXQoc2NhbGUsIGF2ZXJhZ2UpLFxuICAgIHN0YXR1czogZ3JhZGVTdGF0dXMoc2NhbGUsIGF2ZXJhZ2UpLFxuICB9XG59XG4iXX0=