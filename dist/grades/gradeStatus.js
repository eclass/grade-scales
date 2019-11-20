import { gradeIsApproved } from './gradeIsApproved';
/**
 * @example const checkStatus = gradeStatus(scale, grade)
 */
export const gradeStatus = (scale, grade) => {
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
    const approved = gradeIsApproved(scale, grade);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhZGVTdGF0dXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvZ3JhZGVzL2dyYWRlU3RhdHVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQTtBQUduRDs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRyxDQUN6QixLQUFzQixFQUN0QixLQUFjLEVBQ0EsRUFBRTtJQUNoQjs7T0FFRztJQUNILElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDVixPQUFPO1lBQ0wsRUFBRSxFQUFFLENBQUM7WUFDTCxJQUFJLEVBQUUsV0FBVztZQUNqQixNQUFNLEVBQUUsRUFBRTtZQUNWLEtBQUssRUFBRSxTQUFTO1lBQ2hCLE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQTtLQUNGO0lBRUQ7O09BRUc7SUFDSCxNQUFNLFFBQVEsR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQzlDLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRyxDQUFDO1FBQ3JCO1lBQ0UsSUFBSTtZQUNKO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxVQUFVO2dCQUNoQixNQUFNLEVBQUUsdUJBQXVCO2dCQUMvQixLQUFLLEVBQUUsVUFBVTtnQkFDakIsT0FBTyxFQUFFLElBQUk7YUFDZDtTQUNGO1FBQ0Q7WUFDRSxLQUFLO1lBQ0w7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLE1BQU0sRUFBRSx3QkFBd0I7Z0JBQ2hDLEtBQUssRUFBRSxXQUFXO2dCQUNsQixPQUFPLEVBQUUsS0FBSzthQUNmO1NBQ0Y7S0FDRixDQUFDLENBQUE7SUFFRixPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7QUFDN0IsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3JhZGVJc0FwcHJvdmVkIH0gZnJvbSAnLi9ncmFkZUlzQXBwcm92ZWQnXG5pbXBvcnQgeyBTY2FsZUF0dHJpYnV0ZXMsIFN0YXR1c1JldHVybiB9IGZyb20gJy4vdHlwZXMnXG5cbi8qKlxuICogQGV4YW1wbGUgY29uc3QgY2hlY2tTdGF0dXMgPSBncmFkZVN0YXR1cyhzY2FsZSwgZ3JhZGUpXG4gKi9cbmV4cG9ydCBjb25zdCBncmFkZVN0YXR1cyA9IChcbiAgc2NhbGU6IFNjYWxlQXR0cmlidXRlcyxcbiAgZ3JhZGU/OiBudW1iZXJcbik6IFN0YXR1c1JldHVybiA9PiB7XG4gIC8qKlxuICAgKiBTaSBsYSBub3RhIHZpZW5lIG51bGEgbGEgbWFyY2Ftb3MgY29tbyBwZW5kaWVudGUuXG4gICAqL1xuICBpZiAoIWdyYWRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiAwLFxuICAgICAgbmFtZTogJ1BlbmRpZW50ZScsXG4gICAgICBkZXRhaWw6ICcnLFxuICAgICAgc3R5bGU6ICdwZW5kaW5nJyxcbiAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGFtb3Mgc2kgZXN0w6EgYXByb2JhZGEgeSBsdWVnbyByZXRvcm5hbW9zIGVsIGVzdGFkby5cbiAgICovXG4gIGNvbnN0IGFwcHJvdmVkID0gZ3JhZGVJc0FwcHJvdmVkKHNjYWxlLCBncmFkZSlcbiAgY29uc3Qgc3RhdHVzID0gbmV3IE1hcChbXG4gICAgW1xuICAgICAgdHJ1ZSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIG5hbWU6ICdBcHJvYmFkbycsXG4gICAgICAgIGRldGFpbDogJ0xhIG5vdGEgZXN0w6EgYXByb2JhZGEnLFxuICAgICAgICBzdHlsZTogJ2FwcHJvdmVkJyxcbiAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgfVxuICAgIF0sXG4gICAgW1xuICAgICAgZmFsc2UsXG4gICAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBuYW1lOiAnUmVwcm9iYWRvJyxcbiAgICAgICAgZGV0YWlsOiAnTGEgbm90YSBlc3TDoSByZXByb2JhZGEnLFxuICAgICAgICBzdHlsZTogJ3JlcHJvYmF0ZScsXG4gICAgICAgIGVuYWJsZWQ6IGZhbHNlXG4gICAgICB9XG4gICAgXVxuICBdKVxuXG4gIHJldHVybiBzdGF0dXMuZ2V0KGFwcHJvdmVkKVxufVxuIl19