let alumnograduacion_def_tests = Array(
    
  // Campo = `alumnograduacion_login` varchar(15) NOT NULL DEFAULT (min: 4, max: 15)
    // Action: ADD
    Array('alumnograduacion','alumnograduacion_login',1,'cumple tamaño minimo','ADD','alumnograduacion_login_min_size_KO','Tamaño muy corto. Debe estar entre 4 y 15 caracteres'),
    Array('alumnograduacion','alumnograduacion_login',2,'cumple tamaño maximo','ADD','alumnograduacion_login_max_size_KO','Tamaño muy grande. Debe estar entre 4 y 15 caracteres'),
    Array('alumnograduacion','alumnograduacion_login',3,'cumple formato','ADD','alumnograduacion_login_format_KO','Formato inválido. Debe contener alfabéticos sin acentos ni ñ'),
    Array('alumnograduacion','alumnograduacion_login',4,'es correcto','ADD',true,'Login alumnograduacion_login (ADD) correcto'),

    // Action: EDIT
    ['alumnograduacion','alumnograduacion_login',5,'cumple tamaño minimo','EDIT','alumnograduacion_login_min_size_KO','Tamaño muy corto. Debe estar entre 4 y 15 caracteres'],
    ['alumnograduacion','alumnograduacion_login',6,'cumple tamaño maximo','EDIT','alumnograduacion_login_max_size_KO','Tamaño muy grande. Debe estar entre 4 y 15 caracteres'],
    ['alumnograduacion','alumnograduacion_login',7,'cumple formato','EDIT','alumnograduacion_login_format_KO','Formato inválido. Debe contener alfabéticos sin acentos ni ñ'],
    ['alumnograduacion','alumnograduacion_login',8,'es correcto','EDIT',true,'Login alumnograduacion_login (EDIT) correcto'],

    // Action: SEARCH
    Array('alumnograduacion','alumnograduacion_login',9,'cumple tamaño maximo','SEARCH','alumnograduacion_login_max_size_KO','Tamaño muy grande. Como máximo 15 caracteres'),
    Array('alumnograduacion','alumnograduacion_login',10,'cumple formato','SEARCH','alumnograduacion_login_format_KO','Formato inválido. Debe contener alfabéticos sin acentos ni ñ'),
    Array('alumnograduacion','alumnograduacion_login',11,'es correcto','SEARCH',true,'Login alumnograduacion_login (SEARCH) correcto'),

  // Campo = `alumnograduacion_password` varchar(64) NOT NULL DEFAULT (min: 8, max: 100)
    // Action: ADD
    Array('alumnograduacion','alumnograduacion_password',12,'cumple tamaño minimo','ADD','alumnograduacion_password_min_size_KO','Tamaño muy corto. Debe estar entre 8 y 64 caracteres'),
    Array('alumnograduacion','alumnograduacion_password',13,'cumple tamaño maximo','ADD','alumnograduacion_password_max_size_KO','Tamaño muy grande. Debe estar entre 8 y 64 caracteres'),
    Array('alumnograduacion','alumnograduacion_password',14,'cumple formato','ADD','alumnograduacion_password_format_KO','Formato inválido. Debe contener alfabéticos (se permite espacios) sin acentos ni ñ'),
    Array('alumnograduacion','alumnograduacion_password',15,'es correcto','ADD',true,'Login alumnograduacion_password (ADD) correcto'),

    // Action: EDIT
    ['alumnograduacion','alumnograduacion_password',16,'cumple tamaño minimo','EDIT','alumnograduacion_password_min_size_KO','Tamaño muy corto. Debe estar entre 8 y 64 caracteres'],
    ['alumnograduacion','alumnograduacion_password',17,'cumple tamaño maximo','EDIT','alumnograduacion_password_max_size_KO','Tamaño muy grande. Debe estar entre 8 y 64 caracteres'],
    ['alumnograduacion','alumnograduacion_password',18,'cumple formato','EDIT','alumnograduacion_password_format_KO','Formato inválido. Debe contener alfabéticos (se permite espacios) sin acentos ni ñ'],
    ['alumnograduacion','alumnograduacion_password',19,'es correcto','EDIT',true,'Login alumnograduacion_password (EDIT) correcto'],

    // Action: SEARCH
    Array('alumnograduacion','alumnograduacion_password',20,'cumple tamaño maximo','SEARCH','alumnograduacion_password_max_size_KO','Tamaño muy grande. Como máximo 64 caracteres'),
    Array('alumnograduacion','alumnograduacion_password',21,'cumple formato','SEARCH','alumnograduacion_password_format_KO','Formato inválido. Debe contener alfabéticos (se permite espacios) sin acentos ni ñ'),
    Array('alumnograduacion','alumnograduacion_password',22,'es correcto','SEARCH',true,'Login alumnograduacion_password (SEARCH) correcto'),
  
  // Campo = `alumnograduacion_nombre` varchar(25) NOT NULL DEFAULT (min: 2, max: 25)
    // Action: ADD
    Array('alumnograduacion','alumnograduacion_nombre',23,'cumple tamaño minimo','ADD','alumnograduacion_nombre_min_size_KO','Tamaño muy corto. Debe estar entre 2 y 25 caracteres'),
    Array('alumnograduacion','alumnograduacion_nombre',24,'cumple tamaño maximo','ADD','alumnograduacion_nombre_max_size_KO','Tamaño muy grande. Debe estar entre 2 y 25 caracteres'),
    Array('alumnograduacion','alumnograduacion_nombre',25,'cumple formato','ADD','alumnograduacion_nombre_format_KO','Formato inválido. Debe contener alfabéticos (se permite espacios, acentos y ñ)'),
    Array('alumnograduacion','alumnograduacion_nombre',26,'es correcto','ADD',true,'Login alumnograduacion_nombre (ADD) correcto'),

    // Action: EDIT
    ['alumnograduacion','alumnograduacion_nombre',27,'cumple tamaño minimo','EDIT','alumnograduacion_nombre_min_size_KO','Tamaño muy corto. Debe estar entre 2 y 25 caracteres'],
    ['alumnograduacion','alumnograduacion_nombre',28,'cumple tamaño maximo','EDIT','alumnograduacion_nombre_max_size_KO','Tamaño muy grande. Debe estar entre 2 y 25 caracteres'],
    ['alumnograduacion','alumnograduacion_nombre',29,'cumple formato','EDIT','alumnograduacion_nombre_format_KO','Formato inválido. Debe contener alfabéticos (se permite espacios, acentos y ñ)'],
    ['alumnograduacion','alumnograduacion_nombre',30,'es correcto','EDIT',true,'Login alumnograduacion_nombre (EDIT) correcto'],

    // Action: SEARCH
    Array('alumnograduacion','alumnograduacion_nombre',31,'cumple tamaño maximo','SEARCH','alumnograduacion_nombre_max_size_KO','Tamaño muy grande. Como máximo 25 caracteres'),
    Array('alumnograduacion','alumnograduacion_nombre',32,'cumple formato','SEARCH','alumnograduacion_nombre_format_KO','Formato inválido. Debe contener alfabéticos (se permite espacios, acentos y ñ)'),
    Array('alumnograduacion','alumnograduacion_nombre',33,'es correcto','SEARCH',true,'Login alumnograduacion_nombre (SEARCH) correcto'),

  // Campo = `alumnograduacion_apellidos` varchar(35) NOT NULL DEFAULT (min: 2, max: 35)
    // Action: ADD
    Array('alumnograduacion','alumnograduacion_nombre',23,'cumple tamaño minimo','ADD','alumnograduacion_nombre_min_size_KO','Tamaño muy corto. Debe estar entre 2 y 25 caracteres'),
    Array('alumnograduacion','alumnograduacion_nombre',24,'cumple tamaño maximo','ADD','alumnograduacion_nombre_max_size_KO','Tamaño muy grande. Debe estar entre 2 y 25 caracteres'),
    Array('alumnograduacion','alumnograduacion_nombre',25,'cumple formato','ADD','alumnograduacion_nombre_format_KO','Formato inválido. Debe contener alfabéticos (se permite espacios, acentos y ñ)'),
    Array('alumnograduacion','alumnograduacion_nombre',26,'es correcto','ADD',true,'Login alumnograduacion_nombre (ADD) correcto'),

    // Action: EDIT
    ['alumnograduacion','alumnograduacion_nombre',27,'cumple tamaño minimo','EDIT','alumnograduacion_nombre_min_size_KO','Tamaño muy corto. Debe estar entre 2 y 25 caracteres'],
    ['alumnograduacion','alumnograduacion_nombre',28,'cumple tamaño maximo','EDIT','alumnograduacion_nombre_max_size_KO','Tamaño muy grande. Debe estar entre 2 y 25 caracteres'],
    ['alumnograduacion','alumnograduacion_nombre',29,'cumple formato','EDIT','alumnograduacion_nombre_format_KO','Formato inválido. Debe contener alfabéticos (se permite espacios, acentos y ñ)'],
    ['alumnograduacion','alumnograduacion_nombre',30,'es correcto','EDIT',true,'Login alumnograduacion_nombre (EDIT) correcto'],

    // Action: SEARCH
    Array('alumnograduacion','alumnograduacion_nombre',31,'cumple tamaño maximo','SEARCH','alumnograduacion_nombre_max_size_KO','Tamaño muy grande. Como máximo 25 caracteres'),
    Array('alumnograduacion','alumnograduacion_nombre',32,'cumple formato','SEARCH','alumnograduacion_nombre_format_KO','Formato inválido. Debe contener alfabéticos (se permite espacios, acentos y ñ)'),
    Array('alumnograduacion','alumnograduacion_nombre',33,'es correcto','SEARCH',true,'Login alumnograduacion_nombre (SEARCH) correcto'),

  // Campo = `alumnograduacion_titulacion` enum('GREI','GRIA','MEI','MIA','PCEO') NOT NULL DEFAULT 'GREI'
    // Action: ADD
    Array('alumnograduacion','alumnograduacion_titulacion',34,'vacio','ADD','alumnograduacion_titulacion_vacio_KO','No puede estar vacío'),
    Array('alumnograduacion','alumnograduacion_titulacion',35,'cumple formato','ADD','alumnograduacion_titulacion_format_KO','Formatos válidos: "GREI", "GRIA", "MEI", "MIA", "PCEO"'),
    Array('alumnograduacion','alumnograduacion_titulacion',36,'es correcto','ADD',true,'Login alumnograduacion_titulacion (ADD) correcto'),

    // Action: EDIT
    ['alumnograduacion','alumnograduacion_titulacion',37,'vacio','EDIT','alumnograduacion_titulacion_vacio_KO','No puede estar vacío'],
    ['alumnograduacion','alumnograduacion_titulacion',38,'cumple formato','EDIT','alumnograduacion_titulacion_format_KO','Formatos válidos: "GREI", "GRIA", "MEI", "MIA", "PCEO"'],
    ['alumnograduacion','alumnograduacion_titulacion',39,'es correcto','EDIT',true,'Login alumnograduacion_titulacion (EDIT) correcto'],

    // Action: SEARCH
    Array('alumnograduacion','alumnograduacion_titulacion',40,'cumple tamaño maximo','SEARCH','alumnograduacion_titulacion_max_size_KO','Tamaño muy grande. El máximo es 4'),
    Array('alumnograduacion','alumnograduacion_titulacion',41,'cumple formato','SEARCH','alumnograduacion_titulacion_format_KO','Formato inválido. Solo puede ser: "GREI", "GRIA", "MEI", "MIA", "PCEO"'),
    Array('alumnograduacion','alumnograduacion_titulacion',42,'es correcto','SEARCH',true,'Login alumnograduacion_titulacion (SEARCH) correcto'),

  // Campo = `alumnograduacion_dni` varchar(9) NOT NULL DEFAULT (formato dni. Min: 9, Max: 9)
    
  /*
    // ficheros
    Array('alumnograduacion','nuevo_foto_alumnograduacion',11,'existe fichero','ADD','nuevo_foto_alumnograduacion_not_exist_file_KO','El fichero no existe. Debe subir una foto'),
    Array('alumnograduacion','nuevo_foto_alumnograduacion',12,'cumple nombre fichero','ADD','nuevo_foto_alumnograduacion_format_name_file_KO','el nombre de fichero no cumple formato.'),
    Array('alumnograduacion','nuevo_foto_alumnograduacion',13,'cumple tipo fichero','ADD','nuevo_foto_alumnograduacion_type_file_KO','el tipo de fichero no esta permitido'),
    Array('alumnograduacion','nuevo_foto_alumnograduacion',14,'cumple tamaño maximo fichero','ADD','nuevo_foto_alumnograduacion_max_size_file_KO','el tamaño del fichero es muy grande.'),
    Array('alumnograduacion','nuevo_foto_alumnograduacion',15,'cumple tamaño minimo nombre fichero','ADD','nuevo_foto_alumnograduacion_min_size_name_KO','el tamaño del nombre de fichero es muy pequeño'),
    Array('alumnograduacion','nuevo_foto_alumnograduacion',16,'cumple tamaño maximo nombre fichero','ADD','nuevo_foto_alumnograduacion_max_size_name_KO','el tamaño del nombre de fichero es muy grande.'),
    Array('alumnograduacion','nuevo_foto_alumnograduacion',17,'fichero ok','ADD',true,'ok'),
    Array('alumnograduacion','nuevo_foto_alumnograduacion',18,'no existe fichero','EDIT',true,'ok'),
    Array('alumnograduacion','nuevo_foto_alumnograduacion',19,'cumple nombre fichero','EDIT','nuevo_foto_alumnograduacion_format_name_file_KO','el nombre de fichero no cumple formato.'),
    Array('alumnograduacion','nuevo_foto_alumnograduacion',20,'cumple tipo fichero','EDIT','nuevo_foto_alumnograduacion_type_file_KO','el tipo de fichero no esta permitido'),
    Array('alumnograduacion','nuevo_foto_alumnograduacion',21,'cumple tamaño maximo fichero','EDIT','nuevo_foto_alumnograduacion_max_size_file_KO','el tamaño del fichero es muy grande.'),
    Array('alumnograduacion','nuevo_foto_alumnograduacion',22,'cumple tamaño minimo nombre fichero','EDIT','nuevo_foto_alumnograduacion_min_size_name_KO','el tamaño del nombre de fichero es muy pequeño'),
    Array('alumnograduacion','nuevo_foto_alumnograduacion',23,'cumple tamaño maximo nombre fichero','EDIT','nuevo_foto_alumnograduacion_max_size_name_KO','el tamaño del nombre de fichero es muy grande.'),
    Array('alumnograduacion','nuevo_foto_alumnograduacion',24,'fichero ok','EDIT',true,'ok'),
*/
    
);

