"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
// Componentes
__export(require("./getAverage"));
__export(require("./getGrade"));
__export(require("./getGradeFormatted"));
__export(require("./convertToScale"));
// Funciones de Notas
__export(require("./grades/gradeFormat"));
__export(require("./grades/gradeIsApproved"));
__export(require("./grades/gradeRound"));
__export(require("./grades/gradeStatus"));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxjQUFjO0FBQ2Qsa0NBQTRCO0FBQzVCLGdDQUEwQjtBQUMxQix5Q0FBbUM7QUFDbkMsc0NBQWdDO0FBRWhDLHFCQUFxQjtBQUNyQiwwQ0FBb0M7QUFDcEMsOENBQXdDO0FBQ3hDLHlDQUFtQztBQUNuQywwQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb21wb25lbnRlc1xuZXhwb3J0ICogZnJvbSAnLi9nZXRBdmVyYWdlJ1xuZXhwb3J0ICogZnJvbSAnLi9nZXRHcmFkZSdcbmV4cG9ydCAqIGZyb20gJy4vZ2V0R3JhZGVGb3JtYXR0ZWQnXG5leHBvcnQgKiBmcm9tICcuL2NvbnZlcnRUb1NjYWxlJ1xuXG4vLyBGdW5jaW9uZXMgZGUgTm90YXNcbmV4cG9ydCAqIGZyb20gJy4vZ3JhZGVzL2dyYWRlRm9ybWF0J1xuZXhwb3J0ICogZnJvbSAnLi9ncmFkZXMvZ3JhZGVJc0FwcHJvdmVkJ1xuZXhwb3J0ICogZnJvbSAnLi9ncmFkZXMvZ3JhZGVSb3VuZCdcbmV4cG9ydCAqIGZyb20gJy4vZ3JhZGVzL2dyYWRlU3RhdHVzJ1xuIl19