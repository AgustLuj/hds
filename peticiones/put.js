module.exports= (app)=>{

    app.put('/usuarios/:id',(req,res) =>{
        let id = req.params.id;
        res.json(id);
    });

}