
module.exports = function(app){
    app.get('/',(req,res) => {
        res.render('index',{name:"Agustion"});
    });
    app.get('/about',(req,res) => {
        res.render('about');
    });   
}