const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ModifierAttribute extends Model {
    /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
    static associate(models) {
      // define association here
    }
  }
  ModifierAttribute.init({
    value: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'ModifierAttribute',
  });
  return ModifierAttribute;
};
