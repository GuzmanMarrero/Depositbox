
//Etiqueta de transferencia que carga stock de cajas para mover de ubicación
const transfer_box=[];

//Declaro la función agregar caja a la etiqueta de transferencia
function agregarCaja(box){
    transfer_box.push(box);
}

//Declaro la funcion para eliminar caja en la etiqueta de transferencia
const eliminarCaja=(id_box)=>{
    let pos=transfer_box.findIndex(item =>item.id_box === id_box);
    if (pos> -1){
    transfer_box.splice(pos,1);   
    }
}

//Recorro las cajas del inventario
function recorrerCajas(){
    let description_box ="";
    for (let box of boxs){
        description_box+=boxs.id_box+"- "+boxs.name_product_box+ "-Stock"+boxs.stock_box+"\n";
    }
    return description_box;
}


//Realizo la carga del inventario
let load_box=true;

load_box=true;
