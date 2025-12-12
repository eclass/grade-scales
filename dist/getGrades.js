"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGrades = void 0;
const index_1 = require("./index");
const grades_1 = require("./grades/");
/**
 * Calcula todas las notas según el total y el inicio (minPoints)
 *
 * @example
 *  const grades = getGrades(scale, 12, 0)
 */
const getGrades = (scale, total, minPoints = 0) => {
    if (minPoints > total) {
        throw new Error('Puntaje mínimo no puede ser mayor al máximo.');
    }
    else if (total <= 0) {
        throw new Error('Puntos máximos no pueden ser menor o igual a 0');
    }
    const grades = [];
    for (minPoints; minPoints <= total; minPoints++) {
        const grade = (0, index_1.getGrade)(scale, total, minPoints);
        grades.push({
            points: {
                obtained: minPoints,
                total,
            },
            grade,
            qualification: (0, index_1.getGradeQualification)(scale, total, minPoints),
            isApproved: (0, grades_1.gradeIsApproved)(scale, grade),
            formatted: (0, index_1.gradeFormat)(scale, grade),
        });
    }
    return grades;
};
exports.getGrades = getGrades;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0R3JhZGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbGliL2dldEdyYWRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxtQ0FBc0U7QUFDdEUsc0NBQTJDO0FBRTNDOzs7OztHQUtHO0FBQ0ksTUFBTSxTQUFTLEdBQUcsQ0FDdkIsS0FBc0IsRUFDdEIsS0FBYSxFQUNiLFNBQVMsR0FBRyxDQUFDLEVBQ0ssRUFBRTtJQUNwQixJQUFJLFNBQVMsR0FBRyxLQUFLLEVBQUU7UUFDckIsTUFBTSxJQUFJLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFBO0tBQ2hFO1NBQU0sSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO1FBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0RBQWdELENBQUMsQ0FBQTtLQUNsRTtJQUVELE1BQU0sTUFBTSxHQUFxQixFQUFFLENBQUE7SUFFbkMsS0FBSyxTQUFTLEVBQUUsU0FBUyxJQUFJLEtBQUssRUFBRSxTQUFTLEVBQUUsRUFBRTtRQUMvQyxNQUFNLEtBQUssR0FBRyxJQUFBLGdCQUFRLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQTtRQUMvQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1YsTUFBTSxFQUFFO2dCQUNOLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixLQUFLO2FBQ047WUFDRCxLQUFLO1lBQ0wsYUFBYSxFQUFFLElBQUEsNkJBQXFCLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUM7WUFDN0QsVUFBVSxFQUFFLElBQUEsd0JBQWUsRUFBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQ3pDLFNBQVMsRUFBRSxJQUFBLG1CQUFXLEVBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztTQUNyQyxDQUFDLENBQUE7S0FDSDtJQUVELE9BQU8sTUFBTSxDQUFBO0FBQ2YsQ0FBQyxDQUFBO0FBNUJZLFFBQUEsU0FBUyxhQTRCckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2FsZUF0dHJpYnV0ZXMsIEdyYWRlTGlzdCB9IGZyb20gJy4vdHlwZXMnXG5pbXBvcnQgeyBnZXRHcmFkZSwgZ3JhZGVGb3JtYXQsIGdldEdyYWRlUXVhbGlmaWNhdGlvbiB9IGZyb20gJy4vaW5kZXgnXG5pbXBvcnQgeyBncmFkZUlzQXBwcm92ZWQgfSBmcm9tICcuL2dyYWRlcy8nXG5cbi8qKlxuICogQ2FsY3VsYSB0b2RhcyBsYXMgbm90YXMgc2Vnw7puIGVsIHRvdGFsIHkgZWwgaW5pY2lvIChtaW5Qb2ludHMpXG4gKlxuICogQGV4YW1wbGVcbiAqICBjb25zdCBncmFkZXMgPSBnZXRHcmFkZXMoc2NhbGUsIDEyLCAwKVxuICovXG5leHBvcnQgY29uc3QgZ2V0R3JhZGVzID0gKFxuICBzY2FsZTogU2NhbGVBdHRyaWJ1dGVzLFxuICB0b3RhbDogbnVtYmVyLFxuICBtaW5Qb2ludHMgPSAwLFxuKTogQXJyYXk8R3JhZGVMaXN0PiA9PiB7XG4gIGlmIChtaW5Qb2ludHMgPiB0b3RhbCkge1xuICAgIHRocm93IG5ldyBFcnJvcignUHVudGFqZSBtw61uaW1vIG5vIHB1ZWRlIHNlciBtYXlvciBhbCBtw6F4aW1vLicpXG4gIH0gZWxzZSBpZiAodG90YWwgPD0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignUHVudG9zIG3DoXhpbW9zIG5vIHB1ZWRlbiBzZXIgbWVub3IgbyBpZ3VhbCBhIDAnKVxuICB9XG5cbiAgY29uc3QgZ3JhZGVzOiBBcnJheTxHcmFkZUxpc3Q+ID0gW11cblxuICBmb3IgKG1pblBvaW50czsgbWluUG9pbnRzIDw9IHRvdGFsOyBtaW5Qb2ludHMrKykge1xuICAgIGNvbnN0IGdyYWRlID0gZ2V0R3JhZGUoc2NhbGUsIHRvdGFsLCBtaW5Qb2ludHMpXG4gICAgZ3JhZGVzLnB1c2goe1xuICAgICAgcG9pbnRzOiB7XG4gICAgICAgIG9idGFpbmVkOiBtaW5Qb2ludHMsXG4gICAgICAgIHRvdGFsLFxuICAgICAgfSxcbiAgICAgIGdyYWRlLFxuICAgICAgcXVhbGlmaWNhdGlvbjogZ2V0R3JhZGVRdWFsaWZpY2F0aW9uKHNjYWxlLCB0b3RhbCwgbWluUG9pbnRzKSxcbiAgICAgIGlzQXBwcm92ZWQ6IGdyYWRlSXNBcHByb3ZlZChzY2FsZSwgZ3JhZGUpLFxuICAgICAgZm9ybWF0dGVkOiBncmFkZUZvcm1hdChzY2FsZSwgZ3JhZGUpLFxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZ3JhZGVzXG59XG4iXX0=