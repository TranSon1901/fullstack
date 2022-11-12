import connection from "../config/connetDB"
export const homeController=(req,res)=>{
    connection.query(
        'SELECT * FROM `users`',
        function(err,results,next){
            console.log(results)
            return res.send(results)
        }
    )
    return res.send('hello world')
}
