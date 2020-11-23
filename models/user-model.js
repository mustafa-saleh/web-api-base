const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Schema, model } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "User {PATH} is required"],
      maxlength: [50, "User {PATH} maximum length exceeded"],
    },
    email: {
      type: String,
      trim: true,
      required: [true, "User {PATH} is required"],
      unique: true,
      uniqueCaseInsensitive: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Invalid user {PATH}",
      ],
    },
    password: {
      type: String,
      trim: true,
      required: [true, "User {PATH} is required"],
      minlength: [6, "User {PATH} minimum length is 6"],
      maxlength: [255, "User {PATH} maximum length exceeded"],
      select: false,
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  //📌 only hash the password if it has been modified (or is new)
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
});

//📌 delete password before returning user
UserSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

//📌 comapre password entered passsword to hased one
UserSchema.methods.verifyPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

//📌 generate user token
UserSchema.methods.jwtToken = function () {
  const { JWT_SECRET_KEY, JWT_EXPIRES_IN } = process.env;
  return jwt.sign({ id: this._id }, JWT_SECRET_KEY, {
    expiresIn: JWT_EXPIRES_IN,
  });
};

UserSchema.plugin(uniqueValidator, {
  message: "User {PATH} '{VALUE}' already exists",
});

const User = model("User", UserSchema);

module.exports = User;
