import { Router } from "express";
import controllers from "../controllers";

const router = Router()

// crear un usuario

router.post("/create", controllers.Product.createProduct )
router.get("/getAll", controllers.Product.getProducts)
router.put("/update", controllers.Product.updateProduct )
router.delete("/", controllers.Product.deleteProduct)
router.get("/getName", controllers.Product.buscar)
router.get("/total", controllers.Product.total)


export default router