"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grades_1 = require("./grades");
/**
 * Calcula el promedio de una o mas notas, con sus ponderaciones.
 *
 * @example const average = getAverage(scale, { grades: [3,4,6] })
 */
exports.getAverage = (scale, params) => {
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
        average += grade * (weights[index] / sumAverages);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QXZlcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2xpYi9nZXRBdmVyYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQStEO0FBZS9EOzs7O0dBSUc7QUFDVSxRQUFBLFVBQVUsR0FBRyxDQUN4QixLQUFzQixFQUN0QixNQUFxQixFQUNGLEVBQUU7SUFDckI7O09BRUc7SUFDSCxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLG1CQUFVLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUE7SUFFbkU7OztPQUdHO0lBQ0gsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU87UUFDNUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPO1FBQ2hCLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUU1Qzs7T0FFRztJQUNILElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxPQUFPLENBQUMsTUFBTSxFQUFFO1FBQzNELE9BQU87WUFDTCxLQUFLLEVBQUUsbUJBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUNuQyxjQUFjLEVBQUUsb0JBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUM3QyxNQUFNLEVBQUUsb0JBQVcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDO1NBQ2pDLENBQUE7S0FDRjtJQUVEOztPQUVHO0lBQ0gsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFBO0lBQ2YsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDcEUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUM5QixPQUFPLElBQUksS0FBSyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFBO0lBQ25ELENBQUMsQ0FBQyxDQUFBO0lBRUY7O09BRUc7SUFDSCxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsR0FBRyxFQUFFO1FBQ3ZCLE9BQU8sR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFBO0tBQ3BCO0lBRUQsT0FBTztRQUNMLEtBQUssRUFBRSxtQkFBVSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUM7UUFDakMsY0FBYyxFQUFFLG9CQUFXLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQztRQUMzQyxNQUFNLEVBQUUsb0JBQVcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDO0tBQ3BDLENBQUE7QUFDSCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncmFkZUZvcm1hdCwgZ3JhZGVSb3VuZCwgZ3JhZGVTdGF0dXMgfSBmcm9tICcuL2dyYWRlcydcbmltcG9ydCB7IFNjYWxlQXR0cmlidXRlcywgUXVhbGlmaWNhdGlvblR5cGUgfSBmcm9tICcuL2dyYWRlcy90eXBlcydcblxudHlwZSBBdmVyYWdlUGFyYW1zID0ge1xuICAvKipcbiAgICogTm90YXMuXG4gICAqL1xuICBncmFkZXM6IG51bWJlcltdXG5cbiAgLyoqXG4gICAqIFBvbmRlcmFjaW9uZXMuXG4gICAqL1xuICB3ZWlnaHRzPzogbnVtYmVyW11cbn1cblxuLyoqXG4gKiBDYWxjdWxhIGVsIHByb21lZGlvIGRlIHVuYSBvIG1hcyBub3RhcywgY29uIHN1cyBwb25kZXJhY2lvbmVzLlxuICpcbiAqIEBleGFtcGxlIGNvbnN0IGF2ZXJhZ2UgPSBnZXRBdmVyYWdlKHNjYWxlLCB7IGdyYWRlczogWzMsNCw2XSB9KVxuICovXG5leHBvcnQgY29uc3QgZ2V0QXZlcmFnZSA9IChcbiAgc2NhbGU6IFNjYWxlQXR0cmlidXRlcyxcbiAgcGFyYW1zOiBBdmVyYWdlUGFyYW1zXG4pOiBRdWFsaWZpY2F0aW9uVHlwZSA9PiB7XG4gIC8qKlxuICAgKiBSZWRvbmRlYW1vcyBsYXMgbm90YXMuXG4gICAqL1xuICBjb25zdCBncmFkZXMgPSBwYXJhbXMuZ3JhZGVzLm1hcChncmFkZSA9PiBncmFkZVJvdW5kKHNjYWxlLCBncmFkZSkpXG5cbiAgLyoqXG4gICAqIC0gU2kgdmllbmVuIGxhcyBwb25kZXJhY2lvbmVzIGVudG9uY2VzIGxhcyB1c2Ftb3MgcGFyYSBjYWxjdWxhciBlbCBwcm9tZWRpb1xuICAgKiAtIFNpIG5vLCBlbnRvbmNlcyB1c2Ftb3MgbGFzIG5vdGFzIHkgY2FsY3VsYW1vcyBsYXMgcG9uZGVyYWNpb25lcyBkZSBmb3JtYSBsaW5lYWwgc2Vnw7puIGxhIGNhbnRpZGFkIGRlIG5vdGFzLlxuICAgKi9cbiAgY29uc3Qgd2VpZ2h0cyA9IHBhcmFtcy53ZWlnaHRzXG4gICAgPyBwYXJhbXMud2VpZ2h0c1xuICAgIDogZ3JhZGVzLm1hcChncmFkZSA9PiAxMDAgLyBncmFkZXMubGVuZ3RoKVxuXG4gIC8qKlxuICAgKiBTaSBubyBoYXkgbm90YXMgZW50b25jZXMgcmV0b3JuYW1vcyBsYSBub3RhIG3DrW5pbWEgZGUgbGEgZXNjYWxhLlxuICAgKi9cbiAgaWYgKGdyYWRlcy5sZW5ndGggPT09IDAgfHwgZ3JhZGVzLmxlbmd0aCAhPT0gd2VpZ2h0cy5sZW5ndGgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGdyYWRlUm91bmQoc2NhbGUsIHNjYWxlLm1pbiksXG4gICAgICB2YWx1ZUZvcm1hdHRlZDogZ3JhZGVGb3JtYXQoc2NhbGUsIHNjYWxlLm1pbiksXG4gICAgICBzdGF0dXM6IGdyYWRlU3RhdHVzKHNjYWxlLCBudWxsKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9tZWRpbyBjYWxjdWxhZG8uXG4gICAqL1xuICBsZXQgYXZlcmFnZSA9IDBcbiAgY29uc3Qgc3VtQXZlcmFnZXMgPSB3ZWlnaHRzLnJlZHVjZSgoYWNjLCB3ZWlnaHQpID0+IGFjYyArIHdlaWdodCwgMClcbiAgZ3JhZGVzLmZvckVhY2goKGdyYWRlLCBpbmRleCkgPT4ge1xuICAgIGF2ZXJhZ2UgKz0gZ3JhZGUgKiAod2VpZ2h0c1tpbmRleF0gLyBzdW1BdmVyYWdlcylcbiAgfSlcblxuICAvKipcbiAgICogU2kgZWwgcHJvbWVkaW8gZXMgbWVub3IgYWwgbcOtbmltbyBkZSBsYSBlc2NhbGEgZW50b25jZXMgbG8gc2V0ZWFtb3MgY29tbyBtw61uaW1vLlxuICAgKi9cbiAgaWYgKGF2ZXJhZ2UgPCBzY2FsZS5taW4pIHtcbiAgICBhdmVyYWdlID0gc2NhbGUubWluXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHZhbHVlOiBncmFkZVJvdW5kKHNjYWxlLCBhdmVyYWdlKSxcbiAgICB2YWx1ZUZvcm1hdHRlZDogZ3JhZGVGb3JtYXQoc2NhbGUsIGF2ZXJhZ2UpLFxuICAgIHN0YXR1czogZ3JhZGVTdGF0dXMoc2NhbGUsIGF2ZXJhZ2UpXG4gIH1cbn1cbiJdfQ==