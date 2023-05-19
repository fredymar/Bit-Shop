import { Router } from "express"
import User from "./user.routes"
import Product from "./product.routes"

const router = Router()

//rutas del api 



// rutas del usuario

router.use("/user", User)
router.use("/product", Product)

//rutas de los productos


export default router