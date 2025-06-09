import { Router } from "express";
import { getAllLibros, getLibroByID } from "../controllers/controles";

const LibroRouter = Router();

//Listar todos los libros- GET /books
LibroRouter.get("/", getAllLibros);

//Obtener un libro por ID- GET /books/:id
LibroRouter.get("/", getLibroByID)

//Crear un nuevo libro- POST /books


//Actualizar un libro existente- PATCH /books/:id


//Eliminar un libro- DELETE /books/:id




export { LibroRouter }
