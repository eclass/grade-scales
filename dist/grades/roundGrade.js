"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Recibe una nota y la redondea segun el formato de la escala.
 *
 * @example const rounded = roundGrade(60.522, scale)
 */
const roundGrade = (grade, scale) => {
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
exports.default = roundGrade;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91bmRHcmFkZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9ncmFkZXMvcm91bmRHcmFkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsR0FBRyxDQUFDLEtBQWEsRUFBRSxLQUFzQixFQUFVLEVBQUU7SUFDbkUsSUFBSTtRQUNGLElBQUksT0FBWSxDQUFBO1FBQ2hCLElBQUksS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUU7WUFDdEIsT0FBTyxHQUFHLE1BQU0sQ0FDZCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUMsUUFBUSxDQUN6RSxDQUFBO1NBQ0Y7YUFBTSxJQUFJLEtBQUssQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFO1lBQzlCLElBQUksS0FBSyxDQUFDLFNBQVMsS0FBSyxNQUFNLEVBQUU7Z0JBQzlCLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO2FBQzNCO2lCQUFNLElBQUksS0FBSyxDQUFDLFNBQVMsS0FBSyxPQUFPLEVBQUU7Z0JBQ3RDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO2FBQzVCO2lCQUFNO2dCQUNMLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO2FBQzNCO1NBQ0Y7UUFDRCxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQTtLQUN2QjtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1Ysc0VBQXNFO1FBQ3RFLE9BQU8sQ0FBQyxDQUFBO0tBQ1Q7QUFDSCxDQUFDLENBQUE7QUFFRCxrQkFBZSxVQUFVLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2FsZUF0dHJpYnV0ZXMgfSBmcm9tICcuL3R5cGVzJ1xuXG4vKipcbiAqIFJlY2liZSB1bmEgbm90YSB5IGxhIHJlZG9uZGVhIHNlZ3VuIGVsIGZvcm1hdG8gZGUgbGEgZXNjYWxhLlxuICpcbiAqIEBleGFtcGxlIGNvbnN0IHJvdW5kZWQgPSByb3VuZEdyYWRlKDYwLjUyMiwgc2NhbGUpXG4gKi9cbmNvbnN0IHJvdW5kR3JhZGUgPSAoZ3JhZGU6IG51bWJlciwgc2NhbGU6IFNjYWxlQXR0cmlidXRlcyk6IG51bWJlciA9PiB7XG4gIHRyeSB7XG4gICAgbGV0IHJvdW5kZWQ6IGFueVxuICAgIGlmIChzY2FsZS5kZWNpbWFscyA+IDApIHtcbiAgICAgIHJvdW5kZWQgPSBOdW1iZXIoXG4gICAgICAgIE1hdGgucm91bmQoTnVtYmVyKGdyYWRlICsgJ2UnICsgc2NhbGUuZGVjaW1hbHMpKSArICdlLScgKyBzY2FsZS5kZWNpbWFsc1xuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoc2NhbGUuZGVjaW1hbHMgPD0gMCkge1xuICAgICAgaWYgKHNjYWxlLnJvdW5kVHlwZSA9PT0gJ2NlaWwnKSB7XG4gICAgICAgIHJvdW5kZWQgPSBNYXRoLmNlaWwoZ3JhZGUpXG4gICAgICB9IGVsc2UgaWYgKHNjYWxlLnJvdW5kVHlwZSA9PT0gJ2Zsb29yJykge1xuICAgICAgICByb3VuZGVkID0gTWF0aC5mbG9vcihncmFkZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvdW5kZWQgPSBncmFkZS50b0ZpeGVkKDApXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBOdW1iZXIocm91bmRlZClcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIEVuIGNhc28gZGUgZmFsbGFyIGVsIHJlZG9uZGVvIGVudG9uY2VzIGRldm9sdmVtb3MgdW4gMCBwb3IgZGVmZWN0by5cbiAgICByZXR1cm4gMFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJvdW5kR3JhZGVcbiJdfQ==