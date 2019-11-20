import { gradeIsApproved } from './gradeIsApproved';
/**
 * @example const checkStatus = gradeStatus(grade, scale)
 */
export const gradeStatus = (scale, grade) => {
    const approved = gradeIsApproved(grade, scale);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhZGVTdGF0dXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvZ3JhZGVzL2dyYWRlU3RhdHVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQTtBQUduRDs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRyxDQUFDLEtBQXNCLEVBQUUsS0FBYyxFQUFnQixFQUFFO0lBQ2xGLE1BQU0sUUFBUSxHQUFHLGVBQWUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDOUMsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLENBQUM7UUFDckI7WUFDRSxJQUFJO1lBQ0o7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLE1BQU0sRUFBRSxFQUFFO2dCQUNWLEtBQUssRUFBRSxTQUFTO2dCQUNoQixPQUFPLEVBQUUsS0FBSzthQUNmO1NBQ0Y7UUFDRDtZQUNFLElBQUk7WUFDSjtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsTUFBTSxFQUFFLHVCQUF1QjtnQkFDL0IsS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLE9BQU8sRUFBRSxJQUFJO2FBQ2Q7U0FDRjtRQUNEO1lBQ0UsS0FBSztZQUNMO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxXQUFXO2dCQUNqQixNQUFNLEVBQUUsd0JBQXdCO2dCQUNoQyxLQUFLLEVBQUUsV0FBVztnQkFDbEIsT0FBTyxFQUFFLEtBQUs7YUFDZjtTQUNGO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDeEQsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3JhZGVJc0FwcHJvdmVkIH0gZnJvbSAnLi9ncmFkZUlzQXBwcm92ZWQnXG5pbXBvcnQgeyBTY2FsZUF0dHJpYnV0ZXMsIFN0YXR1c1JldHVybiB9IGZyb20gJy4vdHlwZXMnXG5cbi8qKlxuICogQGV4YW1wbGUgY29uc3QgY2hlY2tTdGF0dXMgPSBncmFkZVN0YXR1cyhncmFkZSwgc2NhbGUpXG4gKi9cbmV4cG9ydCBjb25zdCBncmFkZVN0YXR1cyA9IChzY2FsZTogU2NhbGVBdHRyaWJ1dGVzLCBncmFkZT86IG51bWJlcik6IFN0YXR1c1JldHVybiA9PiB7XG4gIGNvbnN0IGFwcHJvdmVkID0gZ3JhZGVJc0FwcHJvdmVkKGdyYWRlLCBzY2FsZSlcbiAgY29uc3Qgc3RhdHVzID0gbmV3IE1hcChbXG4gICAgW1xuICAgICAgbnVsbCxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDAsXG4gICAgICAgIG5hbWU6ICdQZW5kaWVudGUnLFxuICAgICAgICBkZXRhaWw6ICcnLFxuICAgICAgICBzdHlsZTogJ3BlbmRpbmcnLFxuICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgfVxuICAgIF0sXG4gICAgW1xuICAgICAgdHJ1ZSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIG5hbWU6ICdBcHJvYmFkbycsXG4gICAgICAgIGRldGFpbDogJ0xhIG5vdGEgZXN0w6EgYXByb2JhZGEnLFxuICAgICAgICBzdHlsZTogJ2FwcHJvdmVkJyxcbiAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgfVxuICAgIF0sXG4gICAgW1xuICAgICAgZmFsc2UsXG4gICAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBuYW1lOiAnUmVwcm9iYWRvJyxcbiAgICAgICAgZGV0YWlsOiAnTGEgbm90YSBlc3TDoSByZXByb2JhZGEnLFxuICAgICAgICBzdHlsZTogJ3JlcHJvYmF0ZScsXG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICB9XG4gICAgXVxuICBdKVxuXG4gIHJldHVybiBncmFkZSA/IHN0YXR1cy5nZXQoYXBwcm92ZWQpIDogc3RhdHVzLmdldChudWxsKVxufVxuIl19