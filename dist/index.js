"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Componentes
__exportStar(require("./getAverage"), exports);
__exportStar(require("./getGrade"), exports);
__exportStar(require("./getGrades"), exports);
__exportStar(require("./getGradeFormatted"), exports);
__exportStar(require("./convertToScale"), exports);
// Funciones de Notas
__exportStar(require("./grades/gradeFormat"), exports);
__exportStar(require("./grades/gradeIsApproved"), exports);
__exportStar(require("./grades/gradeRound"), exports);
__exportStar(require("./grades/gradeStatus"), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsY0FBYztBQUNkLCtDQUE0QjtBQUM1Qiw2Q0FBMEI7QUFDMUIsOENBQTJCO0FBQzNCLHNEQUFtQztBQUNuQyxtREFBZ0M7QUFFaEMscUJBQXFCO0FBQ3JCLHVEQUFvQztBQUNwQywyREFBd0M7QUFDeEMsc0RBQW1DO0FBQ25DLHVEQUFvQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvbXBvbmVudGVzXG5leHBvcnQgKiBmcm9tICcuL2dldEF2ZXJhZ2UnXG5leHBvcnQgKiBmcm9tICcuL2dldEdyYWRlJ1xuZXhwb3J0ICogZnJvbSAnLi9nZXRHcmFkZXMnXG5leHBvcnQgKiBmcm9tICcuL2dldEdyYWRlRm9ybWF0dGVkJ1xuZXhwb3J0ICogZnJvbSAnLi9jb252ZXJ0VG9TY2FsZSdcblxuLy8gRnVuY2lvbmVzIGRlIE5vdGFzXG5leHBvcnQgKiBmcm9tICcuL2dyYWRlcy9ncmFkZUZvcm1hdCdcbmV4cG9ydCAqIGZyb20gJy4vZ3JhZGVzL2dyYWRlSXNBcHByb3ZlZCdcbmV4cG9ydCAqIGZyb20gJy4vZ3JhZGVzL2dyYWRlUm91bmQnXG5leHBvcnQgKiBmcm9tICcuL2dyYWRlcy9ncmFkZVN0YXR1cydcbiJdfQ==