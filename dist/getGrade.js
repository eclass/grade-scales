import { gradeRound } from './grades';
/**
 * Hace el cálculo de la nota en base al puntaje obtenido y el total con la Escala de notas
 *
 * @example const grade = calcGrade(scale, total, obtained)
 */
export const calcGrade = (scale, total, obtained) => {
    let grade = 0;
    if (scale.passingPercentage > 0) {
        const passingPercentage = scale.passingPercentage / 100;
        const approveMinPoints = total * passingPercentage;
        let weight;
        let calcWeight;
        if (obtained > approveMinPoints) {
            weight = (scale.max - scale.passingGrade) / (total - approveMinPoints);
            calcWeight = scale.max - weight * total;
        }
        else {
            weight = (scale.passingGrade - scale.min) / approveMinPoints;
            calcWeight = scale.passingGrade - weight * total * passingPercentage;
        }
        const prevGrade = weight * obtained + calcWeight;
        grade = (100 * prevGrade) / 100;
    }
    else {
        grade = (scale.max * obtained) / total;
    }
    return grade;
};
/**
 * Recibe los puntajes y calcula la nota.
 * - Si el puntaje obtenido es >= al total entonces asigna la nota máxima de la escala.
 * - Si el puntaje obtenido es <= 0 entonces asigna la nota minima de la escala.
 * - Si está en el rango > 0 y < total entonces calcula la nota considerando la ponderación.
 *
 * @example const grade = getGrade(scale, 10, 5)
 */
