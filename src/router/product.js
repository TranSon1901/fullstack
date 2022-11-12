import express from "express";
import { productController } from "../controller/productController";
const productRouter=express.Router()
 productRouter.get('/product',productController)
export { productRouter } 