import { Router } from "express";
import Controllers from "../controllers";

const router = Router()

// crear un usuario

router.post("/create", Controllers.User.createUser )


export default router