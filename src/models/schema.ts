import mongoose, { Schema, model } from 'mongoose';
import { ILibro } from "../interface/libro.interface";

const LibroSchema = new Schema<ILibro>({
  title: { type: String, required: true, unique:true },
  author: { type: String, required: true },
  publishedYear: { type: Number},
  genre: { type: String},
  available: { type: Boolean, default: true},
}, { versionKey: false })

export const Libro = mongoose.model<ILibro>('Libro', LibroSchema)