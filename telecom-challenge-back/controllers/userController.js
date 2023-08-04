const { restart } = require('nodemon');
const mysqldb = require('../db/mysql');



class userController {
  
  async getAllUsers(_req, res) {
    const query = 'SELECT * FROM data_clientes';

    mysqldb.query(query, async (error, results) => {
      if (results) {
        const jsonResults = JSON.stringify(results);
        res.status(200).json(jsonResults);
      } else {
        res.status(400).json(error);
      }
    });
  };

  async searchByDni (req, res) {
    const { dni } = req.params;
    const query = 'SELECT * FROM data_clientes WHERE dni = ? ';
    mysqldb.query(query, [dni], async (error, results) => {
      if (results) {
        const jsonResults = JSON.stringify(results);
        res.status(200).json(jsonResults);
      } else {
        res.status(400).send(error);
      }
    })
  };

  async createUser (req, res) {
    const { dni, nombre, apellido, sexo, telefono } = req.body;
    const query = 'INSERT INTO data_clientes (dni, nombre, apellido, sexo, telefono) VALUES (?, ?, ?, ?, ?)';
    mysqldb.query(query, [dni, nombre, apellido, sexo, telefono], async (error, results) => {
      if (results) {
        res.status(200).send('Se creo el nuevo cliente');
      } else {
        res.status(400).send(error);
      }
    })
  };

  async editUser (req, res) {
    const { dni } = req.params;
    const { nombre, apellido, sexo, telefono } = req.body;
    const query = 'UPDATE data_clientes SET nombre = ? , apellido = ? , sexo = ? , telefono = ? WHERE dni = ? '
    mysqldb.query(query, [nombre, apellido, sexo, telefono, dni], (error, results) =>{
      if (results) {
        res.status(200).send('Se ha editado con éxito al cliente');
      } else {
        res.status(400).json(error)
      }
    })
  }

  async deleteUser (req, res) {
    const { dni } = req.params;
    const query = 'DELETE FROM data_clientes WHERE dni = ? ';
    mysqldb.query(query, [dni], (error, results) => {
      if (results) {
        res.status(200).send('El cliente fue dado de baja con éxito');
      } else {
        res.status(400).json(error);
      }
    })
  }

}

module.exports = new userController
