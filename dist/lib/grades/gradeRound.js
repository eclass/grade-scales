"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Recibe una nota y la redondea segun el formato de la escala.
 *
 * @example const rounded = gradeRound(scale, 30.522)
 */
exports.gradeRound = (scale, grade) => {
    try {
        let rounded;
        if (scale.decimals > 0) {
            rounded = Number(Math.round(Number(grade + 'e' + scale.decimals)) + 'e-' + scale.decimals);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhZGVSb3VuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9ncmFkZXMvZ3JhZGVSb3VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBOzs7O0dBSUc7QUFDVSxRQUFBLFVBQVUsR0FBRyxDQUFDLEtBQXNCLEVBQUUsS0FBYSxFQUFVLEVBQUU7SUFDMUUsSUFBSTtRQUNGLElBQUksT0FBWSxDQUFBO1FBQ2hCLElBQUksS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUU7WUFDdEIsT0FBTyxHQUFHLE1BQU0sQ0FDZCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUMsUUFBUSxDQUN6RSxDQUFBO1NBQ0Y7YUFBTSxJQUFJLEtBQUssQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFO1lBQzlCLElBQUksS0FBSyxDQUFDLFNBQVMsS0FBSyxNQUFNLEVBQUU7Z0JBQzlCLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO2FBQzNCO2lCQUFNLElBQUksS0FBSyxDQUFDLFNBQVMsS0FBSyxPQUFPLEVBQUU7Z0JBQ3RDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO2FBQzVCO2lCQUFNO2dCQUNMLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO2FBQzNCO1NBQ0Y7UUFDRCxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQTtLQUN2QjtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1Ysc0VBQXNFO1FBQ3RFLE9BQU8sQ0FBQyxDQUFBO0tBQ1Q7QUFDSCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2FsZUF0dHJpYnV0ZXMgfSBmcm9tICcuL3R5cGVzJ1xuXG4vKipcbiAqIFJlY2liZSB1bmEgbm90YSB5IGxhIHJlZG9uZGVhIHNlZ3VuIGVsIGZvcm1hdG8gZGUgbGEgZXNjYWxhLlxuICpcbiAqIEBleGFtcGxlIGNvbnN0IHJvdW5kZWQgPSBncmFkZVJvdW5kKHNjYWxlLCAzMC41MjIpXG4gKi9cbmV4cG9ydCBjb25zdCBncmFkZVJvdW5kID0gKHNjYWxlOiBTY2FsZUF0dHJpYnV0ZXMsIGdyYWRlOiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICB0cnkge1xuICAgIGxldCByb3VuZGVkOiBhbnlcbiAgICBpZiAoc2NhbGUuZGVjaW1hbHMgPiAwKSB7XG4gICAgICByb3VuZGVkID0gTnVtYmVyKFxuICAgICAgICBNYXRoLnJvdW5kKE51bWJlcihncmFkZSArICdlJyArIHNjYWxlLmRlY2ltYWxzKSkgKyAnZS0nICsgc2NhbGUuZGVjaW1hbHNcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKHNjYWxlLmRlY2ltYWxzIDw9IDApIHtcbiAgICAgIGlmIChzY2FsZS5yb3VuZFR5cGUgPT09ICdjZWlsJykge1xuICAgICAgICByb3VuZGVkID0gTWF0aC5jZWlsKGdyYWRlKVxuICAgICAgfSBlbHNlIGlmIChzY2FsZS5yb3VuZFR5cGUgPT09ICdmbG9vcicpIHtcbiAgICAgICAgcm91bmRlZCA9IE1hdGguZmxvb3IoZ3JhZGUpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb3VuZGVkID0gZ3JhZGUudG9GaXhlZCgwKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gTnVtYmVyKHJvdW5kZWQpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBFbiBjYXNvIGRlIGZhbGxhciBlbCByZWRvbmRlbyBlbnRvbmNlcyBkZXZvbHZlbW9zIHVuIDAgcG9yIGRlZmVjdG8uXG4gICAgcmV0dXJuIDBcbiAgfVxufVxuIl19