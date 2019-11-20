import { gradeFormat, gradeRound, gradeStatus } from './grades';
/**
 * Calcula el promedio de una o mas notas, con sus ponderaciones.
 *
 * @example const average = getAverage(scale, { grades: [3,4,6] })
 */
export const getAverage = (scale, params) => {
    /**
     * Redondeamos las notas.
     */
    const grades = params.grades.map(grade => gradeRound(scale, grade));
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
            value: gradeRound(scale, scale.min),
            valueFormatted: gradeFormat(scale, scale.min),
            status: gradeStatus(scale, null)
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
        value: gradeRound(scale, average),
        valueFormatted: gradeFormat(scale, average),
        status: gradeStatus(scale, average)
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QXZlcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2xpYi9nZXRBdmVyYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQWUvRDs7OztHQUlHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sVUFBVSxHQUFHLENBQ3hCLEtBQXNCLEVBQ3RCLE1BQXFCLEVBQ0YsRUFBRTtJQUNyQjs7T0FFRztJQUNILE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFBO0lBRW5FOzs7T0FHRztJQUNILE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPO1FBQzVCLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTztRQUNoQixDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7SUFFNUM7O09BRUc7SUFDSCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssT0FBTyxDQUFDLE1BQU0sRUFBRTtRQUMzRCxPQUFPO1lBQ0wsS0FBSyxFQUFFLFVBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUNuQyxjQUFjLEVBQUUsV0FBVyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDO1lBQzdDLE1BQU0sRUFBRSxXQUFXLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQztTQUNqQyxDQUFBO0tBQ0Y7SUFFRDs7T0FFRztJQUNILElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQTtJQUNmLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ3BFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDOUIsT0FBTyxJQUFJLEtBQUssR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQTtJQUNuRCxDQUFDLENBQUMsQ0FBQTtJQUVGOztPQUVHO0lBQ0gsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLEdBQUcsRUFBRTtRQUN2QixPQUFPLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQTtLQUNwQjtJQUVELE9BQU87UUFDTCxLQUFLLEVBQUUsVUFBVSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUM7UUFDakMsY0FBYyxFQUFFLFdBQVcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDO1FBQzNDLE1BQU0sRUFBRSxXQUFXLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQztLQUNwQyxDQUFBO0FBQ0gsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3JhZGVGb3JtYXQsIGdyYWRlUm91bmQsIGdyYWRlU3RhdHVzIH0gZnJvbSAnLi9ncmFkZXMnXG5pbXBvcnQgeyBTY2FsZUF0dHJpYnV0ZXMsIFF1YWxpZmljYXRpb25UeXBlIH0gZnJvbSAnLi9ncmFkZXMvdHlwZXMnXG5cbnR5cGUgQXZlcmFnZVBhcmFtcyA9IHtcbiAgLyoqXG4gICAqIE5vdGFzLlxuICAgKi9cbiAgZ3JhZGVzOiBudW1iZXJbXVxuXG4gIC8qKlxuICAgKiBQb25kZXJhY2lvbmVzLlxuICAgKi9cbiAgd2VpZ2h0cz86IG51bWJlcltdXG59XG5cbi8qKlxuICogQ2FsY3VsYSBlbCBwcm9tZWRpbyBkZSB1bmEgbyBtYXMgbm90YXMsIGNvbiBzdXMgcG9uZGVyYWNpb25lcy5cbiAqXG4gKiBAZXhhbXBsZSBjb25zdCBhdmVyYWdlID0gZ2V0QXZlcmFnZShzY2FsZSwgeyBncmFkZXM6IFszLDQsNl0gfSlcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEF2ZXJhZ2UgPSAoXG4gIHNjYWxlOiBTY2FsZUF0dHJpYnV0ZXMsXG4gIHBhcmFtczogQXZlcmFnZVBhcmFtc1xuKTogUXVhbGlmaWNhdGlvblR5cGUgPT4ge1xuICAvKipcbiAgICogUmVkb25kZWFtb3MgbGFzIG5vdGFzLlxuICAgKi9cbiAgY29uc3QgZ3JhZGVzID0gcGFyYW1zLmdyYWRlcy5tYXAoZ3JhZGUgPT4gZ3JhZGVSb3VuZChzY2FsZSwgZ3JhZGUpKVxuXG4gIC8qKlxuICAgKiAtIFNpIHZpZW5lbiBsYXMgcG9uZGVyYWNpb25lcyBlbnRvbmNlcyBsYXMgdXNhbW9zIHBhcmEgY2FsY3VsYXIgZWwgcHJvbWVkaW9cbiAgICogLSBTaSBubywgZW50b25jZXMgdXNhbW9zIGxhcyBub3RhcyB5IGNhbGN1bGFtb3MgbGFzIHBvbmRlcmFjaW9uZXMgZGUgZm9ybWEgbGluZWFsIHNlZ8O6biBsYSBjYW50aWRhZCBkZSBub3Rhcy5cbiAgICovXG4gIGNvbnN0IHdlaWdodHMgPSBwYXJhbXMud2VpZ2h0c1xuICAgID8gcGFyYW1zLndlaWdodHNcbiAgICA6IGdyYWRlcy5tYXAoZ3JhZGUgPT4gMTAwIC8gZ3JhZGVzLmxlbmd0aClcblxuICAvKipcbiAgICogU2kgbm8gaGF5IG5vdGFzIGVudG9uY2VzIHJldG9ybmFtb3MgbGEgbm90YSBtw61uaW1hIGRlIGxhIGVzY2FsYS5cbiAgICovXG4gIGlmIChncmFkZXMubGVuZ3RoID09PSAwIHx8IGdyYWRlcy5sZW5ndGggIT09IHdlaWdodHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBncmFkZVJvdW5kKHNjYWxlLCBzY2FsZS5taW4pLFxuICAgICAgdmFsdWVGb3JtYXR0ZWQ6IGdyYWRlRm9ybWF0KHNjYWxlLCBzY2FsZS5taW4pLFxuICAgICAgc3RhdHVzOiBncmFkZVN0YXR1cyhzY2FsZSwgbnVsbClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUHJvbWVkaW8gY2FsY3VsYWRvLlxuICAgKi9cbiAgbGV0IGF2ZXJhZ2UgPSAwXG4gIGNvbnN0IHN1bUF2ZXJhZ2VzID0gd2VpZ2h0cy5yZWR1Y2UoKGFjYywgd2VpZ2h0KSA9PiBhY2MgKyB3ZWlnaHQsIDApXG4gIGdyYWRlcy5mb3JFYWNoKChncmFkZSwgaW5kZXgpID0+IHtcbiAgICBhdmVyYWdlICs9IGdyYWRlICogKHdlaWdodHNbaW5kZXhdIC8gc3VtQXZlcmFnZXMpXG4gIH0pXG5cbiAgLyoqXG4gICAqIFNpIGVsIHByb21lZGlvIGVzIG1lbm9yIGFsIG3DrW5pbW8gZGUgbGEgZXNjYWxhIGVudG9uY2VzIGxvIHNldGVhbW9zIGNvbW8gbcOtbmltby5cbiAgICovXG4gIGlmIChhdmVyYWdlIDwgc2NhbGUubWluKSB7XG4gICAgYXZlcmFnZSA9IHNjYWxlLm1pblxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB2YWx1ZTogZ3JhZGVSb3VuZChzY2FsZSwgYXZlcmFnZSksXG4gICAgdmFsdWVGb3JtYXR0ZWQ6IGdyYWRlRm9ybWF0KHNjYWxlLCBhdmVyYWdlKSxcbiAgICBzdGF0dXM6IGdyYWRlU3RhdHVzKHNjYWxlLCBhdmVyYWdlKVxuICB9XG59XG4iXX0=