var express = require('express'),
    app     = express();
    
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

//ROUTES
app.get('/', function(req, res){
   res.render('index');
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log('app has started!!'); 
});