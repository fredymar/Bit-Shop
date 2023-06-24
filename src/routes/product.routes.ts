import { Router } from "express";
import controllers from "../controllers";
import upload from "../middlewares/multer";
const router = Router()

// crear un usuario

router.post("/create", controllers.Product.createProduct )
router.get("/getAll", controllers.Product.getProducts)
router.put("/update", controllers.Product.updateProduct )
router.delete("/delete/:_id", controllers.Product.deleteProduct)
router.get("/getName", controllers.Product.buscar)
router.get("/total", controllers.Product.total)

//subir archivo
router.post("/upload", upload.single('file'), controllers.Product.uploadImageProduct)

export default router