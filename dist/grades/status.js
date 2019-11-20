"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gradeIsApproved_1 = require("./gradeIsApproved");
/**
 * @example const checkStatus = gradeStatus(grade, scale)
 */
const gradeStatus = (scale, grade) => {
    const approved = gradeIsApproved_1.default(grade, scale);
    const status = new Map([
        [
            null,
            {
                id: 0,
                name: 'Pendiente',
                detail: '',
                style: 'pending',
                enabled: false
            }
        ],
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
    return grade ? status.get(approved) : status.get(null);
};
exports.default = gradeStatus;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2dyYWRlcy9zdGF0dXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1REFBK0M7QUFHL0M7O0dBRUc7QUFDSCxNQUFNLFdBQVcsR0FBRyxDQUFDLEtBQXNCLEVBQUUsS0FBYyxFQUFnQixFQUFFO0lBQzNFLE1BQU0sUUFBUSxHQUFHLHlCQUFlLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQzlDLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDO1FBQ3JCO1lBQ0UsSUFBSTtZQUNKO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxXQUFXO2dCQUNqQixNQUFNLEVBQUUsRUFBRTtnQkFDVixLQUFLLEVBQUUsU0FBUztnQkFDaEIsT0FBTyxFQUFFLEtBQUs7YUFDZjtTQUNGO1FBQ0Q7WUFDRSxJQUFJO1lBQ0o7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLE1BQU0sRUFBRSx1QkFBdUI7Z0JBQy9CLEtBQUssRUFBRSxVQUFVO2dCQUNqQixPQUFPLEVBQUUsSUFBSTthQUNkO1NBQ0Y7UUFDRDtZQUNFLEtBQUs7WUFDTDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsV0FBVztnQkFDakIsTUFBTSxFQUFFLHdCQUF3QjtnQkFDaEMsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLE9BQU8sRUFBRSxLQUFLO2FBQ2Y7U0FDRjtLQUNGLENBQUMsQ0FBQTtJQUVGLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ3hELENBQUMsQ0FBQTtBQUVELGtCQUFlLFdBQVcsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncmFkZUlzQXBwcm92ZWQgZnJvbSAnLi9ncmFkZUlzQXBwcm92ZWQnXG5pbXBvcnQgeyBTY2FsZUF0dHJpYnV0ZXMsIFN0YXR1c1JldHVybiB9IGZyb20gJy4vdHlwZXMnXG5cbi8qKlxuICogQGV4YW1wbGUgY29uc3QgY2hlY2tTdGF0dXMgPSBncmFkZVN0YXR1cyhncmFkZSwgc2NhbGUpXG4gKi9cbmNvbnN0IGdyYWRlU3RhdHVzID0gKHNjYWxlOiBTY2FsZUF0dHJpYnV0ZXMsIGdyYWRlPzogbnVtYmVyKTogU3RhdHVzUmV0dXJuID0+IHtcbiAgY29uc3QgYXBwcm92ZWQgPSBncmFkZUlzQXBwcm92ZWQoZ3JhZGUsIHNjYWxlKVxuICBjb25zdCBzdGF0dXMgPSBuZXcgTWFwKFtcbiAgICBbXG4gICAgICBudWxsLFxuICAgICAge1xuICAgICAgICBpZDogMCxcbiAgICAgICAgbmFtZTogJ1BlbmRpZW50ZScsXG4gICAgICAgIGRldGFpbDogJycsXG4gICAgICAgIHN0eWxlOiAncGVuZGluZycsXG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICB9XG4gICAgXSxcbiAgICBbXG4gICAgICB0cnVlLFxuICAgICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmFtZTogJ0Fwcm9iYWRvJyxcbiAgICAgICAgZGV0YWlsOiAnTGEgbm90YSBlc3TDoSBhcHJvYmFkYScsXG4gICAgICAgIHN0eWxlOiAnYXBwcm92ZWQnLFxuICAgICAgICBlbmFibGVkOiB0cnVlXG4gICAgICB9XG4gICAgXSxcbiAgICBbXG4gICAgICBmYWxzZSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIG5hbWU6ICdSZXByb2JhZG8nLFxuICAgICAgICBkZXRhaWw6ICdMYSBub3RhIGVzdMOhIHJlcHJvYmFkYScsXG4gICAgICAgIHN0eWxlOiAncmVwcm9iYXRlJyxcbiAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgIH1cbiAgICBdXG4gIF0pXG5cbiAgcmV0dXJuIGdyYWRlID8gc3RhdHVzLmdldChhcHByb3ZlZCkgOiBzdGF0dXMuZ2V0KG51bGwpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdyYWRlU3RhdHVzXG4iXX0=