module.exports=(app) =>{

    app.post('/',(req,res)=>{
        res.json(req.body);
    });

}