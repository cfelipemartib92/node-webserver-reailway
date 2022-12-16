# Paso a paso webservie

1. * servidor weeb que sirve contenido html o lo que se necesite - crear paginas y renderizarlas para mandarlas del lado del cliente - desplegar sitio web- mostrar contenido http - 
    * Uso y configuración de Express
    Lo que se pretende es:
    Servir contenido estático

    * Servir contenido dinámico
    * Template engines
    * Handebars
    * Parciales
    * Variables
    * Despliegues en Heroku
    * Hacer carpetas públicas en la web
    * Desplegar aplicaciones de Angular y React
    
2. Creamos un pakage.json - es mejor usar si tiene más de 2 archivos con los comandos: npm init -y 
3. creamos el archivo app.js
4. Instalamos el nodemon: npm install -g nodemon
5. para que sirva en vs code  desde el powershell como admin mandamos este comando: Set-ExecutionPolicy Unrestricted
    5.1 ya tendremos activado el nodemon desde el vscode
6. en node doc - nos muestra donde podemos usar conecciones de https: https://nodejs.org/dist/latest-v19.x/docs/api/http.html#httpcreateserveroptions-requestlistener
7. traemos el paquete de http de nopde con el comando: const https = require('http')
8. desplegamos en web - chrome- localhost:8080
9. los headers sirven para mandar tokens dentro del sitio
10. podemos mandar diferentes tipos de repsonses en wel webservice
11. para hacerlo más sencillo usaremos express en el nuevo archivo app.js - (el otro lo llamamos old)
12. buscamos en la documentación de npm - express - con el comando: npm i express
    12.1  copiamos y pegamos el primer paquete de express en el npm
    12.2 montamos el texto inicial de la documentación para ver como funciona
    12.3 lo volvemos funciones tipo flecha
13. servir contenido estatico
    13.1 creo una nueva carpeta en la raíz del proyecto y se le pone public
    13.2 conecto el exoress con el html nunevo de public con el middleware: 
    13.2.1 el middleware se usa con app.use()
14. usamos un ejemplo que nos mandó para montarlo como index y demás
15. usar librerias de gintexpress con handlebars
    15.1 se pèude agregar dinamismo implementando handlebars - libreria para sitios web semi dinamicos - se renderiza del lado del backend
    15.2 uso handlebars cuando las cosas son sencillas
    15.3 handlebars es un template engine llamaod mustache
    15.4 lo descargo para trabajarlo en express - para que express renderice
    15.5 link de la libreria: github.com/pillarjs/hbs
    15.6 copiamos y pegamos la linea para descargar el handlebars para express que es: $ npm install hbs
    15.7 buscamos prerenderizar las páginas en el backend para mandarlas como rtas a los endpoints (no queremos renderizar los assets ni imagenes)
    15.8 tomamos todo lo que queremos renderizar y lo metemos a la carpeta template 
    15.9 se le dice a expreses que voy a utilizat template y se le da la orden de renderizar cuando se le ordene
16. aplicación de handlebars
    16.1 renderizo unas vistas
    16.2 handle bar quiere que tengamos por separado la visa el modelo y el controlador
    MVC
    16.3 Creamos una caprta llamada views (obligatorio que se llama así si usamos config por defecto de handlebars)
    16.4 creamos un archivo llamado home.hbs (bigotico) - cuyo contenido será el que está en el index
17. cómo mandar info del controlador para atraparla en el template
    en el archivo mando opciones
    se le pone las opciones en dobl llave en el html (hbs)
        * se lo puse al nombre y al titulo {{nombre}} - salió del app.js en renderizado
    17.1 LAS DEMÁS UTIULIDAdes se peuden encontrar en la documentación: https://github.com/pillarjs/hbs
18. uso de parciales para reutilizar codigo en alguina página - componentes que se repiten
    18.1 creamos una carpeta detro de views llamado partials - buscamos la documentación que muestra los registerPartials
    18.2 conectamos las funciones de hbs poara los partials
    18.3 borramos del html las partes que queramos y las montamos en los partials:
        * header
        * NAVBAR
        * FOOTER
    18.2 LO APLICAMOS CON las demás páginas
19. vamos a desplegar la app en un hosting
    19.1 organizamos el puerrto
    19.2 vamos a configurar una variable en el puerto - para que se ajuste de acuerdo al peurto que vamos a necesitar:
    19.3 instalamos un paquete llamado: 
    --PAQUETE PARA VARIABILIZAR PUERTO (y otras variables de entorno): npm i dotenv
    19.4creamos un archivo desde la raiz llamado .env
        19.4.1 Creamos el puerto llamado PORT=8081
    19.5 EN EL app.js vamos a cargar la variable de entorno de puerto desde el archivo .env
    19.6 AGREGAMOS PAQUETE DE ENTORNO CON: require('dotenv').config;
    19.7 VOY AL PACKAGE.JSON y especificar un comindo que tiene que tener: "start":"node app.js" // si necesita le agrego un path
    19.8 lo probamos agregando en la consola: npm start
    19.9 creamos un respaldo a los modulos de node
    --GIT -----------------------------------------------------------
        19.9.1 creamos un archivo en los modulos de node llamado .gitignore
        19.9.2 monsto los archivos que no quiero que tnega seguimiento: en este caso escribimos : node_modules/ (está en el archivo .gitignore)
20. preparamos los repositorios en la consola montando a git con los siguientes comnds:
    * git init
    * git add . //para tomar los archivos y prepararlos para el stage
    * git commit -m "Webserver listo"//tomamos la fotografía de los archivos    * 
    --RAILWQAY SERVER -----------------------------------------------------------
21. Desplegamos la aplicación en la nube Raiilway 
    21.1 para la web - usaremos un servidor que pueda procesar peticiones
    21.2 usaremos en nuestro caso railway - gratuito
    21.3 creamos una cuenta
    21.4 montamos la info desde github con el siguiente comando git:
        (retirno mi file de entorno .nev)
    --GIT -----------------
    * git init 
    * git add .
    * gitt commit -m "Webserver Listo"
    *** montamos en repositorio de git - se ve cuando abrimos el reposiorio del gti (https://github.com/cfelipemartib92/node-webserver-reailway)
    * git remote add origin https://github.com/cfelipemartib92/node-webserver-reailway.
    * git git branch -M main
    * git push -u origin main
    21.5 voy a railway y hacemos click en el dashboar en +new project
    21.6 -> deploy from github repo->seleccionamos el nombre del projecto->deploy now
    21.7 en settings voy y selecciono generate domain, y nos manda una rta en este caso: node-webserver-reailway-production.up.railway.app
    21.8 puedo cambiar el nombre del servidor a mi correo
    -----Desplegando en apps de angular y react------------------------------------
22. nos compaerten el archivo adjunto 
    22.1 las montamos en un hosting o webserver
    22.2 podemos usar un paquete llamado: http-server: a simple static http server
    22.3 se peude instalar en un proyecto para tener un proyecto ligero - no para producción pero sirve para probar rápidamente
    22.4 los comandos son: npm install --global http-server
    22.5 abro la app en la terminal CD(path) y una vezx abierta le agrego el comando:
    http-server -o
    22.6 vamos a probar montando lo de react - copio y lo pego en la carpeta de public
    22.7 nodemon (app) - es para desplegar 
    ----git push nuevos cambios-----------------------------------------------
23. Para agregar cambios en el railway tenemos que hacer un nuevo push en el git
    23.1 comandos:
    * git add . //para tomar los utlimos cambios 
    * git commit -m "Ajustes nuevos" // para ya mandarlo a la branch main






    


vamos a montar el webserver 


















?. Qué es renderizar? 


