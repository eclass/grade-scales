const round = require('./round');
/**
 * Recibe una nota y en base a la escala verifica si está aprobada o reprobada.
 *
 * @param {number} grade - Nota.
 * @param {*} scale - Escala.
 *
 * @example
 *  const approved = gradeIsApproved(grade, scale)
 *
 * @returns {boolean} Estado si está aprobada la nota en base a la escala.
 */
module.exports = (grade, scale) => {
    const rounded = round(grade, scale);
    return rounded >= scale.passingGrade;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNBcHByb3ZlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9ncmFkZXMvaXNBcHByb3ZlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7QUFFaEM7Ozs7Ozs7Ozs7R0FVRztBQUNILE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUU7SUFDaEMsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUNuQyxPQUFPLE9BQU8sSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFBO0FBQ3RDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJvdW5kID0gcmVxdWlyZSgnLi9yb3VuZCcpXG5cbi8qKlxuICogUmVjaWJlIHVuYSBub3RhIHkgZW4gYmFzZSBhIGxhIGVzY2FsYSB2ZXJpZmljYSBzaSBlc3TDoSBhcHJvYmFkYSBvIHJlcHJvYmFkYS5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gZ3JhZGUgLSBOb3RhLlxuICogQHBhcmFtIHsqfSBzY2FsZSAtIEVzY2FsYS5cbiAqXG4gKiBAZXhhbXBsZVxuICogIGNvbnN0IGFwcHJvdmVkID0gZ3JhZGVJc0FwcHJvdmVkKGdyYWRlLCBzY2FsZSlcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gRXN0YWRvIHNpIGVzdMOhIGFwcm9iYWRhIGxhIG5vdGEgZW4gYmFzZSBhIGxhIGVzY2FsYS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSAoZ3JhZGUsIHNjYWxlKSA9PiB7XG4gIGNvbnN0IHJvdW5kZWQgPSByb3VuZChncmFkZSwgc2NhbGUpXG4gIHJldHVybiByb3VuZGVkID49IHNjYWxlLnBhc3NpbmdHcmFkZVxufVxuIl19