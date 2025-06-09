# 🧪 Trabajo Práctico: API RESTful de Biblioteca Digital

## 🎯 Objetivo

Desarrollar una API RESTful utilizando **Node.js**, **Express**, **TypeScript**, **MongoDB** y el patrón de diseño **MVC** para gestionar una colección de libros. El proyecto permite crear, consultar, actualizar y eliminar libros de una biblioteca digital.

---

## 🛠️ Tecnologías Utilizadas

- **Lenguaje:** TypeScript  
- **Framework:** Express  
- **Base de datos:** MongoDB  
- **Patrón de diseño:** MVC (Modelo - Vista - Controlador)  
- **Control de versiones:** Git  

---

## 📚 Modelo: `Libro`

> ⚠️ Nota: en este proyecto se utiliza el nombre **`Libro`** en lugar del habitual `Book` para reflejar el idioma del trabajo.

Esquema definido con Mongoose:

| Campo           | Tipo    | Reglas                          |
|-----------------|---------|----------------------------------|
| `title`         | string  | Requerido, único                |
| `author`        | string  | Requerido                       |
| `publishedYear` | number  | Opcional                        |
| `genre`         | string  | Opcional                        |
| `available`     | boolean | Por defecto `true`              |

---

## 🔄 Endpoints

| Método | Ruta           | Descripción                        |
|--------|----------------|------------------------------------|
| GET    | `/books`       | Listar todos los libros            |
| GET    | `/books/:id`   | Obtener un libro por ID            |
| POST   | `/books`       | Crear un nuevo libro               |
| PATCH  | `/books/:id`   | Actualizar un libro existente      |
| DELETE | `/books/:id`   | Eliminar un libro                  |

---

## 🧠 Consideraciones Técnicas

- Uso de `async/await` para manejar asincronía.
- Manejo de variables de entorno con `process.loadEnvFile()`.
- Manejo de errores mediante `try/catch`.
- Respuestas estandarizadas para éxito y error.
- Organización del código siguiendo el patrón MVC.

---

## 📁 Estructura del Proyecto

src/
├── config/ # Configuración general y conexión a la base de datos
├── controllers/ # Lógica de negocio
├── interfaces/ # Tipos e interfaces de TypeScript
├── models/ # Definición del esquema "Libro" con Mongoose
├── router/ # Rutas de la API
├── utils/ # Funciones auxiliares
└── index.ts # Punto de entrada de la aplicación

---

## ✅ Criterios de Evaluación

- ✔️ Correcta definición del esquema `Libro` en Mongoose  
- ✔️ Operaciones CRUD funcionales  
- ✔️ Uso adecuado de `async/await`  
- ✔️ Organización del código y uso de MVC  
- ✔️ Claridad y legibilidad del código  

---

## 📦 Instrucciones para Ejecutar el Proyecto

### 1. Clonar el repositorio
```
git clone https://github.com/MaitenaChomicz/TP_MongoExpress
cd TP_MongoExpress
```

### 2. Instalar dependencias
```
npm install
```

### 3. Crear archivo .env
Crea un archivo .env en la raíz del proyecto con el siguiente contenido:
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/Biblioteca
```

### 4. Compilar TypeScript y correr la API
```
npm run build
npm start
```

### 5. Correr en modo desarrollo(Opcional)
```
npm run dev
```