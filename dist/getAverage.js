import { gradeFormat, gradeRound, gradeStatus } from './grades/';
/**
 * Calcula el promedio de una o mas notas, con sus ponderaciones.
 *
 * @example const average = getAverage(scale, { grades: [3,4,6] })
 */
export const getAverage = (scale, params) => {
    if (!scale) {
        throw new Error('No existe la escala consultada');
    }
    /**
     * Redondeamos las notas.
     */
    const grades = params.grades.map(grade => gradeRound(grade, scale));
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
            value: gradeRound(scale.min, scale),
            valueFormatted: gradeFormat(scale.min, scale),
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
        value: gradeRound(average, scale),
        valueFormatted: gradeFormat(average, scale),
        status: gradeStatus(scale, average)
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QXZlcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2xpYi9nZXRBdmVyYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLFdBQVcsQ0FBQTtBQWVoRTs7OztHQUlHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sVUFBVSxHQUFHLENBQ3hCLEtBQXNCLEVBQ3RCLE1BQXFCLEVBQ0YsRUFBRTtJQUNyQixJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFBO0tBQ2xEO0lBRUQ7O09BRUc7SUFDSCxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQTtJQUVuRTs7O09BR0c7SUFDSCxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTztRQUM1QixDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU87UUFDaEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBRTVDOztPQUVHO0lBQ0gsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLE9BQU8sQ0FBQyxNQUFNLEVBQUU7UUFDM0QsT0FBTztZQUNMLEtBQUssRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUM7WUFDbkMsY0FBYyxFQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQztZQUM3QyxNQUFNLEVBQUUsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUM7U0FDakMsQ0FBQTtLQUNGO0lBRUQ7O09BRUc7SUFDSCxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUE7SUFDZixNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUNwRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFO1FBQzlCLE9BQU8sSUFBSSxLQUFLLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUE7SUFDbkQsQ0FBQyxDQUFDLENBQUE7SUFFRjs7T0FFRztJQUNILElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUU7UUFDdkIsT0FBTyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUE7S0FDcEI7SUFFRCxPQUFPO1FBQ0wsS0FBSyxFQUFFLFVBQVUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO1FBQ2pDLGNBQWMsRUFBRSxXQUFXLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQztRQUMzQyxNQUFNLEVBQUUsV0FBVyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUM7S0FDcEMsQ0FBQTtBQUNILENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdyYWRlRm9ybWF0LCBncmFkZVJvdW5kLCBncmFkZVN0YXR1cyB9IGZyb20gJy4vZ3JhZGVzLydcbmltcG9ydCB7IFNjYWxlQXR0cmlidXRlcywgUXVhbGlmaWNhdGlvblR5cGUgfSBmcm9tICcuL2dyYWRlcy90eXBlcydcblxudHlwZSBBdmVyYWdlUGFyYW1zID0ge1xuICAvKipcbiAgICogTm90YXMuXG4gICAqL1xuICBncmFkZXM6IG51bWJlcltdXG5cbiAgLyoqXG4gICAqIFBvbmRlcmFjaW9uZXMuXG4gICAqL1xuICB3ZWlnaHRzOiBudW1iZXJbXVxufVxuXG4vKipcbiAqIENhbGN1bGEgZWwgcHJvbWVkaW8gZGUgdW5hIG8gbWFzIG5vdGFzLCBjb24gc3VzIHBvbmRlcmFjaW9uZXMuXG4gKlxuICogQGV4YW1wbGUgY29uc3QgYXZlcmFnZSA9IGdldEF2ZXJhZ2Uoc2NhbGUsIHsgZ3JhZGVzOiBbMyw0LDZdIH0pXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRBdmVyYWdlID0gKFxuICBzY2FsZTogU2NhbGVBdHRyaWJ1dGVzLFxuICBwYXJhbXM6IEF2ZXJhZ2VQYXJhbXNcbik6IFF1YWxpZmljYXRpb25UeXBlID0+IHtcbiAgaWYgKCFzY2FsZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gZXhpc3RlIGxhIGVzY2FsYSBjb25zdWx0YWRhJylcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWRvbmRlYW1vcyBsYXMgbm90YXMuXG4gICAqL1xuICBjb25zdCBncmFkZXMgPSBwYXJhbXMuZ3JhZGVzLm1hcChncmFkZSA9PiBncmFkZVJvdW5kKGdyYWRlLCBzY2FsZSkpXG5cbiAgLyoqXG4gICAqIC0gU2kgdmllbmVuIGxhcyBwb25kZXJhY2lvbmVzIGVudG9uY2VzIGxhcyB1c2Ftb3MgcGFyYSBjYWxjdWxhciBlbCBwcm9tZWRpb1xuICAgKiAtIFNpIG5vLCBlbnRvbmNlcyB1c2Ftb3MgbGFzIG5vdGFzIHkgY2FsY3VsYW1vcyBsYXMgcG9uZGVyYWNpb25lcyBkZSBmb3JtYSBsaW5lYWwgc2Vnw7puIGxhIGNhbnRpZGFkIGRlIG5vdGFzLlxuICAgKi9cbiAgY29uc3Qgd2VpZ2h0cyA9IHBhcmFtcy53ZWlnaHRzXG4gICAgPyBwYXJhbXMud2VpZ2h0c1xuICAgIDogZ3JhZGVzLm1hcChncmFkZSA9PiAxMDAgLyBncmFkZXMubGVuZ3RoKVxuXG4gIC8qKlxuICAgKiBTaSBubyBoYXkgbm90YXMgZW50b25jZXMgcmV0b3JuYW1vcyBsYSBub3RhIG3DrW5pbWEgZGUgbGEgZXNjYWxhLlxuICAgKi9cbiAgaWYgKGdyYWRlcy5sZW5ndGggPT09IDAgfHwgZ3JhZGVzLmxlbmd0aCAhPT0gd2VpZ2h0cy5sZW5ndGgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGdyYWRlUm91bmQoc2NhbGUubWluLCBzY2FsZSksXG4gICAgICB2YWx1ZUZvcm1hdHRlZDogZ3JhZGVGb3JtYXQoc2NhbGUubWluLCBzY2FsZSksXG4gICAgICBzdGF0dXM6IGdyYWRlU3RhdHVzKHNjYWxlLCBudWxsKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9tZWRpbyBjYWxjdWxhZG8uXG4gICAqL1xuICBsZXQgYXZlcmFnZSA9IDBcbiAgY29uc3Qgc3VtQXZlcmFnZXMgPSB3ZWlnaHRzLnJlZHVjZSgoYWNjLCB3ZWlnaHQpID0+IGFjYyArIHdlaWdodCwgMClcbiAgZ3JhZGVzLmZvckVhY2goKGdyYWRlLCBpbmRleCkgPT4ge1xuICAgIGF2ZXJhZ2UgKz0gZ3JhZGUgKiAod2VpZ2h0c1tpbmRleF0gLyBzdW1BdmVyYWdlcylcbiAgfSlcblxuICAvKipcbiAgICogU2kgZWwgcHJvbWVkaW8gZXMgbWVub3IgYWwgbcOtbmltbyBkZSBsYSBlc2NhbGEgZW50b25jZXMgbG8gc2V0ZWFtb3MgY29tbyBtw61uaW1vLlxuICAgKi9cbiAgaWYgKGF2ZXJhZ2UgPCBzY2FsZS5taW4pIHtcbiAgICBhdmVyYWdlID0gc2NhbGUubWluXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHZhbHVlOiBncmFkZVJvdW5kKGF2ZXJhZ2UsIHNjYWxlKSxcbiAgICB2YWx1ZUZvcm1hdHRlZDogZ3JhZGVGb3JtYXQoYXZlcmFnZSwgc2NhbGUpLFxuICAgIHN0YXR1czogZ3JhZGVTdGF0dXMoc2NhbGUsIGF2ZXJhZ2UpXG4gIH1cbn1cbiJdfQ==