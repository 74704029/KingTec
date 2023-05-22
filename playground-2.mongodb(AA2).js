use("Contenido");
// db.getCollection("Productos").insertOne({
//     "Nombre":"Apple 14", "Categoria":"Celulares", "Precio":"1200", "Stock":"10"
// }) 
// db.getCollection('Productos').insertMany([
//     { 'Nombre': 'Iphone 7', 'Categoria':'Celulares' , 'Precio':'800' , 'Stock': '8' },
//     { 'Nombre': 'Huawei Nova 10', 'Categoria':'Celulares' , 'Precio':'1500' , 'Stock': '4' },
//     { 'Nombre': 'Redmi note 11', 'Categoria':'Celulares' , 'Precio':'1350' , 'Stock': '8' },
//     { 'Nombre': 'Samgsung galaxy s22', 'Categoria':'Celulares' , 'Precio':'S/3999' , 'Stock': '8' },
//   ]);   

// db.getCollection('Marcas').insertMany([
//     { 'Modelo': 'Iphone 7', 'Fecha de creacion':'2016' , 'Pais de origen':'China' , 'Email': 'applesoporte@hotmail.com' , 'Sitio web': 'https://www.apple.com/la/iphone/'},
//     { 'Modelo': 'Huawei Nova 10', 'Fecha de creacion':'2023' , 'Pais de origen':'China' , 'Email': 'huaweisoporte@gmail.com' , 'Sitio web': 'https://consumer.huawei.com/pe/'},
//     { 'Modelo': 'Redmi note 11', 'Fecha de creacion':'2022' , 'Pais de origen':'China' , 'Email': 'informes@xiaomiperu.com' , 'Sitio web': 'https://xiaomiperu.com/'},
//     { 'Modelo': 'Samgsung galaxy s22', 'Fecha de creacion':'2022' , 'Pais de origen':'Corea del sur' , 'Email': 'informes@xiaomiperu.com' , 'Sitio web': 'https://xiaomiperu.com/'},
// ]); 

// db.getCollection('Ventas').insertMany([
//     { 'Nombre': 'Brayton Garcia', 'Direccion':'Av. San Pedro 22' , 'Telefono':'921 312 123' , 'Email': 'BraytonGarcia@gmail.com' , 'Cantidad': '1' , 'Precio total': '800' , 'Metodo de pago': 'Tarjeta de pago'},
//     { 'Nombre': 'Fadhel Marcatoma', 'Direccion':'Av. San Jorge 21' , 'Telefono':'941 782 113' , 'Email': 'FadhelMarcatoma@gmail.com' , 'Cantidad': '2' , 'Precio total': '3000' , 'Metodo de pago': 'Tarjeta de pago'},
//     { 'Nombre': 'Rodrigo Buhezo', 'Direccion':'Av. Mar pacifico 900' , 'Telefono':'999 121 254' , 'Email': 'RodrigoBuhezo@gmail.com' , 'Cantidad': '3' , 'Precio total': '4500' , 'Metodo de pago': 'Tarjeta de pago'},
//     { 'Nombre': 'Josue Acosta', 'Direccion':'Av. Miramar 23' , 'Telefono':'987 214 523' , 'Email': 'JosueAcosta@gmail.com' , 'Cantidad': '4' , 'Precio total': '15996' , 'Metodo de pago': 'Tarjeta de pago'},
// ])

//  db.getCollection("Productos").find(
//      {
//          "Precio":{
//              "$gt":2000  
//          }
//      }
//  );

//  db.getCollection("Productos").find(
//      {
//          $and:[
//              {"Precio" : {"$gte":1000}},
//              {"Stock" : {"$gt":4}}
//          ]
//      }
//  )

//  db.getCollection("Productos").updateOne(
//      {"Nombre":"Iphone 7"},
//      {$set:{"Nombre":"Iphone 8"}}
//  )

// db.getCollection("Ventas").deleteOne({
//     "Telefono":"921 312 123"
// })