// Definicios test
const alumnograduacion_def_tests = Array(
    // Formato test: Array(Entidad, Campo, Número, Descripción, Resultado esperado, Código respuesta, Mensaje respuesta),
    // Código respuesta = campo__tipoTest__resultado
    // Entidad = alumnograduacion

    //Campo = `alumnograduacion_login` varchar(15) NOT NULL DEFAULT (min: 4, max: 15)
    Array("alumnograduacion", "alumnograduacion_login", 1, "Cumple tamaño mínimo 4", false, "login__min_size__KO", "Error de tamaño mínimo. Debe tener como mínimo 4 caracteres." ),

    //Campo = `alumnograduacion_password` varchar(64) NOT NULL DEFAULT (min: 8, max: 100)
    Test("alumnograduacion", "alumnograduacion_password", 2, "Cumple tamaño mínimo 8", false, "password__min_size__KO", "Error de tamaño mínimo. Debe tener como mínimo 8 caracteres." )

    //Campo = `alumnograduacion_nombre` varchar(25) NOT NULL DEFAULT (min: 2, max: 25)

    //Campo = `alumnograduacion_apellidos` varchar(35) NOT NULL DEFAULT (min: 2, max: 35)

    //Campo = `alumnograduacion_titulacion` enum('GREI','GRIA','MEI','MIA','PCEO') NOT NULL DEFAULT 'GREI'

    //Campo = `alumnograduacion_dni` varchar(9) NOT NULL DEFAULT (formato dni. Min: 9, Max: 9)

    //Campo = `alumnograduacion_telefono` varchar(9) NOT NULL DEFAULT (9 dígitos(0 - 9). Min: 9, Max: 9)

    //Campo = `alumnograduacion_direccion` varchar(100) NOT NULL DEFAULT (alfa-numerico con acentos y ñ y espacios. Max: 100)

    //Campo = `alumnograduacion_email` varchar(40) NOT NULL DEFAULT (formato email. Max: 40)

    //Campo = `alumnograduacion_fotoacto` varchar(40) NOT NULL DEFAULT (alfabéticos (sin acentos y ñ ni espacios) y ".". Min: 7, Max: 100)
);


// Pruebas test menos para files
const alumnograduacion_tests_fields = Array();

// Pruebas test para files
const alumnograduacion_tests_files = Array();

class Test{
    /**
     * 
     * @param {String} entidad 
     * @param {String} campo 
     * @param {Number} numero 
     * @param {String} descripcion 
     * @param {Boolean} resultado_esperado 
     * @param {String} codigo_respuesta 
     * @param {String} mensaje_respuesta 
     */
    constructor(entidad, campo, numero, descripcion, resultado_esperado, codigo_respuesta, mensaje_respuesta){
        this.entidad = entidad;
        this.campo = campo;
        this.numero = numero;
        this.descripcion = descripcion;
        this.resultado_esperado = resultado_esperado;
        this.codigo_respuesta = codigo_respuesta;
        this.mensaje_respuesta = mensaje_respuesta;
    }
}