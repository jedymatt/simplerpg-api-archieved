const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ItemPlan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Item);
      this.belongsToMany(models.Item, { as: 'Materials', through: models.ItemPlanMaterial });
    }
  }
  ItemPlan.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'ItemPlan',
  });
  return ItemPlan;
};
