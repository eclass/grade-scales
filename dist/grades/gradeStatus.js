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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhZGVTdGF0dXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvZ3JhZGVzL2dyYWRlU3RhdHVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdURBQStDO0FBRy9DOztHQUVHO0FBQ0gsTUFBTSxXQUFXLEdBQUcsQ0FBQyxLQUFzQixFQUFFLEtBQWMsRUFBZ0IsRUFBRTtJQUMzRSxNQUFNLFFBQVEsR0FBRyx5QkFBZSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUM5QyxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQztRQUNyQjtZQUNFLElBQUk7WUFDSjtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsV0FBVztnQkFDakIsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLE9BQU8sRUFBRSxLQUFLO2FBQ2Y7U0FDRjtRQUNEO1lBQ0UsSUFBSTtZQUNKO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxVQUFVO2dCQUNoQixNQUFNLEVBQUUsdUJBQXVCO2dCQUMvQixLQUFLLEVBQUUsVUFBVTtnQkFDakIsT0FBTyxFQUFFLElBQUk7YUFDZDtTQUNGO1FBQ0Q7WUFDRSxLQUFLO1lBQ0w7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLE1BQU0sRUFBRSx3QkFBd0I7Z0JBQ2hDLEtBQUssRUFBRSxXQUFXO2dCQUNsQixPQUFPLEVBQUUsS0FBSzthQUNmO1NBQ0Y7S0FDRixDQUFDLENBQUE7SUFFRixPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUN4RCxDQUFDLENBQUE7QUFFRCxrQkFBZSxXQUFXLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3JhZGVJc0FwcHJvdmVkIGZyb20gJy4vZ3JhZGVJc0FwcHJvdmVkJ1xuaW1wb3J0IHsgU2NhbGVBdHRyaWJ1dGVzLCBTdGF0dXNSZXR1cm4gfSBmcm9tICcuL3R5cGVzJ1xuXG4vKipcbiAqIEBleGFtcGxlIGNvbnN0IGNoZWNrU3RhdHVzID0gZ3JhZGVTdGF0dXMoZ3JhZGUsIHNjYWxlKVxuICovXG5jb25zdCBncmFkZVN0YXR1cyA9IChzY2FsZTogU2NhbGVBdHRyaWJ1dGVzLCBncmFkZT86IG51bWJlcik6IFN0YXR1c1JldHVybiA9PiB7XG4gIGNvbnN0IGFwcHJvdmVkID0gZ3JhZGVJc0FwcHJvdmVkKGdyYWRlLCBzY2FsZSlcbiAgY29uc3Qgc3RhdHVzID0gbmV3IE1hcChbXG4gICAgW1xuICAgICAgbnVsbCxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDAsXG4gICAgICAgIG5hbWU6ICdQZW5kaWVudGUnLFxuICAgICAgICBkZXRhaWw6ICcnLFxuICAgICAgICBzdHlsZTogJ3BlbmRpbmcnLFxuICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgfVxuICAgIF0sXG4gICAgW1xuICAgICAgdHJ1ZSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIG5hbWU6ICdBcHJvYmFkbycsXG4gICAgICAgIGRldGFpbDogJ0xhIG5vdGEgZXN0w6EgYXByb2JhZGEnLFxuICAgICAgICBzdHlsZTogJ2FwcHJvdmVkJyxcbiAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgfVxuICAgIF0sXG4gICAgW1xuICAgICAgZmFsc2UsXG4gICAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBuYW1lOiAnUmVwcm9iYWRvJyxcbiAgICAgICAgZGV0YWlsOiAnTGEgbm90YSBlc3TDoSByZXByb2JhZGEnLFxuICAgICAgICBzdHlsZTogJ3JlcHJvYmF0ZScsXG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICB9XG4gICAgXVxuICBdKVxuXG4gIHJldHVybiBncmFkZSA/IHN0YXR1cy5nZXQoYXBwcm92ZWQpIDogc3RhdHVzLmdldChudWxsKVxufVxuXG5leHBvcnQgZGVmYXVsdCBncmFkZVN0YXR1c1xuIl19