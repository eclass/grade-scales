import { gradeRound } from './gradeRound';
/**
 * Formatea una nota según la escala recibida por parámetro.
Agrega puntos, comas, caracteres antes o despues de la nota.
 *
 * @example const formated = gradeFormat(grade, scale)
 */
export const gradeFormat = (grade, scale) => {
    return [
        scale.prepend,
        String(gradeRound(grade, scale)).replace('.', scale.decimalSeparator),
        scale.append
    ].join('');
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhZGVGb3JtYXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvZ3JhZGVzL2dyYWRlRm9ybWF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUE7QUFHekM7Ozs7O0dBS0c7QUFDSCxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsQ0FBQyxLQUFhLEVBQUUsS0FBc0IsRUFBVSxFQUFFO0lBQzNFLE9BQU87UUFDTCxLQUFLLENBQUMsT0FBTztRQUNiLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUM7UUFDckUsS0FBSyxDQUFDLE1BQU07S0FDYixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUNaLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdyYWRlUm91bmQgfSBmcm9tICcuL2dyYWRlUm91bmQnXG5pbXBvcnQgeyBTY2FsZUF0dHJpYnV0ZXMgfSBmcm9tICcuL3R5cGVzJ1xuXG4vKipcbiAqIEZvcm1hdGVhIHVuYSBub3RhIHNlZ8O6biBsYSBlc2NhbGEgcmVjaWJpZGEgcG9yIHBhcsOhbWV0cm8uXG5BZ3JlZ2EgcHVudG9zLCBjb21hcywgY2FyYWN0ZXJlcyBhbnRlcyBvIGRlc3B1ZXMgZGUgbGEgbm90YS5cbiAqXG4gKiBAZXhhbXBsZSBjb25zdCBmb3JtYXRlZCA9IGdyYWRlRm9ybWF0KGdyYWRlLCBzY2FsZSlcbiAqL1xuZXhwb3J0IGNvbnN0IGdyYWRlRm9ybWF0ID0gKGdyYWRlOiBudW1iZXIsIHNjYWxlOiBTY2FsZUF0dHJpYnV0ZXMpOiBzdHJpbmcgPT4ge1xuICByZXR1cm4gW1xuICAgIHNjYWxlLnByZXBlbmQsXG4gICAgU3RyaW5nKGdyYWRlUm91bmQoZ3JhZGUsIHNjYWxlKSkucmVwbGFjZSgnLicsIHNjYWxlLmRlY2ltYWxTZXBhcmF0b3IpLFxuICAgIHNjYWxlLmFwcGVuZFxuICBdLmpvaW4oJycpXG59XG4iXX0=