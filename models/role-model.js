const { Schema, model } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const RoleSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Role {PATH} is required"],
    maxlength: [50, "Role {PATH} maximum length exceeded"],
    unique: true,
    uniqueCaseInsensitive: true,
  },
});

RoleSchema.plugin(uniqueValidator, {
  message: "Role {PATH} '{VALUE}' already exists",
});

const Role = model("Role", RoleSchema);

module.exports = Role;
