const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
    static associate(models) {
      // define association here
      this.hasOne(models.Quality);
      this.belongsToMany(models.Attribute, { through: models.ItemAttribute });
      this.hasOne(models.ItemType);
    }
  }
  Item.init({
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    description: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};
