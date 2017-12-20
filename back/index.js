var fs = require('fs');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';
var _client = '';
var _db = '';
var _collection = '';
var _tokens = [];


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,DELETE,POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

function _findUser(email, docs){
var email = docs.find(function (element) {
  return element.email == email;
  });
    return email;
  }

  app.get('/home', function (req, res) {
    var token = '';
  
    if (req.query.accesstoken) token = req.query.accesstoken;
    if (req.headers.accesstoken) token = req.headers.accesstoken;
  
    var index = _tokens.indexOf(token);
  
    if (index != -1) {
      _db = _client.db('artvengers');
      _collection = _db.collection('users');
  
      _collection.find({}).toArray(function (err, docs) {
        if (err) console.log('error:', err);
        else {
            res.status(200).send({
              message: 'Welcome Home',
              userlist: docs
            });
          }
        });
    } else {
      res.status(401).send('Hokuto No Token!');
    }
  });

app.post('/signin', function(req,res){
  var body = req.body;

  if (body.email && body.password) {
    _db = _client.db('artvengers');
    _collection = _db.collection('users');
    _collection.find({}).toArray(function (err, docs){
      if (err) console.log('erreur: ', err);
      else {
        var user = _findUser(body.email, docs);
          if (user) {
            if (user.password == body.password) {
              var token = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);

            _tokens.push(token);

            res.status(200).send({
            message: 'Vous en avez mis du temps à revenir!',
            token : token
            });
            } else {
              res.status(412).send('Comme dirais l\'homme gris: \'YOU SHOULD NOT PASS\' = Mauvais mot de pass');
            }
        } else {
          res.status(404).send('Le mensonge donne des fleurs mais pas de fruits. Mauvais Email');
        }
      }
    });
    } else {
      res.status(412).send('Hey Coco, il te faut un Email et un Mot de passe valide!')
    }
});



app.post('/signup', function(req, res){
  var body = req.body;

  if (body.email && body.password) {
    _db = _client.db('artvengers');
    _collection = _db.collection('users');
    _collection.find({}).toArray(function (err, docs){
      if (err) console.log('erreur: ', err);
      else {
        if (_findUser(body.email, docs)) {
          res.status(409).send('Cet email est deja utilisé: ' + body.email);
        } else {
          var newProfile = {
          email: body.email,
          password: body.password,
          firstName: body.firstName,
          lastName: body.lastName,
          dateOfBirth: body.dateOfBirth,
          adress: body.adress,
          postCode: body.postCode,
          city: body.city,
          country: body.country,
          cellphone: body.cellphone
          };

          _collection.insert(newProfile);
            res.status(200).send({
            message: 'Profile créé',
            data: newProfile
            });
        }
      }
    });
  } else {
    res.status(412).send('Vous devez remplir les criteres suivants; email et password');
  } 
});

MongoClient.connect(url, function (err, client) {
  if (err) console.log('Error', err);
  else {
    console.log("Connected successfully to server");

    app.listen(3000, function () {
    console.log('Let\'s Go BaBY!!!');
  });
}
  _client = client;
});
