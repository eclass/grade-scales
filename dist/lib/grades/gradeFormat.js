"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gradeRound_1 = require("./gradeRound");
/**
 * Formatea una nota según la escala recibida por parámetro.
Agrega puntos, comas, caracteres antes o despues de la nota.
 *
 * @example const formated = gradeFormat(scale, grade)
 */
exports.gradeFormat = (scale, grade) => {
    return [
        scale.prepend,
        String(gradeRound_1.gradeRound(scale, grade)).replace('.', scale.decimalSeparator),
        scale.append
    ].join('');
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhZGVGb3JtYXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvZ3JhZGVzL2dyYWRlRm9ybWF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQXlDO0FBR3pDOzs7OztHQUtHO0FBQ1UsUUFBQSxXQUFXLEdBQUcsQ0FBQyxLQUFzQixFQUFFLEtBQWEsRUFBVSxFQUFFO0lBQzNFLE9BQU87UUFDTCxLQUFLLENBQUMsT0FBTztRQUNiLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDO1FBQ3JFLEtBQUssQ0FBQyxNQUFNO0tBQ2IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7QUFDWixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncmFkZVJvdW5kIH0gZnJvbSAnLi9ncmFkZVJvdW5kJ1xuaW1wb3J0IHsgU2NhbGVBdHRyaWJ1dGVzIH0gZnJvbSAnLi90eXBlcydcblxuLyoqXG4gKiBGb3JtYXRlYSB1bmEgbm90YSBzZWfDum4gbGEgZXNjYWxhIHJlY2liaWRhIHBvciBwYXLDoW1ldHJvLlxuQWdyZWdhIHB1bnRvcywgY29tYXMsIGNhcmFjdGVyZXMgYW50ZXMgbyBkZXNwdWVzIGRlIGxhIG5vdGEuXG4gKlxuICogQGV4YW1wbGUgY29uc3QgZm9ybWF0ZWQgPSBncmFkZUZvcm1hdChzY2FsZSwgZ3JhZGUpXG4gKi9cbmV4cG9ydCBjb25zdCBncmFkZUZvcm1hdCA9IChzY2FsZTogU2NhbGVBdHRyaWJ1dGVzLCBncmFkZTogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIFtcbiAgICBzY2FsZS5wcmVwZW5kLFxuICAgIFN0cmluZyhncmFkZVJvdW5kKHNjYWxlLCBncmFkZSkpLnJlcGxhY2UoJy4nLCBzY2FsZS5kZWNpbWFsU2VwYXJhdG9yKSxcbiAgICBzY2FsZS5hcHBlbmRcbiAgXS5qb2luKCcnKVxufVxuIl19