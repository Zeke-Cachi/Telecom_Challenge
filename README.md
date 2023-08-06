# Telecom Challenge

Aplicación de manejo de base de datos de clientes, con la posibilidad de buscar por DNI a tiempo real, editar, crear o borrar datos individuales.

## Stack

#### Frontend

* React + Vite
* TailwindCSS

###### Librerías
* DaisyUI (librería de componentes)
* SweetAlert2
* React-hot-toast
* React icons
* Axios


#### Backend

* NodeJS + Express
* MySql

###### Librerías
* Cors
* Express-validator
* Morgan
* Cors
* mysql2

---

## Frontend

Para el frontend se usó React + Vite. Se inicializa con el siguiente comando: 

`npm run dev`

###### Estructura de carpetas

scr

---- assets (imágenes)

---- components (todos los componentes del proyecto)

---- context (contiene el context que mantiene los estados globales)


Para obtener la mayor simplicidad para el usuario, la interfaz se maneja con el renderizado condicional de los distintos elementos, manejados a traves de distintos useState en un Context. En éste, también se reciben los datos de la database y se guardan para su uso:

`useEffect(() => {
  const getAllData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/allusers");
      const jsonResponse = JSON.parse(response.data);
      setClientData(jsonResponse);
    } catch (error) {
      console.log(error);
    }
  };
  getAllData();
  }, [triggerRequest]);`

Ya que la base de datos es pequeña, me pareció más conveniente obtener todos los datos al cargar la página. Si hubiera sido más grande se hubiera efectuado algún tipo de paginación en el servidor.

Una vez obtenidos los datos, se efectúa un mapeo de los componentes para mostrarlos en una tabla, junto con botones de editar y borrar. La opción de editar y crear usuario (la cual está disponible a través de un botón ubicado en el componente SideBar) se muestran u ocultan a través del cambio de estado de distintos useState booleanos. Para la búsqueda por DNI, sencillamente se ingresa el número en la barra de búsqueda y automáticamente filtrará los dni. Si no encuentra ninguno, figurará un mensaje indicándolo.

El CSS fue escrito con TailwindCSS, un framework que permite desarrollar estilos de modo muy rápido y eficiente.

---

## Backend

El backend se creó usando NodeJS + Express. Se inicializa con el siguiente comando (usando Nodemon en devDependencies): 

`npm start`

###### Estructura de carpetas

controllers (tiene los controladores que manejan la lógica)

db (tiene la conexión a la base de datos MySQL)

middleware (tiene las verificaciones)

routes (tiene las rutas de los endpoints)



El servidor sigue el modelo MVC, con una conexión a una base de datos MySQL, un archivo donde están las rutas (user.js), y sus respectivos controladores (userController.js). Para todas las validaciones en los inputs de crear y editar, se usaron middlewares.

Se usó Morgan para verificar los registros, y para verificar los request y responses se usó Postman (el backend fue lo primero que escribí).

---

### Observaciones

* En mis últimos proyectos venía trabajando con TypeScript, pero en este caso usé JavaScript puro, para mayor velocidad.
* Para la creación de la base de datos usé MySql Workbench 8.0. El archivo .sql está en esta carpeta con el nombre "clientes-db.sql". 


  
