import { routerHome } from './home'
import { productRouter } from './product'
const router =(app)=>{
    app.use('/', routerHome)
    app.use('/',productRouter)
}
export default router