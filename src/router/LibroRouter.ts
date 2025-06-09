import { Router } from "express";
import { getAllLibros, getLibroByID, createLibro } from "../controllers/controles";

const LibroRouter = Router();

//Listar todos los libros
LibroRouter.get("/books", getAllLibros);

//Obtener un libro por ID
LibroRouter.get("/books/:id", getLibroByID)

//Crear un nuevo libro
LibroRouter.post("/books", createLibro)

//Actualizar un libro existente- PATCH /books/:id


//Eliminar un libro- DELETE /books/:id




export { LibroRouter }
