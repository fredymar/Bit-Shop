import { Router } from "express";
import Controllers from "../controllers";
import controllers from "../controllers";
import { verifyToken } from "../middlewares/auth";

const router = Router()

// crear un usuario

router.post("/create", Controllers.User.createUser )
router.get("/getAll", verifyToken,  Controllers.User.getUsers)
router.put("/update", verifyToken, Controllers.User.updateUser )
router.delete("/delete/:_id", Controllers.User.deleteUser)
router.get("/getName", Controllers.User.buscar)
router.post("/login", controllers.User.login)


export default router