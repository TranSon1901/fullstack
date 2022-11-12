import { routerHome } from './home'
const router =(app)=>{
    app.use('/', routerHome)
}
export default router