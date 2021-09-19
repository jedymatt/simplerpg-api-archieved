const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Modifier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Modifier.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    rewardMultiplier: DataTypes.FLOAT,
  }, {
    sequelize,
    modelName: 'Modifier',
  });
  return Modifier;
};
