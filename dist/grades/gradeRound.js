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
        if (grade === null) {
            return Number(0);
        }
        if (scale.decimals > 0) {
            if (scale.decimals === 1) {
                rounded = Number(Math.round(Number(grade + 'e' + scale.decimals + 1)) +
                    'e-' +
                    scale.decimals +
                    1);
                rounded = Number(Math.round(Number(rounded + 'e' + scale.decimals)) +
                    'e-' +
                    scale.decimals);
            }
            else {
                rounded = Number(Math.round(Number(grade + 'e' + scale.decimals)) +
                    'e-' +
                    scale.decimals);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhZGVSb3VuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9ncmFkZXMvZ3JhZGVSb3VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQTs7OztHQUlHO0FBQ0ksTUFBTSxVQUFVLEdBQUcsQ0FBQyxLQUFzQixFQUFFLEtBQWEsRUFBVSxFQUFFO0lBQzFFLElBQUk7UUFDRixJQUFJLE9BQXdCLENBQUE7UUFDNUIsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ2xCLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQ2pCO1FBQ0QsSUFBSSxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRTtZQUN0QixJQUFJLEtBQUssQ0FBQyxRQUFRLEtBQUssQ0FBQyxFQUFFO2dCQUN4QixPQUFPLEdBQUcsTUFBTSxDQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDbEQsSUFBSTtvQkFDSixLQUFLLENBQUMsUUFBUTtvQkFDZCxDQUFDLENBQ0osQ0FBQTtnQkFDRCxPQUFPLEdBQUcsTUFBTSxDQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNoRCxJQUFJO29CQUNKLEtBQUssQ0FBQyxRQUFRLENBQ2pCLENBQUE7YUFDRjtpQkFBTTtnQkFDTCxPQUFPLEdBQUcsTUFBTSxDQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUM5QyxJQUFJO29CQUNKLEtBQUssQ0FBQyxRQUFRLENBQ2pCLENBQUE7YUFDRjtTQUNGO2FBQU0sSUFBSSxLQUFLLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBRTtZQUM5QixJQUFJLEtBQUssQ0FBQyxTQUFTLEtBQUssTUFBTSxFQUFFO2dCQUM5QixPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTthQUMzQjtpQkFBTSxJQUFJLEtBQUssQ0FBQyxTQUFTLEtBQUssT0FBTyxFQUFFO2dCQUN0QyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTthQUM1QjtpQkFBTTtnQkFDTCxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQTthQUMzQjtTQUNGO1FBQ0QsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUE7S0FDdkI7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNWLHNFQUFzRTtRQUN0RSxPQUFPLENBQUMsQ0FBQTtLQUNUO0FBQ0gsQ0FBQyxDQUFBO0FBeENZLFFBQUEsVUFBVSxjQXdDdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2FsZUF0dHJpYnV0ZXMgfSBmcm9tICcuLi90eXBlcydcblxuLyoqXG4gKiBSZWNpYmUgdW5hIG5vdGEgeSBsYSByZWRvbmRlYSBzZWd1biBlbCBmb3JtYXRvIGRlIGxhIGVzY2FsYS5cbiAqXG4gKiBAZXhhbXBsZSBjb25zdCByb3VuZGVkID0gZ3JhZGVSb3VuZChzY2FsZSwgMzAuNTIyKVxuICovXG5leHBvcnQgY29uc3QgZ3JhZGVSb3VuZCA9IChzY2FsZTogU2NhbGVBdHRyaWJ1dGVzLCBncmFkZTogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgdHJ5IHtcbiAgICBsZXQgcm91bmRlZDogbnVtYmVyIHwgc3RyaW5nXG4gICAgaWYgKGdyYWRlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gTnVtYmVyKDApXG4gICAgfVxuICAgIGlmIChzY2FsZS5kZWNpbWFscyA+IDApIHtcbiAgICAgIGlmIChzY2FsZS5kZWNpbWFscyA9PT0gMSkge1xuICAgICAgICByb3VuZGVkID0gTnVtYmVyKFxuICAgICAgICAgIE1hdGgucm91bmQoTnVtYmVyKGdyYWRlICsgJ2UnICsgc2NhbGUuZGVjaW1hbHMgKyAxKSkgK1xuICAgICAgICAgICAgJ2UtJyArXG4gICAgICAgICAgICBzY2FsZS5kZWNpbWFscyArXG4gICAgICAgICAgICAxLFxuICAgICAgICApXG4gICAgICAgIHJvdW5kZWQgPSBOdW1iZXIoXG4gICAgICAgICAgTWF0aC5yb3VuZChOdW1iZXIocm91bmRlZCArICdlJyArIHNjYWxlLmRlY2ltYWxzKSkgK1xuICAgICAgICAgICAgJ2UtJyArXG4gICAgICAgICAgICBzY2FsZS5kZWNpbWFscyxcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcm91bmRlZCA9IE51bWJlcihcbiAgICAgICAgICBNYXRoLnJvdW5kKE51bWJlcihncmFkZSArICdlJyArIHNjYWxlLmRlY2ltYWxzKSkgK1xuICAgICAgICAgICAgJ2UtJyArXG4gICAgICAgICAgICBzY2FsZS5kZWNpbWFscyxcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2NhbGUuZGVjaW1hbHMgPD0gMCkge1xuICAgICAgaWYgKHNjYWxlLnJvdW5kVHlwZSA9PT0gJ2NlaWwnKSB7XG4gICAgICAgIHJvdW5kZWQgPSBNYXRoLmNlaWwoZ3JhZGUpXG4gICAgICB9IGVsc2UgaWYgKHNjYWxlLnJvdW5kVHlwZSA9PT0gJ2Zsb29yJykge1xuICAgICAgICByb3VuZGVkID0gTWF0aC5mbG9vcihncmFkZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvdW5kZWQgPSBncmFkZS50b0ZpeGVkKDApXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBOdW1iZXIocm91bmRlZClcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIEVuIGNhc28gZGUgZmFsbGFyIGVsIHJlZG9uZGVvIGVudG9uY2VzIGRldm9sdmVtb3MgdW4gMCBwb3IgZGVmZWN0by5cbiAgICByZXR1cm4gMFxuICB9XG59XG4iXX0=