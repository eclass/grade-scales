"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQualification = exports.getGradeQualification = void 0;
const getGrade_1 = require("./getGrade");
const grades_1 = require("./grades");
/**
 * Calcula una nota en base al puntaje obtenido y el puntaje total y la devuelve formateada.
 *
 * @example
 *  const grade = getGradeQualification(scale, 5, 3)
 */
const getGradeQualification = (scale, total, obtained) => {
    const grade = (0, getGrade_1.getGrade)(scale, total, obtained);
    return {
        value: (0, grades_1.gradeRound)(scale, grade),
        valueFormatted: (0, grades_1.gradeFormat)(scale, grade),
        status: (0, grades_1.gradeStatus)(scale, grade),
    };
};
exports.getGradeQualification = getGradeQualification;
/**
 * Formatea el objeto con la nota.
 *
 * @example
 *  const grade = getQualification(scale, 5.7, true | false)
 */
const getQualification = (scale, grade, approved = true) => {
    return {
        value: (0, grades_1.gradeRound)(scale, grade),
        valueFormatted: (0, grades_1.gradeFormat)(scale, grade),
        status: (0, grades_1.gradeStatus)(scale, grade, approved),
    };
};
exports.getQualification = getQualification;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0R3JhZGVGb3JtYXR0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvZ2V0R3JhZGVGb3JtYXR0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBQXFDO0FBR3JDLHFDQUErRDtBQUUvRDs7Ozs7R0FLRztBQUNJLE1BQU0scUJBQXFCLEdBQUcsQ0FDbkMsS0FBc0IsRUFDdEIsS0FBYSxFQUNiLFFBQWdCLEVBQ0csRUFBRTtJQUNyQixNQUFNLEtBQUssR0FBRyxJQUFBLG1CQUFRLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQTtJQUM5QyxPQUFPO1FBQ0wsS0FBSyxFQUFFLElBQUEsbUJBQVUsRUFBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO1FBQy9CLGNBQWMsRUFBRSxJQUFBLG9CQUFXLEVBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztRQUN6QyxNQUFNLEVBQUUsSUFBQSxvQkFBVyxFQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7S0FDbEMsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQVhZLFFBQUEscUJBQXFCLHlCQVdqQztBQUVEOzs7OztHQUtHO0FBQ0ksTUFBTSxnQkFBZ0IsR0FBRyxDQUM5QixLQUFzQixFQUN0QixLQUFhLEVBQ2IsUUFBUSxHQUFHLElBQUksRUFDSSxFQUFFO0lBQ3JCLE9BQU87UUFDTCxLQUFLLEVBQUUsSUFBQSxtQkFBVSxFQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7UUFDL0IsY0FBYyxFQUFFLElBQUEsb0JBQVcsRUFBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO1FBQ3pDLE1BQU0sRUFBRSxJQUFBLG9CQUFXLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUM7S0FDNUMsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQVZZLFFBQUEsZ0JBQWdCLG9CQVU1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEdyYWRlIH0gZnJvbSAnLi9nZXRHcmFkZSdcbmltcG9ydCB7IFNjYWxlQXR0cmlidXRlcywgUXVhbGlmaWNhdGlvblR5cGUgfSBmcm9tICcuL3R5cGVzJ1xuXG5pbXBvcnQgeyBncmFkZVJvdW5kLCBncmFkZUZvcm1hdCwgZ3JhZGVTdGF0dXMgfSBmcm9tICcuL2dyYWRlcydcblxuLyoqXG4gKiBDYWxjdWxhIHVuYSBub3RhIGVuIGJhc2UgYWwgcHVudGFqZSBvYnRlbmlkbyB5IGVsIHB1bnRhamUgdG90YWwgeSBsYSBkZXZ1ZWx2ZSBmb3JtYXRlYWRhLlxuICpcbiAqIEBleGFtcGxlXG4gKiAgY29uc3QgZ3JhZGUgPSBnZXRHcmFkZVF1YWxpZmljYXRpb24oc2NhbGUsIDUsIDMpXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRHcmFkZVF1YWxpZmljYXRpb24gPSAoXG4gIHNjYWxlOiBTY2FsZUF0dHJpYnV0ZXMsXG4gIHRvdGFsOiBudW1iZXIsXG4gIG9idGFpbmVkOiBudW1iZXIsXG4pOiBRdWFsaWZpY2F0aW9uVHlwZSA9PiB7XG4gIGNvbnN0IGdyYWRlID0gZ2V0R3JhZGUoc2NhbGUsIHRvdGFsLCBvYnRhaW5lZClcbiAgcmV0dXJuIHtcbiAgICB2YWx1ZTogZ3JhZGVSb3VuZChzY2FsZSwgZ3JhZGUpLFxuICAgIHZhbHVlRm9ybWF0dGVkOiBncmFkZUZvcm1hdChzY2FsZSwgZ3JhZGUpLFxuICAgIHN0YXR1czogZ3JhZGVTdGF0dXMoc2NhbGUsIGdyYWRlKSxcbiAgfVxufVxuXG4vKipcbiAqIEZvcm1hdGVhIGVsIG9iamV0byBjb24gbGEgbm90YS5cbiAqXG4gKiBAZXhhbXBsZVxuICogIGNvbnN0IGdyYWRlID0gZ2V0UXVhbGlmaWNhdGlvbihzY2FsZSwgNS43LCB0cnVlIHwgZmFsc2UpXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRRdWFsaWZpY2F0aW9uID0gKFxuICBzY2FsZTogU2NhbGVBdHRyaWJ1dGVzLFxuICBncmFkZTogbnVtYmVyLFxuICBhcHByb3ZlZCA9IHRydWUsXG4pOiBRdWFsaWZpY2F0aW9uVHlwZSA9PiB7XG4gIHJldHVybiB7XG4gICAgdmFsdWU6IGdyYWRlUm91bmQoc2NhbGUsIGdyYWRlKSxcbiAgICB2YWx1ZUZvcm1hdHRlZDogZ3JhZGVGb3JtYXQoc2NhbGUsIGdyYWRlKSxcbiAgICBzdGF0dXM6IGdyYWRlU3RhdHVzKHNjYWxlLCBncmFkZSwgYXBwcm92ZWQpLFxuICB9XG59XG4iXX0=