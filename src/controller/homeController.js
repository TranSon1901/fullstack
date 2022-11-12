import connection from "../config/connetDB"
export const homeController=(req,res)=>{
    connection.query(
        'SELECT * FROM `users`',
        function(err,results,next){
            if(err) throw res.status(400)
            return res.status(200).json({
                results
             })
        }
    )
}
