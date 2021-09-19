const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class EntityType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EntityType.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'EntityType',
  });
  return EntityType;
};
