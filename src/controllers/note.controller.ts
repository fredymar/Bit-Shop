import Express  from "express";
import noteModel from "../models/note.model";

export const getNotes = async (req:Express.Request, res:Express.Response) => {
    try {

        const result = await noteModel.find() //Usuarios existentes

        return res.status(200).json({result})
        
    } catch (error) {
        return res.status(400).json({msg : "Ha ocurrido un error", error})      
    }
}

export const createNote = async (req:Express.Request, res:Express.Response) => {
    try {

        let newNote = req.body
        const noteCreated = await noteModel.create(newNote)

            if (noteCreated) return res.status(201).json({msg: "Producto creado"})
            throw {msg : "Ha ocurrido un error"}
        //let {id, name, lastName, email,username, password, role, active,dateBirth,address, paymentMethods, phoneNumber} = req.body;
    } catch (error) {
        return res.status(400).json({msg : "Ha ocurrido un error", error}) 
    }
}

export const updateNote = async (req:Express.Request, res:Express.Response) => {
    try {
        let {dataToUpdate, _id} = req.body

        //let {_id} = req.body
        //let dataToUpdate = req.body
        const updatedData = await noteModel.findByIdAndUpdate(_id, dataToUpdate)
        return res.status(204).json({msg: "Producto Actualizado"})
    } catch (error) {
        return res.status(400).json({msg : "Ha ocurrido un error", error}) 
    }
}

export const deleteNote= async (req:Express.Request, res:Express.Response) => {
    try {
        let {_id} = req.params
        const deleteData = await noteModel.findByIdAndDelete(_id)
        return res.status(200).json({msg: "Producto Eliminado"})
    } catch (error) {
        return res.status(400).json({msg : "Ha ocurrido un error", error}) 
    }
}


export const buscar = async (req:Express.Request, res:Express.Response) => {
    try {
        let { _id } = req.body
        const search = await noteModel.findById(_id)
        return res.status(200).json(search)
        
    } catch (error) {
        return res.status(400).json({msg : "Ha ocurrido un error", error})
    }
}
