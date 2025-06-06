import { Schema, model} from 'mongoose'

const LibroSchema = new Schema({
  title: { type: String, required: true, unique:true },
  author: { type: String, required: true },
  publishedYear: { type: Number},
  genre: { type: String},
  available: { type: Boolean, default: true},
}, { versionKey: false })

const Libro = model('Libro', LibroSchema)

export { Libro }