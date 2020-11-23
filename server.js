const app = require("./app");
const { seedDatabase } = require("./models");
const { connectToDb } = require("./utils/mongoose");
const { logger } = require("./utils/logger");

const port = process.env.PORT || 5000;

// 🚀 🖥 Start Server
// prettier-ignore
(async function start() {
    try {
        await connectToDb();
        logger.info('✅ Database Connected Successfully');
        await seedDatabase();
        app.listen(port, () => logger.info(`✅ ✨ Server Started on Port ${port}`));
    } catch (error) {
        logger.error(`❌ Application Failed to start: ${error}`);
    }
}());
