export declare type Scores = {
    /**
     * Puntaje total.
     */
    total: number;
    /**
     * Puntaje Obtenido.
     */
    obtained: number;
};
/**
 * Formato retorno del calculo una nota.
 */
export declare type QualificationType = {
    /**
     * Nota redondeada
     */
    value: number;
    /**
     * Nota redondeada y con formato según su escala.
     */
    valueFormatted: string;
    /**
     * Estado de la nota puede ser `Pendiente` | `Aprobada` | `Reprobada`
     */
    status: {
        /**
         * Estado:
         * - 0: Pendiente.
         * - 1: Aprobada.
         * - 2: Reprobada.
         */
        id: 0 | 1 | 2;
        /**
         * Nombre `Pendiente` | `Aprobada` | `Reprobada`
         */
        name: string;
        /**
         * Detalle con la nota
         */
        detail: string;
        /**
         * estilo css
         */
        style: string;
        /**
         * Si alcanza la nota mínima o no.
         */
        enabled: boolean;
    };
};
export interface ScaleAttributes {
    /**
     * Identificador único del registro
     */
    id?: number;
    /**
     * Fecha de creación del registro.
     */
    created?: Date;
    /**
     * Fecha de la última modificación del registro.
     */
    modified?: Date;
    /**
     * Flag que identifica si el registro está eliminado de la base de datos.
     * Por defecto está en 0 al crearse el registro.
     */
    deleted?: number;
    name?: string;
    keyname?: string;
    min?: number;
    max?: number;
    passingGrade?: number;
    passingPercentage?: number;
    roundType?: string;
    prepend?: string;
    append?: string;
    decimals?: number;
    decimalSeparator?: string;
}
export declare type StatusReturn = {
    /**
     * Los posibles valores indican:
     * - 0: Pendiente
     * - 1: Aprobada
     * - 2: Reprobada.
     */
    id: number;
    /**
     * Nombre del estado.
     */
    name: string;
    /**
     * Detalle del estado de la nota.
     */
    detail: string;
    /**
     * Estilo CSS que se puede aplicar a la nota.
     */
    style: string;
    /**
     * El uso es para marcar si está aprobada o reprobada
     */
    enabled: boolean;
};
//# sourceMappingURL=types.d.ts.map