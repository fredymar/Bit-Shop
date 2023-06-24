import Express  from "express";
import userModels from "../models/user.models";
import jwt from "jsonwebtoken"

export const login = async (req:Express.Request, res: Express.Response) =>{
    // {
    //     username:
    //     password:
    // }

    try {

        let {username, password} = req.body
        // buscar usuario
        let user:any = await userModels.findOne({username})
        if (!user) throw {status: 404, msg: "El usuario no existe"}

        //revisar si lacontraseña es correcta
        if(user.password !== password) throw {status: 401, msg: "Contraseña incorrecta"}

        //generar el token
        user = user.toObject()
        delete(user.password)
        let secret = process.env.SECRET_KEY
        if(!secret) throw{ status: 400, msg:"No hay como encriptar el token"}

        const token = jwt.sign(user, secret)
        //responder login
        return res.status(200).json({msg: "Sesión iniciada correctamente", token})
        
    } catch (error: any) {
        console.log(error);
        return res.status(error.status || 400).json({msg: error.msg || error})
    }
}

export const getUsers = async (req:Express.Request, res:Express.Response) => {
    try {

        const result = await userModels.find() //Usuarios existentes

        return res.status(200).json({result})
        
    } catch (error) {
        return res.status(400).json({msg : "Ha ocurrido un error", error})      
    }
}

export const createUser = async (req:Express.Request, res:Express.Response) => {
    try {

        let newUser = req.body

        let mayor = validarEdad(newUser.dateBirth)

        if (mayor) {
            const userCreated = await userModels.create(newUser)
            if (userCreated) return res.status(201).json({msg: "Usuario creado" + newUser})
        }
        throw {msg : "Ha ocurrido un error"}
        //let {id, name, lastName, email,username, password, role, active,dateBirth,address, paymentMethods, phoneNumber} = req.body;
    } catch (error) {
        console.log(error)
        return res.status(400).json({msg : "Ha ocurrido un error", error}) 
    }
}

export const updateUser = async (req:Express.Request, res:Express.Response) => {
    try {
        let {dataToUpdate, _id} = req.body
        const updatedData = await userModels.findByIdAndUpdate(_id, dataToUpdate)
        return res.status(200).json({msg: "Usuario Actualizado"})
    } catch (error) {
        console.log(error);
        
        return res.status(400).json({msg : "Ha ocurrido un error", error}) 
    }
}

export const deleteUser = async (req:Express.Request, res:Express.Response) => {
    try {
        let {_id} = req.params
        const deleteData = await userModels.findByIdAndDelete(_id)
        return res.status(200).json({msg: "Usuario Eliminado"})
    } catch (error) {
        return res.status(400).json({msg : "Ha ocurrido un error", error}) 
    }
}

export const buscar = async (req:Express.Request, res:Express.Response) => {
    try {
        let { _id } = req.body
        const search = await userModels.findById(_id)
        return res.status(200).json(search)
        
    } catch (error) {
        return res.status(400).json({msg : "Ha ocurrido un error", error})
    }
}
 function validarEdad (naci : string){
    let naciTemp = new Date(naci)
    let actualidad = new Date().getTime()
    if (actualidad > 0) return true

    let nacimiento = naciTemp.getTime()
    if ((actualidad - nacimiento) > 568024668000) {
        return true
    }
        return false

}