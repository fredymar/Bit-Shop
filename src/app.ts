import  Express  from "express";
import dotenv from "dotenv"
import apiRoutes from "./routes/index"
import { connectDB } from "./database"
import cors from "cors"

//CREAR INSTANCIA DE EXPRESS

const app = Express()

// traer el puerto de variables de entorno

dotenv.config() // traer la configuracion de env

//CONEXION BASE DE DATOS

connectDB()

//Establecer el puerto en el cual se ejecuta el api
const port = process.env.PORT || 3200;

//Especificar que servidores tienen acceso al api

app.use(cors())

//Establecer usos de express

app.use(Express.json()) // -> decirle a express que entienda json

// Establecer las rutas a utilizar en el api

app.use("/api", apiRoutes)

// traer una direccion get


//ejecución del api 

app.listen(port, () => console.log(`api is running in port ${port}`)) // ejecurar el api en un puerto particular