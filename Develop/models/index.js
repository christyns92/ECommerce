const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// define that products belong to its specific category
Product.belongsTo(Category, {
    foreignKey: 'category_id'
});
// categories have many products
Category.hasMany(Product, {
    foreignKey: 'category_id'
});
// Products belongToMany tags
Product.belongsToMany(Tag, {
    through: ProductTag,
});
// Tags belongToMany products 
Tag.belongsToMany(Product, {

    through: ProductTag,
});
module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
};