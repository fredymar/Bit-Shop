import { Router } from "express";
import Controllers from "../controllers";

const router = Router()

// crear un usuario

router.post("/create", Controllers.User.createUser )
router.get("/getAll", Controllers.User.getUsers)
router.put("/update", Controllers.User.updateUser )
router.delete("/", Controllers.User.deleteUser)
router.get("/getName", Controllers.User.buscar)


export default router