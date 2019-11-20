"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gradeRound_1 = require("./gradeRound");
/**
 * Formatea una nota según la escala recibida por parámetro.
 * Agrega puntos, comas, caracteres antes o despues de la nota.
 *
 * @example
 *  const formated = gradeFormat(grade, scale)
 */
exports.default = (grade, scale) => {
    return [
        scale.prepend,
        String(gradeRound_1.default(grade, scale)).replace('.', scale.decimalSeparator),
        scale.append
    ].join('');
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2dyYWRlcy9mb3JtYXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBcUM7QUFJckM7Ozs7OztHQU1HO0FBQ0gsa0JBQWUsQ0FBQyxLQUFhLEVBQUUsS0FBc0IsRUFBVSxFQUFFO0lBQy9ELE9BQU87UUFDTCxLQUFLLENBQUMsT0FBTztRQUNiLE1BQU0sQ0FBQyxvQkFBVSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLGdCQUFnQixDQUFDO1FBQ3JFLEtBQUssQ0FBQyxNQUFNO0tBQ2IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7QUFDWixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3JhZGVSb3VuZCBmcm9tICcuL2dyYWRlUm91bmQnXG5cbmltcG9ydCB7IFNjYWxlQXR0cmlidXRlcyB9IGZyb20gJy4vdHlwZXMnXG5cbi8qKlxuICogRm9ybWF0ZWEgdW5hIG5vdGEgc2Vnw7puIGxhIGVzY2FsYSByZWNpYmlkYSBwb3IgcGFyw6FtZXRyby5cbiAqIEFncmVnYSBwdW50b3MsIGNvbWFzLCBjYXJhY3RlcmVzIGFudGVzIG8gZGVzcHVlcyBkZSBsYSBub3RhLlxuICpcbiAqIEBleGFtcGxlXG4gKiAgY29uc3QgZm9ybWF0ZWQgPSBncmFkZUZvcm1hdChncmFkZSwgc2NhbGUpXG4gKi9cbmV4cG9ydCBkZWZhdWx0IChncmFkZTogbnVtYmVyLCBzY2FsZTogU2NhbGVBdHRyaWJ1dGVzKTogc3RyaW5nID0+IHtcbiAgcmV0dXJuIFtcbiAgICBzY2FsZS5wcmVwZW5kLFxuICAgIFN0cmluZyhncmFkZVJvdW5kKGdyYWRlLCBzY2FsZSkpLnJlcGxhY2UoJy4nLCBzY2FsZS5kZWNpbWFsU2VwYXJhdG9yKSxcbiAgICBzY2FsZS5hcHBlbmRcbiAgXS5qb2luKCcnKVxufVxuIl19