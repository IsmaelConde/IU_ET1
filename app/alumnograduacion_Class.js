/* Eliminado del string
action="http://193.147.87.202/procesaform.php" method="POST" onsubmit="return entidad.ADD_submit_persona();"


*/

class alumnograduacion extends Validations{
    #plantilla_form = 
    `
        <h3>Estás en modo: <p id="mode_action"></p></h3>
        <form id = 'form_iu'enctype="multipart/form-data" >

        <label class="label_login">Login</label>
        <input type='text' id='login' name='alumnograduacion_login' onblur=" return entidad.ADD_login_validation();"></input>
        <span id="span_error_login"><a id="error_login"></a></span>
        <br>
        
        <label class="label_password">Password</label>
        <input type='text' id='password' name='alumnograduacion_password' onblur=" return entidad.ADD_password_validation();"></input>
        <span id="span_error_password" ><a id="error_password"></a></span>
        <br>
        
        <label class="label_nombre">Nombre</label>
        <input type='text' id='nombre' name='alumnograduacion_nombre' onblur=" return entidad.ADD_nombre_validation()"></input>
        <span id="span_error_nombre" ><a id="error_apellidos_persona"></a></span>
        <br>
        
        <label class="label_apellidos">Apellidos</label>
        <input type='text' id='apellidos' name='alumnograduacion_apellidos' onblur=" return entidad.ADD_apellidos_validation()"></input>
        <span id="span_error_apellidos" ><a id="error_apellidos"></a></span>
        
        <br>
        <label class="label_titulacion">Titulación</label>
        <select id="titulacion" name="alumnograduacion_titulacion" onblur=" return entidad.ADD_titulacion_validation()">
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
        <input type='text' id='dni' name='alumnograduacion_dni' onblur=" return entidad.ADD_dni_validation()"></input>
        <span id="span_error_dni" ><a id="error_dni"></a></span>
        
        <br>
        <label class="label_telefono">Teefono</label>
        <input type='text' id='telefono' name='alumnograduacion_telefono' onblur=" return entidad.ADD_telefono_validation()"></input>
        <span id="span_error_telefono" ><a id="error_telefono"></a></span>

        <br>
        <label class="label_direccion">Dirección</label>
        <input type='text' id='direccion' name='alumnograduacion_direccion' onblur=" return entidad.ADD_direccion_validation()"></input>
        <span id="span_error_direccion" ><a id="error_direccion"></a></span>

        <br>
        <label class="label_email">Email</label>
        <input type='text' id='email' name='alumnograduacion_email' onblur=" return entidad.ADD_email_validation()"></input>
        <span id="span_error_email" ><a id="error_email"></a></span>
        
        <br>
        <label id="label_fotoacto" class="label_fotoacto">Fotoacto</label>
        <input type='text' id='fotoacto' name='alumnograduacion_fotoacto'></input>
        <span id="span_error_fotoacto"><a id="error_fotoacto"></a></span>
        <a id="link_fotoacto" href="http://193.147.87.202/ET2/filesuploaded/files_foto_persona/"><img src="./iconos/FILE.png" /></a>
        
        <label id="label_nuevo_fotoacto" class="label_nuevo_fotoacto">Nueva Fotoacto</label>
        <input type='file' id='nuevo_fotoacto' name='alumnograduacion_nuevo_fotoacto' onblur="entidad.ADD_fotoacto_validation()"></input>
        <span id="span_error_nuevo_fotoacto"><a id="error_nuevo_fotoacto"></a></span>
        <br>

        <input id="submit_button" type="submit" value="Submit">

    </form>
    `;

    #parseador;
    #peticiones_back;
    #nombreentidad;
    #datos_insertados; // Para cuando pasemos de ADD a SEARCH y los input mantenga los datos

