import { getGrade } from './getGrade';
import { gradeRound, gradeFormat, gradeStatus } from './grades';
/**
 * Calcula una nota en base al puntaje obtenido y el puntaje total y la devuelve formateada.
 *
 * @example
 *  const grade = getGradeQualification(scale, 5, 3)
 */
export const getGradeQualification = (scale, total, obtained) => {
    const grade = getGrade(scale, total, obtained);
    return {
        value: gradeRound(scale, grade),
        valueFormatted: gradeFormat(scale, grade),
        status: gradeStatus(scale, grade)
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0R3JhZGVGb3JtYXR0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvZ2V0R3JhZGVGb3JtYXR0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQTtBQUdyQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFFL0Q7Ozs7O0dBS0c7QUFDSCxNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FBRyxDQUNuQyxLQUFzQixFQUN0QixLQUFhLEVBQ2IsUUFBZ0IsRUFDRyxFQUFFO0lBQ3JCLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFBO0lBQzlDLE9BQU87UUFDTCxLQUFLLEVBQUUsVUFBVSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7UUFDL0IsY0FBYyxFQUFFLFdBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO1FBQ3pDLE1BQU0sRUFBRSxXQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztLQUNsQyxDQUFBO0FBQ0gsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0R3JhZGUgfSBmcm9tICcuL2dldEdyYWRlJ1xuaW1wb3J0IHsgU2NhbGVBdHRyaWJ1dGVzLCBRdWFsaWZpY2F0aW9uVHlwZSB9IGZyb20gJy4vZ3JhZGVzL3R5cGVzJ1xuXG5pbXBvcnQgeyBncmFkZVJvdW5kLCBncmFkZUZvcm1hdCwgZ3JhZGVTdGF0dXMgfSBmcm9tICcuL2dyYWRlcydcblxuLyoqXG4gKiBDYWxjdWxhIHVuYSBub3RhIGVuIGJhc2UgYWwgcHVudGFqZSBvYnRlbmlkbyB5IGVsIHB1bnRhamUgdG90YWwgeSBsYSBkZXZ1ZWx2ZSBmb3JtYXRlYWRhLlxuICpcbiAqIEBleGFtcGxlXG4gKiAgY29uc3QgZ3JhZGUgPSBnZXRHcmFkZVF1YWxpZmljYXRpb24oc2NhbGUsIDUsIDMpXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRHcmFkZVF1YWxpZmljYXRpb24gPSAoXG4gIHNjYWxlOiBTY2FsZUF0dHJpYnV0ZXMsXG4gIHRvdGFsOiBudW1iZXIsXG4gIG9idGFpbmVkOiBudW1iZXJcbik6IFF1YWxpZmljYXRpb25UeXBlID0+IHtcbiAgY29uc3QgZ3JhZGUgPSBnZXRHcmFkZShzY2FsZSwgdG90YWwsIG9idGFpbmVkKVxuICByZXR1cm4ge1xuICAgIHZhbHVlOiBncmFkZVJvdW5kKHNjYWxlLCBncmFkZSksXG4gICAgdmFsdWVGb3JtYXR0ZWQ6IGdyYWRlRm9ybWF0KHNjYWxlLCBncmFkZSksXG4gICAgc3RhdHVzOiBncmFkZVN0YXR1cyhzY2FsZSwgZ3JhZGUpXG4gIH1cbn1cbiJdfQ==