exports.setCors = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, x-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");

  next();
};

const { validationResult } = require('express-validator')
const validateInputs = rules => {
    return [
        ...rules,
        (req, res, next) => {
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(422).json({errors: errors.array()})
            }
            
            next()
        }
    ]
}

module.exports = {validateInputs}