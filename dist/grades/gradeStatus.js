"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gradeStatus = void 0;
const gradeIsApproved_1 = require("./gradeIsApproved");
/**
 * @example const checkStatus = gradeStatus(scale, grade)
 */
const gradeStatus = (scale, grade, isApproved = true) => {
    let isPending = !grade && isApproved;
    if (isPending && grade === 0) {
        isPending = false;
    }
    /**
     * Si la nota viene nula la marcamos como pendiente.
     */
    if (isPending) {
        return {
            id: 0,
            name: 'Pendiente',
            detail: '',
            style: 'pending',
            enabled: false,
        };
    }
    /**
     * Calculamos si está aprobada y luego retornamos el estado.
     */
    const approved = isApproved ? (0, gradeIsApproved_1.gradeIsApproved)(scale, grade) : isApproved;
    const status = new Map([
        [
            true,
            {
                id: 1,
                name: 'Aprobado',
                detail: 'La nota está aprobada',
                style: 'approved',
                enabled: true,
            },
        ],
        [
            false,
            {
                id: 2,
                name: 'Reprobado',
                detail: 'La nota está reprobada',
                style: 'reprobate',
                enabled: false,
            },
        ],
    ]);
    return status.get(approved);
};
exports.gradeStatus = gradeStatus;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhZGVTdGF0dXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvZ3JhZGVzL2dyYWRlU3RhdHVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHVEQUFtRDtBQUduRDs7R0FFRztBQUNJLE1BQU0sV0FBVyxHQUFHLENBQ3pCLEtBQXNCLEVBQ3RCLEtBQWMsRUFDZCxVQUFVLEdBQUcsSUFBSSxFQUNILEVBQUU7SUFDaEIsSUFBSSxTQUFTLEdBQUcsQ0FBQyxLQUFLLElBQUksVUFBVSxDQUFBO0lBQ3BDLElBQUksU0FBUyxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7UUFDNUIsU0FBUyxHQUFHLEtBQUssQ0FBQTtLQUNsQjtJQUNEOztPQUVHO0lBQ0gsSUFBSSxTQUFTLEVBQUU7UUFDYixPQUFPO1lBQ0wsRUFBRSxFQUFFLENBQUM7WUFDTCxJQUFJLEVBQUUsV0FBVztZQUNqQixNQUFNLEVBQUUsRUFBRTtZQUNWLEtBQUssRUFBRSxTQUFTO1lBQ2hCLE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQTtLQUNGO0lBRUQ7O09BRUc7SUFDSCxNQUFNLFFBQVEsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUEsaUNBQWUsRUFBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQTtJQUN4RSxNQUFNLE1BQU0sR0FBK0IsSUFBSSxHQUFHLENBQUM7UUFDakQ7WUFDRSxJQUFJO1lBQ0o7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLE1BQU0sRUFBRSx1QkFBdUI7Z0JBQy9CLEtBQUssRUFBRSxVQUFVO2dCQUNqQixPQUFPLEVBQUUsSUFBSTthQUNkO1NBQ0Y7UUFDRDtZQUNFLEtBQUs7WUFDTDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsV0FBVztnQkFDakIsTUFBTSxFQUFFLHdCQUF3QjtnQkFDaEMsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLE9BQU8sRUFBRSxLQUFLO2FBQ2Y7U0FDRjtLQUNGLENBQUMsQ0FBQTtJQUVGLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtBQUM3QixDQUFDLENBQUE7QUFsRFksUUFBQSxXQUFXLGVBa0R2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdyYWRlSXNBcHByb3ZlZCB9IGZyb20gJy4vZ3JhZGVJc0FwcHJvdmVkJ1xuaW1wb3J0IHsgU2NhbGVBdHRyaWJ1dGVzLCBTdGF0dXNSZXR1cm4gfSBmcm9tICcuLi90eXBlcydcblxuLyoqXG4gKiBAZXhhbXBsZSBjb25zdCBjaGVja1N0YXR1cyA9IGdyYWRlU3RhdHVzKHNjYWxlLCBncmFkZSlcbiAqL1xuZXhwb3J0IGNvbnN0IGdyYWRlU3RhdHVzID0gKFxuICBzY2FsZTogU2NhbGVBdHRyaWJ1dGVzLFxuICBncmFkZT86IG51bWJlcixcbiAgaXNBcHByb3ZlZCA9IHRydWUsXG4pOiBTdGF0dXNSZXR1cm4gPT4ge1xuICBsZXQgaXNQZW5kaW5nID0gIWdyYWRlICYmIGlzQXBwcm92ZWRcbiAgaWYgKGlzUGVuZGluZyAmJiBncmFkZSA9PT0gMCkge1xuICAgIGlzUGVuZGluZyA9IGZhbHNlXG4gIH1cbiAgLyoqXG4gICAqIFNpIGxhIG5vdGEgdmllbmUgbnVsYSBsYSBtYXJjYW1vcyBjb21vIHBlbmRpZW50ZS5cbiAgICovXG4gIGlmIChpc1BlbmRpbmcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IDAsXG4gICAgICBuYW1lOiAnUGVuZGllbnRlJyxcbiAgICAgIGRldGFpbDogJycsXG4gICAgICBzdHlsZTogJ3BlbmRpbmcnLFxuICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGFtb3Mgc2kgZXN0w6EgYXByb2JhZGEgeSBsdWVnbyByZXRvcm5hbW9zIGVsIGVzdGFkby5cbiAgICovXG4gIGNvbnN0IGFwcHJvdmVkID0gaXNBcHByb3ZlZCA/IGdyYWRlSXNBcHByb3ZlZChzY2FsZSwgZ3JhZGUpIDogaXNBcHByb3ZlZFxuICBjb25zdCBzdGF0dXM6IE1hcDxib29sZWFuLCBTdGF0dXNSZXR1cm4+ID0gbmV3IE1hcChbXG4gICAgW1xuICAgICAgdHJ1ZSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIG5hbWU6ICdBcHJvYmFkbycsXG4gICAgICAgIGRldGFpbDogJ0xhIG5vdGEgZXN0w6EgYXByb2JhZGEnLFxuICAgICAgICBzdHlsZTogJ2FwcHJvdmVkJyxcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBbXG4gICAgICBmYWxzZSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIG5hbWU6ICdSZXByb2JhZG8nLFxuICAgICAgICBkZXRhaWw6ICdMYSBub3RhIGVzdMOhIHJlcHJvYmFkYScsXG4gICAgICAgIHN0eWxlOiAncmVwcm9iYXRlJyxcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsXG4gICAgICB9LFxuICAgIF0sXG4gIF0pXG5cbiAgcmV0dXJuIHN0YXR1cy5nZXQoYXBwcm92ZWQpXG59XG4iXX0=