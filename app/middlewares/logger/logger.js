const logFeatureMiddleware = (req, res, next) => {
  console.log("Get all students");
  next();
};
const anotherMiddleware = (req, res, next) => {
  console.log("Add another middleware");
  next();
};
module.exports = { logFeatureMiddleware, anotherMiddleware };
