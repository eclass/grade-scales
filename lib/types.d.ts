export type Scores = {
  /**
   * Puntos totales.
   */
  total: number

  /**
   * Puntos obtenidos.
   */
  obtained: number
}

/**
 * Formato retorno del calculo una nota.
 *
 * @sample
 * ```json
 * {
 *    value: "2.6",
 *    valueFormatted: "2.6",
 *    status: {
 *      id: 2,
 *      name: "Reprobado",
 *      detail: "La nota está reprobada",
 *      style: "reprobate",
 *      enabled: false
 *    }
 * }
 * ```
 */
export type QualificationType = {
  /**
   * Nota redondeada.
   * - Luego se ocupa como string en la aplicación.
   */
  value: number

  /**
   * Nota redondeada y con formato según su escala.
   */
  valueFormatted: string

  /**
   * Estado de la nota puede ser `Pendiente` | `Aprobada` | `Reprobada`.
   */
  status: {
    /**
     * Estado:
     * - 0: Pendiente.
     * - 1: Aprobada.
     * - 2: Reprobada.
     */
    id: number

    /**
     * Nombre `Pendiente` | `Aprobada` | `Reprobada`.
     */
    name: string

    /**
     * Detalle con la nota.
     */
    detail: string

    /**
     * Estilo css.
     */
    style: string

    /**
     * Si alcanza la nota mínima o no.
     */
    enabled: boolean
  }
}

export interface ScaleAttributes {
  /**
   * Nombre de la Escala.
   */
  name?: string

  /**
   * Llave única de la escala.
   */
  keyname?: string

  /**
   * Nota mínima.
   */
  min: number

  /**
   * Nota máxima.
   */
  max: number

  /**
   * Nota mínima de aprobación.
   */
  passingGrade: number

  /**
   * Ponderación.
   */
  passingPercentage: number

  /**
   * Tipo de redondeo.
   */
  roundType: 'ceil' | 'floor' | null

  /**
   * Caracter previo a la nota formateada.
   */
  prepend: string

  /**
   * Caracter posterior a la nota formateada.
   */
  append: string

  /**
   * Cantidad de decimales.
   */
  decimals: number

  /**
   * Caracter separador.
   */
  decimalSeparator: string
}

export type StatusReturn = {
  /**
   * Los posibles valores indican:
   * - 0: Pendiente
   * - 1: Aprobada
   * - 2: Reprobada.
   */
  id: number

  /**
   * Nombre del estado.
   */
  name: string

  /**
   * Detalle del estado de la nota.
   */
  detail: string

  /**
   * Estilo CSS que se puede aplicar a la nota.
   */
  style: string

  /**
   * El uso es para marcar si está aprobada o reprobada.
   */
  enabled: boolean
}

export type AverageParams = {
  /**
   * Notas.
   */
  grades: number[]

  /**
   * Ponderaciones.
   */
  weights?: number[]
}

export type GradeList = {
  /**
   * Puntos evaluados.
   */
  points: Scores

  /**
   * Nota calculada.
   */
  grade: number

  /**
   * Nota formateada y el estado
   */
  qualification: QualificationType

  /**
   * Estado aprobada o reprobada.
   */
  isApproved: boolean

  /**
   * Nota formateada segun la escala.
   */
  formatted: string
}
