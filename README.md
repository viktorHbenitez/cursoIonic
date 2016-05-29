#Curso de ionic Jesus Conde

--- Ionic SDK front-end -------

Instalacion  y configuracion entorno de trabajo
1. 
	node -v
	npm -v		#gestor de paquetes de node
	bower -v	#manejo de dependencias
		sudo npm install bower -g
	git --version
	gulp -v		#automatiza tareas repetitivas en el worflow - acaffolding de la web app
		sudo npm install -g gulp
	
2. Instalar Cordova e Ionic Global
	sudo npm install cordova@5.0.0 -g	#versiones usadas
	sudo npm install ionic@1.5.0 -g

	cordova -v
	ionic -v
3. SDK de android verificar documentacion de apache cordova

4. crear la primera aplicacion en ionic
	ionic start -a "Ejemplo1" -i app.ejemplo.uno ejemplo1 blank 
	ionic start -a nombreLegibleHumanos -i nombreConDominio nombreDirectorio platilla 
	
	ionic start -a "Ejemplo1" -i app.ejemplo.uno ejemplo1 tabs 
	ionic start -a nombreLegibleHumanos -i nombreConDominio nombreDirectorio platilla 
	
	ionic start -a "Ejemplo1" -i app.ejemplo.uno ejemplo1 sidemenu 
	ionic start -a nombreLegibleHumanos -i nombreConDominio nombreDirectorio platilla 
	
	--Ejecutar la apliacion 

	ionic serve 
	ionic serve -p 8399	#cambiar el puerto
	
	ionic serve -l	#http://localhost:8100/ionic-lab Muestra la aplicacion el los dos dispositivos Android e IOS

5. verificacion de las plantillas existentes
	ionic templates
	viktor@viktor-Aspire-5741 ~/D/C/c/p/ejemplo3 (master)> ionic templates

Downloading Starter Templates - http://code.ionicframework.com/content/starter-templates.json
Ionic Starter templates

blank ................ A blank starter project for Ionic
complex-list ......... A complex list starter template
maps ................. An Ionic starter project using Google Maps and a side menu
salesforce ........... A starter project for Ionic and Salesforce
sidemenu ............. A starting project for Ionic using a side menu with navigation in the content area
tabs ................. A starting project for Ionic using a simple tabbed interface

cambiar navegador por defecto
viktor@viktor-Aspire-5741 ~/D/C/condeIonic (master)> sudo update-alternatives --config x-www-browser

6. USO DE GENERATOR IONIC YEOMAN
	Necesita bower
	
	npm install -g yo
	npm install -g grunt-cli
	npm install -g grunt

	instalar el generador a usar generator-ionic (puede ser cualquera de YEOMAN)
	npm install -g generator-ionic --	grunt serve