    constructor(){
        super();
        this.#parseador = new DOMParser(); // Para que a partir de un string html obtenga sus elementos
        this.#peticiones_back = new ExternalAccess();

		this.columnasamostrar = ['dni','nombre_persona', 'foto_persona'];
		this.mostrarespecial = ['foto_persona'];
        this.#nombreentidad = "alumnograduacion";

        this.#datos_insertados = new Array();
        this.dom = new dom();
    }

    prepareForm(action){
        const documento = this.#parseador.parseFromString(this.#plantilla_form, "text/html"); // Cargamos el nuevo contenido

        if(document.querySelector("#form_iu")){ // Ya existe un formulario
            this.#datos_insertados = Array.from(new FormData(document.querySelector("#form_iu")));
            
            // Cargamos el contenido deel anterior formulario en el nuevo
            this.#datos_insertados.forEach(fila => {
                let input = documento.querySelector(`[name="${fila[0]}"]`);
                if(input && input.type != 'file'){ // Si existe ese "name" en el input y es distinto a type="file"
                    input.value = fila[1];
                }
            });
        }

        // Le decimos al usuario en que modo estamos
        documento.querySelector("#mode_action").innerHTML = action;

        switch(action){
            case "SEARCH":
                let input_foto_nuevo = documento.querySelector("#nuevo_fotoacto");
                input_foto_nuevo.setAttribute("disabled", true);
                break;
            case "ADD":
                let input_foto = documento.querySelector("#fotoacto");
                input_foto.setAttribute("disabled", true);
                break;
            default:
                console.log("Accion:", action);
                alert("Modo no establecido en el switch");
        }
        

        let formulario = documento.querySelector("#form_iu");
        formulario.addEventListener("submit", (e) => {
            e.preventDefault(); // Evita el recargo de página
        });

        let boton_enviar = documento.querySelector("#submit_button");
        boton_enviar.setAttribute("onClick", "entidad.sendData('" + action + "')");

        document.querySelector("#insert_form").innerHTML = ""; // Refrescamos formulario
        document.querySelector("#insert_form").append(...documento.body.childNodes);
    }

    /* ACCIONES USUARIO */
    createForm_ADD(){ // Para el ADD
        console.log("Formulario ADD cargado");
        this.prepareForm("ADD");
    }

    createForm_SEARCH(){
        console.log("Formulario SEARCH cargado");
        this.prepareForm("SEARCH");
    }

    createForm_EDIT(){

    }
    /* FIN ACCIONES USUARIO */

    /* PETICIONES BACK */
    async sendData(action){
        await this.#peticiones_back.peticionBackGeneral('form_iu', this.#nombreentidad, action)
        .then((respuesta) => {
            switch(action){
                case "SEARCH":
                    this.mostrarResultados(respuesta);
                    break;
                case "ADD":
                    if(respuesta["ok"] == true && respuesta["code"] == "SQL_OK"){ // Se ha agregado correctamente
                        alert("Se ha creado el usuario");
                    }
                default:
                    console.log(respuesta);
            }
        });
    }
    /* FIN PETICIONES BACK */

    /* VALIDACIONES */
    ADD_login_validation(){

    }

    ADD_password_validation(){

    }

    ADD_nombre_validation(){

    }

    ADD_apellidos_validation(){

    }

    ADD_titulacion_validation(){

    }

    ADD_dni_validation(){

    }

    ADD_telefono_validation(){

    }

    ADD_direccion_validation(){

    }

    ADD_email_validation(){

    }

    ADD_fotoacto_validation(){

    }

    /* FIN VALIDACIONES */

    mostrarResultados(respuesta){
        console.log("Respuesta", respuesta);
        this.datos = respuesta['resource'];
        this.atributos = Object.keys(this.datos[0]);

        if (respuesta['code'] == 'RECORDSET_DATOS'){
            //crear la tabla de datos de la entidad del back
            this.crearTablaDatos(this.datos, this.mostrarespecial);
            //rellenar el select de columnas a mostrar
            //this.crearSeleccionablecolumnas(this.columnasamostrar, this.atributos);
            //this.mostrarocultarcolumnas();
        }
        else{
            document.getElementById("id_tabla_datos").style.display = 'block';
            document.getElementById('muestradatostabla').innerHTML = '';
            document.getElementById('muestradatostabla').className = 'RECORDSET_VACIO';
        }
    }

    crearTablaDatos(datos, mostrarespecial){
		
		var misdatos = datos;
		/*
		recorrer todas las filas de datos y cada atributo para si tiene una funcion de transformación de valor modificarlo en el momento
		*/
		for (var i=0;i<misdatos.length;i++){
			for (var clave in misdatos[i]){
					if (clave in mostrarespecial){
						//misdatos[i][clave] = this.cambiarmostrarespecial(clave, misdatos[i][clave]);
					}
			}
		}
		// proceso los datos de la tabla para incluir en cada fila los tres botones conectados a createForm_ACCION()
		for (var i=0;i<misdatos.length;i++){
			
			var linedit = `<img id='botonEDIT' src='./iconos/EDIT.png' onclick='entidad.createForm_EDIT(`+JSON.stringify(misdatos[i])+`);'>`;
			var lindelete = `<img id='botonDELETE' src='./iconos/DELETE.png' onclick='entidad.createForm_DELETE(`+JSON.stringify(misdatos[i])+`);'>`;
			var linshowcurrent = `<img id='botonSHOWCURRENT' src='./iconos/SHOWCURRENT.png' onclick='entidad.createForm_SHOWCURRENT(`+JSON.stringify(misdatos[i])+`);'>`;
			misdatos[i]['EDIT'] = linedit;
			misdatos[i]['DELETE'] = lindelete;
			misdatos[i]['SHOWCURRENT'] = linshowcurrent;

		}
		
		//muestro datos en tabla
		this.dom.showData('IU_manage_table', misdatos);
		this.mostrarocultarcolumnas();
		this.crearSeleccionablecolumnas(this.columnasamostrar, this.atributos);
	}

    mostrarocultarcolumnas(){

		var estadodisplay = '';
		// recorro todos los atributos de la tabla
		for (let columna of this.atributos){
			// si el atributo esta en columnas a mostrar 
			// lo dejo como esta
			if (this.columnasamostrar.includes(columna)){
				estadodisplay = '';
			}
			// si el atributo no esta en columnas a mostrar lo oculto
			else{
				estadodisplay = 'none';
			}
			document.querySelector("th[class='tabla-th-"+columna+"']").style.display = estadodisplay;
			let arraytds = document.querySelectorAll("td[class='tabla-td-"+columna+"']");
			for (let i=0;i<arraytds.length;i++){
				arraytds[i].style.display = estadodisplay;
			}
		}
	}

    crearSeleccionablecolumnas(columnasamostrar,atributos){

		document.getElementById("seleccioncolumnas").innerHTML = '';
		
		for (let atributo of atributos){

			var optionselect = document.createElement('option');
			optionselect.className = atributo;
			optionselect.innerHTML = atributo;
			var textofuncion = "entidad.modificarcolumnasamostrar('"+atributo+"');";
			optionselect.setAttribute("onclick",textofuncion);
			if (columnasamostrar.includes(atributo)){
				optionselect.selected = true;
			}
			document.getElementById("seleccioncolumnas").append(optionselect);
		}
		//setLang();

	}

    modificarcolumnasamostrar(atributo){

		if (this.columnasamostrar.includes(atributo)){
			// borrar ese atributo
			this.columnasamostrar = this.columnasamostrar.filter(columna => columna != atributo);
		}
		else{
			// añadir
			this.columnasamostrar.push(atributo);
		}
		
		this.mostrarocultarcolumnas();
		this.crearSeleccionablecolumnas(this.columnasamostrar, this.atributos);

	}
}