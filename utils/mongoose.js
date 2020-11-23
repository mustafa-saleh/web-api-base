const mongoose = require("mongoose");

/**
 * Connecct to Mongo Db
 * @function connectToDb
 * @param {String} mongoDbUri - Db Url to connect to
 */
async function connectToDb(mongoDbUri = "") {
  const dbUri = mongoDbUri || process.env.DB_URI;
  await mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
}

function errorsReducer(errors) {
  if (typeof errors === "string") return { message: errors };
  const result = {};

  for (let field in errors) {
    result[field] = errors[field].message;
  }
  return result;
}

module.exports = { connectToDb, errorsReducer };
