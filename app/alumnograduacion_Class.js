class alumnograduacion extends Validations{

	constructor(esTest){
		super();
		this.dom = new dom();
		this.nombreentidad = 'alumnograduacion';

		if (esTest == 'test'){
			
		}
		else{
			this.dom.fillform(this.manual_form_creation(),'IU_form');
		}
	}	

	/**
	 * replace the content of section element with a particular entity menu
	 * @returns 
	 */
	manual_form_creation(){
		/*
		var form_content = `
			<form action="http://193.147.87.202/procesaform.php" method="POST" enctype="multipart/form-data" onsubmit="return entidad.ADD_submit_alumnograduacion();">

			<label class="label_dni">dni</label>
			<input type='text' id='dni' name='dni' onblur=" return entidad.ADD_dni_validation();"></input>
			<span id="span_error_dni"><a id="error_dni"></a></span>
			<br>
			
			<label class="label_nombre_alumnograduacion">Nombre de pila</label>
			<input type='text' id='nombre_alumnograduacion' name='nombre_alumnograduacion' onblur=" return entidad.ADD_nombre_alumnograduacion_validation();"></input>
			<span id="span_error_nombre_alumnograduacion" ><a id="error_nombre_alumnograduacion"></a></span>
			<br>
			
			<label class="label_apellidos_alumnograduacion">apellidos</label>
			<input type='text' id='apellidos_alumnograduacion' name='apellidos_alumnograduacion'></input>
			<span id="span_error_apellidos_alumnograduacion" ><a id="error_apellidos_alumnograduacion"></a></span>
			<br>
			
			<label class="label_fechaNacimiento_alumnograduacion">Fecha de Nacimiento</label>
			<input type='text' id='fechaNacimiento_alumnograduacion' name='fechaNacimiento_alumnograduacion'></input>
			<span id="span_error_fechaNacimiento_alumnograduacion" ><a id="error_fechaNacimiento_alumnograduacion"></a></span>
			
			<br>
			<label class="label_direccion_alumnograduacion">Dirección Postal</label>
			<textarea rows="5" cols="33" type='text' id='direccion_alumnograduacion' name='direccion_alumnograduacion'></textarea>
			<span id="span_error_direccion_alumnograduacion" ><a id="error_direccion_alumnograduacion"></a></span>
			<br>

			<label class="label_telefono_alumnograduacion">Teléfono alumnograduacion</label>
			<input type='text' id='telefono_alumnograduacion' name='telefono_alumnograduacion'></input>
			<span id="span_error_telefono_alumnograduacion" ><a id="error_telefono_alumnograduacion"></a></span>
			
			<br>
			<label class="label_email_alumnograduacion">Correo Electronico</label>
			<input type='text' id='email_alumnograduacion' name='email_alumnograduacion'></input>
			<span id="span_error_email_alumnograduacion" ><a id="error_email_alumnograduacion"></a></span>

			<br>
			<label id="label_foto_alumnograduacion" class="label_foto_alumnograduacion">Foto alumnograduacion</label>
			<input type='text' id='foto_alumnograduacion' name='foto_alumnograduacion'></input>
			<span id="span_error_foto_alumnograduacion"><a id="error_foto_alumnograduacion"></a></span>
			<a id="link_foto_alumnograduacion" href="http://193.147.87.202/ET2/filesuploaded/files_foto_alumnograduacion/"><img src="./iconos/FILE.png" /></a>
			
			<label id="label_nuevo_foto_alumnograduacion" class="label_nuevo_foto_alumnograduacion">Nueva Foto alumnograduacion</label>
			<input type='file' id='nuevo_foto_alumnograduacion' name='nuevo_foto_alumnograduacion'></input>
			<span id="span_error_nuevo_foto_alumnograduacion"><a id="error_nuevo_foto_alumnograduacion"></a></span>
			<br>

			<input id="submit_button" type="submit" value="Submit">

		</form>
		`;*/
		var form_content = `
			<form action="http://193.147.87.202/procesaform.php" method="POST" enctype="multipart/form-data" onsubmit="return entidad.ADD_submit_alumnograduacion();">

			<label class="label_login">Login</label>
        <input type='text' id='alumnograduacion_login' name='alumnograduacion_login' onblur=" return entidad.ADD_login_validation();"></input>
        <span id="span_error_alumnograduacion_login"><a id="error_alumnograduacion_login"></a></span>
        <br>
        
        <label class="label_password">Password</label>
        <input type='text' id='alumnograduacion_password' name='alumnograduacion_password' onblur=" return entidad.ADD_password_validation();"></input>
        <span id="span_error_password" ><a id="error_password"></a></span>
        <br>
        
        <label class="label_nombre">Nombre</label>
        <input type='text' id='alumnograduacion_nombre' name='alumnograduacion_nombre' onblur=" return entidad.ADD_nombre_validation()"></input>
        <span id="span_error_nombre" ><a id="error_apellidos_persona"></a></span>
        <br>
        
        <label class="label_apellidos">Apellidos</label>
        <input type='text' id='alumnograduacion_apellidos' name='alumnograduacion_apellidos' onblur=" return entidad.ADD_apellidos_validation()"></input>
        <span id="span_error_apellidos" ><a id="error_apellidos"></a></span>
        
        <br>
        <label class="label_titulacion">Titulación</label>
        <select id="alumnograduacion_titulacion" name="alumnograduacion_titulacion" onblur=" return entidad.ADD_titulacion_validation()">
            <option value=""></option>
            <option value="GREI">GREI</option>
            <option value="GRIA">GRIA</option>
            <option value="MEI">MEI</option>
            <option value="MIA">MIA</option>
            <option value="PCEO">PCEO</option>
        </select>
        <span id="span_error_titulacion" ><a id="error_titulacion"></a></span>
        <br>

        <label class="label_dni">Dni</label>
        <input type='text' id='alumnograduacion_dni' name='alumnograduacion_dni' onblur=" return entidad.ADD_dni_validation()"></input>
        <span id="span_error_dni" ><a id="error_dni"></a></span>
        
        <br>
        <label class="label_telefono">Teefono</label>
        <input type='text' id='alumnograduacion_telefono' name='alumnograduacion_telefono' onblur=" return entidad.ADD_telefono_validation()"></input>
        <span id="span_error_telefono" ><a id="error_telefono"></a></span>

        <br>
        <label class="label_direccion">Dirección</label>
        <input type='text' id='alumnograduacion_direccion' name='alumnograduacion_direccion' onblur=" return entidad.ADD_direccion_validation()"></input>
        <span id="span_error_direccion" ><a id="error_direccion"></a></span>

        <br>
        <label class="label_email">Email</label>
        <input type='text' id='alumnograduacion_email' name='alumnograduacion_email' onblur=" return entidad.ADD_email_validation()"></input>
        <span id="span_error_email" ><a id="error_email"></a></span>
        
        <br>
        <label id="label_fotoacto" class="label_fotoacto">Fotoacto</label>
        <input type='text' id='alumnograduacion_fotoacto' name='alumnograduacion_fotoacto'></input>
        <span id="span_error_fotoacto"><a id="error_fotoacto"></a></span>
        <a id="link_fotoacto" href="http://193.147.87.202/ET2/filesuploaded/files_foto_persona/"><img src="./iconos/FILE.png" /></a>
        
        <label id="label_nuevo_fotoacto" class="label_nuevo_fotoacto">Nueva Fotoacto</label>
        <input type='file' id='alumnograduacion_nuevo_fotoacto' name='alumnograduacion_nuevo_fotoacto' onblur="entidad.ADD_fotoacto_validation()"></input>
        <span id="span_error_nuevo_fotoacto"><a id="error_nuevo_fotoacto"></a></span>
        <br>

        <input id="submit_button" type="submit" value="Submit">

		</form>
		`;
		return form_content;
		
	}

	/**********************************************************************************************
		fields validations for ADD
	***********************************************************************************************/

	ADD_alumnograduacion_login_validation(){
		let campo = "alumnograduacion_login";
		let devolver = campo;

		//console.log("El contenido: \"" + document.getElementById(campo).value + "\"", this.format(campo,/^\s/));

		if(!(this.min_size(campo, 4))){
			devolver += "_min_size_KO";
			this.dom.mostrar_error_campo(campo,devolver);
			return devolver;
		}
		if(this.format(campo,/^\s/)){ // Para detectar espacios al principio
			devolver += "_space_KO"
			this.dom.mostrar_error_campo(campo,devolver);
			return devolver;
		}
		if(this.format(campo,/\s$/)){ // Para detectar espacios al final
			devolver += "_space_KO"
			this.dom.mostrar_error_campo(campo,devolver);
			return devolver;
		}
		if(this.format(campo,/\S\s+\S/)){ // Para detectar espacios en medio
			devolver += "_space_KO"
			this.dom.mostrar_error_campo(campo,devolver);
			return devolver;
		}
		if(!(this.max_size(campo,15))){
			devolver += "_max_size_KO"
			this.dom.mostrar_error_campo(campo,devolver);
			return devolver;
		}
		if(this.format(campo,/\d/)){ // Por si encuentra un número
			devolver += "_format_KO";
			this.dom.mostrar_error_campo(campo,devolver);
			return devolver;
		}
		if(this.format(campo, /[áéíóúÁÉÍÓÚüÜñÑ]/)){ // Por si encuentra un acento o una ñ
			devolver += "_format_KO";
			this.dom.mostrar_error_campo(campo,devolver);
			return devolver;
		}

		return true;
	}

	EDIT_alumnograduacion_login_validation(){
		let campo = "alumnograduacion_login";
		let devolver = campo;

		if(!(this.min_size(campo, 4))){
			devolver += "_min_size_KO";
			this.dom.mostrar_error_campo(campo,devolver);
			return devolver;
		}
		if(this.format(campo,/^\s/)){ // Para detectar espacios al principio
			devolver += "_space_KO"
			this.dom.mostrar_error_campo(campo,devolver);
			return devolver;
		}
		if(this.format(campo,/\s$/)){ // Para detectar espacios al final
			devolver += "_space_KO"
			this.dom.mostrar_error_campo(campo,devolver);
			return devolver;
		}
		if(this.format(campo,/\S\s+\S/)){ // Para detectar espacios en medio
			devolver += "_space_KO"
			this.dom.mostrar_error_campo(campo,devolver);
			return devolver;
		}
		if(!(this.max_size(campo,15))){
			devolver += "_max_size_KO"
			this.dom.mostrar_error_campo(campo,devolver);
			return devolver;
		}
		if(this.format(campo,/\d/)){ // Por si encuentra un número
			devolver += "_format_KO";
			this.dom.mostrar_error_campo(campo,devolver);
			return devolver;
		}
		if(this.format(campo, /[áéíóúÁÉÍÓÚüÜñÑ]/)){ // Por si encuentra un acento o una ñ
			devolver += "_format_KO";
			this.dom.mostrar_error_campo(campo,devolver);
			return devolver;
		}

		return true;
	}

	SEARCH_alumnograduacion_login_validation(){
		let campo = "alumnograduacion_login";
		let devolver = campo;

		if(!(this.max_size(campo,15))){
			devolver += "_max_size_KO"
			this.dom.mostrar_error_campo(campo,devolver);
			return devolver;
		}
		if(this.format(campo,/\d/)){ // Por si encuentra un número
			devolver += "_format_KO";
			this.dom.mostrar_error_campo(campo,devolver);
			return devolver;
		}
		if(this.format(campo, /[áéíóúÁÉÍÓÚüÜñÑ]/)){ // Por si encuentra un acento o una ñ
			devolver += "_format_KO";
			this.dom.mostrar_error_campo(campo,devolver);
			return devolver;
		}

		return true;
	}

	ADD_nuevo_foto_alumnograduacion_validation(){

	}

	/**
	 * Recursos
	 */
	

	/** Antiguo de aquí pa bajo
	/** 
		
		@param 
		@return
			{string} Error code of field value (fieldname_validationfunction_KO) 
			or
			{bool} true due the field value is correct

	*/
	/*
	ADD_dni_validation(){
		
		if (!(this.min_size('dni',9))){
			this.dom.mostrar_error_campo('dni','dni_min_size_KO');
			return "dni_min_size_KO";
		}
		if (!(this.max_size('dni',9))){
			this.dom.mostrar_error_campo('dni','dni_max_size_KO');
			return "dni_max_size_KO";
		}
				
		var resp = this.alumnograduacionlize_dni_nie();
		console.log(resp);
		if (!(resp === true)){
			this.dom.mostrar_error_campo('dni',resp);
			return resp;
		}
		
		this.dom.mostrar_exito_campo('dni');
		return true;

	}

	/**
		
		@param 
		@return
			{string} Error code of field value (fieldname_validationfunction_KO) 
			or
			{bool} true due the field value is correct

	*/
	/*
	ADD_nombre_alumnograduacion_validation(){
		
		if (!(this.min_size('nombre_alumnograduacion',4))){
			this.dom.mostrar_error_campo('nombre_alumnograduacion','nombre_alumnograduacion_min_size_KO');
			return "nombre_alumnograduacion_min_size_KO";
		}
		if (!(this.max_size('nombre_alumnograduacion',15))){
			this.dom.mostrar_error_campo('nombre_alumnograduacion','nombre_alumnograduacion_max_size_KO');
			return "nombre_alumnograduacion_max_size_KO";
		}
		// allowed format aA to zZ letter
		if (!(this.format('nombre_alumnograduacion', '^[A-Za-z]*$'))){
			this.dom.mostrar_error_campo('nombre_alumnograduacion','nombre_alumnograduacion_format_KO');
			return "nombre_alumnograduacion_format_KO";
		}
		this.dom.mostrar_exito_campo('nombre_alumnograduacion');
		return true;
	}

	ADD_nuevo_foto_alumnograduacion_validation(){

		if (!(this.not_exist_file('nuevo_foto_alumnograduacion'))){
			this.dom.mostrar_error_campo('nuevo_foto_alumnograduacion','nuevo_foto_alumnograduacion_empty_file_KO');
			return "nuevo_foto_alumnograduacion_not_exist_file_KO";
		}
		if (!(this.max_size_file('nuevo_foto_alumnograduacion',2000))){
			this.dom.mostrar_error_campo('nuevo_foto_alumnograduacion','nuevo_foto_alumnograduacion_max_size_file_KO');
			return "nuevo_foto_alumnograduacion_max_size_file_KO";
		}
		if (!(this.type_file('nuevo_foto_alumnograduacion',['image/jpeg']))){
			this.dom.mostrar_error_campo('nuevo_foto_alumnograduacion','nuevo_foto_alumnograduacion_type_file_KO');
			return "nuevo_foto_alumnograduacion_type_file_KO";
		}
		if (!(this.format_name_file('nuevo_foto_alumnograduacion','[a-zA-Z.]'))){
			this.dom.mostrar_error_campo('nuevo_foto_alumnograduacion','nuevo_foto_alumnograduacion_format_name_file_KO');
			return "nuevo_foto_alumnograduacion_format_name_file_KO";
		}
		this.dom.mostrar_exito_campo('nuevo_foto_alumnograduacion');
		return true;


	}

	ADD_apellidos_alumnograduacion_validation(){
		
	}

	/**
		
		@param 
		@return
			{bool} true if all field validations are correct or false if any field validation is false

	*/
	/*
	ADD_submit_alumnograduacion(){

		let result = (
					(this.ADD_dni_validation()) &
					(this.ADD_nombre_alumnograduacion_validation())
					(this.ADD_nuevo_foto_alumnograduacion_validation())
					)
		
		result = Boolean(result);
		
		return result;	


	}

	EDIT_nombre_alumnograduacion_validation(){

		return this.ADD_nombre_alumnograduacion_validation();

	}

	EDIT_nuevo_foto_alumnograduacion_validation(){

		if (!(this.not_exist_file('nuevo_foto_alumnograduacion'))){
			this.dom.mostrar_exito_campo('nuevo_foto_alumnograduacion');
			return true;
		}
		if (!(this.max_size_file('nuevo_foto_alumnograduacion',2000))){
			this.dom.mostrar_error_campo('nuevo_foto_alumnograduacion','nuevo_foto_alumnograduacion_max_size_file_KO');
			return "nuevo_foto_alumnograduacion_max_size_file_KO";
		}
		if (!(this.type_file('nuevo_foto_alumnograduacion',['image/jpeg']))){
			this.dom.mostrar_error_campo('nuevo_foto_alumnograduacion','nuevo_foto_alumnograduacion_type_file_KO');
			return "nuevo_foto_alumnograduacion_type_file_KO";
		}
		if (!(this.format_name_file('nuevo_foto_alumnograduacion','[a-zA-Z.]'))){
			this.dom.mostrar_error_campo('nuevo_foto_alumnograduacion','nuevo_foto_alumnograduacion_format_name_file_KO');
			return "nuevo_foto_alumnograduacion_format_name_file_KO";
		}
		this.dom.mostrar_exito_campo('nuevo_foto_alumnograduacion');
		return true;


	}
	 FIN ANTIGUO */
	/**
	 * 
	 * test dni format in the regular expression
	 * @param {string} 
	 * @return {bool} true is regular expression is satified false otherwise  
	 * */ 

	alumnograduacionlize_dni_nie(){
		
		dni = document.getElementById('dni').value;
		if (this.alumnograduacionlize_dni_format() == true){
			if (!(this.alumnograduacionlize_validate_dni(dni))){
				return "dni_validate_KO";
			}
		}
		else{
			if (this.alumnograduacionlize_nie_format() === true){
					if (!(this.alumnograduacionlize_validate_nie(dni))){
						return "nie_validate_KO";
					}
			}
			else{
				return "dni_nie_format_KO";
			}
		}

		return true;

	}
	/**
	 * get dni as parameter, split letter and numbers, calculate
	 * %23 from number to obtain corresponding letter and compares with letter in dni value
	 * 
	 * @param dni value
	 * @returns true if dni is valid false otherwise
	 */
	alumnograduacionlize_dni_format(){
		
		if (!(this.format('dni', '[0-9]{8}[A-Z]'))){
			this.dom.mostrar_error_campo('dni','dni_format_KO');
			return "dni_format_KO";
		}
		return true;

	}

	alumnograduacionlize_nie_format(){
		if (!(this.format('dni', '[XYZ][0-9]{7}[A-Z]'))){
			this.dom.mostrar_error_campo('dni','nie_format_KO');
			return "nie_format_KO";
		}
		return true;
	}
	alumnograduacionlize_validate_dni(dni){
		
		//var dni = document.getElementById('dni').value;
		var dni_letters = "TRWAGMYFPDXBNJZSQVHLCKE";
    	var letter = dni_letters.charAt( parseInt( dni, 10 ) % 23 );
		
    	return letter == dni.charAt(8);
	}

	/**
	 * get nie as parameter, split firts letter, calculate
	 * the number from this letter and create dni for validating in 
	 * alumnograduacionlizate method
	 * 
	 * @param nie value
	 * @returns true if nie is valid false otherwise
	 */
	alumnograduacionlize_validate_nie(nie){
		
		//var nie = document.getElementById('dni').value;
		// Change the initial letter for the corresponding number and validate as DNI
		var nie_prefix = nie.charAt( 0 );

		switch (nie_prefix) {
		case 'X': nie_prefix = 0; break;
		case 'Y': nie_prefix = 1; break;
		case 'Z': nie_prefix = 2; break;
		}

		return this.alumnograduacionlize_validate_dni( nie_prefix + nie.substr(1) );
	
	}



}