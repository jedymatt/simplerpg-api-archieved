const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
    static associate(models) {
      // define association here
      this.hasOne(models.Location);
      this.belongsToMany(models.Attribute, { through: models.CharacterAttribute });
      this.belongsToMany(models.Item, {
        as: 'Equipments',
        through: models.CharacterEquipment,
      });
    }
  }
  Character.init({
    //
  }, {
    sequelize,
    modelName: 'Character',
  });
  return Character;
};
