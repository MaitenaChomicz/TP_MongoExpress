import { Request, Response } from "express";
import { Libro } from "../models/schema";
import { ILibro } from "../interface/libro.interface";
import { rtaError, rtaEsperada } from "../utils/controlRespuesta";

//Listar todos los libros
const getAllLibros = async (req: Request, res: Response): Promise<void> => {
  try {
    const libros: ILibro[] = await Libro.find();
    rtaEsperada(res, libros, 200);
  } catch (error) {
    rtaError(res, error);
  }
};

//Obtener un libro por ID
const getLibroByID = async (req: Request, res: Response): Promise<void> => {
  try {
    const libro: ILibro | null = await Libro.findById(req.params.id);

    if (!libro) {
      rtaError(res, new Error("No pudimos encontrar ese libro! Intentalo nuevamente"), 404);
      return;
    }

    rtaEsperada(res, libro);
  } catch (error) {
    rtaError(res, error);
  }
};

//Crear un nuevo libro
const createLibro = async (req: Request, res: Response): Promise<void> => {
  try {
    const nuevoLibro: ILibro = req.body;
    const libroCreado = await Libro.create(nuevoLibro);
    rtaEsperada(res, libroCreado, 201);
  } catch (error) {
    rtaError(res, error);
  }
};

//Actualizar un libro existente
const updateLibro = async (req: Request, res: Response): Promise<void> => {
  try {
    const libroActualizado = await Libro.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!libroActualizado) {
      rtaError(res, new Error("No pudimos actualizar el libro! Intentalo nuevamente"), 404);
      return;
    }

    rtaEsperada(res, libroActualizado);
  } catch (error) {
    rtaError(res, error);
  }
};

//Eliminar un libro- DELETE /books/:id


export { getAllLibros, getLibroByID, createLibro, updateLibro }