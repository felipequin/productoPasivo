# Pasivo (Cuentas de Ahorro)

Este Proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.
se hizo uso de las librerias de bootstrap para diseño del formulario, font-awesome para los iconos y sweetalert2 para las alertas.
Se realizo el mock de los servicios con json-server.

Consta de un modulo principal llamado ahorro donde se visualizan las cuentas creadas permitiendo su modificación y eliminación y/o
Creación.

El segundo formulario llamado crear-cuenta se encarga de la toma de los datos para aperturar la cuenta y de su respectiva modificación.

los dos formularios cuentan con web responsive.

Recuerde que antes de iniciar a probar y a trabajar con el codigo es necesario descargar los paquetes necesarios que requiere el proyecto, dirijase a la ruta raiz del proyecto y ejecute el comando `npm install` se iniciara la descarga de las dependencias configuradas en el archivo package.json

## Servidor de Desarrollo

Ejecute `ng serve` en su instancia de Angular, se iniciara el proyecto navegue hasta la ruta `http://localhost:4200/` si se realiza alguna modificacion, angular recomilara los archivos y refrescara la pagina.

Ejecute 'json-server --watch "cuentasAhorro.json"' en la carpeta raiz del proyecto angular, este comando levantara los servicios mock de la aplicacion.

## Generación de Codigo

Ejecute `ng generate component component-name` para generar nuevos componentes. tambien puede usar los siguientes comandos `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

ejecute `ng build` para compilar el proyecto . la compilación de los artefactos se guardara por defecto en el directorio `dist/` . Use el comando `--prod` para generar una compilación productiva.

## Ejecución de pruebas unitarias

Ejecute  `ng test` para ejecutar las pruebas unitarias con [Karma](https://karma-runner.github.io).

## Ayudas y Preguntas

Puede visualizar a documentacion de Angular con el comando `ng help` o ir a la pagina de angular [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
