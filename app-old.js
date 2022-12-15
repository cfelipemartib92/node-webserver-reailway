
//Paquete de node de http
    const http = require('http')

//voy a crear el servidor - con la función de la documentacón de node
    http.createServer((request, response)=>{//req es la solicitud a web server - resp es lo que el servidor respodner´ça al cliente
                        //solicitud, lo que yo mande
            //console.log(request);
           
    //mandar otro status de rta + se manda el content type
        //mandar un archivo plano a dercargar con contenido:
            //response.writeHead(200,{'content-type':'tex/plain'});
        //Mandar una impresión de JSON a la web
            //response.writeHead(200,{'content-type':'application/json'});  
                //vamos a regresar una dato en JSON - para el ejemplo imprimiendo con json
                    /*const datosPersona = {
                        id:1,
                        nombre:'Felipe',
                    }*/
        //Mandar un csv:
            /*response.setHeader('Content-Disposition','attachment;filename=lista.csv'); //--> configuro para mandar un attachemnet
            response.writeHead(200,{'content-type':'application/csv'}); // --> manda a imprimir un csv  
                    //para el ejemplo con csv: - antes le creo un attachement            
                        response.write('id,nombre\n');
                        response.write('1, Felipe\n');
                        response.write('2, Fernando\n');
                        response.write('3, Federico\n');
                        response.write('4, Pedro\n');*/
            
        //mandar contenido de rta - para el ejemplo de text/plain y json
            //response.write(JSON.stringify (datosPersona));//para amndarlo como archivo plano tengo que stringuizarlo
                
        
        response.write('Hola mundo');
        
        //aviso a node que terminé de usar mi respuesta:
        response.end();
    })
    .listen(8080);//pongo el puerto donde quiero que se me despliegue la función (puerto 8080)

//probamos console log
    console.log('Escuchando en el puerto',8080);