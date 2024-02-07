import Category from "../models/category-model"
import { Request, Response } from 'express'
import { ICategory } from "../types"
import { AuthRequest } from "../middleware"



export const getAllCategories = async (request: AuthRequest, response: Response) => {
    try {
        const {user} = request

        const categories = await Category.find({
            user: user,
        })
        return response.send(categories)
    } catch (error) {
        response.send({ error: "Something went wrong" })

        console.log("error in getAllCategories", error)
    }
}

export const createCategory = async (request: AuthRequest, response: Response) => {
    try {
        const { color, icon, isEditable, name }:ICategory = request.body
        const { user } = request

        const category = await Category.create({
            color,
            icon,
            isEditable,
            name,
            user,
        })

        response.send(category)

    } catch (error) {
        response.send({ error: "Something went wrong" })
    }
}

export const deleteCategory = async (request: AuthRequest, response: Response) => {
    try {
        const {id} = request.params
        await Category.deleteMany({ _id: id })
        response.send({ message: "Category deleted" })

    } catch (error) {
        console.log("error in deleteCategory", error)
        response.send({ error: "Something went wrong" })
        throw error
    }
}

export const updateCategory = async (request: AuthRequest, response: Response) => {
    try {
        const { _id, color, icon, isEditable, name }: ICategory = request.body
        await Category.updateOne({
            _id,

        }, {
            $set: {
                name,
                color,
                icon,
                isEditable,
            },
        })
        response.send({message: "Category updated successfully"})
    } catch (error) {
        console.log("error in updateCategory", error)
        response.send({message: "Error in updating category"})
        throw error
    }
}