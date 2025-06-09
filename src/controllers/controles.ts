import { Request, Response } from "express"
import { Libro } from "../models/schema"

//Listar todos los libros- GET /books
const getAllLibros = async (req: Request, res: Response): Promise<any> => {
  try {
    const Libros = await Libro.find()
    return res.json({
      sucess: true,
      data: Libros,
      message: "Se han encontrado todos los libros"
    })
  } catch (error) {
    const err = error as Error
    return res.status(500).json({
      sucess: false,
      message: err.message
    })
  }
}

//Obtener un libro por ID- GET /books/:id


//Crear un nuevo libro- POST /books


//Actualizar un libro existente- PATCH /books/:id


//Eliminar un libro- DELETE /books/:id


export { getAllLibros }