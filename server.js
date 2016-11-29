var express = require('express');

var app = express();

app.set('port', (process.env.PORT || 5000));
app.set('views', './views');
app.set('view engine', 'jade')

app.get('/',function(req,res){
  console.log('Home Page');
  res.render('home',{title:'Home Page'})
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
