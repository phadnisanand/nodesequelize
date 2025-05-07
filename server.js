const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const db = require('./db');
db.sequelize.sync();

const controllers= require('./customer.controller');

app.post('/customers/new', function (req, res) {
   controllers.createCustomer(req, res);
})


app.get('/customersget', function (req, res) {
  controllers.findAllCustomers(req, res);
})

app.get('/getcustomer/:email', function (req, res) {
  controllers.findCustomerByEmail(req, res);
})

app.put('/customers/update', function (req, res) {
  controllers.updateCustomer(req, res);
})

app.delete('/deletecustomer/:email', function (req, res) {
  controllers.deleteCustomer(req, res);
})


app.get('/', function (req, res) {
  res.send('hello world');
});

app.listen(3000, () => {
  console.log('server is running');
})
