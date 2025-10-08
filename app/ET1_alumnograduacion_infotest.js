let alumnograduacion_def_tests = Array(
    
  // Campo = `alumnograduacion_login` varchar(15) NOT NULL DEFAULT (min: 4, max: 15)
    // Action: ADD
    ['alumnograduacion','alumnograduacion_login',1,'cumple tamaño minimo','ADD','alumnograduacion_login_min_size_KO','Tamaño muy corto. Debe estar entre 4 y 15 caracteres'],
    ['alumnograduacion', 'alumnograduacion_login',2,'no contiene espacios','ADD', 'alumnograduacion_login_space_KO', 'No se permite espacios'],
    ['alumnograduacion','alumnograduacion_login',3,'cumple tamaño maximo','ADD','alumnograduacion_login_max_size_KO','Tamaño muy grande. Debe estar entre 4 y 15 caracteres'],
    ['alumnograduacion','alumnograduacion_login',4,'cumple formato','ADD','alumnograduacion_login_format_KO','Formato inválido. Debe contener alfabéticos sin acentos ni ñ'],
    ['alumnograduacion','alumnograduacion_login',5,'es correcto','ADD',true,'alumnograduacion_login (ADD) correcto'],

    // Action: EDIT
    ['alumnograduacion','alumnograduacion_login',6,'cumple tamaño minimo','EDIT','alumnograduacion_login_min_size_KO','Tamaño muy corto. Debe estar entre 4 y 15 caracteres'],
    ['alumnograduacion', 'alumnograduacion_login',7,'no contiene espacios','ADD', 'alumnograduacion_login_space_KO', 'No se permite espacios'],
    ['alumnograduacion','alumnograduacion_login',8,'cumple tamaño maximo','EDIT','alumnograduacion_login_max_size_KO','Tamaño muy grande. Debe estar entre 4 y 15 caracteres'],
    ['alumnograduacion','alumnograduacion_login',9,'cumple formato','EDIT','alumnograduacion_login_format_KO','Formato inválido. Debe contener alfabéticos sin acentos ni ñ'],
    ['alumnograduacion','alumnograduacion_login',10,'es correcto','EDIT',true,'alumnograduacion_login (EDIT) correcto'],

    // Action: SEARCH
    ['alumnograduacion','alumnograduacion_login',11,'cumple tamaño maximo','SEARCH','alumnograduacion_login_max_size_KO','Tamaño muy grande. Como máximo 15 caracteres'],
    ['alumnograduacion','alumnograduacion_login',12,'cumple formato','SEARCH','alumnograduacion_login_format_KO','Formato inválido. Debe contener alfabéticos sin acentos ni ñ'],
    ['alumnograduacion','alumnograduacion_login',13,'es correcto','SEARCH',true,'alumnograduacion_login (SEARCH) correcto'],

  // Campo = `alumnograduacion_password` varchar(64) NOT NULL DEFAULT (min: 8, max: 64)
    // Action: ADD
    ['alumnograduacion','alumnograduacion_password',14,'cumple tamaño minimo','ADD','alumnograduacion_password_min_size_KO','Tamaño muy corto. Debe estar entre 8 y 64 caracteres'],
    ['alumnograduacion','alumnograduacion_password',15,'cumple tamaño maximo','ADD','alumnograduacion_password_max_size_KO','Tamaño muy grande. Debe estar entre 8 y 64 caracteres'],
    ['alumnograduacion','alumnograduacion_password',16,'cumple formato','ADD','alumnograduacion_password_format_KO','Formato inválido. Debe contener alfabéticos (se permite espacios) sin acentos ni ñ'],
    ['alumnograduacion','alumnograduacion_password',17,'es correcto','ADD',true,'alumnograduacion_password (ADD) correcto'],

    // Action: EDIT
    ['alumnograduacion','alumnograduacion_password',18,'cumple tamaño minimo','EDIT','alumnograduacion_password_min_size_KO','Tamaño muy corto. Debe estar entre 8 y 64 caracteres'],
    ['alumnograduacion','alumnograduacion_password',19,'cumple tamaño maximo','EDIT','alumnograduacion_password_max_size_KO','Tamaño muy grande. Debe estar entre 8 y 64 caracteres'],
    ['alumnograduacion','alumnograduacion_password',20,'cumple formato','EDIT','alumnograduacion_password_format_KO','Formato inválido. Debe contener alfabéticos (se permite espacios) sin acentos ni ñ'],
    ['alumnograduacion','alumnograduacion_password',21,'es correcto','EDIT',true,'alumnograduacion_password (EDIT) correcto'],

    // Action: SEARCH
    ['alumnograduacion','alumnograduacion_password',22,'cumple tamaño maximo','SEARCH','alumnograduacion_password_max_size_KO','Tamaño muy grande. Como máximo 64 caracteres'],
    ['alumnograduacion','alumnograduacion_password',23,'cumple formato','SEARCH','alumnograduacion_password_format_KO','Formato inválido. Debe contener alfabéticos (se permite espacios) sin acentos ni ñ'],
    ['alumnograduacion','alumnograduacion_password',24,'es correcto','SEARCH',true,'alumnograduacion_password (SEARCH) correcto'],
  
  // Campo = `alumnograduacion_nombre` varchar(25) NOT NULL DEFAULT (min: 2, max: 25)
    // Action: ADD
    ['alumnograduacion','alumnograduacion_nombre',25,'cumple tamaño minimo','ADD','alumnograduacion_nombre_min_size_KO','Tamaño muy corto. Debe estar entre 2 y 25 caracteres'],
    ['alumnograduacion','alumnograduacion_nombre',26,'cumple tamaño maximo','ADD','alumnograduacion_nombre_max_size_KO','Tamaño muy grande. Debe estar entre 2 y 25 caracteres'],
    ['alumnograduacion','alumnograduacion_nombre',27,'cumple formato','ADD','alumnograduacion_nombre_format_KO','Formato inválido. Debe contener alfabéticos (se permite espacios, acentos y ñ)'],
    ['alumnograduacion','alumnograduacion_nombre',28,'es correcto','ADD',true,'alumnograduacion_nombre (ADD) correcto'],

    // Action: EDIT
    ['alumnograduacion','alumnograduacion_nombre',29,'cumple tamaño minimo','EDIT','alumnograduacion_nombre_min_size_KO','Tamaño muy corto. Debe estar entre 2 y 25 caracteres'],
    ['alumnograduacion','alumnograduacion_nombre',30,'cumple tamaño maximo','EDIT','alumnograduacion_nombre_max_size_KO','Tamaño muy grande. Debe estar entre 2 y 25 caracteres'],
    ['alumnograduacion','alumnograduacion_nombre',31,'cumple formato','EDIT','alumnograduacion_nombre_format_KO','Formato inválido. Debe contener alfabéticos (se permite espacios, acentos y ñ)'],
    ['alumnograduacion','alumnograduacion_nombre',32,'es correcto','EDIT',true,'alumnograduacion_nombre (EDIT) correcto'],

    // Action: SEARCH
    ['alumnograduacion','alumnograduacion_nombre',33,'cumple tamaño maximo','SEARCH','alumnograduacion_nombre_max_size_KO','Tamaño muy grande. Como máximo 25 caracteres'],
    ['alumnograduacion','alumnograduacion_nombre',34,'cumple formato','SEARCH','alumnograduacion_nombre_format_KO','Formato inválido. Debe contener alfabéticos (se permite espacios, acentos y ñ)'],
    ['alumnograduacion','alumnograduacion_nombre',35,'es correcto','SEARCH',true,'alumnograduacion_nombre (SEARCH) correcto'],

  // Campo = `alumnograduacion_apellidos` varchar(35) NOT NULL DEFAULT (min: 2, max: 35)
    // Action: ADD
    ['alumnograduacion','alumnograduacion_apellidos',36,'cumple tamaño minimo','ADD','alumnograduacion_apellidos_min_size_KO','Tamaño muy corto. Debe estar entre 2 y 35 caracteres'],
    ['alumnograduacion','alumnograduacion_apellidos',37,'cumple tamaño maximo','ADD','alumnograduacion_apellidos_max_size_KO','Tamaño muy grande. Debe estar entre 2 y 35 caracteres'],
    ['alumnograduacion','alumnograduacion_apellidos',38,'cumple formato','ADD','alumnograduacion_apellidos_format_KO','Formato inválido. Debe contener alfabéticos (se permite espacios, acentos y ñ)'],
    ['alumnograduacion','alumnograduacion_apellidos',39,'es correcto','ADD',true,'alumnograduacion_apellidos (ADD) correcto'],

    // Action: EDIT
    ['alumnograduacion','alumnograduacion_apellidos',40,'cumple tamaño minimo','EDIT','alumnograduacion_apellidos_min_size_KO','Tamaño muy corto. Debe estar entre 2 y 35 caracteres'],
    ['alumnograduacion','alumnograduacion_apellidos',41,'cumple tamaño maximo','EDIT','alumnograduacion_apellidos_max_size_KO','Tamaño muy grande. Debe estar entre 2 y 35 caracteres'],
    ['alumnograduacion','alumnograduacion_apellidos',42,'cumple formato','EDIT','alumnograduacion_apellidos_format_KO','Formato inválido. Debe contener alfabéticos (se permite espacios, acentos y ñ)'],
    ['alumnograduacion','alumnograduacion_apellidos',43,'es correcto','EDIT',true,'alumnograduacion_apellidos (EDIT) correcto'],

    // Action: SEARCH
    ['alumnograduacion','alumnograduacion_apellidos',44,'cumple tamaño maximo','SEARCH','alumnograduacion_apellidos_max_size_KO','Tamaño muy grande. Como máximo 35 caracteres'],
    ['alumnograduacion','alumnograduacion_apellidos',45,'cumple formato','SEARCH','alumnograduacion_apellidos_format_KO','Formato inválido. Debe contener alfabéticos (se permite espacios, acentos y ñ)'],
    ['alumnograduacion','alumnograduacion_apellidos',46,'es correcto','SEARCH',true,'alumnograduacion_apellidos (SEARCH) correcto'],

  // Campo = `alumnograduacion_titulacion` enum('GREI','GRIA','MEI','MIA','PCEO') NOT NULL DEFAULT 'GREI'
    // Action: ADD
    ['alumnograduacion','alumnograduacion_titulacion',47,'vacio','ADD','alumnograduacion_titulacion_vacio_KO','No puede estar vacío'],
    ['alumnograduacion','alumnograduacion_titulacion',48,'cumple formato','ADD','alumnograduacion_titulacion_format_KO','Formatos válidos: "GREI", "GRIA", "MEI", "MIA", "PCEO"'],
    ['alumnograduacion','alumnograduacion_titulacion',49,'es correcto','ADD',true,'alumnograduacion_titulacion (ADD) correcto'],

    // Action: EDIT
    ['alumnograduacion','alumnograduacion_titulacion',50,'vacio','EDIT','alumnograduacion_titulacion_vacio_KO','No puede estar vacío'],
    ['alumnograduacion','alumnograduacion_titulacion',51,'cumple formato','EDIT','alumnograduacion_titulacion_format_KO','Formatos válidos: "GREI", "GRIA", "MEI", "MIA", "PCEO"'],
    ['alumnograduacion','alumnograduacion_titulacion',52,'es correcto','EDIT',true,'alumnograduacion_titulacion (EDIT) correcto'],

    // Action: SEARCH
    ['alumnograduacion','alumnograduacion_titulacion',53,'cumple tamaño maximo','SEARCH','alumnograduacion_titulacion_max_size_KO','Tamaño muy grande. El máximo es 4'],
    ['alumnograduacion','alumnograduacion_titulacion',54,'es correcto','SEARCH',true,'alumnograduacion_titulacion (SEARCH) correcto'],

  // Campo = `alumnograduacion_dni` varchar(9) NOT NULL DEFAULT (formato dni. Min: 9, Max: 9)
    // Action: ADD
    ['alumnograduacion','alumnograduacion_dni',55,'cumple tamaño minimo','ADD','alumnograduacion_dni_min_size_KO','Tamaño muy corto. Debe tener 9 caracteres'],
    ['alumnograduacion','alumnograduacion_dni',56,'cumple formato dni o nie','ADD','alumnograduacion_dni_format_KO','Formato invalido, no es ni NIE ni DNI'],
    ['alumnograduacion','alumnograduacion_dni',57,'cumple formato dni','ADD','alumnograduacion_dni_dni_validate_KO','Formato DNI inválido. Formato: 8 números + 1 letra'],
    ['alumnograduacion','alumnograduacion_dni',58,'cumple formato nie','ADD','alumnograduacion_dni_nie_validate_KO','Formato NIE inválido. Formato: 1 letra + 7 números + 1 letra'],
    ['alumnograduacion','alumnograduacion_dni',59,'cumple tamaño maximo','ADD','alumnograduacion_dni_max_size_KO','Tamaño muy largo. Debe tener 9 caracteres'],
    ['alumnograduacion','alumnograduacion_dni',60,'es correcto','ADD',true, 'alumnograduacion_dni (ADD) correcto'],

    // Action: EDIT
    ['alumnograduacion','alumnograduacion_dni',61,'cumple tamaño minimo','EDIT','alumnograduacion_dni_min_size_KO','Tamaño muy corto. Debe tener 9 caracteres'],
    ['alumnograduacion','alumnograduacion_dni',62,'cumple formato dni o nie','EDIT','alumnograduacion_dni_format_KO','Formato invalido, no es ni NIE ni DNI'],
    ['alumnograduacion','alumnograduacion_dni',63,'cumple formato dni','EDIT','alumnograduacion_dni_dni_validate_KO','Formato DNI inválido. Formato: 8 números + 1 letra'],
    ['alumnograduacion','alumnograduacion_dni',64,'cumple formato nie','EDIT','alumnograduacion_dni_nie_validate_KO','Formato NIE inválido. Formato: 1 letra + 7 números + 1 letra'],
    ['alumnograduacion','alumnograduacion_dni',65,'cumple tamaño maximo','EDIT','alumnograduacion_dni_max_size_KO','Tamaño muy largo. Debe tener 9 caracteres'],
    ['alumnograduacion','alumnograduacion_dni',66,'es correcto','EDIT',true, 'alumnograduacion_dni (EDIT) correcto'],

    // Action: SEARCH
    ['alumnograduacion','alumnograduacion_dni',67,'cumple tamaño maximo','SEARCH','alumnograduacion_dni_max_size_KO','Tamaño muy largo. Como maximo se permiten 9 caracteres'],
    ['alumnograduacion','alumnograduacion_dni',68,'cumple formato dni o nie','SEARCH','alumnograduacion_dni_format_KO','Formato invalido, no es ni NIE ni DNI'],
    ['alumnograduacion','alumnograduacion_dni',69,'cumple formato dni','SEARCH','alumnograduacion_dni_dni_validate_KO','Formato DNI inválido. Formato: 8 números + 1 letra'],
    ['alumnograduacion','alumnograduacion_dni',70,'cumple formato nie','SEARCH','alumnograduacion_dni_nie_validate_KO','Formato NIE inválido. Formato: 1 letra + 7 números + 1 letra'],
    ['alumnograduacion','alumnograduacion_dni',71,'es correcto','SEARCH',true, 'alumnograduacion_dni (SEARCH) correcto'],

  // Campo = `alumnograduacion_telefono` varchar(9) NOT NULL DEFAULT (9 dígitos(0 - 9). Min: 9, Max: 9)
    // Action: ADD
    ['alumnograduacion','alumnograduacion_telefono',72,'cumple tamaño minimo','ADD','alumnograduacion_telefono_min_size_KO','Tamaño muy corto. Debe tener 9 caracteres'],
    ['alumnograduacion','alumnograduacion_telefono',73,'cumple tamaño maximo','ADD','alumnograduacion_telefono_max_size_KO','Tamaño muy largo. Debe tener 9 caracteres'],
    ['alumnograduacion','alumnograduacion_telefono',74,'cumple formato','ADD','alumnograduacion_telefono_format_KO','Formato invalido, solo se permiten números'],
    ['alumnograduacion','alumnograduacion_telefono',75,'es correcto','ADD',true,'alumnograduacion_telefono (ADD) correcto'],

    // Action: EDIT
    ['alumnograduacion','alumnograduacion_telefono',76,'cumple tamaño minimo','EDIT','alumnograduacion_telefono_min_size_KO','Tamaño muy corto. Debe tener 9 caracteres'],
    ['alumnograduacion','alumnograduacion_telefono',77,'cumple tamaño maximo','EDIT','alumnograduacion_telefono_max_size_KO','Tamaño muy largo. Debe tener 9 caracteres'],
    ['alumnograduacion','alumnograduacion_telefono',78,'cumple formato','EDIT','alumnograduacion_telefono_format_KO','Formato invalido, solo se permiten números'],
    ['alumnograduacion','alumnograduacion_telefono',79,'es correcto','EDIT',true,'alumnograduacion_telefono (EDIT) correcto'],

    // Action: SEARCH
    ['alumnograduacion','alumnograduacion_telefono',80,'cumple tamaño maximo','SEARCH','alumnograduacion_telefono_max_size_KO','Tamaño muy largo. Como máximo 9 caracteres'],
    ['alumnograduacion','alumnograduacion_telefono',81,'cumple formato','SEARCH','alumnograduacion_telefono_format_KO','Formato invalido, solo se permiten números'],
    ['alumnograduacion','alumnograduacion_telefono',82,'es correcto','SEARCH',true,'alumnograduacion_telefono (SEARCH) correcto'],
    
  // Campo = `alumnograduacion_direccion` varchar(100) NOT NULL DEFAULT (alfa-numerico con acentos y ñ y espacios. Max: 100)
    // Action: ADD
    ['alumnograduacion','alumnograduacion_direccion',83,'vacio','ADD','alumnograduacion_direccion_vacio_KO','No puede quedar vacío'],
    ['alumnograduacion','alumnograduacion_direccion',84,'cumple tamaño maximo','ADD','alumnograduacion_direccion_max_size_KO','Tamaño muy largo. Lo máximo son 100 caracteres'],
    ['alumnograduacion','alumnograduacion_direccion',85,'cumple formato','ADD','alumnograduacion_direccion_format_KO','No se permiten caracteres raros'],
    ['alumnograduacion','alumnograduacion_direccion',86,'es correcto','ADD',true,'alumnograduacion_direccion (ADD) correcto'],

    // Action: EDIT
    ['alumnograduacion','alumnograduacion_direccion',87,'vacio','EDIT','alumnograduacion_direccion_vacio_KO','No puede quedar vacío'],
    ['alumnograduacion','alumnograduacion_direccion',88,'cumple tamaño maximo','EDIT','alumnograduacion_direccion_max_size_KO','Tamaño muy largo. Lo máximo son 100 caracteres'],
    ['alumnograduacion','alumnograduacion_direccion',89,'cumple formato','EDIT','alumnograduacion_direccion_format_KO','No se permiten caracteres raros'],
    ['alumnograduacion','alumnograduacion_direccion',90,'es correcto','EDIT',true,'alumnograduacion_direccion (EDIT) correcto'],

    // Action: SEARCH
    ['alumnograduacion','alumnograduacion_direccion',91,'cumple tamaño maximo','SEARCH','alumnograduacion_direccion_max_size_KO','Tamaño muy largo. Lo máximo son 100 caracteres'],
    ['alumnograduacion','alumnograduacion_direccion',92,'cumple formato','SEARCH','alumnograduacion_direccion_format_KO','No se permiten caracteres raros'],
    ['alumnograduacion','alumnograduacion_direccion',93,'es correcto','SEARCH',true,'alumnograduacion_direccion (SEARCH) correcto'],

  // Campo = `alumnograduacion_email` varchar(40) NOT NULL DEFAULT (formato email. Max: 40)
    // Action: ADD
    ['alumnograduacion','alumnograduacion_email',94,'vacio','ADD','alumnograduacion_email_vacio_KO','El email no puede quedar vacío'],
    ['alumnograduacion','alumnograduacion_email',95,'cumple tamaño maximo','ADD','alumnograduacion_email_max_size_KO','Tamaño muy largo. Lo máximo son 40 caracteres'],
    ['alumnograduacion','alumnograduacion_email',96,'cumple formato','ADD','alumnograduacion_email_format_KO','Formato incorrecto. Debe ser correo@dominio.red'],
    ['alumnograduacion','alumnograduacion_email',97,'es correcto','ADD',true,'alumnograduacion_email (ADD) correcto'],

    // Action: EDIT
    ['alumnograduacion','alumnograduacion_email',98,'vacio','EDIT','alumnograduacion_email_vacio_KO','El email no puede quedar vacío'],
    ['alumnograduacion','alumnograduacion_email',99,'cumple tamaño maximo','EDIT','alumnograduacion_email_max_size_KO','Tamaño muy largo. Lo máximo son 40 caracteres'],
    ['alumnograduacion','alumnograduacion_email',100,'cumple formato','EDIT','alumnograduacion_email_format_KO','Formato incorrecto. Debe ser correo@dominio.red'],
    ['alumnograduacion','alumnograduacion_email',101,'es correcto','EDIT',true,'alumnograduacion_email (EDIT) correcto'],

    // Action: SEARCH
    ['alumnograduacion','alumnograduacion_email',102,'cumple tamaño maximo','SEARCH','alumnograduacion_email_max_size_KO','Tamaño muy largo. Lo máximo son 40 caracteres'],
    ['alumnograduacion','alumnograduacion_email',103,'cumple formato','SEARCH','alumnograduacion_email_format_KO','Formato incorrecto. Debe ser correo@dominio.red'],
    ['alumnograduacion','alumnograduacion_email',104,'es correcto','SEARCH',true,'alumnograduacion_email (SEARCH) correcto'],

  // Campo = `alumnograduacion_fotoacto` varchar(40) NOT NULL DEFAULT (alfabéticos (sin acentos y ñ ni espacios) y ".". Min: 7, Max: 40)
    // Action: ADD
    ['alumnograduacion','alumnograduacion_fotoacto',105,'empty_file','ADD','alumnograduacion_fotoacto_empty_file_KO','El fichero no puede estar vacío'], 
    ['alumnograduacion','alumnograduacion_fotoacto',106,'cumple tamaño maximo','ADD','alumnograduacion_fotoacto_max_size_KO','El nombre del fichero es muy largo. Como máximo 40 caracteres'],
    ['alumnograduacion','alumnograduacion_fotoacto',107,'format_name_file','ADD','alumnograduacion_fotoacto_format_name_file_KO','El formato no es correcto. No se permiten espacios ni ñ ni acentos ni números. Formato: nombre.jpg'],
    ['alumnograduacion','alumnograduacion_fotoacto',108,'type_file','ADD','alumnograduacion_fotoacto_type_file_KO','El tipo de fichero no está permitido.'],
    ['alumnograduacion','alumnograduacion_fotoacto',109,'max_size_file','ADD','alumnograduacion_fotoacto_max_size_file_KO','El tamaño del fichero es muy grande.'],
    ['alumnograduacion','alumnograduacion_fotoacto',110,'fichero ok','ADD',true,'alumnograduacion_fotoacto (ADD) correcto'],

    // Action: EDIT
    ['alumnograduacion','alumnograduacion_fotoacto',111,'empty_file','EDIT','alumnograduacion_fotoacto_empty_file_KO','El fichero no puede estar vacío'],  
    ['alumnograduacion','alumnograduacion_fotoacto',112,'cumple tamaño maximo','EDIT','alumnograduacion_fotoacto_max_size_KO','El nombre del fichero es muy largo. Como máximo 40 caracteres'],
    ['alumnograduacion','alumnograduacion_fotoacto',113,'format_name_file','EDIT','alumnograduacion_fotoacto_format_name_file_KO','El formato no es correcto. No se permiten espacios ni ñ ni acentos ni números. Formato: nombre.jpg'],
    ['alumnograduacion','alumnograduacion_fotoacto',114,'type_file','EDIT','alumnograduacion_fotoacto_type_file_KO','El tipo de fichero no está permitido.'],
    ['alumnograduacion','alumnograduacion_fotoacto',115,'max_size_file','EDIT','alumnograduacion_fotoacto_max_size_file_KO','El tamaño del fichero es muy grande.'],
    ['alumnograduacion','alumnograduacion_fotoacto',116,'fichero ok','EDIT',true,'alumnograduacion_fotoacto (EDIT) correcto'],

    // Action: SEARCH
    ['alumnograduacion','alumnograduacion_fotoacto',117,'cumple tamaño maximo','SEARCH','alumnograduacion_fotoacto_max_size_KO','El nombre del fichero es muy largo. Como máximo 40 caracteres'],
    ['alumnograduacion','alumnograduacion_fotoacto',118,'format_name_file','SEARCH','alumnograduacion_fotoacto_format_name_file_KO','El formato no es correcto. No se permiten espacios ni ñ ni acentos ni números. Formato: nombre.jpg'],
    ['alumnograduacion','alumnograduacion_fotoacto',119,'fichero ok','SEARCH',true,'alumnograduacion_fotoacto (SEARCH) correcto'],
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

  // Campo = `alumnograduacion_dni` varchar(9) NOT NULL DEFAULT (formato dni. Min: 9, Max: 9)
    // Action ADD
    ['alumnograduacion','alumnograduacion_dni',55,141,'ADD',[{alumnograduacion_dni:''}],'alumnograduacion_dni_min_size_KO'],
    ['alumnograduacion','alumnograduacion_dni',55,142,'ADD',[{alumnograduacion_dni:'1234'}],'alumnograduacion_dni_min_size_KO'],
    ['alumnograduacion','alumnograduacion_dni',56,143,'ADD',[{alumnograduacion_dni:'123456789'}],'alumnograduacion_dni_format_KO'], // No es ni dni ni nie
    ['alumnograduacion','alumnograduacion_dni',56,144,'ADD',[{alumnograduacion_dni:'12345A789'}],'alumnograduacion_dni_format_KO'], // Formato dni no valido
    ['alumnograduacion','alumnograduacion_dni',56,145,'ADD',[{alumnograduacion_dni:'Z1235T597'}],'alumnograduacion_dni_format_KO'], // Formato nie no correcto
    ['alumnograduacion','alumnograduacion_dni',57,146,'ADD',[{alumnograduacion_dni:'12345678A'}],'alumnograduacion_dni_dni_validate_KO'], // la letra del dni no es correcta
    ['alumnograduacion','alumnograduacion_dni',58,147,'ADD',[{alumnograduacion_dni:'Z1235159T'}],'alumnograduacion_dni_nie_validate_KO'], // Las letras del nie no pertencen a ese nie
    ['alumnograduacion','alumnograduacion_dni',59,148,'ADD',[{alumnograduacion_dni:'1234567890'}],'alumnograduacion_dni_max_size_KO'],
    ['alumnograduacion','alumnograduacion_dni',60,149,'ADD',[{alumnograduacion_dni:'12345678Z'}],true], // Dni correcto
    ['alumnograduacion','alumnograduacion_dni',60,150,'ADD',[{alumnograduacion_dni:'Y7654321G'}],true], // NIE correcto

    // Action EDIT
    ['alumnograduacion','alumnograduacion_dni',61,151,'EDIT',[{alumnograduacion_dni:''}],'alumnograduacion_dni_min_size_KO'],
    ['alumnograduacion','alumnograduacion_dni',61,152,'EDIT',[{alumnograduacion_dni:'1234'}],'alumnograduacion_dni_min_size_KO'],
    ['alumnograduacion','alumnograduacion_dni',62,153,'EDIT',[{alumnograduacion_dni:'123456789'}],'alumnograduacion_dni_format_KO'], // No es ni dni ni nie
    ['alumnograduacion','alumnograduacion_dni',62,154,'EDIT',[{alumnograduacion_dni:'12345A789'}],'alumnograduacion_dni_format_KO'], // Formato dni no valido
    ['alumnograduacion','alumnograduacion_dni',62,155,'EDIT',[{alumnograduacion_dni:'Z1235T597'}],'alumnograduacion_dni_format_KO'], // Formato nie no correcto
    ['alumnograduacion','alumnograduacion_dni',63,156,'EDIT',[{alumnograduacion_dni:'12345678A'}],'alumnograduacion_dni_dni_validate_KO'], // la letra del dni no es correcta
    ['alumnograduacion','alumnograduacion_dni',64,157,'EDIT',[{alumnograduacion_dni:'Z1235159T'}],'alumnograduacion_dni_nie_validate_KO'], // Las letras del nie no pertencen a ese nie
    ['alumnograduacion','alumnograduacion_dni',65,158,'EDIT',[{alumnograduacion_dni:'1234567890'}],'alumnograduacion_dni_max_size_KO'],
    ['alumnograduacion','alumnograduacion_dni',66,159,'EDIT',[{alumnograduacion_dni:'12345678Z'}],true], // Dni correcto
    ['alumnograduacion','alumnograduacion_dni',66,160,'EDIT',[{alumnograduacion_dni:'Y7654321G'}],true], // NIE correcto

    // Action: SEARCH
    ['alumnograduacion','alumnograduacion_dni',67,161,'SEARCH',[{alumnograduacion_dni:'1234567890'}],'alumnograduacion_dni_max_size_KO'],
    ['alumnograduacion','alumnograduacion_dni',68,162,'SEARCH',[{alumnograduacion_dni:'123456789'}],'alumnograduacion_dni_format_KO'], // No es ni dni ni nie
    ['alumnograduacion','alumnograduacion_dni',68,163,'SEARCH',[{alumnograduacion_dni:'12345A789'}],'alumnograduacion_dni_format_KO'], // Formato dni no valido
    ['alumnograduacion','alumnograduacion_dni',68,164,'SEARCH',[{alumnograduacion_dni:'Z1235T597'}],'alumnograduacion_dni_format_KO'], // Formato nie no correcto
    ['alumnograduacion','alumnograduacion_dni',69,165,'SEARCH',[{alumnograduacion_dni:'12345678A'}],'alumnograduacion_dni_dni_validate_KO'], // la letra del dni no es correcta
    ['alumnograduacion','alumnograduacion_dni',70,166,'SEARCH',[{alumnograduacion_dni:'Z1235159T'}],'alumnograduacion_dni_nie_validate_KO'], // Las letras del nie no pertencen a ese nie
    ['alumnograduacion','alumnograduacion_dni',71,167,'SEARCH',[{alumnograduacion_dni:'12345678Z'}],true], // Dni correcto
    ['alumnograduacion','alumnograduacion_dni',71,168,'SEARCH',[{alumnograduacion_dni:'Y7654321G'}],true], // NIE correcto
    ['alumnograduacion','alumnograduacion_dni',71,169,'SEARCH',[{alumnograduacion_dni:'123456'}],true], // substring dni
    ['alumnograduacion','alumnograduacion_dni',71,170,'SEARCH',[{alumnograduacion_dni:'Y76543'}],true], // substring nie

  // Campo = `alumnograduacion_telefono` varchar(9) NOT NULL DEFAULT (9 dígitos(0 - 9). Min: 9, Max: 9)
    // Action ADD
    ['alumnograduacion','alumnograduacion_telefono',72,172,'ADD',[{alumnograduacion_telefono:'12654'}],'alumnograduacion_telefono_min_size_KO'],
    ['alumnograduacion','alumnograduacion_telefono',73,173,'ADD',[{alumnograduacion_telefono:'1234567890'}],'alumnograduacion_telefono_max_size_KO'],
    ['alumnograduacion','alumnograduacion_telefono',74,174,'ADD',[{alumnograduacion_telefono:'textooooo'}],'alumnograduacion_telefono_format_KO'],
    ['alumnograduacion','alumnograduacion_telefono',74,175,'ADD',[{alumnograduacion_telefono:'texto1234'}],'alumnograduacion_telefono_format_KO'], // para probar numeros con texto
    ['alumnograduacion','alumnograduacion_telefono',75,176,'ADD',[{alumnograduacion_telefono:'123456789'}],true],

    // Action EDIT
    ['alumnograduacion','alumnograduacion_telefono',76,177,'EDIT',[{alumnograduacion_telefono:'12654'}],'alumnograduacion_telefono_min_size_KO'],
    ['alumnograduacion','alumnograduacion_telefono',77,178,'EDIT',[{alumnograduacion_telefono:'1234567890'}],'alumnograduacion_telefono_max_size_KO'],
    ['alumnograduacion','alumnograduacion_telefono',78,179,'EDIT',[{alumnograduacion_telefono:'textooooo'}],'alumnograduacion_telefono_format_KO'],
    ['alumnograduacion','alumnograduacion_telefono',78,180,'EDIT',[{alumnograduacion_telefono:'texto1234'}],'alumnograduacion_telefono_format_KO'],
    ['alumnograduacion','alumnograduacion_telefono',79,181,'EDIT',[{alumnograduacion_telefono:'123456789'}],true],

    // Action SEARCH
    ['alumnograduacion','alumnograduacion_telefono',80,182,'SEARCH',[{alumnograduacion_telefono:'1234567890'}],'alumnograduacion_telefono_max_size_KO'],
    ['alumnograduacion','alumnograduacion_telefono',81,183,'SEARCH',[{alumnograduacion_telefono:'text'}],'alumnograduacion_telefono_format_KO'],
    ['alumnograduacion','alumnograduacion_telefono',81,184,'SEARCH',[{alumnograduacion_telefono:'12T'}],'alumnograduacion_telefono_format_KO'],
    ['alumnograduacion','alumnograduacion_telefono',82,185,'SEARCH',[{alumnograduacion_telefono:'123456789'}],true],
    ['alumnograduacion','alumnograduacion_telefono',82,186,'SEARCH',[{alumnograduacion_telefono:'1234'}],true],

  // Campo = `alumnograduacion_direccion` varchar(100) NOT NULL DEFAULT (alfa-numerico con acentos y ñ y espacios. Max: 100)
    // Action: ADD
    ['alumnograduacion','alumnograduacion_direccion',83,187,'ADD',[{alumnograduacion_direccion:''}],'alumnograduacion_direccion_vacio_KO'],
    ['alumnograduacion','alumnograduacion_direccion',84,188,'ADD',[{alumnograduacion_direccion:'a'.repeat(110)}],'alumnograduacion_direccion_max_size_KO'],
    ['alumnograduacion','alumnograduacion_direccion',85,189,'ADD',[{alumnograduacion_direccion:'direccion * calle'}],'alumnograduacion_direccion_format_KO'],
    ['alumnograduacion','alumnograduacion_direccion',85,190,'ADD',[{alumnograduacion_direccion:'?'}],'alumnograduacion_direccion_format_KO'],
    ['alumnograduacion','alumnograduacion_direccion',86,191,'ADD',[{alumnograduacion_direccion:'Avd Otero Pedrayo nº30, 2ºC'}],true],

    // Action: EDIT
    ['alumnograduacion','alumnograduacion_direccion',87,192,'EDIT',[{alumnograduacion_direccion:''}],'alumnograduacion_direccion_vacio_KO'],
    ['alumnograduacion','alumnograduacion_direccion',88,193,'EDIT',[{alumnograduacion_direccion:'a'.repeat(110)}],'alumnograduacion_direccion_max_size_KO'],
    ['alumnograduacion','alumnograduacion_direccion',89,194,'EDIT',[{alumnograduacion_direccion:'direccion * calle'}],'alumnograduacion_direccion_format_KO'],
    ['alumnograduacion','alumnograduacion_direccion',89,195,'EDIT',[{alumnograduacion_direccion:'?'}],'alumnograduacion_direccion_format_KO'],
    ['alumnograduacion','alumnograduacion_direccion',90,196,'EDIT',[{alumnograduacion_direccion:'Avd Otero Pedrayo nº30, 2ºC'}],true],

    // Action: SEARCH
    ['alumnograduacion','alumnograduacion_direccion',91,197,'SEARCH',[{alumnograduacion_direccion:'a'.repeat(110)}],'alumnograduacion_direccion_max_size_KO'],
    ['alumnograduacion','alumnograduacion_direccion',92,198,'SEARCH',[{alumnograduacion_direccion:'direccion * calle'}],'alumnograduacion_direccion_format_KO'],
    ['alumnograduacion','alumnograduacion_direccion',92,199,'SEARCH',[{alumnograduacion_direccion:'?'}],'alumnograduacion_direccion_format_KO'],
    ['alumnograduacion','alumnograduacion_direccion',93,200,'SEARCH',[{alumnograduacion_direccion:'Avd Otero Pedrayo nº30, 2ºC'}],true],
    ['alumnograduacion','alumnograduacion_direccion',93,201,'SEARCH',[{alumnograduacion_direccion:'Ot Pe, nº2'}],true],

  // Campo = `alumnograduacion_email` varchar(40) NOT NULL DEFAULT (formato email. Max: 40)
    // Action: ADD
    ['alumnograduacion','alumnograduacion_email',94,202,'ADD',[{alumnograduacion_email:''}],'alumnograduacion_email_vacio_KO'],
    ['alumnograduacion','alumnograduacion_email',95,203,'ADD',[{alumnograduacion_email:'a'.repeat(41)}],'alumnograduacion_email_max_size_KO'],
    ['alumnograduacion','alumnograduacion_email',96,204,'ADD',[{alumnograduacion_email:'correo<@dominio.es'}],'alumnograduacion_email_format_KO'],
    ['alumnograduacion','alumnograduacion_email',96,205,'ADD',[{alumnograduacion_email:'correo@dominio'}],'alumnograduacion_email_format_KO'],
    ['alumnograduacion','alumnograduacion_email',96,206,'ADD',[{alumnograduacion_email:'correo'}],'alumnograduacion_email_format_KO'],
    ['alumnograduacion','alumnograduacion_email',97,207,'ADD',[{alumnograduacion_email:'correo@dominio.es'}],true],

    // Action: EDIT
    ['alumnograduacion','alumnograduacion_email',98,208,'EDIT',[{alumnograduacion_email:''}],'alumnograduacion_email_vacio_KO'],
    ['alumnograduacion','alumnograduacion_email',99,209,'EDIT',[{alumnograduacion_email:'a'.repeat(41)}],'alumnograduacion_email_max_size_KO'],
    ['alumnograduacion','alumnograduacion_email',100,210,'EDIT',[{alumnograduacion_email:'correo<@dominio.es'}],'alumnograduacion_email_format_KO'],
    ['alumnograduacion','alumnograduacion_email',100,211,'EDIT',[{alumnograduacion_email:'correo@dominio'}],'alumnograduacion_email_format_KO'],
    ['alumnograduacion','alumnograduacion_email',100,212,'EDIT',[{alumnograduacion_email:'correo'}],'alumnograduacion_email_format_KO'],
    ['alumnograduacion','alumnograduacion_email',101,213,'EDIT',[{alumnograduacion_email:'correo@dominio.es'}],true],

    // Action: SEARCH
    ['alumnograduacion','alumnograduacion_email',102,214,'SEARCH',[{alumnograduacion_email:'a'.repeat(41)}],'alumnograduacion_email_max_size_KO'],
    ['alumnograduacion','alumnograduacion_email',103,215,'SEARCH',[{alumnograduacion_email:'correo<@dominio.es'}],'alumnograduacion_email_format_KO'],
    ['alumnograduacion','alumnograduacion_email',104,216,'SEARCH',[{alumnograduacion_email:'correo@dominio'}],true],
    ['alumnograduacion','alumnograduacion_email',104,217,'SEARCH',[{alumnograduacion_email:'correo'}],true],
    ['alumnograduacion','alumnograduacion_email',104,218,'SEARCH',[{alumnograduacion_email:'correo@dominio.es'}],true],

  // Campo = `alumnograduacion_fotoacto` varchar(40) NOT NULL DEFAULT (alfabéticos (sin acentos y ñ ni espacios) y ".". Min: 7, Max: 40)
    // Action: SEARCH
    ['alumnograduacion', 'alumnograduacion_fotoacto',117,219,'SEARCH',[{alumnograduacion_fotoacto: 'a'.repeat(40).concat('.jpg')}],'alumnograduacion_fotoacto_max_size_KO'],
    ['alumnograduacion', 'alumnograduacion_fotoacto',118,220,'SEARCH',[{alumnograduacion_fotoacto: 'ahí'}],'alumnograduacion_fotoacto_format_name_file_KO'],
    ['alumnograduacion', 'alumnograduacion_fotoacto',118,221,'SEARCH',[{alumnograduacion_fotoacto: 'isma conde.jpg'}],'alumnograduacion_fotoacto_format_name_file_KO'],
    ['alumnograduacion', 'alumnograduacion_fotoacto',118,222,'SEARCH',[{alumnograduacion_fotoacto: 'españa.jpg'}],'alumnograduacion_fotoacto_format_name_file_KO'],
    ['alumnograduacion', 'alumnograduacion_fotoacto',118,223,'SEARCH',[{alumnograduacion_fotoacto: 'nombre3.jpg'}],'alumnograduacion_fotoacto_format_name_file_KO'],
    ['alumnograduacion', 'alumnograduacion_fotoacto',118,224,'SEARCH',[{alumnograduacion_fotoacto: '.jpg'}],'alumnograduacion_fotoacto_format_name_file_KO'],
    ['alumnograduacion', 'alumnograduacion_fotoacto',119,225,'SEARCH',[{alumnograduacion_fotoacto: 'foto.jpg'}],true],
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
  // Campo = `alumnograduacion_fotoacto` varchar(40) NOT NULL DEFAULT (alfabéticos (sin acentos y ñ ni espacios) y ".". Min: 7, Max: 40)
    // Action: ADD
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',105,1,'ADD','empty_file',[],'alumnograduacion_fotoacto_empty_file_KO'],
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',106,2,'ADD','format_name_file',[{format_name_file: 'a'.repeat(40).concat('.jpg')},{type_file: 'image/jpeg'}, {max_size_file:200000}],'alumnograduacion_fotoacto_max_size_KO'], // El js de test está programado para que funcione así
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',107,3,'ADD','format_name_file',[{format_name_file: 'nombre.mp4'},{type_file: 'image/jpeg'}, {max_size_file:200000}],'alumnograduacion_fotoacto_format_name_file_KO'],
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',107,4,'ADD','format_name_file',[{format_name_file: 'nombre.mp3'},{type_file: 'image/jpeg'}, {max_size_file:200000}],'alumnograduacion_fotoacto_format_name_file_KO'],
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',107,5,'ADD','format_name_file',[{format_name_file: 'nombre.webm'},{type_file: 'image/jpeg'}, {max_size_file:200000}],'alumnograduacion_fotoacto_format_name_file_KO'],
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',107,6,'ADD','format_name_file',[{format_name_file: 'nombre.ogg'},{type_file: 'image/jpeg'}, {max_size_file:200000}],'alumnograduacion_fotoacto_format_name_file_KO'],
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',107,7,'ADD','format_name_file',[{format_name_file: 'ahí'},{type_file: 'image/jpeg'}, {max_size_file:200000}],'alumnograduacion_fotoacto_format_name_file_KO'],
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',107,8,'ADD','format_name_file',[{format_name_file: 'noFormato'},{type_file: 'image/jpeg'}, {max_size_file:200000}],'alumnograduacion_fotoacto_format_name_file_KO'],
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',107,9,'ADD','format_name_file',[{format_name_file: 'isma conde.jpg'},{type_file: 'image/jpeg'}, {max_size_file:200000}],'alumnograduacion_fotoacto_format_name_file_KO'],
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',107,10,'ADD','format_name_file',[{format_name_file: 'españa.jpg'},{type_file: 'image/jpeg'}, {max_size_file:200000}],'alumnograduacion_fotoacto_format_name_file_KO'],
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',107,11,'ADD','format_name_file',[{format_name_file: 'nombre3.jpg'},{type_file: 'image/jpeg'}, {max_size_file:200000}],'alumnograduacion_fotoacto_format_name_file_KO'],
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',107,12,'ADD','format_name_file',[{format_name_file: '.jpg'},{type_file: 'image/jpeg'}, {max_size_file:200000}],'alumnograduacion_fotoacto_format_name_file_KO'],
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',108,13,'ADD','type_file',[{format_name_file: 'foto.jpg'}, {type_file: 'video/*'}, {max_size_file:200000}],'alumnograduacion_fotoacto_type_file_KO'],
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',108,14,'ADD','type_file',[{format_name_file: 'foto.jpg'}, {type_file: 'audio/*'}, {max_size_file:200000}],'alumnograduacion_fotoacto_type_file_KO'],
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',108,15,'ADD','type_file',[{format_name_file: 'foto.jpg'}, {type_file: 'text/*'}, {max_size_file:200000}],'alumnograduacion_fotoacto_type_file_KO'],
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',108,16,'ADD','type_file',[{format_name_file: 'foto.jpg'}, {type_file: 'application/*'}, {max_size_file:200000}],'alumnograduacion_fotoacto_type_file_KO'],
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',108,17,'ADD','type_file',[{format_name_file: 'foto.jpg'}, {type_file: 'image/png'}, {max_size_file:200000}],'alumnograduacion_fotoacto_type_file_KO'],
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',108,18,'ADD','type_file',[{format_name_file: 'foto.jpg'}, {type_file: 'image/gif'}, {max_size_file:200000}],'alumnograduacion_fotoacto_type_file_KO'],
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',108,19,'ADD','type_file',[{format_name_file: 'foto.jpg'}, {type_file: 'image/webp'}, {max_size_file:200000}],'alumnograduacion_fotoacto_type_file_KO'],
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',108,20,'ADD','type_file',[{format_name_file: 'foto.jpg'}, {type_file: 'image/svg+xml'}, {max_size_file:200000}],'alumnograduacion_fotoacto_type_file_KO'],
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',109,21,'ADD','max_size_file',[{format_name_file: 'foto.jpg'},{type_file: 'image/jpeg'}, {max_size_file:2000000001}],'alumnograduacion_fotoacto_max_size_file_KO'],
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',110,22,'ADD','fichero ok',[{format_name_file: 'foto.jpg'}, {type_file: 'image/jpeg'},{max_size_file:20000}],true],

    // Action: EDIT
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',111,23,'EDIT','empty_file',[],'alumnograduacion_fotoacto_empty_file_KO'],
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',112,24,'EDIT','format_name_file',[{format_name_file: 'a'.repeat(40).concat('.jpg')},{type_file: 'image/jpeg'}, {max_size_file:200000}],'alumnograduacion_fotoacto_max_size_KO'], // El js de test está programado para que funcione así
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',113,25,'EDIT','format_name_file',[{format_name_file: 'nombre.mp4'},{type_file: 'image/jpeg'}, {max_size_file:200000}],'alumnograduacion_fotoacto_format_name_file_KO'],
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',113,26,'EDIT','format_name_file',[{format_name_file: 'nombre.mp3'},{type_file: 'image/jpeg'}, {max_size_file:200000}],'alumnograduacion_fotoacto_format_name_file_KO'],
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',113,27,'EDIT','format_name_file',[{format_name_file: 'nombre.webm'},{type_file: 'image/jpeg'}, {max_size_file:200000}],'alumnograduacion_fotoacto_format_name_file_KO'],
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',113,28,'EDIT','format_name_file',[{format_name_file: 'nombre.ogg'},{type_file: 'image/jpeg'}, {max_size_file:200000}],'alumnograduacion_fotoacto_format_name_file_KO'],
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',113,29,'EDIT','format_name_file',[{format_name_file: 'ahí'},{type_file: 'image/jpeg'}, {max_size_file:200000}],'alumnograduacion_fotoacto_format_name_file_KO'],
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',113,30,'EDIT','format_name_file',[{format_name_file: 'noFormato'},{type_file: 'image/jpeg'}, {max_size_file:200000}],'alumnograduacion_fotoacto_format_name_file_KO'],
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',113,31,'EDIT','format_name_file',[{format_name_file: 'isma conde.jpg'},{type_file: 'image/jpeg'}, {max_size_file:200000}],'alumnograduacion_fotoacto_format_name_file_KO'],
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',113,32,'EDIT','format_name_file',[{format_name_file: 'españa.jpg'},{type_file: 'image/jpeg'}, {max_size_file:200000}],'alumnograduacion_fotoacto_format_name_file_KO'],
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',113,33,'EDIT','format_name_file',[{format_name_file: 'nombre3.jpg'},{type_file: 'image/jpeg'}, {max_size_file:200000}],'alumnograduacion_fotoacto_format_name_file_KO'],
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',113,34,'EDIT','format_name_file',[{format_name_file: '.jpg'},{type_file: 'image/jpeg'}, {max_size_file:200000}],'alumnograduacion_fotoacto_format_name_file_KO'],
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',114,35,'EDIT','type_file',[{format_name_file: 'foto.jpg'}, {type_file: 'video/*'}, {max_size_file:200000}],'alumnograduacion_fotoacto_type_file_KO'],
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',114,36,'EDIT','type_file',[{format_name_file: 'foto.jpg'}, {type_file: 'audio/*'}, {max_size_file:200000}],'alumnograduacion_fotoacto_type_file_KO'],
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',114,37,'EDIT','type_file',[{format_name_file: 'foto.jpg'}, {type_file: 'text/*'}, {max_size_file:200000}],'alumnograduacion_fotoacto_type_file_KO'],
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',114,38,'EDIT','type_file',[{format_name_file: 'foto.jpg'}, {type_file: 'application/*'}, {max_size_file:200000}],'alumnograduacion_fotoacto_type_file_KO'],
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',114,39,'EDIT','type_file',[{format_name_file: 'foto.jpg'}, {type_file: 'image/png'}, {max_size_file:200000}],'alumnograduacion_fotoacto_type_file_KO'],
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',114,40,'EDIT','type_file',[{format_name_file: 'foto.jpg'}, {type_file: 'image/gif'}, {max_size_file:200000}],'alumnograduacion_fotoacto_type_file_KO'],
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',114,41,'EDIT','type_file',[{format_name_file: 'foto.jpg'}, {type_file: 'image/webp'}, {max_size_file:200000}],'alumnograduacion_fotoacto_type_file_KO'],
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',114,42,'EDIT','type_file',[{format_name_file: 'foto.jpg'}, {type_file: 'image/svg+xml'}, {max_size_file:200000}],'alumnograduacion_fotoacto_type_file_KO'],
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',115,43,'EDIT','max_size_file',[{format_name_file: 'foto.jpg'},{type_file: 'image/jpeg'}, {max_size_file:2000000001}],'alumnograduacion_fotoacto_max_size_file_KO'],
    ['alumnograduacion', 'alumnograduacion_nuevo_fotoacto',116,44,'EDIT','fichero ok',[{format_name_file: 'foto.jpg'}, {type_file: 'image/jpeg'},{max_size_file:20000}],true],
);