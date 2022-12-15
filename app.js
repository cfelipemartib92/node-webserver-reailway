
const express = require('express')
//llamado de handlebars
const hbs= require('hbs');
//NIVEL 19: LLamamos la libreria que acabamos de instalar de dotenv
require('dotenv').config();

//uso de express
const app = express()
//NIVEL 19: ajustamos el puerto con el nuevo paquete .env
const port= process.env.PORT;

//HANDLEBARS
//para usar el paquete de handlebars para trbaajr con webservice lo hacemos así:
app.set('view engine', 'hbs');
//esto es para el uso de los partials - partes de codigo utilizable en el sitio html
hbs.registerPartials( __dirname + '/views/partials',function(err){});


//conexiópn con el html de public (middleware) - funcion que se ejecuta antes de hacer otra cosa:
    //servir contenido estatico - se usa - que use la carpeta publica
    app.use(express.static('public'));//se especifica el path dentro de los ''

//si ya estoy ejecutando el middleware con el path ya lo de abajo no se va a ejecutar
    /*app.get('/', (req, res)=> {
    res.send('home page');
    })*/

    //para ejecutarlo en su ruta /hola-mundo
    /*app.get('/hola-mundo', (req, res)=> {
        res.send('Hola Mundo en su respectiva ruta');
    })*/

//puedo crear un comodin para cualquier otra ruta me mande el comodin con /*
    /*app.get('*', (req, res)=> {
        res.send('404 | Page not found');
    })*/

//Nivle 3: renderizo la nueva vista del index montada en el home de handlebars:
//esto sería el controlador -----------CONTROLADOR-----------------------------
        app.get('/', (req, res)=> {
        res.render('home',{//agregamos las opciones que querramos mandar como argumento
                nombre:'Felipe Martinez',
                titulo:'Curso de Node',//estos argumentos al momento de enviar la vista
            })
        });
//Nivel 3: realizamos página generic 
    app.get('/generic', (req, res)=> {
    res.render('generic',{//agregamos las opciones que querramos mandar como argumento
        nombre:'Felipe Martinez',
        titulo:'Curso de Node',//estos argumentos al momento de enviar la vista
    })
    });

//Nivel 4: realizamos página generic 
app.get('/elements', (req, res)=> {
    res.render('elements',{//agregamos las opciones que querramos mandar como argumento
        nombre:'Felipe Martinez',
        titulo:'Curso de Node',//estos argumentos al momento de enviar la vista
    })
    });

    //agregamos los nuevos directorios del ejemplo del profesor
    //1.páginca generic -- arriba los renderice en nivel 3
        /*app.get('/generic', (req, res)=> {
            res.sendFile(__dirname + '/public/generic.html')//el path tiene que ser absoluto usamos __
            });*/
    //2.páginca elements -- arriba los renderice en nivel 3
        /*app.get('/elements', (req, res)=> {
        res.sendFile(__dirname + '/public/elements.html')//el path tiene que ser absoluto usamos __
        });*/

     //puedo mandarlo con la ruta publica - utilizo sendFile para que mande el file no el string
    app.get('*', (req, res)=> {
    res.sendFile(__dirname+'/public/404.html')//el path tiene que ser absoluto usamos __
    });

//podemos usar la que creo el profe:
    //app.listen(8080)

//usamos la que nos dice la documentación:
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });

