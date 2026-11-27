"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gradeRound = void 0;
/**
 * Recibe una nota y la redondea segun el formato de la escala.
 *
 * @example const rounded = gradeRound(scale, 30.522)
 */
const roundWithDecimals = (value, decimals) => {
    const scaled = Math.round(Number(`${value}e${decimals}`));
    return Number(`${scaled}e-${decimals}`);
};
const gradeRound = (scale, grade) => {
    try {
        let rounded = 0;
        if (grade === null || grade === undefined || !Number.isFinite(grade)) {
            return Number(0);
        }
        if (scale.decimals > 0) {
            if (String(grade).toLowerCase().includes('e')) {
                rounded = Number(grade.toFixed(scale.decimals));
            }
            else if (scale.decimals === 1) {
                rounded = roundWithDecimals(grade, scale.decimals + 1);
                rounded = roundWithDecimals(rounded, scale.decimals);
            }
            else {
                rounded = roundWithDecimals(grade, scale.decimals);
            }
        }
        else if (scale.decimals <= 0) {
            if (scale.roundType === 'ceil') {
                rounded = Math.ceil(grade);
            }
            else if (scale.roundType === 'floor') {
                rounded = Math.floor(grade);
            }
            else {
                rounded = grade.toFixed(0);
            }
        }
        return Number(rounded);
    }
    catch (e) {
        // En caso de fallar el redondeo entonces devolvemos un 0 por defecto.
        return 0;
    }
};
exports.gradeRound = gradeRound;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhZGVSb3VuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9ncmFkZXMvZ3JhZGVSb3VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQTs7OztHQUlHO0FBQ0gsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLEtBQWEsRUFBRSxRQUFnQixFQUFVLEVBQUU7SUFDcEUsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLElBQUksUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ3pELE9BQU8sTUFBTSxDQUFDLEdBQUcsTUFBTSxLQUFLLFFBQVEsRUFBRSxDQUFDLENBQUE7QUFDekMsQ0FBQyxDQUFBO0FBRU0sTUFBTSxVQUFVLEdBQUcsQ0FBQyxLQUFzQixFQUFFLEtBQWEsRUFBVSxFQUFFO0lBQzFFLElBQUk7UUFDRixJQUFJLE9BQU8sR0FBb0IsQ0FBQyxDQUFBO1FBQ2hDLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNwRSxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUNqQjtRQUNELElBQUksS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUU7WUFDdEIsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM3QyxPQUFPLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7YUFDaEQ7aUJBQU0sSUFBSSxLQUFLLENBQUMsUUFBUSxLQUFLLENBQUMsRUFBRTtnQkFDL0IsT0FBTyxHQUFHLGlCQUFpQixDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFBO2dCQUN0RCxPQUFPLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQTthQUNyRDtpQkFBTTtnQkFDTCxPQUFPLEdBQUcsaUJBQWlCLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQTthQUNuRDtTQUNGO2FBQU0sSUFBSSxLQUFLLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBRTtZQUM5QixJQUFJLEtBQUssQ0FBQyxTQUFTLEtBQUssTUFBTSxFQUFFO2dCQUM5QixPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTthQUMzQjtpQkFBTSxJQUFJLEtBQUssQ0FBQyxTQUFTLEtBQUssT0FBTyxFQUFFO2dCQUN0QyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTthQUM1QjtpQkFBTTtnQkFDTCxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQTthQUMzQjtTQUNGO1FBQ0QsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUE7S0FDdkI7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNWLHNFQUFzRTtRQUN0RSxPQUFPLENBQUMsQ0FBQTtLQUNUO0FBQ0gsQ0FBQyxDQUFBO0FBN0JZLFFBQUEsVUFBVSxjQTZCdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2FsZUF0dHJpYnV0ZXMgfSBmcm9tICcuLi90eXBlcydcblxuLyoqXG4gKiBSZWNpYmUgdW5hIG5vdGEgeSBsYSByZWRvbmRlYSBzZWd1biBlbCBmb3JtYXRvIGRlIGxhIGVzY2FsYS5cbiAqXG4gKiBAZXhhbXBsZSBjb25zdCByb3VuZGVkID0gZ3JhZGVSb3VuZChzY2FsZSwgMzAuNTIyKVxuICovXG5jb25zdCByb3VuZFdpdGhEZWNpbWFscyA9ICh2YWx1ZTogbnVtYmVyLCBkZWNpbWFsczogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgY29uc3Qgc2NhbGVkID0gTWF0aC5yb3VuZChOdW1iZXIoYCR7dmFsdWV9ZSR7ZGVjaW1hbHN9YCkpXG4gIHJldHVybiBOdW1iZXIoYCR7c2NhbGVkfWUtJHtkZWNpbWFsc31gKVxufVxuXG5leHBvcnQgY29uc3QgZ3JhZGVSb3VuZCA9IChzY2FsZTogU2NhbGVBdHRyaWJ1dGVzLCBncmFkZTogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgdHJ5IHtcbiAgICBsZXQgcm91bmRlZDogbnVtYmVyIHwgc3RyaW5nID0gMFxuICAgIGlmIChncmFkZSA9PT0gbnVsbCB8fCBncmFkZSA9PT0gdW5kZWZpbmVkIHx8ICFOdW1iZXIuaXNGaW5pdGUoZ3JhZGUpKSB7XG4gICAgICByZXR1cm4gTnVtYmVyKDApXG4gICAgfVxuICAgIGlmIChzY2FsZS5kZWNpbWFscyA+IDApIHtcbiAgICAgIGlmIChTdHJpbmcoZ3JhZGUpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2UnKSkge1xuICAgICAgICByb3VuZGVkID0gTnVtYmVyKGdyYWRlLnRvRml4ZWQoc2NhbGUuZGVjaW1hbHMpKVxuICAgICAgfSBlbHNlIGlmIChzY2FsZS5kZWNpbWFscyA9PT0gMSkge1xuICAgICAgICByb3VuZGVkID0gcm91bmRXaXRoRGVjaW1hbHMoZ3JhZGUsIHNjYWxlLmRlY2ltYWxzICsgMSlcbiAgICAgICAgcm91bmRlZCA9IHJvdW5kV2l0aERlY2ltYWxzKHJvdW5kZWQsIHNjYWxlLmRlY2ltYWxzKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcm91bmRlZCA9IHJvdW5kV2l0aERlY2ltYWxzKGdyYWRlLCBzY2FsZS5kZWNpbWFscylcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNjYWxlLmRlY2ltYWxzIDw9IDApIHtcbiAgICAgIGlmIChzY2FsZS5yb3VuZFR5cGUgPT09ICdjZWlsJykge1xuICAgICAgICByb3VuZGVkID0gTWF0aC5jZWlsKGdyYWRlKVxuICAgICAgfSBlbHNlIGlmIChzY2FsZS5yb3VuZFR5cGUgPT09ICdmbG9vcicpIHtcbiAgICAgICAgcm91bmRlZCA9IE1hdGguZmxvb3IoZ3JhZGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb3VuZGVkID0gZ3JhZGUudG9GaXhlZCgwKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gTnVtYmVyKHJvdW5kZWQpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBFbiBjYXNvIGRlIGZhbGxhciBlbCByZWRvbmRlbyBlbnRvbmNlcyBkZXZvbHZlbW9zIHVuIDAgcG9yIGRlZmVjdG8uXG4gICAgcmV0dXJuIDBcbiAgfVxufVxuIl19