import { homeController } from '../controller/homeController'
import express from 'express'
const routerHome = express.Router()
   routerHome.get('/api',homeController)
export {routerHome}