const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Character);
    }
  }
  User.init({
    discordId: {
      type: DataTypes.BIGINT,
      unique: true,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'User',
    timestamps: true,
  });
  return User;
};
