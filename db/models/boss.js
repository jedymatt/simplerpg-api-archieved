const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Boss extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.BossType);
      this.belongsTo(models.Location);
      this.belongsTo(models.Loot);
    }
  }
  Boss.init({
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    description: DataTypes.STRING,
    spawnTime: DataTypes.TIME,
    timeLimit: DataTypes.TIME,
  }, {
    sequelize,
    modelName: 'Boss',
  });
  return Boss;
};
