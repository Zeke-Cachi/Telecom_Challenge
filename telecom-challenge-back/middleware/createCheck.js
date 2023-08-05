const { check } = require("express-validator");

const editCheck = [
  check("dni")
    .notEmpty()
    .withMessage('"dni" no puede estar vacío')
    .isNumeric()
    .custom((value) => {
      if (value < 5000000) {
        throw new Error("el dni no puede ser menor a 5.000.000");
      } else {
        return true;
      }
    }),

  check("nombre")
    .notEmpty()
    .withMessage('"nombre" no puede estar vacío')
    .custom((value) => {
      checkType = Number(value);
      if (checkType) {
        throw new Error("nombre no puede ser un número");
      } else {
        return true;
      }
    }),

  check("apellido")
    .notEmpty()
    .withMessage('"apellido" no puede estar vacío')
    .custom((value) => {
      checkType = Number(value);
      if (checkType) {
        throw new Error("apellido no puede ser un número");
      } else {
        return true;
      }
    }),

  check("sexo").notEmpty().withMessage('"sexo" no puede estar vacío'),

  check("telefono")
    .notEmpty()
    .withMessage('"telefono" no puede estar vacío')
    .custom((value) => {
      checkType = Number(value);
      if (!checkType || value.length !== 10) {
        throw new Error("telefono deben ser solo números y tener 10 dígitos");
      } else {
        return true;
      }
    }),
];

module.exports = editCheck;
