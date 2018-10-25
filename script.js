var http = require('http');

setInterval(function(){
    http.get("http://quiet-temple-14854.herokuapp.com");    
}, 300000);