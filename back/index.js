var fs = require('fs');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';
var _client = '';
var _db = '';
var _collection = '';


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next){
  res.header('Accesq-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,DELETE,POST');
  res.header('Access-Control-Allow-Methods', 'Content-Type');
  next();
});

function _findUser(email, docs){
  var email = docs.find(function (element) {
    return element.email == email;
  });
  return email;
}

app.post('/creer-un-compte', function(req, res){
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
        cellPhone: body.cellPhone,
        };
        _collection.insert(newProfile);
        res.status(200).send({
        message: 'Profile créer',
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
  // client.close();
});
