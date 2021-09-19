const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CharacterTitle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CharacterTitle.init({
    isDisplayed: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'CharacterTitle',
  });
  return CharacterTitle;
};
