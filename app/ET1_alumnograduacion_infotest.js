let alumnograduacion_def_tests = Array(
    
  // Campo = `alumnograduacion_login` varchar(15) NOT NULL DEFAULT (min: 4, max: 15)
    // Action: ADD
    Array('alumnograduacion','alumnograduacion_login',1,'cumple tamaño minimo','ADD','alumnograduacion_login_min_size_KO','Tamaño muy corto. Debe estar entre 4 y 15 caracteres'),
    ['alumnograduacion', 'alumnograduacion_login',2,'no contiene espacios','ADD', 'alumnograduacion_login_space_KO', 'No se permite espacios'],
    Array('alumnograduacion','alumnograduacion_login',3,'cumple tamaño maximo','ADD','alumnograduacion_login_max_size_KO','Tamaño muy grande. Debe estar entre 4 y 15 caracteres'),
    Array('alumnograduacion','alumnograduacion_login',4,'cumple formato','ADD','alumnograduacion_login_format_KO','Formato inválido. Debe contener alfabéticos sin acentos ni ñ'),
    Array('alumnograduacion','alumnograduacion_login',5,'es correcto','ADD',true,'Login alumnograduacion_login (ADD) correcto'),

    // Action: EDIT
    ['alumnograduacion','alumnograduacion_login',6,'cumple tamaño minimo','EDIT','alumnograduacion_login_min_size_KO','Tamaño muy corto. Debe estar entre 4 y 15 caracteres'],
    ['alumnograduacion', 'alumnograduacion_login',7,'no contiene espacios','ADD', 'alumnograduacion_login_space_KO', 'No se permite espacios'],
    ['alumnograduacion','alumnograduacion_login',8,'cumple tamaño maximo','EDIT','alumnograduacion_login_max_size_KO','Tamaño muy grande. Debe estar entre 4 y 15 caracteres'],
    ['alumnograduacion','alumnograduacion_login',9,'cumple formato','EDIT','alumnograduacion_login_format_KO','Formato inválido. Debe contener alfabéticos sin acentos ni ñ'],
    ['alumnograduacion','alumnograduacion_login',10,'es correcto','EDIT',true,'Login alumnograduacion_login (EDIT) correcto'],

    // Action: SEARCH
    Array('alumnograduacion','alumnograduacion_login',11,'cumple tamaño maximo','SEARCH','alumnograduacion_login_max_size_KO','Tamaño muy grande. Como máximo 15 caracteres'),
    Array('alumnograduacion','alumnograduacion_login',12,'cumple formato','SEARCH','alumnograduacion_login_format_KO','Formato inválido. Debe contener alfabéticos sin acentos ni ñ'),
    Array('alumnograduacion','alumnograduacion_login',13,'es correcto','SEARCH',true,'Login alumnograduacion_login (SEARCH) correcto'),

  // Campo = `alumnograduacion_password` varchar(64) NOT NULL DEFAULT (min: 8, max: 64)
    // Action: ADD
    Array('alumnograduacion','alumnograduacion_password',14,'cumple tamaño minimo','ADD','alumnograduacion_password_min_size_KO','Tamaño muy corto. Debe estar entre 8 y 64 caracteres'),
    Array('alumnograduacion','alumnograduacion_password',15,'cumple tamaño maximo','ADD','alumnograduacion_password_max_size_KO','Tamaño muy grande. Debe estar entre 8 y 64 caracteres'),
    Array('alumnograduacion','alumnograduacion_password',16,'cumple formato','ADD','alumnograduacion_password_format_KO','Formato inválido. Debe contener alfabéticos (se permite espacios) sin acentos ni ñ'),
    Array('alumnograduacion','alumnograduacion_password',17,'es correcto','ADD',true,'Login alumnograduacion_password (ADD) correcto'),

    // Action: EDIT
    ['alumnograduacion','alumnograduacion_password',18,'cumple tamaño minimo','EDIT','alumnograduacion_password_min_size_KO','Tamaño muy corto. Debe estar entre 8 y 64 caracteres'],
    ['alumnograduacion','alumnograduacion_password',19,'cumple tamaño maximo','EDIT','alumnograduacion_password_max_size_KO','Tamaño muy grande. Debe estar entre 8 y 64 caracteres'],
    ['alumnograduacion','alumnograduacion_password',20,'cumple formato','EDIT','alumnograduacion_password_format_KO','Formato inválido. Debe contener alfabéticos (se permite espacios) sin acentos ni ñ'],
    ['alumnograduacion','alumnograduacion_password',21,'es correcto','EDIT',true,'Login alumnograduacion_password (EDIT) correcto'],

    // Action: SEARCH
    Array('alumnograduacion','alumnograduacion_password',22,'cumple tamaño maximo','SEARCH','alumnograduacion_password_max_size_KO','Tamaño muy grande. Como máximo 64 caracteres'),
    Array('alumnograduacion','alumnograduacion_password',23,'cumple formato','SEARCH','alumnograduacion_password_format_KO','Formato inválido. Debe contener alfabéticos (se permite espacios) sin acentos ni ñ'),
    Array('alumnograduacion','alumnograduacion_password',24,'es correcto','SEARCH',true,'Login alumnograduacion_password (SEARCH) correcto'),
  
  // Campo = `alumnograduacion_nombre` varchar(25) NOT NULL DEFAULT (min: 2, max: 25)
    // Action: ADD
    Array('alumnograduacion','alumnograduacion_nombre',25,'cumple tamaño minimo','ADD','alumnograduacion_nombre_min_size_KO','Tamaño muy corto. Debe estar entre 2 y 25 caracteres'),
    Array('alumnograduacion','alumnograduacion_nombre',26,'cumple tamaño maximo','ADD','alumnograduacion_nombre_max_size_KO','Tamaño muy grande. Debe estar entre 2 y 25 caracteres'),
    Array('alumnograduacion','alumnograduacion_nombre',27,'cumple formato','ADD','alumnograduacion_nombre_format_KO','Formato inválido. Debe contener alfabéticos (se permite espacios, acentos y ñ)'),
    Array('alumnograduacion','alumnograduacion_nombre',28,'es correcto','ADD',true,'Login alumnograduacion_nombre (ADD) correcto'),

    // Action: EDIT
    ['alumnograduacion','alumnograduacion_nombre',29,'cumple tamaño minimo','EDIT','alumnograduacion_nombre_min_size_KO','Tamaño muy corto. Debe estar entre 2 y 25 caracteres'],
    ['alumnograduacion','alumnograduacion_nombre',30,'cumple tamaño maximo','EDIT','alumnograduacion_nombre_max_size_KO','Tamaño muy grande. Debe estar entre 2 y 25 caracteres'],
    ['alumnograduacion','alumnograduacion_nombre',31,'cumple formato','EDIT','alumnograduacion_nombre_format_KO','Formato inválido. Debe contener alfabéticos (se permite espacios, acentos y ñ)'],
    ['alumnograduacion','alumnograduacion_nombre',32,'es correcto','EDIT',true,'Login alumnograduacion_nombre (EDIT) correcto'],

    // Action: SEARCH
    Array('alumnograduacion','alumnograduacion_nombre',33,'cumple tamaño maximo','SEARCH','alumnograduacion_nombre_max_size_KO','Tamaño muy grande. Como máximo 25 caracteres'),
    Array('alumnograduacion','alumnograduacion_nombre',34,'cumple formato','SEARCH','alumnograduacion_nombre_format_KO','Formato inválido. Debe contener alfabéticos (se permite espacios, acentos y ñ)'),
    Array('alumnograduacion','alumnograduacion_nombre',35,'es correcto','SEARCH',true,'Login alumnograduacion_nombre (SEARCH) correcto'),

  // Campo = `alumnograduacion_apellidos` varchar(35) NOT NULL DEFAULT (min: 2, max: 35)
    // Action: ADD
    Array('alumnograduacion','alumnograduacion_apellidos',36,'cumple tamaño minimo','ADD','alumnograduacion_apellidos_min_size_KO','Tamaño muy corto. Debe estar entre 2 y 35 caracteres'),
    Array('alumnograduacion','alumnograduacion_apellidos',37,'cumple tamaño maximo','ADD','alumnograduacion_apellidos_max_size_KO','Tamaño muy grande. Debe estar entre 2 y 35 caracteres'),
    Array('alumnograduacion','alumnograduacion_apellidos',38,'cumple formato','ADD','alumnograduacion_apellidos_format_KO','Formato inválido. Debe contener alfabéticos (se permite espacios, acentos y ñ)'),
    Array('alumnograduacion','alumnograduacion_apellidos',39,'es correcto','ADD',true,'Login alumnograduacion_apellidos (ADD) correcto'),

    // Action: EDIT
    ['alumnograduacion','alumnograduacion_apellidos',40,'cumple tamaño minimo','EDIT','alumnograduacion_apellidos_min_size_KO','Tamaño muy corto. Debe estar entre 2 y 35 caracteres'],
    ['alumnograduacion','alumnograduacion_apellidos',41,'cumple tamaño maximo','EDIT','alumnograduacion_apellidos_max_size_KO','Tamaño muy grande. Debe estar entre 2 y 35 caracteres'],
    ['alumnograduacion','alumnograduacion_apellidos',42,'cumple formato','EDIT','alumnograduacion_apellidos_format_KO','Formato inválido. Debe contener alfabéticos (se permite espacios, acentos y ñ)'],
    ['alumnograduacion','alumnograduacion_apellidos',43,'es correcto','EDIT',true,'Login alumnograduacion_apellidos (EDIT) correcto'],

    // Action: SEARCH
    Array('alumnograduacion','alumnograduacion_apellidos',44,'cumple tamaño maximo','SEARCH','alumnograduacion_apellidos_max_size_KO','Tamaño muy grande. Como máximo 35 caracteres'),
    Array('alumnograduacion','alumnograduacion_apellidos',45,'cumple formato','SEARCH','alumnograduacion_apellidos_format_KO','Formato inválido. Debe contener alfabéticos (se permite espacios, acentos y ñ)'),
    Array('alumnograduacion','alumnograduacion_apellidos',46,'es correcto','SEARCH',true,'Login alumnograduacion_apellidos (SEARCH) correcto'),

  // Campo = `alumnograduacion_titulacion` enum('GREI','GRIA','MEI','MIA','PCEO') NOT NULL DEFAULT 'GREI'
    // Action: ADD
    Array('alumnograduacion','alumnograduacion_titulacion',47,'vacio','ADD','alumnograduacion_titulacion_vacio_KO','No puede estar vacío'),
    Array('alumnograduacion','alumnograduacion_titulacion',48,'cumple formato','ADD','alumnograduacion_titulacion_format_KO','Formatos válidos: "GREI", "GRIA", "MEI", "MIA", "PCEO"'),
    Array('alumnograduacion','alumnograduacion_titulacion',49,'es correcto','ADD',true,'Login alumnograduacion_titulacion (ADD) correcto'),

    // Action: EDIT
    ['alumnograduacion','alumnograduacion_titulacion',50,'vacio','EDIT','alumnograduacion_titulacion_vacio_KO','No puede estar vacío'],
    ['alumnograduacion','alumnograduacion_titulacion',51,'cumple formato','EDIT','alumnograduacion_titulacion_format_KO','Formatos válidos: "GREI", "GRIA", "MEI", "MIA", "PCEO"'],
    ['alumnograduacion','alumnograduacion_titulacion',52,'es correcto','EDIT',true,'Login alumnograduacion_titulacion (EDIT) correcto'],

    // Action: SEARCH
    Array('alumnograduacion','alumnograduacion_titulacion',53,'cumple tamaño maximo','SEARCH','alumnograduacion_titulacion_max_size_KO','Tamaño muy grande. El máximo es 4'),
    Array('alumnograduacion','alumnograduacion_titulacion',54,'es correcto','SEARCH',true,'Login alumnograduacion_titulacion (SEARCH) correcto'),

  // Campo = `alumnograduacion_dni` varchar(9) NOT NULL DEFAULT (formato dni. Min: 9, Max: 9) -- ESTOY AQUÍ --
    
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
    ['alumnograduacion','alumnograduacion_login',1,1,'ADD',[{alumnograduacion_login:'aa'}],'alumnograduacion_login_min_size_KO'], // El mínimo ya me controla el vacío
    ['alumnograduacion','alumnograduacion_login',2,2,'ADD',[{alumnograduacion_login:'aaaa aa'}],'alumnograduacion_login_space_KO'],
    ['alumnograduacion','alumnograduacion_login',2,3,'ADD',[{alumnograduacion_login:'  aaaaaa  '}],'alumnograduacion_login_space_KO'],
    ['alumnograduacion','alumnograduacion_login',3,4,'ADD',[{alumnograduacion_login:'a'.repeat(20)}],'alumnograduacion_login_max_size_KO'],
    ['alumnograduacion','alumnograduacion_login',4,5,'ADD',[{alumnograduacion_login:'aaaaáaa'}],'alumnograduacion_login_format_KO'],
    ['alumnograduacion','alumnograduacion_login',4,6,'ADD',[{alumnograduacion_login:'aaaañaa'}],'alumnograduacion_login_format_KO'],
    ['alumnograduacion','alumnograduacion_login',4,7,'ADD',[{alumnograduacion_login:'aaaaÓaa'}],'alumnograduacion_login_format_KO'],
    ['alumnograduacion','alumnograduacion_login',4,8,'ADD',[{alumnograduacion_login:'aaaaÜaa'}],'alumnograduacion_login_format_KO'],
    ['alumnograduacion','alumnograduacion_login',4,9,'ADD',[{alumnograduacion_login:'aaaaaa1'}],'alumnograduacion_login_format_KO'],
    ['alumnograduacion','alumnograduacion_login',5,10,'ADD',[{alumnograduacion_login:'ismael'}],true],

    // Action: EDIT
    ['alumnograduacion','alumnograduacion_login',6,11,'EDIT',[{alumnograduacion_login:'aa'}],'alumnograduacion_login_min_size_KO'],
    ['alumnograduacion','alumnograduacion_login',7,12,'EDIT',[{alumnograduacion_login:'aaaa aa'}],'alumnograduacion_login_space_KO'],
    ['alumnograduacion','alumnograduacion_login',7,13,'EDIT',[{alumnograduacion_login:'  aaaaaa  '}],'alumnograduacion_login_space_KO'],
    ['alumnograduacion','alumnograduacion_login',8,14,'EDIT',[{alumnograduacion_login:'a'.repeat(20)}],'alumnograduacion_login_max_size_KO'],
    ['alumnograduacion','alumnograduacion_login',9,15,'EDIT',[{alumnograduacion_login:'aaaaÍaa'}],'alumnograduacion_login_format_KO'],
    ['alumnograduacion','alumnograduacion_login',9,16,'EDIT',[{alumnograduacion_login:'aaaañaa'}],'alumnograduacion_login_format_KO'],
    ['alumnograduacion','alumnograduacion_login',9,17,'EDIT',[{alumnograduacion_login:'aaaaéaa'}],'alumnograduacion_login_format_KO'],
    ['alumnograduacion','alumnograduacion_login',9,18,'EDIT',[{alumnograduacion_login:'aaaaüaa'}],'alumnograduacion_login_format_KO'],
    ['alumnograduacion','alumnograduacion_login',9,19,'EDIT',[{alumnograduacion_login:'aaaaaa1'}],'alumnograduacion_login_format_KO'],
    ['alumnograduacion','alumnograduacion_login',10,20,'EDIT',[{alumnograduacion_login:'conde'}],true],

    // Action: SEARCH
    ['alumnograduacion','alumnograduacion_login',11,21,'SEARCH',[{alumnograduacion_login:'a'.repeat(20)}],'alumnograduacion_login_max_size_KO'],
    ['alumnograduacion','alumnograduacion_login',12,22,'SEARCH',[{alumnograduacion_login:'aaaaáaa'}],'alumnograduacion_login_format_KO'],
    ['alumnograduacion','alumnograduacion_login',12,23,'SEARCH',[{alumnograduacion_login:'aaaañaa'}],'alumnograduacion_login_format_KO'],
    ['alumnograduacion','alumnograduacion_login',12,24,'SEARCH',[{alumnograduacion_login:'aaaaÓaa'}],'alumnograduacion_login_format_KO'],
    ['alumnograduacion','alumnograduacion_login',12,25,'SEARCH',[{alumnograduacion_login:'aaaaÜaa'}],'alumnograduacion_login_format_KO'], // Esto lo voy a contar como acento, lo compruebo con la expresion regular "/[áéíóúÁÉÍÓÚüÜñÑ]]"
    ['alumnograduacion','alumnograduacion_login',12,26,'SEARCH',[{alumnograduacion_login:'aaaaaa1'}],'alumnograduacion_login_format_KO'],
    ['alumnograduacion','alumnograduacion_login',13,27,'SEARCH',[{alumnograduacion_login:'a'}],true],
    ['alumnograduacion','alumnograduacion_login',13,28,'SEARCH',[{alumnograduacion_login:'aaaa aa'}],true],
    ['alumnograduacion','alumnograduacion_login',13,29,'SEARCH',[{alumnograduacion_login:'  aaaaaa  '}],true],
    ['alumnograduacion','alumnograduacion_login',13,30,'SEARCH',[{alumnograduacion_login:'isma'}],true],

  // Campo = `alumnograduacion_password` varchar(64) NOT NULL DEFAULT (min: 8, max: 64)
    // Action: ADD
    ['alumnograduacion','alumnograduacion_password',14,31,'ADD',[{alumnograduacion_password:'aa'}],'alumnograduacion_password_min_size_KO'],
    ['alumnograduacion','alumnograduacion_password',15,32,'ADD',[{alumnograduacion_password:'a'.repeat(65)}],'alumnograduacion_password_max_size_KO'],
    ['alumnograduacion','alumnograduacion_password',16,33,'ADD',[{alumnograduacion_password:'aaaaáaaaaa'}],'alumnograduacion_password_format_KO'],
    ['alumnograduacion','alumnograduacion_password',16,34,'ADD',[{alumnograduacion_password:'aaaañaaaaa'}],'alumnograduacion_password_format_KO'],
    ['alumnograduacion','alumnograduacion_password',16,35,'ADD',[{alumnograduacion_password:'aaaaÓaaaaa'}],'alumnograduacion_password_format_KO'],
    ['alumnograduacion','alumnograduacion_password',16,36,'ADD',[{alumnograduacion_password:'aaaaÜaaaaa'}],'alumnograduacion_password_format_KO'],
    ['alumnograduacion','alumnograduacion_password',16,37,'ADD',[{alumnograduacion_password:'aaaaaa1aaa'}],'alumnograduacion_password_format_KO'],
    ['alumnograduacion','alumnograduacion_password',17,38,'ADD',[{alumnograduacion_password:'aaaa aaa'}],true],
    ['alumnograduacion','alumnograduacion_password',17,39,'ADD',[{alumnograduacion_password:'  aaaa  '}],true],
    ['alumnograduacion','alumnograduacion_password',17,40,'ADD',[{alumnograduacion_password:'Ismael c'}],true],

    // Action: EDIT
    ['alumnograduacion','alumnograduacion_password',18,41,'EDIT',[{alumnograduacion_password:'aa'}],'alumnograduacion_password_min_size_KO'],
    ['alumnograduacion','alumnograduacion_password',19,42,'EDIT',[{alumnograduacion_password:'a'.repeat(65)}],'alumnograduacion_password_max_size_KO'],
    ['alumnograduacion','alumnograduacion_password',20,43,'EDIT',[{alumnograduacion_password:'aaaaáaaaaa'}],'alumnograduacion_password_format_KO'],
    ['alumnograduacion','alumnograduacion_password',20,44,'EDIT',[{alumnograduacion_password:'aaaañaaaaa'}],'alumnograduacion_password_format_KO'],
    ['alumnograduacion','alumnograduacion_password',20,45,'EDIT',[{alumnograduacion_password:'aaaaÓaaaaa'}],'alumnograduacion_password_format_KO'],
    ['alumnograduacion','alumnograduacion_password',20,46,'EDIT',[{alumnograduacion_password:'aaaaÜaaaaa'}],'alumnograduacion_password_format_KO'],
    ['alumnograduacion','alumnograduacion_password',20,47,'EDIT',[{alumnograduacion_password:'aaaaaa1aaa'}],'alumnograduacion_password_format_KO'],
    ['alumnograduacion','alumnograduacion_password',21,48,'EDIT',[{alumnograduacion_password:'aaaa aaa'}],true],
    ['alumnograduacion','alumnograduacion_password',21,49,'EDIT',[{alumnograduacion_password:'  aaaa  '}],true],
    ['alumnograduacion','alumnograduacion_password',21,50,'EDIT',[{alumnograduacion_password:'Ismael c'}],true],

    // Action: SEARCH
    ['alumnograduacion','alumnograduacion_password',22,51,'SEARCH',[{alumnograduacion_password:'a'.repeat(65)}],'alumnograduacion_password_max_size_KO'],
    ['alumnograduacion','alumnograduacion_password',23,52,'SEARCH',[{alumnograduacion_password:'áaa'}],'alumnograduacion_password_format_KO'],
    ['alumnograduacion','alumnograduacion_password',23,53,'SEARCH',[{alumnograduacion_password:'aaaañaaaaa'}],'alumnograduacion_password_format_KO'],
    ['alumnograduacion','alumnograduacion_password',23,54,'SEARCH',[{alumnograduacion_password:'aaaaÓaaaaa'}],'alumnograduacion_password_format_KO'],
    ['alumnograduacion','alumnograduacion_password',23,55,'SEARCH',[{alumnograduacion_password:'aaaaÜaaaaa'}],'alumnograduacion_password_format_KO'],
    ['alumnograduacion','alumnograduacion_password',23,56,'SEARCH',[{alumnograduacion_password:'aaaaaa1aaa'}],'alumnograduacion_password_format_KO'],
    ['alumnograduacion','alumnograduacion_password',24,57,'SEARCH',[{alumnograduacion_password:'a'}],true],
    ['alumnograduacion','alumnograduacion_password',24,58,'SEARCH',[{alumnograduacion_password:'aaaa aaa'}],true],
    ['alumnograduacion','alumnograduacion_password',24,59,'SEARCH',[{alumnograduacion_password:'  aaaa  '}],true],
    ['alumnograduacion','alumnograduacion_password',24,60,'SEARCH',[{alumnograduacion_password:'Ismael c'}],true],

  // Campo = `alumnograduacion_nombre` varchar(25) NOT NULL DEFAULT (min: 2, max: 25)
    // Action: ADD
    ['alumnograduacion','alumnograduacion_nombre',25,61,'ADD',[{alumnograduacion_nombre:'a'}],'alumnograduacion_nombre_min_size_KO'],
    ['alumnograduacion','alumnograduacion_nombre',26,62,'ADD',[{alumnograduacion_nombre:'a'.repeat(26)}],'alumnograduacion_nombre_max_size_KO'],
    ['alumnograduacion','alumnograduacion_nombre',27,63,'ADD',[{alumnograduacion_nombre:'aaaaaa1aaa'}],'alumnograduacion_nombre_format_KO'],
    ['alumnograduacion','alumnograduacion_nombre',28,64,'ADD',[{alumnograduacion_nombre:'aaaaáaaa'}],true],
    ['alumnograduacion','alumnograduacion_nombre',28,65,'ADD',[{alumnograduacion_nombre:'aaañaaaaa'}],true],
    ['alumnograduacion','alumnograduacion_nombre',28,66,'ADD',[{alumnograduacion_nombre:'aaaaÓaaaaa'}],true],
    ['alumnograduacion','alumnograduacion_nombre',28,67,'ADD',[{alumnograduacion_nombre:'aaaaÜaaaaa'}],true],
    ['alumnograduacion','alumnograduacion_nombre',28,68,'ADD',[{alumnograduacion_nombre:'aaaa aaa'}],true],
    ['alumnograduacion','alumnograduacion_nombre',28,69,'ADD',[{alumnograduacion_nombre:'  aaaa  '}],true],
    ['alumnograduacion','alumnograduacion_nombre',28,70,'ADD',[{alumnograduacion_nombre:'Ismael c'}],true],

    // Action: EDIT
    ['alumnograduacion','alumnograduacion_nombre',29,71,'EDIT',[{alumnograduacion_nombre:'a'}],'alumnograduacion_nombre_min_size_KO'],
    ['alumnograduacion','alumnograduacion_nombre',30,72,'EDIT',[{alumnograduacion_nombre:'a'.repeat(26)}],'alumnograduacion_nombre_max_size_KO'],
    ['alumnograduacion','alumnograduacion_nombre',31,73,'EDIT',[{alumnograduacion_nombre:'aaaaaa1aaa'}],'alumnograduacion_nombre_format_KO'],
    ['alumnograduacion','alumnograduacion_nombre',32,74,'EDIT',[{alumnograduacion_nombre:'aaaaáaaa'}],true],
    ['alumnograduacion','alumnograduacion_nombre',32,75,'EDIT',[{alumnograduacion_nombre:'aaañaaaaa'}],true],
    ['alumnograduacion','alumnograduacion_nombre',32,76,'EDIT',[{alumnograduacion_nombre:'aaaaÓaaaaa'}],true],
    ['alumnograduacion','alumnograduacion_nombre',32,77,'EDIT',[{alumnograduacion_nombre:'aaaaÜaaaaa'}],true],
    ['alumnograduacion','alumnograduacion_nombre',32,78,'EDIT',[{alumnograduacion_nombre:'aaaa aaa'}],true],
    ['alumnograduacion','alumnograduacion_nombre',32,79,'EDIT',[{alumnograduacion_nombre:'  aaaa  '}],true],
    ['alumnograduacion','alumnograduacion_nombre',32,80,'EDIT',[{alumnograduacion_nombre:'Ismael c'}],true],
    
    // Action: SEARCH
    ['alumnograduacion','alumnograduacion_nombre',33,81,'SEARCH',[{alumnograduacion_nombre:'a'.repeat(26)}],'alumnograduacion_nombre_max_size_KO'],
    ['alumnograduacion','alumnograduacion_nombre',34,82,'SEARCH',[{alumnograduacion_nombre:'aa1a'}],'alumnograduacion_nombre_format_KO'],
    ['alumnograduacion','alumnograduacion_nombre',35,83,'SEARCH',[{alumnograduacion_nombre:'a'}],true],
    ['alumnograduacion','alumnograduacion_nombre',35,84,'SEARCH',[{alumnograduacion_nombre:'aaaaáaaa'}],true],
    ['alumnograduacion','alumnograduacion_nombre',35,85,'SEARCH',[{alumnograduacion_nombre:'aaañaaaaa'}],true],
    ['alumnograduacion','alumnograduacion_nombre',35,86,'SEARCH',[{alumnograduacion_nombre:'aaaaÓaaaaa'}],true],
    ['alumnograduacion','alumnograduacion_nombre',35,87,'SEARCH',[{alumnograduacion_nombre:'aaaaÜaaaaa'}],true],
    ['alumnograduacion','alumnograduacion_nombre',35,88,'SEARCH',[{alumnograduacion_nombre:'aaaa aaa'}],true],
    ['alumnograduacion','alumnograduacion_nombre',35,89,'SEARCH',[{alumnograduacion_nombre:'  aaaa  '}],true],
    ['alumnograduacion','alumnograduacion_nombre',35,90,'SEARCH',[{alumnograduacion_nombre:'Ismael c'}],true],

  // Campo = `alumnograduacion_apellidos` varchar(35) NOT NULL DEFAULT (min: 2, max: 35)
    // Action: ADD
    ['alumnograduacion','alumnograduacion_apellidos',36,91,'ADD',[{alumnograduacion_apellidos:'a'}],'alumnograduacion_apellidos_min_size_KO'],
    ['alumnograduacion','alumnograduacion_apellidos',37,92,'ADD',[{alumnograduacion_apellidos:'a'.repeat(36)}],'alumnograduacion_apellidos_max_size_KO'],
    ['alumnograduacion','alumnograduacion_apellidos',38,93,'ADD',[{alumnograduacion_apellidos:'aaaaaa1aaa'}],'alumnograduacion_apellidos_format_KO'],
    ['alumnograduacion','alumnograduacion_apellidos',39,94,'ADD',[{alumnograduacion_apellidos:'aaaaáaaa'}],true],
    ['alumnograduacion','alumnograduacion_apellidos',39,95,'ADD',[{alumnograduacion_apellidos:'aaañaaaaa'}],true],
    ['alumnograduacion','alumnograduacion_apellidos',39,96,'ADD',[{alumnograduacion_apellidos:'aaaaÓaaaaa'}],true],
    ['alumnograduacion','alumnograduacion_apellidos',39,97,'ADD',[{alumnograduacion_apellidos:'aaaaÜaaaaa'}],true],
    ['alumnograduacion','alumnograduacion_apellidos',39,98,'ADD',[{alumnograduacion_apellidos:'aaaa aaa'}],true],
    ['alumnograduacion','alumnograduacion_apellidos',39,99,'ADD',[{alumnograduacion_apellidos:'  aaaa  '}],true],
    ['alumnograduacion','alumnograduacion_apellidos',39,100,'ADD',[{alumnograduacion_apellidos:'Ismael c'}],true],

    // Action: EDIT
    ['alumnograduacion','alumnograduacion_apellidos',40,101,'EDIT',[{alumnograduacion_apellidos:''}],'alumnograduacion_apellidos_min_size_KO'],
    ['alumnograduacion','alumnograduacion_apellidos',41,102,'EDIT',[{alumnograduacion_apellidos:'a'.repeat(36)}],'alumnograduacion_apellidos_max_size_KO'],
    ['alumnograduacion','alumnograduacion_apellidos',42,103,'EDIT',[{alumnograduacion_apellidos:'aaaaaa1aaa'}],'alumnograduacion_apellidos_format_KO'],
    ['alumnograduacion','alumnograduacion_apellidos',43,104,'EDIT',[{alumnograduacion_apellidos:'aaaaáaaa'}],true],
    ['alumnograduacion','alumnograduacion_apellidos',43,105,'EDIT',[{alumnograduacion_apellidos:'aaañaaaaa'}],true],
    ['alumnograduacion','alumnograduacion_apellidos',43,106,'EDIT',[{alumnograduacion_apellidos:'aaaaÓaaaaa'}],true],
    ['alumnograduacion','alumnograduacion_apellidos',43,107,'EDIT',[{alumnograduacion_apellidos:'aaaaÜaaaaa'}],true],
    ['alumnograduacion','alumnograduacion_apellidos',43,108,'EDIT',[{alumnograduacion_apellidos:'aaaa aaa'}],true],
    ['alumnograduacion','alumnograduacion_apellidos',43,109,'EDIT',[{alumnograduacion_apellidos:'  aaaa  '}],true],
    ['alumnograduacion','alumnograduacion_apellidos',43,110,'EDIT',[{alumnograduacion_apellidos:'Ismael c'}],true],

    // Action: SEARCH
    ['alumnograduacion','alumnograduacion_apellidos',44,111,'SEARCH',[{alumnograduacion_apellidos:'a'.repeat(36)}],'alumnograduacion_apellidos_max_size_KO'],
    ['alumnograduacion','alumnograduacion_apellidos',45,112,'SEARCH',[{alumnograduacion_apellidos:'aaaaaa1aaa'}],'alumnograduacion_apellidos_format_KO'],
    ['alumnograduacion','alumnograduacion_apellidos',46,113,'SEARCH',[{alumnograduacion_apellidos:'a'}],true],
    ['alumnograduacion','alumnograduacion_apellidos',46,114,'SEARCH',[{alumnograduacion_apellidos:'aaaaáaaa'}],true],
    ['alumnograduacion','alumnograduacion_apellidos',46,115,'SEARCH',[{alumnograduacion_apellidos:'aaañaaaaa'}],true],
    ['alumnograduacion','alumnograduacion_apellidos',46,116,'SEARCH',[{alumnograduacion_apellidos:'aaaaÓaaaaa'}],true],
    ['alumnograduacion','alumnograduacion_apellidos',46,117,'SEARCH',[{alumnograduacion_apellidos:'aaaaÜaaaaa'}],true],
    ['alumnograduacion','alumnograduacion_apellidos',46,118,'SEARCH',[{alumnograduacion_apellidos:'aaaa aaa'}],true],
    ['alumnograduacion','alumnograduacion_apellidos',46,119,'SEARCH',[{alumnograduacion_apellidos:'  aaaa  '}],true],
    ['alumnograduacion','alumnograduacion_apellidos',46,120,'SEARCH',[{alumnograduacion_apellidos:'Ismael c'}],true],

  // Campo = `alumnograduacion_titulacion` enum('GREI','GRIA','MEI','MIA','PCEO') NOT NULL DEFAULT 'GREI'
    // Action: ADD
    ['alumnograduacion','alumnograduacion_titulacion',47,121,'ADD',[{alumnograduacion_titulacion:''}],'alumnograduacion_titulacion_vacio_KO'],
    ['alumnograduacion','alumnograduacion_titulacion',47,122,'ADD',[{alumnograduacion_titulacion:' '}],'alumnograduacion_titulacion_vacio_KO'],
    ['alumnograduacion','alumnograduacion_titulacion',48,123,'ADD',[{alumnograduacion_titulacion:'texto'}],'alumnograduacion_titulacion_format_KO'],
    ['alumnograduacion','alumnograduacion_titulacion',48,124,'ADD',[{alumnograduacion_titulacion:'grei'}],'alumnograduacion_titulacion_format_KO'],
    ['alumnograduacion','alumnograduacion_titulacion',49,125,'ADD',[{alumnograduacion_titulacion:'GREI'}],true],
    ['alumnograduacion','alumnograduacion_titulacion',49,126,'ADD',[{alumnograduacion_titulacion:'GRIA'}],true],
    ['alumnograduacion','alumnograduacion_titulacion',49,127,'ADD',[{alumnograduacion_titulacion:'MEI'}],true],
    ['alumnograduacion','alumnograduacion_titulacion',49,128,'ADD',[{alumnograduacion_titulacion:'MIA'}],true],
    ['alumnograduacion','alumnograduacion_titulacion',49,129,'ADD',[{alumnograduacion_titulacion:'PCEO'}],true],

    // Action: EDIT
    ['alumnograduacion','alumnograduacion_titulacion',50,130,'EDIT',[{alumnograduacion_titulacion:''}],'alumnograduacion_titulacion_vacio_KO'],
    ['alumnograduacion','alumnograduacion_titulacion',50,131,'EDIT',[{alumnograduacion_titulacion:''}],'alumnograduacion_titulacion_vacio_KO'],
    ['alumnograduacion','alumnograduacion_titulacion',51,132,'EDIT',[{alumnograduacion_titulacion:'texto'}],'alumnograduacion_titulacion_format_KO'],
    ['alumnograduacion','alumnograduacion_titulacion',51,133,'EDIT',[{alumnograduacion_titulacion:'grei'}],'alumnograduacion_titulacion_format_KO'],
    ['alumnograduacion','alumnograduacion_titulacion',52,134,'EDIT',[{alumnograduacion_titulacion:'GREI'}],true],
    ['alumnograduacion','alumnograduacion_titulacion',52,135,'EDIT',[{alumnograduacion_titulacion:'GRIA'}],true],
    ['alumnograduacion','alumnograduacion_titulacion',52,136,'EDIT',[{alumnograduacion_titulacion:'MEI'}],true],
    ['alumnograduacion','alumnograduacion_titulacion',52,137,'EDIT',[{alumnograduacion_titulacion:'MIA'}],true],
    ['alumnograduacion','alumnograduacion_titulacion',52,138,'EDIT',[{alumnograduacion_titulacion:'PCEO'}],true],

    // Action: SEARCH
    ['alumnograduacion','alumnograduacion_titulacion',53,139,'SEARCH',[{alumnograduacion_titulacion:'aaaaa'}],'alumnograduacion_titulacion_max_size_KO'], // No controlamos acentos o número, ya que en un futuro se puede ampliar y agregar más enumerados que contengan esos caracteres
    ['alumnograduacion','alumnograduacion_titulacion',54,140,'SEARCH',[{alumnograduacion_titulacion:'gr'}],true], // permitir buscar con minusculas

  
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