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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QXZlcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2xpYi9nZXRBdmVyYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQStEO0FBTy9EOzs7O0dBSUc7QUFDVSxRQUFBLFVBQVUsR0FBRyxDQUN4QixLQUFzQixFQUN0QixNQUFxQixFQUNGLEVBQUU7SUFDckI7O09BRUc7SUFDSCxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLG1CQUFVLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUE7SUFFbkU7OztPQUdHO0lBQ0gsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU87UUFDNUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPO1FBQ2hCLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUU1Qzs7T0FFRztJQUNILElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxPQUFPLENBQUMsTUFBTSxFQUFFO1FBQzNELE9BQU87WUFDTCxLQUFLLEVBQUUsbUJBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUNuQyxjQUFjLEVBQUUsb0JBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUM3QyxNQUFNLEVBQUUsb0JBQVcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDO1NBQ2pDLENBQUE7S0FDRjtJQUVEOztPQUVHO0lBQ0gsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFBO0lBQ2YsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDcEUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUM5QixPQUFPLElBQUksS0FBSyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFBO0lBQ25ELENBQUMsQ0FBQyxDQUFBO0lBRUY7O09BRUc7SUFDSCxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsR0FBRyxFQUFFO1FBQ3ZCLE9BQU8sR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFBO0tBQ3BCO0lBRUQsT0FBTztRQUNMLEtBQUssRUFBRSxtQkFBVSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUM7UUFDakMsY0FBYyxFQUFFLG9CQUFXLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQztRQUMzQyxNQUFNLEVBQUUsb0JBQVcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDO0tBQ3BDLENBQUE7QUFDSCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncmFkZUZvcm1hdCwgZ3JhZGVSb3VuZCwgZ3JhZGVTdGF0dXMgfSBmcm9tICcuL2dyYWRlcydcbmltcG9ydCB7XG4gIFNjYWxlQXR0cmlidXRlcyxcbiAgUXVhbGlmaWNhdGlvblR5cGUsXG4gIEF2ZXJhZ2VQYXJhbXNcbn0gZnJvbSAnLi9ncmFkZXMvdHlwZXMnXG5cbi8qKlxuICogQ2FsY3VsYSBlbCBwcm9tZWRpbyBkZSB1bmEgbyBtYXMgbm90YXMsIGNvbiBzdXMgcG9uZGVyYWNpb25lcy5cbiAqXG4gKiBAZXhhbXBsZSBjb25zdCBhdmVyYWdlID0gZ2V0QXZlcmFnZShzY2FsZSwgeyBncmFkZXM6IFszLDQsNl0gfSlcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEF2ZXJhZ2UgPSAoXG4gIHNjYWxlOiBTY2FsZUF0dHJpYnV0ZXMsXG4gIHBhcmFtczogQXZlcmFnZVBhcmFtc1xuKTogUXVhbGlmaWNhdGlvblR5cGUgPT4ge1xuICAvKipcbiAgICogUmVkb25kZWFtb3MgbGFzIG5vdGFzLlxuICAgKi9cbiAgY29uc3QgZ3JhZGVzID0gcGFyYW1zLmdyYWRlcy5tYXAoZ3JhZGUgPT4gZ3JhZGVSb3VuZChzY2FsZSwgZ3JhZGUpKVxuXG4gIC8qKlxuICAgKiAtIFNpIHZpZW5lbiBsYXMgcG9uZGVyYWNpb25lcyBlbnRvbmNlcyBsYXMgdXNhbW9zIHBhcmEgY2FsY3VsYXIgZWwgcHJvbWVkaW9cbiAgICogLSBTaSBubywgZW50b25jZXMgdXNhbW9zIGxhcyBub3RhcyB5IGNhbGN1bGFtb3MgbGFzIHBvbmRlcmFjaW9uZXMgZGUgZm9ybWEgbGluZWFsIHNlZ8O6biBsYSBjYW50aWRhZCBkZSBub3Rhcy5cbiAgICovXG4gIGNvbnN0IHdlaWdodHMgPSBwYXJhbXMud2VpZ2h0c1xuICAgID8gcGFyYW1zLndlaWdodHNcbiAgICA6IGdyYWRlcy5tYXAoZ3JhZGUgPT4gMTAwIC8gZ3JhZGVzLmxlbmd0aClcblxuICAvKipcbiAgICogU2kgbm8gaGF5IG5vdGFzIGVudG9uY2VzIHJldG9ybmFtb3MgbGEgbm90YSBtw61uaW1hIGRlIGxhIGVzY2FsYS5cbiAgICovXG4gIGlmIChncmFkZXMubGVuZ3RoID09PSAwIHx8IGdyYWRlcy5sZW5ndGggIT09IHdlaWdodHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBncmFkZVJvdW5kKHNjYWxlLCBzY2FsZS5taW4pLFxuICAgICAgdmFsdWVGb3JtYXR0ZWQ6IGdyYWRlRm9ybWF0KHNjYWxlLCBzY2FsZS5taW4pLFxuICAgICAgc3RhdHVzOiBncmFkZVN0YXR1cyhzY2FsZSwgbnVsbClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUHJvbWVkaW8gY2FsY3VsYWRvLlxuICAgKi9cbiAgbGV0IGF2ZXJhZ2UgPSAwXG4gIGNvbnN0IHN1bUF2ZXJhZ2VzID0gd2VpZ2h0cy5yZWR1Y2UoKGFjYywgd2VpZ2h0KSA9PiBhY2MgKyB3ZWlnaHQsIDApXG4gIGdyYWRlcy5mb3JFYWNoKChncmFkZSwgaW5kZXgpID0+IHtcbiAgICBhdmVyYWdlICs9IGdyYWRlICogKHdlaWdodHNbaW5kZXhdIC8gc3VtQXZlcmFnZXMpXG4gIH0pXG5cbiAgLyoqXG4gICAqIFNpIGVsIHByb21lZGlvIGVzIG1lbm9yIGFsIG3DrW5pbW8gZGUgbGEgZXNjYWxhIGVudG9uY2VzIGxvIHNldGVhbW9zIGNvbW8gbcOtbmltby5cbiAgICovXG4gIGlmIChhdmVyYWdlIDwgc2NhbGUubWluKSB7XG4gICAgYXZlcmFnZSA9IHNjYWxlLm1pblxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB2YWx1ZTogZ3JhZGVSb3VuZChzY2FsZSwgYXZlcmFnZSksXG4gICAgdmFsdWVGb3JtYXR0ZWQ6IGdyYWRlRm9ybWF0KHNjYWxlLCBhdmVyYWdlKSxcbiAgICBzdGF0dXM6IGdyYWRlU3RhdHVzKHNjYWxlLCBhdmVyYWdlKVxuICB9XG59XG4iXX0=