import connection from "../config/connetDB"
export const productController=(req,res)=>{
    connection.query(
        'SELECT * FROM `users` WHERE id = 2',
        function(err,results,next){
            if(err) throw res.status(400)
            console.log(results)
            return res.status(200).json({
                results
             })
        }
    )
}