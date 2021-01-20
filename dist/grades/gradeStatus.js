"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gradeStatus = void 0;
const gradeIsApproved_1 = require("./gradeIsApproved");
/**
 * @example const checkStatus = gradeStatus(scale, grade)
 */
const gradeStatus = (scale, grade, isApproved = true) => {
    /**
     * Si la nota viene nula la marcamos como pendiente.
     */
    if (!grade && isApproved) {
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
    const approved = isApproved ? gradeIsApproved_1.gradeIsApproved(scale, grade) : isApproved;
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
exports.gradeStatus = gradeStatus;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhZGVTdGF0dXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvZ3JhZGVzL2dyYWRlU3RhdHVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVEQUFtRDtBQUduRDs7R0FFRztBQUNJLE1BQU0sV0FBVyxHQUFHLENBQ3pCLEtBQXNCLEVBQ3RCLEtBQWMsRUFDZCxVQUFVLEdBQUcsSUFBSSxFQUNILEVBQUU7SUFDaEI7O09BRUc7SUFDSCxJQUFJLENBQUMsS0FBSyxJQUFJLFVBQVUsRUFBRTtRQUN4QixPQUFPO1lBQ0wsRUFBRSxFQUFFLENBQUM7WUFDTCxJQUFJLEVBQUUsV0FBVztZQUNqQixNQUFNLEVBQUUsRUFBRTtZQUNWLEtBQUssRUFBRSxTQUFTO1lBQ2hCLE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQTtLQUNGO0lBRUQ7O09BRUc7SUFDSCxNQUFNLFFBQVEsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLGlDQUFlLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUE7SUFDeEUsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUM7UUFDckI7WUFDRSxJQUFJO1lBQ0o7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLE1BQU0sRUFBRSx1QkFBdUI7Z0JBQy9CLEtBQUssRUFBRSxVQUFVO2dCQUNqQixPQUFPLEVBQUUsSUFBSTthQUNkO1NBQ0Y7UUFDRDtZQUNFLEtBQUs7WUFDTDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsV0FBVztnQkFDakIsTUFBTSxFQUFFLHdCQUF3QjtnQkFDaEMsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLE9BQU8sRUFBRSxLQUFLO2FBQ2Y7U0FDRjtLQUNGLENBQUMsQ0FBQTtJQUVGLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtBQUM3QixDQUFDLENBQUE7QUE5Q1ksUUFBQSxXQUFXLGVBOEN2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdyYWRlSXNBcHByb3ZlZCB9IGZyb20gJy4vZ3JhZGVJc0FwcHJvdmVkJ1xuaW1wb3J0IHsgU2NhbGVBdHRyaWJ1dGVzLCBTdGF0dXNSZXR1cm4gfSBmcm9tICcuLi90eXBlcydcblxuLyoqXG4gKiBAZXhhbXBsZSBjb25zdCBjaGVja1N0YXR1cyA9IGdyYWRlU3RhdHVzKHNjYWxlLCBncmFkZSlcbiAqL1xuZXhwb3J0IGNvbnN0IGdyYWRlU3RhdHVzID0gKFxuICBzY2FsZTogU2NhbGVBdHRyaWJ1dGVzLFxuICBncmFkZT86IG51bWJlcixcbiAgaXNBcHByb3ZlZCA9IHRydWVcbik6IFN0YXR1c1JldHVybiA9PiB7XG4gIC8qKlxuICAgKiBTaSBsYSBub3RhIHZpZW5lIG51bGEgbGEgbWFyY2Ftb3MgY29tbyBwZW5kaWVudGUuXG4gICAqL1xuICBpZiAoIWdyYWRlICYmIGlzQXBwcm92ZWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IDAsXG4gICAgICBuYW1lOiAnUGVuZGllbnRlJyxcbiAgICAgIGRldGFpbDogJycsXG4gICAgICBzdHlsZTogJ3BlbmRpbmcnLFxuICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYW1vcyBzaSBlc3TDoSBhcHJvYmFkYSB5IGx1ZWdvIHJldG9ybmFtb3MgZWwgZXN0YWRvLlxuICAgKi9cbiAgY29uc3QgYXBwcm92ZWQgPSBpc0FwcHJvdmVkID8gZ3JhZGVJc0FwcHJvdmVkKHNjYWxlLCBncmFkZSkgOiBpc0FwcHJvdmVkXG4gIGNvbnN0IHN0YXR1cyA9IG5ldyBNYXAoW1xuICAgIFtcbiAgICAgIHRydWUsXG4gICAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiAnQXByb2JhZG8nLFxuICAgICAgICBkZXRhaWw6ICdMYSBub3RhIGVzdMOhIGFwcm9iYWRhJyxcbiAgICAgICAgc3R5bGU6ICdhcHByb3ZlZCcsXG4gICAgICAgIGVuYWJsZWQ6IHRydWVcbiAgICAgIH1cbiAgICBdLFxuICAgIFtcbiAgICAgIGZhbHNlLFxuICAgICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogJ1JlcHJvYmFkbycsXG4gICAgICAgIGRldGFpbDogJ0xhIG5vdGEgZXN0w6EgcmVwcm9iYWRhJyxcbiAgICAgICAgc3R5bGU6ICdyZXByb2JhdGUnLFxuICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgfVxuICAgIF1cbiAgXSlcblxuICByZXR1cm4gc3RhdHVzLmdldChhcHByb3ZlZClcbn1cbiJdfQ==