export const getGrade = (scale, total, obtained) => {
    if (obtained >= total) {
        return scale.max;
    }
    else if (obtained <= 0) {
        return scale.min;
    }
    else {
        return gradeRound(scale, calcGrade(scale, total, obtained));
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0R3JhZGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvZ2V0R3JhZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFVBQVUsQ0FBQTtBQUdyQzs7OztHQUlHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUFHLENBQ3ZCLEtBQXNCLEVBQ3RCLEtBQWEsRUFDYixRQUFnQixFQUNSLEVBQUU7SUFDVixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUE7SUFDYixJQUFJLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLEVBQUU7UUFDL0IsTUFBTSxpQkFBaUIsR0FBRyxLQUFLLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxDQUFBO1FBQ3ZELE1BQU0sZ0JBQWdCLEdBQUcsS0FBSyxHQUFHLGlCQUFpQixDQUFBO1FBRWxELElBQUksTUFBYyxDQUFBO1FBQ2xCLElBQUksVUFBa0IsQ0FBQTtRQUV0QixJQUFJLFFBQVEsR0FBRyxnQkFBZ0IsRUFBRTtZQUMvQixNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxDQUFBO1lBQ3RFLFVBQVUsR0FBRyxLQUFLLENBQUMsR0FBRyxHQUFHLE1BQU0sR0FBRyxLQUFLLENBQUE7U0FDeEM7YUFBTTtZQUNMLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLGdCQUFnQixDQUFBO1lBQzVELFVBQVUsR0FBRyxLQUFLLENBQUMsWUFBWSxHQUFHLE1BQU0sR0FBRyxLQUFLLEdBQUcsaUJBQWlCLENBQUE7U0FDckU7UUFDRCxNQUFNLFNBQVMsR0FBRyxNQUFNLEdBQUcsUUFBUSxHQUFHLFVBQVUsQ0FBQTtRQUNoRCxLQUFLLEdBQUcsQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLEdBQUcsR0FBRyxDQUFBO0tBQ2hDO1NBQU07UUFDTCxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQTtLQUN2QztJQUNELE9BQU8sS0FBSyxDQUFBO0FBQ2QsQ0FBQyxDQUFBO0FBRUQ7Ozs7Ozs7R0FPRztBQUNILE1BQU0sQ0FBQyxNQUFNLFFBQVEsR0FBRyxDQUN0QixLQUFzQixFQUN0QixLQUFhLEVBQ2IsUUFBZ0IsRUFDUixFQUFFO0lBQ1YsSUFBSSxRQUFRLElBQUksS0FBSyxFQUFFO1FBQ3JCLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQTtLQUNqQjtTQUFNLElBQUksUUFBUSxJQUFJLENBQUMsRUFBRTtRQUN4QixPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUE7S0FDakI7U0FBTTtRQUNMLE9BQU8sVUFBVSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFBO0tBQzVEO0FBQ0gsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3JhZGVSb3VuZCB9IGZyb20gJy4vZ3JhZGVzJ1xuaW1wb3J0IHsgU2NhbGVBdHRyaWJ1dGVzIH0gZnJvbSAnLi9ncmFkZXMvdHlwZXMnXG5cbi8qKlxuICogSGFjZSBlbCBjw6FsY3VsbyBkZSBsYSBub3RhIGVuIGJhc2UgYWwgcHVudGFqZSBvYnRlbmlkbyB5IGVsIHRvdGFsIGNvbiBsYSBFc2NhbGEgZGUgbm90YXNcbiAqXG4gKiBAZXhhbXBsZSBjb25zdCBncmFkZSA9IGNhbGNHcmFkZShzY2FsZSwgdG90YWwsIG9idGFpbmVkKVxuICovXG5leHBvcnQgY29uc3QgY2FsY0dyYWRlID0gKFxuICBzY2FsZTogU2NhbGVBdHRyaWJ1dGVzLFxuICB0b3RhbDogbnVtYmVyLFxuICBvYnRhaW5lZDogbnVtYmVyXG4pOiBudW1iZXIgPT4ge1xuICBsZXQgZ3JhZGUgPSAwXG4gIGlmIChzY2FsZS5wYXNzaW5nUGVyY2VudGFnZSA+IDApIHtcbiAgICBjb25zdCBwYXNzaW5nUGVyY2VudGFnZSA9IHNjYWxlLnBhc3NpbmdQZXJjZW50YWdlIC8gMTAwXG4gICAgY29uc3QgYXBwcm92ZU1pblBvaW50cyA9IHRvdGFsICogcGFzc2luZ1BlcmNlbnRhZ2VcblxuICAgIGxldCB3ZWlnaHQ6IG51bWJlclxuICAgIGxldCBjYWxjV2VpZ2h0OiBudW1iZXJcblxuICAgIGlmIChvYnRhaW5lZCA+IGFwcHJvdmVNaW5Qb2ludHMpIHtcbiAgICAgIHdlaWdodCA9IChzY2FsZS5tYXggLSBzY2FsZS5wYXNzaW5nR3JhZGUpIC8gKHRvdGFsIC0gYXBwcm92ZU1pblBvaW50cylcbiAgICAgIGNhbGNXZWlnaHQgPSBzY2FsZS5tYXggLSB3ZWlnaHQgKiB0b3RhbFxuICAgIH0gZWxzZSB7XG4gICAgICB3ZWlnaHQgPSAoc2NhbGUucGFzc2luZ0dyYWRlIC0gc2NhbGUubWluKSAvIGFwcHJvdmVNaW5Qb2ludHNcbiAgICAgIGNhbGNXZWlnaHQgPSBzY2FsZS5wYXNzaW5nR3JhZGUgLSB3ZWlnaHQgKiB0b3RhbCAqIHBhc3NpbmdQZXJjZW50YWdlXG4gICAgfVxuICAgIGNvbnN0IHByZXZHcmFkZSA9IHdlaWdodCAqIG9idGFpbmVkICsgY2FsY1dlaWdodFxuICAgIGdyYWRlID0gKDEwMCAqIHByZXZHcmFkZSkgLyAxMDBcbiAgfSBlbHNlIHtcbiAgICBncmFkZSA9IChzY2FsZS5tYXggKiBvYnRhaW5lZCkgLyB0b3RhbFxuICB9XG4gIHJldHVybiBncmFkZVxufVxuXG4vKipcbiAqIFJlY2liZSBsb3MgcHVudGFqZXMgeSBjYWxjdWxhIGxhIG5vdGEuXG4gKiAtIFNpIGVsIHB1bnRhamUgb2J0ZW5pZG8gZXMgPj0gYWwgdG90YWwgZW50b25jZXMgYXNpZ25hIGxhIG5vdGEgbcOheGltYSBkZSBsYSBlc2NhbGEuXG4gKiAtIFNpIGVsIHB1bnRhamUgb2J0ZW5pZG8gZXMgPD0gMCBlbnRvbmNlcyBhc2lnbmEgbGEgbm90YSBtaW5pbWEgZGUgbGEgZXNjYWxhLlxuICogLSBTaSBlc3TDoSBlbiBlbCByYW5nbyA+IDAgeSA8IHRvdGFsIGVudG9uY2VzIGNhbGN1bGEgbGEgbm90YSBjb25zaWRlcmFuZG8gbGEgcG9uZGVyYWNpw7NuLlxuICpcbiAqIEBleGFtcGxlIGNvbnN0IGdyYWRlID0gZ2V0R3JhZGUoc2NhbGUsIDEwLCA1KVxuICovXG5leHBvcnQgY29uc3QgZ2V0R3JhZGUgPSAoXG4gIHNjYWxlOiBTY2FsZUF0dHJpYnV0ZXMsXG4gIHRvdGFsOiBudW1iZXIsXG4gIG9idGFpbmVkOiBudW1iZXJcbik6IG51bWJlciA9PiB7XG4gIGlmIChvYnRhaW5lZCA+PSB0b3RhbCkge1xuICAgIHJldHVybiBzY2FsZS5tYXhcbiAgfSBlbHNlIGlmIChvYnRhaW5lZCA8PSAwKSB7XG4gICAgcmV0dXJuIHNjYWxlLm1pblxuICB9IGVsc2Uge1xuICAgIHJldHVybiBncmFkZVJvdW5kKHNjYWxlLCBjYWxjR3JhZGUoc2NhbGUsIHRvdGFsLCBvYnRhaW5lZCkpXG4gIH1cbn1cbiJdfQ==