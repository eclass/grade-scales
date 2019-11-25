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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0R3JhZGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbGliL2dldEdyYWRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHlCQUFpRTtBQUNqRSxxQ0FBMEM7QUE2QjFDOzs7OztHQUtHO0FBQ1UsUUFBQSxTQUFTLEdBQUcsQ0FDdkIsS0FBc0IsRUFDdEIsS0FBYSxFQUNiLFNBQVMsR0FBRyxDQUFDLEVBQ0ssRUFBRTtJQUNwQixJQUFJLFNBQVMsR0FBRyxLQUFLLEVBQUU7UUFDckIsTUFBTSxJQUFJLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFBO0tBQ2hFO1NBQU0sSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO1FBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0RBQWdELENBQUMsQ0FBQTtLQUNsRTtJQUVELE1BQU0sTUFBTSxHQUFxQixFQUFFLENBQUE7SUFFbkMsS0FBSyxTQUFTLEVBQUUsU0FBUyxJQUFJLEtBQUssRUFBRSxTQUFTLEVBQUUsRUFBRTtRQUMvQyxNQUFNLEtBQUssR0FBRyxXQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQTtRQUMvQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ1YsTUFBTSxFQUFFO2dCQUNOLFFBQVEsRUFBRSxTQUFTO2dCQUNuQixLQUFLO2FBQ047WUFDRCxLQUFLO1lBQ0wsYUFBYSxFQUFFLHdCQUFxQixDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDO1lBQzdELFVBQVUsRUFBRSx3QkFBZSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7WUFDekMsU0FBUyxFQUFFLGNBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO1NBQ3JDLENBQUMsQ0FBQTtLQUNIO0lBRUQsT0FBTyxNQUFNLENBQUE7QUFDZixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2FsZUF0dHJpYnV0ZXMsIFF1YWxpZmljYXRpb25UeXBlLCBTY29yZXMgfSBmcm9tICcuL2dyYWRlcy90eXBlcydcblxuaW1wb3J0IHsgZ2V0R3JhZGUsIGdyYWRlRm9ybWF0LCBnZXRHcmFkZVF1YWxpZmljYXRpb24gfSBmcm9tICcuLydcbmltcG9ydCB7IGdyYWRlSXNBcHByb3ZlZCB9IGZyb20gJy4vZ3JhZGVzJ1xuXG50eXBlIEdyYWRlTGlzdCA9IHtcbiAgLyoqXG4gICAqIFB1bnRvcyBldmFsdWFkb3MuXG4gICAqL1xuICBwb2ludHM6IFNjb3Jlc1xuXG4gIC8qKlxuICAgKiBOb3RhIGNhbGN1bGFkYS5cbiAgICovXG4gIGdyYWRlOiBudW1iZXJcblxuICAvKipcbiAgICogTm90YSBmb3JtYXRlYWRhIHkgZWwgZXN0YWRvXG4gICAqL1xuICBxdWFsaWZpY2F0aW9uOiBRdWFsaWZpY2F0aW9uVHlwZVxuXG4gIC8qKlxuICAgKiBFc3RhZG8gYXByb2JhZGEgbyByZXByb2JhZGEuXG4gICAqL1xuICBpc0FwcHJvdmVkOiBib29sZWFuXG5cbiAgLyoqXG4gICAqIE5vdGEgZm9ybWF0ZWFkYSBzZWd1biBsYSBlc2NhbGEuXG4gICAqL1xuICBmb3JtYXR0ZWQ6IHN0cmluZ1xufVxuXG4vKipcbiAqIENhbGN1bGEgdG9kYXMgbGFzIG5vdGFzIHNlZ8O6biBlbCB0b3RhbCB5IGVsIGluaWNpbyAobWluUG9pbnRzKVxuICpcbiAqIEBleGFtcGxlXG4gKiAgY29uc3QgZ3JhZGVzID0gZ2V0R3JhZGVzKHNjYWxlLCAxMiwgMClcbiAqL1xuZXhwb3J0IGNvbnN0IGdldEdyYWRlcyA9IChcbiAgc2NhbGU6IFNjYWxlQXR0cmlidXRlcyxcbiAgdG90YWw6IG51bWJlcixcbiAgbWluUG9pbnRzID0gMFxuKTogQXJyYXk8R3JhZGVMaXN0PiA9PiB7XG4gIGlmIChtaW5Qb2ludHMgPiB0b3RhbCkge1xuICAgIHRocm93IG5ldyBFcnJvcignUHVudGFqZSBtw61uaW1vIG5vIHB1ZWRlIHNlciBtYXlvciBhbCBtw6F4aW1vLicpXG4gIH0gZWxzZSBpZiAodG90YWwgPD0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignUHVudG9zIG3DoXhpbW9zIG5vIHB1ZWRlbiBzZXIgbWVub3IgbyBpZ3VhbCBhIDAnKVxuICB9XG5cbiAgY29uc3QgZ3JhZGVzOiBBcnJheTxHcmFkZUxpc3Q+ID0gW11cblxuICBmb3IgKG1pblBvaW50czsgbWluUG9pbnRzIDw9IHRvdGFsOyBtaW5Qb2ludHMrKykge1xuICAgIGNvbnN0IGdyYWRlID0gZ2V0R3JhZGUoc2NhbGUsIHRvdGFsLCBtaW5Qb2ludHMpXG4gICAgZ3JhZGVzLnB1c2goe1xuICAgICAgcG9pbnRzOiB7XG4gICAgICAgIG9idGFpbmVkOiBtaW5Qb2ludHMsXG4gICAgICAgIHRvdGFsXG4gICAgICB9LFxuICAgICAgZ3JhZGUsXG4gICAgICBxdWFsaWZpY2F0aW9uOiBnZXRHcmFkZVF1YWxpZmljYXRpb24oc2NhbGUsIHRvdGFsLCBtaW5Qb2ludHMpLFxuICAgICAgaXNBcHByb3ZlZDogZ3JhZGVJc0FwcHJvdmVkKHNjYWxlLCBncmFkZSksXG4gICAgICBmb3JtYXR0ZWQ6IGdyYWRlRm9ybWF0KHNjYWxlLCBncmFkZSlcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGdyYWRlc1xufVxuIl19