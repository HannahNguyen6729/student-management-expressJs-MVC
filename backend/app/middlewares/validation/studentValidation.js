const checkEmpty = (req, res, next) => {
  const { name, age, numberClass } = req.body;
  if (name && age && numberClass) {
    next();
  } else {
    res.status(500).send("This field cannot be empty");
  }
};
const checkNumberClass = (req, res, next) => {
  const { numberClass } = req.body;
  if (numberClass >= 1 && numberClass <= 12) {
    next();
  } else {
    res.status(500).send("numberClass must be between 1 and 12");
  }
};
module.exports = { checkEmpty, checkNumberClass };
