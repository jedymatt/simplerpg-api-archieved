const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ItemLocation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ItemLocation.init({
    tmp: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'ItemLocation',
  });
  return ItemLocation;
};
