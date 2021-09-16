const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Quality extends Model {
    /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
    static associate(models) {
      // define association here
    }
  }
  Quality.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Quality',
  });
  return Quality;
};
