const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class EntityAttribute extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EntityAttribute.init({
    value: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'EntityAttribute',
  });
  return EntityAttribute;
};
