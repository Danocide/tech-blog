const sequelize = require('../config/connection');
const seedUsers = require('./users');
const seedPosts = require('./posts')

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedUsers();    await seedPosts();
    process.exit(0);
};

seedAll();
