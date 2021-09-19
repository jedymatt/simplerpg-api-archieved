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
      this.belongsTo(models.Location);
      this.belongsTo(models.Loot);
      this.belongsTo(models.BossType);
    }
  }
  Boss.init({
    level: DataTypes.INTEGER,
    name: {
      type: DataTypes.STRING,
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
