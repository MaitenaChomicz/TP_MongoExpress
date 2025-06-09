import express from "express";
import { connectMongoDB } from "./config/mongo";
import { LibroRouter } from "./router/LibroRouter";

process.loadEnvFile();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.use("/api/libros", LibroRouter);

app.listen(PORT, () => {
  console.log("Servidor corriendo en http://localhost:${PORT}");
  connectMongoDB();
})


