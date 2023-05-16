import Express  from "express";


export const createUser = (req: Express.Request,res: Express.Response) => {
    return res.status(201).json({msg: "Usuario creado"})
}