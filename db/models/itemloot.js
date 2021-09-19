const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ItemLoot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ItemLoot.init({
    tmp: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'ItemLoot',
  });
  return ItemLoot;
};
