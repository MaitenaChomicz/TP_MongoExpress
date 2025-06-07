import express from "express";
import { connectMongoDB } from "./config/mongo";

process.loadEnvFile()

const PORT = process.env.PORT || 3000
const app = express()

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
  connectMongoDB()
})


