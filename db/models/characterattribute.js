const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CharacterAttribute extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CharacterAttribute.init({
    value: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'CharacterAttribute',
  });
  return CharacterAttribute;
};
