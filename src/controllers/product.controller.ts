import Express  from "express";
import productModels from "../models/product.model"

export const getProducts = async (req:Express.Request, res:Express.Response) => {
    try {

        const result = await productModels.find() //Usuarios existentes

        return res.status(200).json({result})
        
    } catch (error) {
        return res.status(400).json({msg : "Ha ocurrido un error", error})      
    }
}

export const createProduct = async (req:Express.Request, res:Express.Response) => {
    try {

        let newProduct = req.body
        const productCreated = await productModels.create(newProduct)

            if (productCreated) return res.status(201).json({msg: "Producto creado"})
            throw {msg : "Ha ocurrido un error"}
        //let {id, name, lastName, email,username, password, role, active,dateBirth,address, paymentMethods, phoneNumber} = req.body;
    } catch (error) {
        return res.status(400).json({msg : "Ha ocurrido un error", error}) 
    }
}

export const updateProduct = async (req:Express.Request, res:Express.Response) => {
    try {
        let {dataToUpdate, _id} = req.body
        const updatedData = await productModels.findByIdAndUpdate(_id, dataToUpdate)
        return res.status(200).json({msg: "Producto Actualizado"})
    } catch (error) {
        return res.status(400).json({msg : "Ha ocurrido un error", error}) 
    }
}

export const deleteProduct = async (req:Express.Request, res:Express.Response) => {
    try {
        let {_id} = req.body
        const deleteData = await productModels.findByIdAndDelete(_id)
        return res.status(200).json({msg: "Producto Eliminado"})
    } catch (error) {
        return res.status(400).json({msg : "Ha ocurrido un error", error}) 
    }
}

export const buscar = async (req:Express.Request, res:Express.Response) => {
    try {
        let { _id } = req.body
        const search = await productModels.findById(_id)
        return res.status(200).json(search)
        
    } catch (error) {
        return res.status(400).json({msg : "Ha ocurrido un error", error})
    }
}

export const total = async (req:Express.Request, res:Express.Response) => {
    try {
        let products = req.body.product
        let suma = 0
        let array :Object[] = []
        for (let product of products) {
            const productTemp = await productModels.findById(product)
            if (productTemp) {
                array.push(productTemp)
                suma += productTemp.price
            }
        }
        return res.status(200).json({suma, array})
    } catch (error) {
        return res.status(400).json({msg : "Ha ocurrido un error", error})
    }
}