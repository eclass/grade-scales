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
    if (grade === null) {
        grade = 0;
    }
    let round = `${(0, gradeRound_1.gradeRound)(scale, grade)}`;
    if (round.length === 1 && scale.append === '' && scale.base !== 'Peru') {
        round = `${round}.0`;
    }
    return [
        scale.prepend,
        round.replace('.', scale.decimalSeparator),
        scale.append,
    ]
        .join('')
        .trim();
};
exports.gradeFormat = gradeFormat;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhZGVGb3JtYXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvZ3JhZGVzL2dyYWRlRm9ybWF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUF5QztBQUd6Qzs7Ozs7R0FLRztBQUNJLE1BQU0sV0FBVyxHQUFHLENBQUMsS0FBc0IsRUFBRSxLQUFhLEVBQVUsRUFBRTtJQUMzRSxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7UUFDbEIsS0FBSyxHQUFHLENBQUMsQ0FBQTtLQUNWO0lBQ0QsSUFBSSxLQUFLLEdBQUcsR0FBRyxJQUFBLHVCQUFVLEVBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUE7SUFFekMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtRQUN0RSxLQUFLLEdBQUcsR0FBRyxLQUFLLElBQUksQ0FBQTtLQUNyQjtJQUVELE9BQU87UUFDTCxLQUFLLENBQUMsT0FBTztRQUNiLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztRQUMxQyxLQUFLLENBQUMsTUFBTTtLQUNiO1NBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQztTQUNSLElBQUksRUFBRSxDQUFBO0FBQ1gsQ0FBQyxDQUFBO0FBakJZLFFBQUEsV0FBVyxlQWlCdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncmFkZVJvdW5kIH0gZnJvbSAnLi9ncmFkZVJvdW5kJ1xuaW1wb3J0IHsgU2NhbGVBdHRyaWJ1dGVzIH0gZnJvbSAnLi4vdHlwZXMnXG5cbi8qKlxuICogRm9ybWF0ZWEgdW5hIG5vdGEgc2Vnw7puIGxhIGVzY2FsYSByZWNpYmlkYSBwb3IgcGFyw6FtZXRyby5cbkFncmVnYSBwdW50b3MsIGNvbWFzLCBjYXJhY3RlcmVzIGFudGVzIG8gZGVzcHVlcyBkZSBsYSBub3RhLlxuICpcbiAqIEBleGFtcGxlIGNvbnN0IGZvcm1hdGVkID0gZ3JhZGVGb3JtYXQoc2NhbGUsIGdyYWRlKVxuICovXG5leHBvcnQgY29uc3QgZ3JhZGVGb3JtYXQgPSAoc2NhbGU6IFNjYWxlQXR0cmlidXRlcywgZ3JhZGU6IG51bWJlcik6IHN0cmluZyA9PiB7XG4gIGlmIChncmFkZSA9PT0gbnVsbCkge1xuICAgIGdyYWRlID0gMFxuICB9XG4gIGxldCByb3VuZCA9IGAke2dyYWRlUm91bmQoc2NhbGUsIGdyYWRlKX1gXG5cbiAgaWYgKHJvdW5kLmxlbmd0aCA9PT0gMSAmJiBzY2FsZS5hcHBlbmQgPT09ICcnICYmIHNjYWxlLmJhc2UgIT09ICdQZXJ1Jykge1xuICAgIHJvdW5kID0gYCR7cm91bmR9LjBgXG4gIH1cblxuICByZXR1cm4gW1xuICAgIHNjYWxlLnByZXBlbmQsXG4gICAgcm91bmQucmVwbGFjZSgnLicsIHNjYWxlLmRlY2ltYWxTZXBhcmF0b3IpLFxuICAgIHNjYWxlLmFwcGVuZCxcbiAgXVxuICAgIC5qb2luKCcnKVxuICAgIC50cmltKClcbn1cbiJdfQ==