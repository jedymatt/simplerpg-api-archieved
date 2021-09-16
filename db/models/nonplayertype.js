'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NonPlayerType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NonPlayerType.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'NonPlayerType',
  });
  return NonPlayerType;
};
