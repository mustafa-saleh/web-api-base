const mongoose = require("mongoose");
const Role = require("./role-model");
const User = require("./user-model");
const { logger } = require("../utils/logger");

/**
 * function to seed databse with initial models data
 */
async function seedDatabase() {
  const count = await Role.estimatedDocumentCount();
  if (!count) {
    try {
      await Role.create([{ name: "admin" }, { name: "user" }]);
      logger.info("🧾 admin & user Roles insterted to db");
    } catch (err) {
      logger.error(`❌ Failed to Seed initial Roles to Db`);
      throw err;
    }
  }
}

module.exports = { seedDatabase, Role, User };
