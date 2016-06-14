### Learning Ionic pagina 78

### Introducción a Ionic. Crear rutas a archivos externos.
******************	PARTE 1
Descripcion: 

Aplicacion de dos paginas: una pagina de login y otra conteniendo un rating de la app
Templates Externos en archivos html agregados en nuestro Router. Añadir propiedades, controller en objeto Route config

SE USARA EL TAG SCRIPT
Objetivo:

Saber como utilizar plantillas extrenas en ionic. Varios estados
Entender de como los controller se enlazan a las vistas

### ELEMENTOS RELEVANTES USADAS:

<ion-nav-view class="has-header"></ion-nav-view> :: LE INDICAMOS AL ROUTER EN QUE PORCION SE ACTUALIZARA EL CONTENIDO DE STATE
ui-sref :: enlaza hacia un estado
ng-template :: en un tag script le indicamos que llamara a un template 



***************** PARTE 2

LLAMAR A LOS TEMPLATES USANDO RUTAS EXTERNAS

1. Creamos una nueva carpeta dentro de www/ tendra las templates
2.  creamos 2 archivos app.html(Contendra el ejercicoo rating de la app) y login.html(contendra el ejercicio formulario)
3. Asignamos elmentos dentro del controller