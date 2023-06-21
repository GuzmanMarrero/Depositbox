/*-----------------0.0 Defino la Clase CAJA-----------------------*/
class Box{
    constructor (id_box,name_product_box,weight_box,volume_box,price_incotern_box,type_incotern_box,origin_box,stock_box){
        this.id_box=id_box;
        this.name_product_box=name_product_box;
        this.weight_box=weight_box;
        this.volume_box=volume_box;
        this.price_incotern_box=price_incotern_box;
        this.type_incotern_box=type_incotern_box;
        this.origin_box=origin_box;
        this.stock_box=stock_box;
        this.total_price_box=total_price_box;
    }
    aplicarCostoAdisionalExWorkBrasil() {
        this.total_price_box = this.price_incotern_box + ((this.price_incotern_box * 0.97));
    }
}
/*---------------------------------------------------------------*/





/*-------------1.0 Funcion para buscar caja---------------------------------------*/

// Declaro la función Buscar caja
function buscarCaja(id_box) {
    return (boxs.find(item => item.id_box === id_box) || null); // Devuelve un Objeto
}

/*---------------------------------------------------------------------------------------------------*/






//------------2.0 Funcion para crear tabla de invetario Box--------------------------------------------------------------------------------//
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag

document.getElementById('table').appendChild(table);

// Creating and adding data to first row of the table
let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "N°ID";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "NAME";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "WHEIGHT(KG)";
let heading_4 = document.createElement('th');
heading_4.innerHTML = "VOLUME(M3)";
let heading_5 = document.createElement('th');
heading_5.innerHTML = "STOCK(U)";
let heading_6 = document.createElement('th');
heading_6.innerHTML = "LOTE(DAY MONTH YEAR)";
let heading_7 = document.createElement('th');
heading_7.innerHTML = "UBICATION(LOCAL ZONE LEVEL)";
let heading_8 = document.createElement('th');
heading_8.innerHTML = "TIME CHECK(D/M/Y AND H/MI/S)";


row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
row_1.appendChild(heading_4);
row_1.appendChild(heading_5);
row_1.appendChild(heading_6);
row_1.appendChild(heading_7);
row_1.appendChild(heading_8);

thead.appendChild(row_1);

// Creating and adding data to third row of the table
let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.innerHTML = "1";
let row_3_data_2 = document.createElement('td');
row_3_data_2.innerHTML = "SALMON";
let row_3_data_3 = document.createElement('td');
row_3_data_3.innerHTML = "3.2";
let row_3_data_4 = document.createElement('td');
row_3_data_4.innerHTML = "0.24";
let row_3_data_5 = document.createElement('td');
row_3_data_5.innerHTML = "10";
let row_3_data_6 = document.createElement('td');
row_3_data_6.innerHTML = "29042023";
let row_3_data_7 = document.createElement('td');
row_3_data_7.innerHTML = "AA 00 00";
let row_3_data_8 = document.createElement('td');
row_3_data_8.innerHTML = "29/04/2023 15:42:00";

row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
row_3.appendChild(row_3_data_4);
row_3.appendChild(row_3_data_5);
row_3.appendChild(row_3_data_6);
row_3.appendChild(row_3_data_7);
row_3.appendChild(row_3_data_8);
tbody.appendChild(row_3);

/*-----------------------------------------------------------*/ 




/*----------------4.0 Funcion para esconder o mostrar tabla desde boton---------------*/

function showHideTableBox() {
  var x = document.getElementById("table");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


/*---------------------------------------------------------------------------------------------*/ 

/*----------------4.5 Funcion para esconder primero la tabla---------------*/
/*
function noneTable(){
  var x =document.getElementById("table");
  return x.style.display="";
}
/*
/*---------------------------------------------------------------------------------------------*/ 


/*-------------------5.0 Funcion para hacer una array y mostrarlo en tabla 02----------------------*/
/*

function arrayBox(){
let columnBox=['N°','NAME','WHEIGHT','VOLUME','STOCK','LOTE','UBICATION','TIME'];
return console.log(arrayBox);
}

/*
/*----------------------------------------------------------------------------*/


/*------------------6.0 Metodos POP/PUSH/SHIFT/UNSHIFT-------------------*/
/*

columnBox.push('IMAGE');

columnBox.pop('');

columnBox.unshift('');

columnBox.shift('');

*/
/*--------------------------*/


/*------------------------7.0 -------------------------------*/
/*
const boxs =[]
for(let i = 0 ; i<boxs.length;i++){
  console.log(boxs[i]);
}

/*

/*Parametro para buscar*/

/*

boxs.forEach(function(box,index,box){
  console.log(box);
  console.log(index);
})
*/

/*------------------------------------------------------*/