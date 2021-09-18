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
      this.belongsTo(models.Attribute);
      this.belongsTo(models.Character);
    }
  }
  CharacterAttribute.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    value: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'CharacterAttribute',
  });
  return CharacterAttribute;
};
