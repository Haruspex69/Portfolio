var express = require('express'),
    app     = express(),
    http    = require('http');
    
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

//ROUTES
app.get('/', function(req, res){
   res.render('index');
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log('app has started!!'); 
});

setInterval(function(){
   http.get('http://quiet-temple-14854.herokuapp.com'); 
}, 300000);