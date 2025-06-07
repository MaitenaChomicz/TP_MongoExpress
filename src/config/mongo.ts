import { connect } from "mongoose";
process.loadEnvFile()

const URI_DB = process.env.URI_DB || ""

const connectMongoDB = async () => {
  try {
    await connect(URI_DB)
    console.log("Base de datos conectada correctamente")
  } catch (error) {
    console.log("No es posible conectarse a la base de datos", error)
  }
}

export { connectMongoDB }