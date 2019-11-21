"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gradeIsApproved_1 = require("./gradeIsApproved");
/**
 * @example const checkStatus = gradeStatus(scale, grade)
 */
exports.gradeStatus = (scale, grade) => {
    /**
     * Si la nota viene nula la marcamos como pendiente.
     */
    if (!grade) {
        return {
            id: 0,
            name: 'Pendiente',
            detail: '',
            style: 'pending',
            enabled: false
        };
    }
    /**
     * Calculamos si está aprobada y luego retornamos el estado.
     */
    const approved = gradeIsApproved_1.gradeIsApproved(scale, grade);
    const status = new Map([
        [
            true,
            {
                id: 1,
                name: 'Aprobado',
                detail: 'La nota está aprobada',
                style: 'approved',
                enabled: true
            }
        ],
        [
            false,
            {
                id: 2,
                name: 'Reprobado',
                detail: 'La nota está reprobada',
                style: 'reprobate',
                enabled: false
            }
        ]
    ]);
    return status.get(approved);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhZGVTdGF0dXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvZ3JhZGVzL2dyYWRlU3RhdHVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdURBQW1EO0FBR25EOztHQUVHO0FBQ1UsUUFBQSxXQUFXLEdBQUcsQ0FDekIsS0FBc0IsRUFDdEIsS0FBYyxFQUNBLEVBQUU7SUFDaEI7O09BRUc7SUFDSCxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ1YsT0FBTztZQUNMLEVBQUUsRUFBRSxDQUFDO1lBQ0wsSUFBSSxFQUFFLFdBQVc7WUFDakIsTUFBTSxFQUFFLEVBQUU7WUFDVixLQUFLLEVBQUUsU0FBUztZQUNoQixPQUFPLEVBQUUsS0FBSztTQUNmLENBQUE7S0FDRjtJQUVEOztPQUVHO0lBQ0gsTUFBTSxRQUFRLEdBQUcsaUNBQWUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDOUMsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUM7UUFDckI7WUFDRSxJQUFJO1lBQ0o7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLE1BQU0sRUFBRSx1QkFBdUI7Z0JBQy9CLEtBQUssRUFBRSxVQUFVO2dCQUNqQixPQUFPLEVBQUUsSUFBSTthQUNkO1NBQ0Y7UUFDRDtZQUNFLEtBQUs7WUFDTDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsV0FBVztnQkFDakIsTUFBTSxFQUFFLHdCQUF3QjtnQkFDaEMsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLE9BQU8sRUFBRSxLQUFLO2FBQ2Y7U0FDRjtLQUNGLENBQUMsQ0FBQTtJQUVGLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtBQUM3QixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncmFkZUlzQXBwcm92ZWQgfSBmcm9tICcuL2dyYWRlSXNBcHByb3ZlZCdcbmltcG9ydCB7IFNjYWxlQXR0cmlidXRlcywgU3RhdHVzUmV0dXJuIH0gZnJvbSAnLi90eXBlcydcblxuLyoqXG4gKiBAZXhhbXBsZSBjb25zdCBjaGVja1N0YXR1cyA9IGdyYWRlU3RhdHVzKHNjYWxlLCBncmFkZSlcbiAqL1xuZXhwb3J0IGNvbnN0IGdyYWRlU3RhdHVzID0gKFxuICBzY2FsZTogU2NhbGVBdHRyaWJ1dGVzLFxuICBncmFkZT86IG51bWJlclxuKTogU3RhdHVzUmV0dXJuID0+IHtcbiAgLyoqXG4gICAqIFNpIGxhIG5vdGEgdmllbmUgbnVsYSBsYSBtYXJjYW1vcyBjb21vIHBlbmRpZW50ZS5cbiAgICovXG4gIGlmICghZ3JhZGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IDAsXG4gICAgICBuYW1lOiAnUGVuZGllbnRlJyxcbiAgICAgIGRldGFpbDogJycsXG4gICAgICBzdHlsZTogJ3BlbmRpbmcnLFxuICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYW1vcyBzaSBlc3TDoSBhcHJvYmFkYSB5IGx1ZWdvIHJldG9ybmFtb3MgZWwgZXN0YWRvLlxuICAgKi9cbiAgY29uc3QgYXBwcm92ZWQgPSBncmFkZUlzQXBwcm92ZWQoc2NhbGUsIGdyYWRlKVxuICBjb25zdCBzdGF0dXMgPSBuZXcgTWFwKFtcbiAgICBbXG4gICAgICB0cnVlLFxuICAgICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogJ0Fwcm9iYWRvJyxcbiAgICAgICAgZGV0YWlsOiAnTGEgbm90YSBlc3TDoSBhcHJvYmFkYScsXG4gICAgICAgIHN0eWxlOiAnYXBwcm92ZWQnLFxuICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICB9XG4gICAgXSxcbiAgICBbXG4gICAgICBmYWxzZSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIG5hbWU6ICdSZXByb2JhZG8nLFxuICAgICAgICBkZXRhaWw6ICdMYSBub3RhIGVzdMOhIHJlcHJvYmFkYScsXG4gICAgICAgIHN0eWxlOiAncmVwcm9iYXRlJyxcbiAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgIH1cbiAgICBdXG4gIF0pXG5cbiAgcmV0dXJuIHN0YXR1cy5nZXQoYXBwcm92ZWQpXG59XG4iXX0=