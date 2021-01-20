"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gradeFormat = void 0;
const gradeRound_1 = require("./gradeRound");
/**
 * Formatea una nota según la escala recibida por parámetro.
Agrega puntos, comas, caracteres antes o despues de la nota.
 *
 * @example const formated = gradeFormat(scale, grade)
 */
const gradeFormat = (scale, grade) => {
    let round = `${gradeRound_1.gradeRound(scale, grade)}`;
    if (round.length === 1 && scale.append === '') {
        round = `${round}.0`;
    }
    return [
        scale.prepend,
        round.replace('.', scale.decimalSeparator),
        scale.append
    ].join('');
};
exports.gradeFormat = gradeFormat;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhZGVGb3JtYXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvZ3JhZGVzL2dyYWRlRm9ybWF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUF5QztBQUd6Qzs7Ozs7R0FLRztBQUNJLE1BQU0sV0FBVyxHQUFHLENBQUMsS0FBc0IsRUFBRSxLQUFhLEVBQVUsRUFBRTtJQUMzRSxJQUFJLEtBQUssR0FBRyxHQUFHLHVCQUFVLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUE7SUFFekMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLEVBQUUsRUFBRTtRQUM3QyxLQUFLLEdBQUcsR0FBRyxLQUFLLElBQUksQ0FBQTtLQUNyQjtJQUVELE9BQU87UUFDTCxLQUFLLENBQUMsT0FBTztRQUNiLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztRQUMxQyxLQUFLLENBQUMsTUFBTTtLQUNiLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0FBQ1osQ0FBQyxDQUFBO0FBWlksUUFBQSxXQUFXLGVBWXZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3JhZGVSb3VuZCB9IGZyb20gJy4vZ3JhZGVSb3VuZCdcbmltcG9ydCB7IFNjYWxlQXR0cmlidXRlcyB9IGZyb20gJy4uL3R5cGVzJ1xuXG4vKipcbiAqIEZvcm1hdGVhIHVuYSBub3RhIHNlZ8O6biBsYSBlc2NhbGEgcmVjaWJpZGEgcG9yIHBhcsOhbWV0cm8uXG5BZ3JlZ2EgcHVudG9zLCBjb21hcywgY2FyYWN0ZXJlcyBhbnRlcyBvIGRlc3B1ZXMgZGUgbGEgbm90YS5cbiAqXG4gKiBAZXhhbXBsZSBjb25zdCBmb3JtYXRlZCA9IGdyYWRlRm9ybWF0KHNjYWxlLCBncmFkZSlcbiAqL1xuZXhwb3J0IGNvbnN0IGdyYWRlRm9ybWF0ID0gKHNjYWxlOiBTY2FsZUF0dHJpYnV0ZXMsIGdyYWRlOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xuICBsZXQgcm91bmQgPSBgJHtncmFkZVJvdW5kKHNjYWxlLCBncmFkZSl9YFxuXG4gIGlmIChyb3VuZC5sZW5ndGggPT09IDEgJiYgc2NhbGUuYXBwZW5kID09PSAnJykge1xuICAgIHJvdW5kID0gYCR7cm91bmR9LjBgXG4gIH1cblxuICByZXR1cm4gW1xuICAgIHNjYWxlLnByZXBlbmQsXG4gICAgcm91bmQucmVwbGFjZSgnLicsIHNjYWxlLmRlY2ltYWxTZXBhcmF0b3IpLFxuICAgIHNjYWxlLmFwcGVuZFxuICBdLmpvaW4oJycpXG59XG4iXX0=