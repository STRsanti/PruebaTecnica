# PruebaTecnica
Repositorio para la prueba tecnica de viapin colombia 

# Dependencias 
Dentro de la carpeta backend instalamos Composer install<br>

Lo primero que hice fue crear la carpeta backend donde iba a estar alojado todo lo relacionado con laravel 
Cuando ya se creo toda la carpeta modificamos el .env, la base de datos, servidor, puerto y nombre de la base de datos

DB_CONNECTION=mysql<br>
DB_HOST=127.0.0.1<br>
DB_PORT=3308<br>
DB_DATABASE=pruebatecnica<br>
DB_USERNAME=root<br>
DB_PASSWORD=<br>

Despues migramos y generamos la llave del proyecto php artisan key:generate

creamos el modelo, controlador y tabla que vamos a usar<br>con 
php artisan make:model Usuarios -m -c -r

# Modelos
En los modelos asociamos los datos para trabajarlos de manera mas limpia<br>
# Tablas
En migracion con las tablas creadas creamos las columnas que tendra la tabla en este proyecto tenemos 2 tablas importantes que estan relacionadas<br>
Departamento<br>
Usuarios<br>
En el que un departamento puede tener muchos usuarios, ya completada la tabla corremos la migracion con<br>
php artisan migrate 
con php artisan tinker incluimos datos a la tabla<br>
# Controladores
En los controladores vamos a modificar para en listar, creater, actualizar y eliminar<br>
Creamos un archivo ubicado en routes/ lo llamamos api.php esto para llamar todos los controladores en un solo archivo<br>
php artisan serve corremos el programa para rectificar errores
<br><br>


# Front
Creamos la carpeta front donde vamos a tener todos los archivos de angular que instalamos con * ng new frontend
En la carpeta app/ creamos una carpeta llamada pages donde tenemos 3 carpetas 1. Home 2. Dashboard 3. usuarios.
Creamos los componentes con ng generate component dashboard, usuarios y demas carpetas.
# Dashboard
Este proyecto dashboard es la pagina principal donde tenemmos en listado todos los usuarios y el usuario puede interactuar con crear, eliminar y editar <br>
# Usuarios
En esta carpeta se aloja 3 carpetas 1. crear-usuario 2. editar-usuario 3. confirmar-eliminacion<br>
En crear-usuario tenemos un componente modal con el formulario para añadir el usuario a la base de datos<br>
Pasamos a confirmar-eliminacion que tambien es un componente modal para eliminar el seleccionado de la lista<br>
En editar seleccionamos el que queremos editar y rellena el formulario del modal permitiendo editar el registro

# Servicios 
Manejamos 2 servicios Usuarios y Departamentos 
ng generate service Usuarios, Departamentos 

# Cosas a mejorar 
El manejar 3 modales complica la logica y hubieron muchos errores, pero se logro con el objetivo 




