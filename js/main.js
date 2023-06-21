
/**Textos **/

document.getElementById("textoDescripcion").innerHTML = "Proyecto Final---JS--- CODERHOUSE 2023 --- DEPOSIT BOX GUZMAN MARRERO ";
document.getElementById("textoDescripcion").style.color = "lightgreen";



/*0.0 Registro de inventario */


//Boton para ver planilla






//Entrada de datos:

let id_box;
let name_product_box;
let weight_box;
let volume_box;
let stock_box;
let lote_box;
let ubication_box;
let check_box;








//-------------------------------------- 1.0 Funcion de registro desde pantalla emergente 01-----------------------------//



function registroBox1(){
    mensajeRegistro();
    registroEmergente();
}


function mensajeRegistro(){
alert('¡Hola completa los datos para ingresar la informacion de la caja!');}

function registroEmergente(){

id_box = parseFloat(prompt("Ingrese el ID de la caja: "));
console.log("ID de la caja: "+ id_box);

do{
name_product_box = prompt("Ingrese el nombre de la caja:").toLowerCase();
}while ((name_product_box.length == 0 ));
console.log("Nombre de la caja:"+ name_product_box);

weight_box = parseFloat(prompt("Ingrese el peso de la caja: "));
console.log("Peso de la caja: "+ weight_box);

volume_box = parseFloat(prompt("Ingrese el volumen de la caja:"));
console.log("Volumen de la caja: "+ volume_box);

/*
price_box = parseInt(prompt("Ingrese el costo de la caja:"));
console.log("costo de la caja: "+ price_incotern_box);
*/

stock_box = parseInt(prompt("Ingrese el stock de la caja:"));
console.log("stock de la caja: "+ stock_box);

lote_box = parseInt(prompt("Ingrese el lote de la caja:"));
console.log("lote de la caja: "+ lote_box);

ubication_box = parseInt(prompt("Ingrese  la ubicación de la caja : (EJ:LOCAL ZONA NIVEL = AA 00 00) "));
console.log("ubicación de la caja: "+ stock_box);

check_box = parseInt(prompt("Ingrese la fecha y hora del registro : (EJ: DIA MES AÑO Y HORA MINUTO SEGUNDO= 29/04/2023 Y 20:15:00"));
console.log("Check de la caja: "+ check_box);
/*
do{
type_incotern_box = prompt("Ingrese el Tipo de incotern").toLowerCase();
}while((type_incotern_box.length==0));
console.log("tipo de incotern de la caja: "+ type_incotern_box);
*/



//Proceso de datos
let sum_of_date_box="ID de la caja:"+id_box+"Nombre del producto:"+name_product_box+"Peso de la caja:"+weight_box+"Kg"+"Volumen de la caja\n"+ volume_box +"cm³"+"Stock de la caja:\n " + stock_box +"Lote de la caja :\n" +lote_box+"Ubicacion de la caja :\n" +ubication_box+"Ultimo movimiento de la caja :\n" +check_box;
console.log(sum_of_date_box);                           

//salida de datos (Información)
Swal.fire("#Resultado de información de la caja que ingresaste:\n"+"\n=>ID de la caja: "+id_box+"\n=>Nombre de la caja: "+(name_product_box.charAt(0).toUpperCase())+"\n=>Peso de la caja: "+weight_box+" Kg"+"\n=>Volumen de la caja: "+ volume_box +" cm³"+"\n=>Stock de la caja:  " + stock_box +"\n=>lote de la caja:" +lote_box+"\n=>ubicacion de la caja:  " + ubication_box +"\n=>Check de la caja:  " + check_box );
}


//-----------------------------------------------------------------------------------------------------------------------/




//--------------------------------------2.0 Funcion de registro desde pantalla emergente 02-----------------------------//

function registroBox2 () {
(async () => {

    const ipAPI = '//api.ipify.org?format=json'
    
    const inputValue = fetch(ipAPI)
      .then(response => response.json())
      .then(data => data.ip)
    
    const { value: id_Box } = await Swal.fire({
      title: 'Ingrese ID de la caja',
      input: 'text',
      inputLabel: 'Valor numerico',
      inputValue: inputValue,
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return '¡Escribe algo!'
        }
      }
    })
    
    if (id_Box) {
      Swal.fire(`El ID de la caja es "${id_Box}"`)
    }
    
    })()
}
//-----------------------------------------------------------------------------------------------------------------------/




/*----3.0 Registro de la imagen de la caja--------------------------------------------------------*/
function registroBox3(){
    (async () => {

        const { value: file } = await Swal.fire({
          title: 'Busca la imagen de la caja',
          input: 'file',
          inputAttributes: {
            'accept': 'image/*',
            'aria-label': 'Upload your profile picture'
          }
        })
        
        if (file) {
          const reader = new FileReader()
          reader.onload = (e) => {
            Swal.fire({
              title: 'Your uploaded picture',
              imageUrl: e.target.result,
              imageAlt: 'The uploaded picture'
            })
          }
          reader.readAsDataURL(file)
        }
        
        })()
}
/*------------------------------------------------------------*/