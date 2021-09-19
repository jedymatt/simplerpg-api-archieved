const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BossRaid extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Party);
      this.belongsTo(models.Boss);
    }
  }
  BossRaid.init({
    startedAt: {
      type: 'TIMESTAMP',
    },
    endedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'BossRaid',
  });
  return BossRaid;
};
