 # API Proyecto Final

 Esta API fue creada para el proyecto final del curso de Programacion Backend, la cual se encarga de realizar las operaciones CRUD de la base de datos de la aplicación y gestiona el registro de usuarios.

    ## Instalación

    Para instalar esta API, se debe clonar el repositorio de GitHub y ejecutar el siguiente comando en la carpeta raíz del proyecto:

    npm install

    ## Uso

    Para ejecutar la API, se debe ejecutar el siguiente comando en la carpeta raíz del proyecto:

    npm start



    ## Documentación




    ### Registro de usuario

    Para registrar un usuario, se debe realizar una petición POST a la siguiente ruta:

    http://localhost:8080/api/users/register

    La petición debe contener en el body un objeto con los siguientes atributos:

    {
        "first_name": "Nombre del usuario",
        "last_name": "Apellido del usuario",
        "email": "Correo electrónico del usuario",
        "age": "Edad del usuario" (Opcional),
        "password": "Contraseña del usuario",
        "role": "Rol del usuario" (Opcional)
    }

    Ejemplo:

    {
        "first_name": "Juan",
        "last_name": "Perez",
        "email": "email@email.com",
        "age": 25,
        "password": "123456",
        "role": "admin"
    }

    ### Login de usuario

    Para realizar el login de un usuario, se debe realizar una petición POST a la siguiente ruta:

    http://localhost:8080/api/users/login

    La petición debe contener en el body un objeto con los siguientes atributos:

    {
        "email": "Correo electrónico del usuario",
        "password": "Contraseña del usuario"
    }

    Ejemplo:

    {
        "email": "email@email.com",
        "password": "123456"
    }

    ### Obtener todos los usuarios

    Para obtener todos los usuarios, se debe realizar una petición GET a la siguiente ruta:

    http://localhost:8080/api/users

    ### Eliminar un usuario al no logearse en 2 dias

    Para eliminar un usuario al no logearse en 2 dias, se debe realizar una petición DELETE a la siguiente ruta:

    http://localhost:8080/api/users



    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




    ### Obtener todos los productos de la base de datos

    Aclaracion: Para acceder a la ruta de products, se debe estar logeado como admin o premium.

    Para obtener todos los productos de la base de datos, se debe realizar una petición GET a la siguiente ruta:

    http://localhost:8080/api/products

    ### Obtener un producto por su id

    Aclaracion: Para acceder a la ruta de products, se debe estar logeado como admin o premium.

    Para obtener un producto por su id, se debe realizar una petición GET a la siguiente ruta:

    http://localhost:8080/api/products/:id

    ### Crear un producto

    Aclaracion: Para acceder a la ruta de products, se debe estar logeado como admin.

    Para crear un producto, se debe realizar una petición POST a la siguiente ruta:

    http://localhost:8080/api/products

    La petición debe contener en el body un objeto con los siguientes atributos:

    {
        "name": "Nombre del producto",
        "description": "Descripción del producto",
        "price": "Precio del producto",
        "stock": "Stock del producto",
        "owner": "Id del usuario que creó el producto" (Opcional)
    }

    Ejemplo:

    {
        "name": "Producto 1",
        "description": "Descripción del producto 1",
        "price": 100,
        "stock": 10,
        "owner": "60b9b0b3b0b0c1a1b8b8b8b8"
    }

    ### Actualizar un producto

    Aclaracion: Para acceder a la ruta de products, se debe estar logeado como admin.

    Para actualizar un producto, se debe realizar una petición PUT a la siguiente ruta:

    http://localhost:8080/api/products/:id

    La petición debe contener en el body un objeto con los siguientes atributos:

    {
        "name": "Nombre del producto",
        "description": "Descripción del producto",
        "price": "Precio del producto",
        "stock": "Stock del producto",
        "owner": "Id del usuario que creó el producto" (Opcional)
    }

    Ejemplo:

    {
        "name": "Producto 1",
        "description": "Descripción del producto 1",
        "price": 100,
        "stock": 10,
        "owner": "60b9b0b3b0b0c1a1b8b8b8b8"
    }

    ### Eliminar un producto

    Aclaracion: Para acceder a la ruta de products, se debe estar logeado como admin.

    Para eliminar un producto, se debe realizar una petición DELETE a la siguiente ruta:

    http://localhost:8080/api/products/:id

    
    



    ## Rutas de la API

    ### Rutas de usuarios

    - POST /api/users/register: Registra un usuario en la base de datos.
    - POST /api/users/login: Logea un usuario en la aplicación.
    - GET /api/users: Obtiene todos los usuarios de la base de datos.
    - DELETE /api/users: Elimina un usuario al no logearse en 2 dias.

    ### Rutas de productos

    - GET /api/products: Obtiene todos los productos de la base de datos.
    - GET /api/products/:id: Obtiene un producto por su id.
    - POST /api/products: Crea un producto en la base de datos.
    - PUT /api/products/:id: Actualiza un producto en la base de datos.
    - DELETE /api/products/:id: Elimina un producto de la base de datos.
