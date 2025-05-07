const db = require('./db');
const Customer = db.customers;

function createCustomer(req,res) {
  if(!req.body.name || !req.body.email || !req.body.age) {
    res.status(400).send({
      message: "Bad Data"
    });
  }

  const customerObj =  {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age
  }

  Customer.create(customerObj).then(data => {
    res.send(data);
  }).catch(error => {
    res.status(500).send(error);
  });

}

function findAllCustomers(req, res) {
  Customer.findAll().then( data =>  {
    res.send(data);
  }).catch(err => {
     res.status(500).send(err);
  });
}

function findCustomerByEmail(req,res) {
  Customer.findByPk(req.params.email).then( data =>  {
    res.send(data);
  }).catch(err => {
     res.status(500).send(err);
  });
}

function updateCustomer(req,res) {
  const newData = {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age
  };

  Customer.update(newData,
    {where: {email: req.body.email}}
  ).then( () => {
       res.send('Data updated');
  }).catch(err => {
     res.status(500).send(err);
  });
}

function deleteCustomer(req,res) {
  Customer.destroy({
     where: {email: req.params.email}
    }
  ).then( () => {
       res.send('Data deleted');
  }).catch(err => {
     res.status(500).send(err);
  });

}

module.exports = {
  createCustomer,
  findAllCustomers,
  findCustomerByEmail,
  updateCustomer,
  deleteCustomer
}
