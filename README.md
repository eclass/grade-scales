# @eclass/grade-scales

[![npm](https://img.shields.io/npm/v/@eclass/grade-scales.svg)](https://www.npmjs.com/package/@eclass/grade-scales)
[![Build Status](https://travis-ci.org/eclass/grade-scales.svg?branch=master)](https://travis-ci.org/eclass/grade-scales)
[![downloads](https://img.shields.io/npm/dt/@eclass/grade-scales.svg)](https://www.npmjs.com/package/@eclass/grade-scales)
[![dependencies](https://img.shields.io/david/eclass/grade-scales.svg)](https://david-dm.org/eclass/grade-scales)
[![devDependency Status](https://img.shields.io/david/dev/eclass/grade-scales.svg)](https://david-dm.org/eclass/grade-scales#info=devDependencies)

## Instalación
```
  npm i @eclass/grade-scales
```

Este módulo permite calcular notas en base a una escala de notas.
La escala debe tener algunos valores que se listan a continuación:

## Formato Escala de notas
```js
const scale = {
  name: "Chile 50% (1-7, aprobación 50%, nota 4)",
  keyname: "Chile50",
  min: 1,
  max: 7,
  passingGrade: 4,
  passingPercentage: 50,
  roundType: "round",
  prepend: "",
  append: "",
  decimals: 1,
  decimalSeparator: ","
}
```

# eClass - Grade Scales

## getGrade() : number
En base a una escala se calcula la nota según los puntos totales y los obtenidos.
```js
  const grade = getGrade(scale, 10, 5)
```

## getGradeFormatted(): Object
Devuelve la nota formateada con el estado si está "Aprobada" o "Reprobada"
```js 
  const grade = getGradeQualification(scale, 5, 3)
```

## getAverage() : number
Según la escala calcula el promedio en base a un set de notas.
```js
  const average = getAverage(scale, { grades: [3, 4, 6] })
```
Además puede recibir un arreglo de valores con las ponderaciones para calcular el promedio de notas.
```js
  const average = getAverage(scale, { 
    grades: [3, 4, 6],
    weights: [20, 40, 40]
  })
```

## isApproved() : boolean
_** Pendiente_: Calcula la nota si está aprobada o reprobada
```js
  const isApproved = isApproved(scale, 5)
```

## isApprovedStatus(): Object
_** Pendiente_: Calcula la nota si está aprobada o reprobada con formato
```js
  const isApproved = isApproved(scale, 5)
```


## gradeConvert() : number
_** Pendiente_: Pasar una nota a otra escala de nota
```js
  const origin = {
    scale: {},
    grade: 4
  }

  const converted = convertGrade(origin, scale)
```

## License

[MIT](https://tldrlegal.com/license/mit-license)
