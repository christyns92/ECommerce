const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    console.log('\n Synched \n');
    await seedCategories();
    console.log('\n Categories are seeded \n');

    await seedProducts();
    console.log('\n Products are seeded here\n');

    await seedTags();
    console.log('\n Tags are seeded here\n');

    await seedProductTags();
    console.log('\n Product tags are seeded here\n');

    process.exit(0);
};

seedAll();