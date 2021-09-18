const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CharacterParty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Party);
      this.belongsTo(models.Character);
    }
  }
  CharacterParty.init({
    joinedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'CharacterParty',
  });
  return CharacterParty;
};