let alumnograduacion_tests_fields = Array(
  // Campo = `alumnograduacion_login` varchar(15) NOT NULL DEFAULT (min: 4, max: 15)
    // Action: ADD
    Array('alumnograduacion','alumnograduacion_login',1,1,'ADD',[{alumnograduacion_login:'aa'}],'alumnograduacion_login_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_login',2,2,'ADD',[{alumnograduacion_login:'a'.repeat(20)}],'alumnograduacion_login_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_login',3,3,'ADD',[{alumnograduacion_login:'aaaaáaa'}],'alumnograduacion_login_format_KO'),
    Array('alumnograduacion','alumnograduacion_login',3,4,'ADD',[{alumnograduacion_login:'aaaañaa'}],'alumnograduacion_login_format_KO'),
    Array('alumnograduacion','alumnograduacion_login',3,5,'ADD',[{alumnograduacion_login:'aaaaÓaa'}],'alumnograduacion_login_format_KO'),
    Array('alumnograduacion','alumnograduacion_login',3,6,'ADD',[{alumnograduacion_login:'aaaaÜaa'}],'alumnograduacion_login_format_KO'), // Esto lo voy a contar como acento, lo compruebo con la expresion regular "/[áéíóúÁÉÍÓÚüÜñÑ]/"
    Array('alumnograduacion','alumnograduacion_login',3,7,'ADD',[{alumnograduacion_login:'aaaaaa1'}],'alumnograduacion_login_format_KO'),
    Array('alumnograduacion','alumnograduacion_login',4,8,'ADD',[{alumnograduacion_login:'javi'}],true),

    // Action: EDIT
    Array('alumnograduacion','alumnograduacion_login',5,9,'EDIT',[{alumnograduacion_login:'aa'}],'alumnograduacion_login_min_size_KO'),
    Array('alumnograduacion','alumnograduacion_login',6,10,'EDIT',[{alumnograduacion_login:'a'.repeat(20)}],'alumnograduacion_login_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_login',7,11,'EDIT',[{alumnograduacion_login:'aaaaÍaa'}],'alumnograduacion_login_format_KO'),
    Array('alumnograduacion','alumnograduacion_login',7,12,'EDIT',[{alumnograduacion_login:'aaaañaa'}],'alumnograduacion_login_format_KO'),
    Array('alumnograduacion','alumnograduacion_login',7,13,'EDIT',[{alumnograduacion_login:'aaaaéaa'}],'alumnograduacion_login_format_KO'),
    Array('alumnograduacion','alumnograduacion_login',7,14,'EDIT',[{alumnograduacion_login:'aaaaüaa'}],'alumnograduacion_login_format_KO'), // Esto lo voy a contar como acento, lo compruebo con la expresion regular "/[áéíóúÁÉÍÓÚüÜñÑ]/"
    Array('alumnograduacion','alumnograduacion_login',7,15,'EDIT',[{alumnograduacion_login:'aaaaaa1'}],'alumnograduacion_login_format_KO'),
    Array('alumnograduacion','alumnograduacion_login',8,16,'EDIT',[{alumnograduacion_login:'javi'}],true),

    // Action: SEARCH
    Array('alumnograduacion','alumnograduacion_login',11,17,'SEARCH',[{alumnograduacion_login:'a'}],true),
    Array('alumnograduacion','alumnograduacion_login',9,18,'SEARCH',[{alumnograduacion_login:'a'.repeat(20)}],'alumnograduacion_login_max_size_KO'),
    Array('alumnograduacion','alumnograduacion_login',10,19,'SEARCH',[{alumnograduacion_login:'aaaaáaa'}],'alumnograduacion_login_format_KO'),
    Array('alumnograduacion','alumnograduacion_login',10,20,'SEARCH',[{alumnograduacion_login:'aaaañaa'}],'alumnograduacion_login_format_KO'),
    Array('alumnograduacion','alumnograduacion_login',10,21,'SEARCH',[{alumnograduacion_login:'aaaaÓaa'}],'alumnograduacion_login_format_KO'),
    Array('alumnograduacion','alumnograduacion_login',10,22,'SEARCH',[{alumnograduacion_login:'aaaaÜaa'}],'alumnograduacion_login_format_KO'), // Esto lo voy a contar como acento, lo compruebo con la expresion regular "/[áéíóúÁÉÍÓÚüÜñÑ]/"
    Array('alumnograduacion','alumnograduacion_login',10,23,'SEARCH',[{alumnograduacion_login:'aaaaaa1'}],'alumnograduacion_login_format_KO'),
    Array('alumnograduacion','alumnograduacion_login',11,24,'SEARCH',[{alumnograduacion_login:'javi'}],true),

  // Campo = `alumnograduacion_password` varchar(64) NOT NULL DEFAULT (min: 8, max: 100)
    
);
/*
la entidad, 
el campo, 
el número de definición de test, 
el número de prueba (secuencial desde 1 hasta el final)
la acción a realizar
el parámetro a probar (max_size_file, type_file, format_name_file)
el valor de parámetro a probar
el codigo asociado de error/valor true de exito
*/
let alumnograduacion_tests_files = Array(
   Array('alumnograduacion','nuevo_foto_alumnograduacion',11,5,'ADD','existe',[],'nuevo_foto_alumnograduacion_not_exist_file_KO'),
 /*   Array('alumnograduacion','nuevo_foto_alumnograduacion',6,6,'ADD','cumple nombre fichero',Array('1111','image/jpeg',20000),'nuevo_foto_alumnograduacion_format_name_file_KO'),
    Array('alumnograduacion','nuevo_foto_alumnograduacion',7,6,'ADD','type_file',Array('nombrejpg','img/pdf',20000),'nuevo_foto_alumnograduacion_type_file_KO'),
 */   ['alumnograduacion','nuevo_foto_alumnograduacion',14,8,'ADD','max_size_name',Array({format_name_file:'nombrejpg.jpg'},{type_file:'image/jpeg'},{max_size_file:2000000000}),'nuevo_foto_alumnograduacion_max_size_file_KO'],
 Array('alumnograduacion','nuevo_foto_alumnograduacion',17,9,'ADD','empty_file',Array({format_name_file:'nombrejpg.jpg'},{type_file:'image/jpeg'},{max_size_file:200}),true),
 /*   Array('alumnograduacion','nuevo_foto_alumnograduacion',9,9,'ADD','min_size_name',Array('g','image/jpeg',20000),'nuevo_foto_alumnograduacion_min_size_name_KO'),
    Array('alumnograduacion','nuevo_foto_alumnograduacion',10,10,'ADD','max_size_name',Array('a'.repeat(101),'image/jpeg',20000),'nuevo_foto_alumnograduacion_max_size_name_KO'),
    Array('alumnograduacion','nuevo_foto_alumnograduacion',11,11,'ADD','fichero ok',Array('nombrejpg','image/jpeg',20000),true),
    Array('alumnograduacion','nuevo_foto_alumnograduacion',12,12,'EDIT','noexiste',Array(),true),
    Array('alumnograduacion','nuevo_foto_alumnograduacion',13,13,'EDIT','cumple nombre fichero',Array('1111','image/jpeg',20000),'nuevo_foto_alumnograduacion_format_name_file_KO'),
    Array('alumnograduacion','nuevo_foto_alumnograduacion',14,14,'EDIT','type_file',Array('nombrejpg','img/pdf',20000),'nuevo_foto_alumnograduacion_type_file_KO'),
    Array('alumnograduacion','nuevo_foto_alumnograduacion',15,15,'EDIT','max_size_file',Array('nombrejpg','image/jpeg',200000000),'nuevo_foto_alumnograduacion_max_size_file_KO'),
    Array('alumnograduacion','nuevo_foto_alumnograduacion',16,16,'EDIT','min_size_name',Array('g','image/jpeg',20000),'nuevo_foto_alumnograduacion_min_size_name_KO'),
    Array('alumnograduacion','nuevo_foto_alumnograduacion',17,17,'EDIT','max_size_name',Array('a'.repeat(101),'image/jpeg',20000),'nuevo_foto_alumnograduacion_max_size_name_KO'),
    Array('alumnograduacion','nuevo_foto_alumnograduacion',18,18,'EDIT','fichero ok',Array('nombrejpg','image/jpeg',20000),true),
  */  
    



);