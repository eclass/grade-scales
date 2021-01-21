"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gradeRound = void 0;
/**
 * Recibe una nota y la redondea segun el formato de la escala.
 *
 * @example const rounded = gradeRound(scale, 30.522)
 */
const gradeRound = (scale, grade) => {
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
exports.gradeRound = gradeRound;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhZGVSb3VuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9ncmFkZXMvZ3JhZGVSb3VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQTs7OztHQUlHO0FBQ0ksTUFBTSxVQUFVLEdBQUcsQ0FBQyxLQUFzQixFQUFFLEtBQWEsRUFBVSxFQUFFO0lBQzFFLElBQUk7UUFDRixJQUFJLE9BQXdCLENBQUE7UUFDNUIsSUFBSSxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRTtZQUN0QixPQUFPLEdBQUcsTUFBTSxDQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQ3pFLENBQUE7U0FDRjthQUFNLElBQUksS0FBSyxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUU7WUFDOUIsSUFBSSxLQUFLLENBQUMsU0FBUyxLQUFLLE1BQU0sRUFBRTtnQkFDOUIsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7YUFDM0I7aUJBQU0sSUFBSSxLQUFLLENBQUMsU0FBUyxLQUFLLE9BQU8sRUFBRTtnQkFDdEMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7YUFDNUI7aUJBQU07Z0JBQ0wsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7YUFDM0I7U0FDRjtRQUNELE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0tBQ3ZCO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixzRUFBc0U7UUFDdEUsT0FBTyxDQUFDLENBQUE7S0FDVDtBQUNILENBQUMsQ0FBQTtBQXJCWSxRQUFBLFVBQVUsY0FxQnRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NhbGVBdHRyaWJ1dGVzIH0gZnJvbSAnLi4vdHlwZXMnXG5cbi8qKlxuICogUmVjaWJlIHVuYSBub3RhIHkgbGEgcmVkb25kZWEgc2VndW4gZWwgZm9ybWF0byBkZSBsYSBlc2NhbGEuXG4gKlxuICogQGV4YW1wbGUgY29uc3Qgcm91bmRlZCA9IGdyYWRlUm91bmQoc2NhbGUsIDMwLjUyMilcbiAqL1xuZXhwb3J0IGNvbnN0IGdyYWRlUm91bmQgPSAoc2NhbGU6IFNjYWxlQXR0cmlidXRlcywgZ3JhZGU6IG51bWJlcik6IG51bWJlciA9PiB7XG4gIHRyeSB7XG4gICAgbGV0IHJvdW5kZWQ6IG51bWJlciB8IHN0cmluZ1xuICAgIGlmIChzY2FsZS5kZWNpbWFscyA+IDApIHtcbiAgICAgIHJvdW5kZWQgPSBOdW1iZXIoXG4gICAgICAgIE1hdGgucm91bmQoTnVtYmVyKGdyYWRlICsgJ2UnICsgc2NhbGUuZGVjaW1hbHMpKSArICdlLScgKyBzY2FsZS5kZWNpbWFsc1xuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoc2NhbGUuZGVjaW1hbHMgPD0gMCkge1xuICAgICAgaWYgKHNjYWxlLnJvdW5kVHlwZSA9PT0gJ2NlaWwnKSB7XG4gICAgICAgIHJvdW5kZWQgPSBNYXRoLmNlaWwoZ3JhZGUpXG4gICAgICB9IGVsc2UgaWYgKHNjYWxlLnJvdW5kVHlwZSA9PT0gJ2Zsb29yJykge1xuICAgICAgICByb3VuZGVkID0gTWF0aC5mbG9vcihncmFkZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvdW5kZWQgPSBncmFkZS50b0ZpeGVkKDApXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBOdW1iZXIocm91bmRlZClcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIEVuIGNhc28gZGUgZmFsbGFyIGVsIHJlZG9uZGVvIGVudG9uY2VzIGRldm9sdmVtb3MgdW4gMCBwb3IgZGVmZWN0by5cbiAgICByZXR1cm4gMFxuICB9XG59XG4iXX0=