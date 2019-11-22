"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
const grades_1 = require("./grades");
/**
 * Calcula todas las notas según el total y el inicio (minPoints)
 *
 * @example
 *  const grades = getGrades(scale, 12, 0)
 */
exports.getGrades = (scale, total, minPoints = 0) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0R3JhZGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbGliL2dldEdyYWRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHlCQUFpRTtBQUNqRSxxQ0FBMEM7QUE2QjFDOzs7OztHQUtHO0FBQ1UsUUFBQSxTQUFTLEdBQUcsQ0FDdkIsS0FBc0IsRUFDdEIsS0FBYSxFQUNiLFlBQW9CLENBQUMsRUFDSCxFQUFFO0lBQ3BCLElBQUksU0FBUyxHQUFHLEtBQUssRUFBRTtRQUNyQixNQUFNLElBQUksS0FBSyxDQUFDLDhDQUE4QyxDQUFDLENBQUE7S0FDaEU7U0FBTSxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7UUFDckIsTUFBTSxJQUFJLEtBQUssQ0FBQyxnREFBZ0QsQ0FBQyxDQUFBO0tBQ2xFO0lBRUQsTUFBTSxNQUFNLEdBQXFCLEVBQUUsQ0FBQTtJQUVuQyxLQUFLLFNBQVMsRUFBRSxTQUFTLElBQUksS0FBSyxFQUFFLFNBQVMsRUFBRSxFQUFFO1FBQy9DLE1BQU0sS0FBSyxHQUFHLFdBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFBO1FBQy9DLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDVixNQUFNLEVBQUU7Z0JBQ04sUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLEtBQUs7YUFDTjtZQUNELEtBQUs7WUFDTCxhQUFhLEVBQUUsd0JBQXFCLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUM7WUFDN0QsVUFBVSxFQUFFLHdCQUFlLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUN6QyxTQUFTLEVBQUUsY0FBVyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7U0FDckMsQ0FBQyxDQUFBO0tBQ0g7SUFFRCxPQUFPLE1BQU0sQ0FBQTtBQUNmLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjYWxlQXR0cmlidXRlcywgUXVhbGlmaWNhdGlvblR5cGUsIFNjb3JlcyB9IGZyb20gJy4vZ3JhZGVzL3R5cGVzJ1xuXG5pbXBvcnQgeyBnZXRHcmFkZSwgZ3JhZGVGb3JtYXQsIGdldEdyYWRlUXVhbGlmaWNhdGlvbiB9IGZyb20gJy4vJ1xuaW1wb3J0IHsgZ3JhZGVJc0FwcHJvdmVkIH0gZnJvbSAnLi9ncmFkZXMnXG5cbnR5cGUgR3JhZGVMaXN0ID0ge1xuICAvKipcbiAgICogUHVudG9zIGV2YWx1YWRvcy5cbiAgICovXG4gIHBvaW50czogU2NvcmVzXG5cbiAgLyoqXG4gICAqIE5vdGEgY2FsY3VsYWRhLlxuICAgKi9cbiAgZ3JhZGU6IG51bWJlclxuXG4gIC8qKlxuICAgKiBOb3RhIGZvcm1hdGVhZGEgeSBlbCBlc3RhZG9cbiAgICovXG4gIHF1YWxpZmljYXRpb246IFF1YWxpZmljYXRpb25UeXBlXG5cbiAgLyoqXG4gICAqIEVzdGFkbyBhcHJvYmFkYSBvIHJlcHJvYmFkYS5cbiAgICovXG4gIGlzQXBwcm92ZWQ6IGJvb2xlYW5cblxuICAvKipcbiAgICogTm90YSBmb3JtYXRlYWRhIHNlZ3VuIGxhIGVzY2FsYS5cbiAgICovXG4gIGZvcm1hdHRlZDogc3RyaW5nXG59XG5cbi8qKlxuICogQ2FsY3VsYSB0b2RhcyBsYXMgbm90YXMgc2Vnw7puIGVsIHRvdGFsIHkgZWwgaW5pY2lvIChtaW5Qb2ludHMpXG4gKlxuICogQGV4YW1wbGVcbiAqICBjb25zdCBncmFkZXMgPSBnZXRHcmFkZXMoc2NhbGUsIDEyLCAwKVxuICovXG5leHBvcnQgY29uc3QgZ2V0R3JhZGVzID0gKFxuICBzY2FsZTogU2NhbGVBdHRyaWJ1dGVzLFxuICB0b3RhbDogbnVtYmVyLFxuICBtaW5Qb2ludHM6IG51bWJlciA9IDBcbik6IEFycmF5PEdyYWRlTGlzdD4gPT4ge1xuICBpZiAobWluUG9pbnRzID4gdG90YWwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1B1bnRhamUgbcOtbmltbyBubyBwdWVkZSBzZXIgbWF5b3IgYWwgbcOheGltby4nKVxuICB9IGVsc2UgaWYgKHRvdGFsIDw9IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1B1bnRvcyBtw6F4aW1vcyBubyBwdWVkZW4gc2VyIG1lbm9yIG8gaWd1YWwgYSAwJylcbiAgfVxuXG4gIGNvbnN0IGdyYWRlczogQXJyYXk8R3JhZGVMaXN0PiA9IFtdXG5cbiAgZm9yIChtaW5Qb2ludHM7IG1pblBvaW50cyA8PSB0b3RhbDsgbWluUG9pbnRzKyspIHtcbiAgICBjb25zdCBncmFkZSA9IGdldEdyYWRlKHNjYWxlLCB0b3RhbCwgbWluUG9pbnRzKVxuICAgIGdyYWRlcy5wdXNoKHtcbiAgICAgIHBvaW50czoge1xuICAgICAgICBvYnRhaW5lZDogbWluUG9pbnRzLFxuICAgICAgICB0b3RhbFxuICAgICAgfSxcbiAgICAgIGdyYWRlLFxuICAgICAgcXVhbGlmaWNhdGlvbjogZ2V0R3JhZGVRdWFsaWZpY2F0aW9uKHNjYWxlLCB0b3RhbCwgbWluUG9pbnRzKSxcbiAgICAgIGlzQXBwcm92ZWQ6IGdyYWRlSXNBcHByb3ZlZChzY2FsZSwgZ3JhZGUpLFxuICAgICAgZm9ybWF0dGVkOiBncmFkZUZvcm1hdChzY2FsZSwgZ3JhZGUpXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiBncmFkZXNcbn1cbiJdfQ==