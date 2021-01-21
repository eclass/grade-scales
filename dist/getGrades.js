"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGrades = void 0;
const _1 = require("./");
const grades_1 = require("./grades");
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
        const grade = _1.getGrade(scale, total, minPoints);
        grades.push({
            points: {
                obtained: minPoints,
                total
            },
            grade,
            qualification: _1.getGradeQualification(scale, total, minPoints),
            isApproved: grades_1.gradeIsApproved(scale, grade),
            formatted: _1.gradeFormat(scale, grade)
        });
    }
    return grades;
};
exports.getGrades = getGrades;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0R3JhZGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbGliL2dldEdyYWRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSx5QkFBaUU7QUFDakUscUNBQTBDO0FBNkIxQzs7Ozs7R0FLRztBQUNJLE1BQU0sU0FBUyxHQUFHLENBQ3ZCLEtBQXNCLEVBQ3RCLEtBQWEsRUFDYixTQUFTLEdBQUcsQ0FBQyxFQUNLLEVBQUU7SUFDcEIsSUFBSSxTQUFTLEdBQUcsS0FBSyxFQUFFO1FBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQTtLQUNoRTtTQUFNLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtRQUNyQixNQUFNLElBQUksS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUE7S0FDbEU7SUFFRCxNQUFNLE1BQU0sR0FBcUIsRUFBRSxDQUFBO0lBRW5DLEtBQUssU0FBUyxFQUFFLFNBQVMsSUFBSSxLQUFLLEVBQUUsU0FBUyxFQUFFLEVBQUU7UUFDL0MsTUFBTSxLQUFLLEdBQUcsV0FBUSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUE7UUFDL0MsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNWLE1BQU0sRUFBRTtnQkFDTixRQUFRLEVBQUUsU0FBUztnQkFDbkIsS0FBSzthQUNOO1lBQ0QsS0FBSztZQUNMLGFBQWEsRUFBRSx3QkFBcUIsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQztZQUM3RCxVQUFVLEVBQUUsd0JBQWUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO1lBQ3pDLFNBQVMsRUFBRSxjQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztTQUNyQyxDQUFDLENBQUE7S0FDSDtJQUVELE9BQU8sTUFBTSxDQUFBO0FBQ2YsQ0FBQyxDQUFBO0FBNUJZLFFBQUEsU0FBUyxhQTRCckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2FsZUF0dHJpYnV0ZXMsIFF1YWxpZmljYXRpb25UeXBlLCBTY29yZXMgfSBmcm9tICcuL3R5cGVzJ1xuXG5pbXBvcnQgeyBnZXRHcmFkZSwgZ3JhZGVGb3JtYXQsIGdldEdyYWRlUXVhbGlmaWNhdGlvbiB9IGZyb20gJy4vJ1xuaW1wb3J0IHsgZ3JhZGVJc0FwcHJvdmVkIH0gZnJvbSAnLi9ncmFkZXMnXG5cbnR5cGUgR3JhZGVMaXN0ID0ge1xuICAvKipcbiAgICogUHVudG9zIGV2YWx1YWRvcy5cbiAgICovXG4gIHBvaW50czogU2NvcmVzXG5cbiAgLyoqXG4gICAqIE5vdGEgY2FsY3VsYWRhLlxuICAgKi9cbiAgZ3JhZGU6IG51bWJlclxuXG4gIC8qKlxuICAgKiBOb3RhIGZvcm1hdGVhZGEgeSBlbCBlc3RhZG9cbiAgICovXG4gIHF1YWxpZmljYXRpb246IFF1YWxpZmljYXRpb25UeXBlXG5cbiAgLyoqXG4gICAqIEVzdGFkbyBhcHJvYmFkYSBvIHJlcHJvYmFkYS5cbiAgICovXG4gIGlzQXBwcm92ZWQ6IGJvb2xlYW5cblxuICAvKipcbiAgICogTm90YSBmb3JtYXRlYWRhIHNlZ3VuIGxhIGVzY2FsYS5cbiAgICovXG4gIGZvcm1hdHRlZDogc3RyaW5nXG59XG5cbi8qKlxuICogQ2FsY3VsYSB0b2RhcyBsYXMgbm90YXMgc2Vnw7puIGVsIHRvdGFsIHkgZWwgaW5pY2lvIChtaW5Qb2ludHMpXG4gKlxuICogQGV4YW1wbGVcbiAqICBjb25zdCBncmFkZXMgPSBnZXRHcmFkZXMoc2NhbGUsIDEyLCAwKVxuICovXG5leHBvcnQgY29uc3QgZ2V0R3JhZGVzID0gKFxuICBzY2FsZTogU2NhbGVBdHRyaWJ1dGVzLFxuICB0b3RhbDogbnVtYmVyLFxuICBtaW5Qb2ludHMgPSAwXG4pOiBBcnJheTxHcmFkZUxpc3Q+ID0+IHtcbiAgaWYgKG1pblBvaW50cyA+IHRvdGFsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdQdW50YWplIG3DrW5pbW8gbm8gcHVlZGUgc2VyIG1heW9yIGFsIG3DoXhpbW8uJylcbiAgfSBlbHNlIGlmICh0b3RhbCA8PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdQdW50b3MgbcOheGltb3Mgbm8gcHVlZGVuIHNlciBtZW5vciBvIGlndWFsIGEgMCcpXG4gIH1cblxuICBjb25zdCBncmFkZXM6IEFycmF5PEdyYWRlTGlzdD4gPSBbXVxuXG4gIGZvciAobWluUG9pbnRzOyBtaW5Qb2ludHMgPD0gdG90YWw7IG1pblBvaW50cysrKSB7XG4gICAgY29uc3QgZ3JhZGUgPSBnZXRHcmFkZShzY2FsZSwgdG90YWwsIG1pblBvaW50cylcbiAgICBncmFkZXMucHVzaCh7XG4gICAgICBwb2ludHM6IHtcbiAgICAgICAgb2J0YWluZWQ6IG1pblBvaW50cyxcbiAgICAgICAgdG90YWxcbiAgICAgIH0sXG4gICAgICBncmFkZSxcbiAgICAgIHF1YWxpZmljYXRpb246IGdldEdyYWRlUXVhbGlmaWNhdGlvbihzY2FsZSwgdG90YWwsIG1pblBvaW50cyksXG4gICAgICBpc0FwcHJvdmVkOiBncmFkZUlzQXBwcm92ZWQoc2NhbGUsIGdyYWRlKSxcbiAgICAgIGZvcm1hdHRlZDogZ3JhZGVGb3JtYXQoc2NhbGUsIGdyYWRlKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZ3JhZGVzXG59XG4iXX0=