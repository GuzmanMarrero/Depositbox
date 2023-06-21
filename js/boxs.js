//Entrada de datos:(ARRAY) 

/*
const myArray = [
    {id_box:1, nombre_product_box:"Salmon",weight_box:"3.2",volume_box:"0.24",price_incotern_box:"12",type_incotern_box:"CIF",origin_box:"Chile(Puerto Mont)",stock_box:"2640"},
    {id_box:2, nombre_product_box:"Bandeja",weight_box:"1.5",volume_box:"0.196",price_incotern_box:"15",type_incotern_box:"FOB",origin_box:"China(Shangai)",stock_box:"225"},
    {id_box:3, nombre_product_box:"Vinagre de arroz",weight_box:"20",volume_box:"0.24",price_incotern_box:"33.6",type_incotern_box:"CIF",origin_box:"EEUU(Portland)",stock_box:"200"},
    {id_box:4, nombre_product_box:"Queso philadelphia",weight_box:"6",volume_box:"0.24",price_incotern_box:"32",type_incotern_box:"EXWORK",origin_box:"Brasil(Curitiva)",stock_box:"900"},
];

var boxs = myArray.map(function(bar){
    return '<li>'+bar.id_box+'\n'+bar.nombre_product_box+'\n'+bar.weight_box+'\n'+bar.volume_box+'\n'+bar.price_incotern_box+'\n'+bar.type_incotern_box+'\n'+bar.origin_box+'\n'+bar.stock_box+'</li>'
})

document.getElementById("boxs").innerHTML = boxs;
*/

//--------------------------------------------------------------------------------------------//


const list_boxs = [
    {id_box:1, nombre_product_box:"Salmon",weight_box:"3.2",volume_box:"0.24",stock_box:"10",lote_box:"29042023",ubication_box:"AA 00 00",timecheck_box:"29/04/2023 15:42:00"},
    {id_box:2,nombre_product_box:"Bandeja",weight_box:"1.5",volume_box:"0.196",stock_box:"10",lote_box:"29042023",ubication_box:"AA 00 00",timecheck_box:"29/04/2023 15:42:00"},
    {id_box:3,nombre_product_box:"Vinagre de arroz",weight_box:"20", volume_box:"0.24", stock_box:"10", lote_box:"29042023",ubication_box:"AA 00 00",timecheck_box:"29/04/2023 15:42:00"},
    {id_box:4,nombre_product_box:"Queso philadelphia",weight_box:"6",volume_box:"0.24",stock_box:"10",lote_box:"29042023",ubication_box:"AA 00 00",timecheck_box:"29/04/2023 15:42:00"},
];

var boxs = list_boxs.map(function(bar){
    return '<li>'+bar.id_box+'\n'+bar.nombre_product_box+'\n'+bar.weight_box+'\n'+bar.volume_box+'\n'+bar.stock_box+'\n'+bar.lote_box+'\n'+bar.ubication_box+'\n'+bar.timecheck_box+'</li>'
})

document.getElementById("table02").innerHTML = boxs;

