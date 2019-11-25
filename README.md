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
Las funciones principales nos permiten calcular las notas y formatearlas.

## getGrade() : number
En base a una escala se calcula la nota según los puntos totales y los obtenidos.
```js
  const grade = getGrade(scale, 10, 6)
  // output: console.log({ grade })
  { grade: 4.6 }
```

## getGradeFormatted(): Object
Devuelve la nota formateada con el estado si está "Aprobada" o "Reprobada"
```js 
  const grade = getGradeQualification(scale, 10, 6)
  // output: console.log({ grade })
  {
    value: 4.6,
    valueFormatted: '4,6',
    status: {
      id: 1,
      name: 'Aprobado',
      detail: 'La nota está aprobada',
      style: 'approved',
      enabled: true
    }
  }
```
## getQualification(): Object
Si tenemos la nota ya calculada podemos darle formato con la función
```js 
  const qualification = getQualification(scale, 5.6)
  // output: console.log({ qualification })
  {
    value: 5.6,
    valueFormatted: '5,6',
    status: {
      id: 1,
      name: 'Aprobado',
      detail: 'La nota está aprobada',
      style: 'approved',
      enabled: true
    }
  }
```

## getAverage() : number
Según la escala calcula el promedio en base a un set de notas.
```js
  const average = getAverage(scale, { grades: [3, 4, 6] })
  // output: console.log({ average })
  {
    average: {
      value: 4.7,
      valueFormatted: '4,7',
      status: {
        id: 1,
        name: 'Aprobado',
        detail: 'La nota está aprobada',
        style: 'approved',
        enabled: true
      }
    }
  }
```
Además puede recibir un arreglo de valores con las ponderaciones para calcular el promedio de notas.
```js
  const average = getAverage(scale, { 
    grades: [3, 4, 7],
    weights: [20, 30, 50]
  })
  // output
  {: console.log({ // })
    average: {
      value: 5.3,
      valueFormatted: '5,3',
      status: {
        id: 1,
        name: 'Aprobado',
        detail: 'La nota está aprobada',
        style: 'approved',
        enabled: true
      }
    }
  }
```

## convertToScale() : number
Transforma una nota de una escala a otra.
```js
  const newScale = {
    name: 'Porcentaje (1-100%, aprobación 60%, nota 70)',
    keyname: 'Porcentaje_1-100_60',
    min: 1,
    max: 100,
    passingGrade: 70,
    passingPercentage: 60,
    roundType: 'round',
    prepend: '',
    append: '%',
    decimals: 0,
    decimalSeparator: ','
  }

  const converted = convertToScale({ scale, grade: 4.8 }, newScale)
  // output: console.log({ converted })
  { converted: 64 }
```

## getGrades() : Array<GradeList>
Calcula todas las notas de una escala según el puntaje máximo
```js
  const grades = getGrades(scale, 1, 0)
  // output: console.log({ grades })
  [
    {
      points: { obtained: 0, total: 1 },
      grade: 1,
      qualification: { value: 1, valueFormatted: '1', status: [Object] },
      isApproved: false,
      formatted: '1'
    },
    {
      points: { obtained: 1, total: 1 },
      grade: 7,
      qualification: { value: 7, valueFormatted: '7', status: [Object] },
      isApproved: true,
      formatted: '7'
    }
  ]
```

# Otras funciones

## gradeFormat(): string
Formatea una nota según el estilo de la escala.
```js
  const format = gradeFormat(scale, 2.5)
  // output: console.log({ format })
  { format: '2,5' }
```

## gradeIsApproved() : boolean
Calcula la nota si está aprobada o reprobada
```js
  const isApproved = gradeIsApproved(scale, 5)
  // output: console.log({ isApproved })
  { isApproved: true }
```

## gradeRound() : number
Calcula la nota si está aprobada o reprobada
```js
  const rounded = gradeRound(scale, 5.3551)
  // output: console.log({ rounded })
  { rounded: 5.4 }
```

## gradeStatus(): QualificationType

Calcula la nota si está aprobada o reprobada con formato
```js
  const status = gradeStatus(scale, 4.3)
  // output: console.log({ status })
  {
    status: {
      id: 1,
      name: 'Aprobado',
      detail: 'La nota está aprobada',
      style: 'approved',
      enabled: true
    }
  }
```

## License

[MIT](https://tldrlegal.com/license/mit-license)
