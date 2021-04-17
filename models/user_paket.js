'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Paket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User_Paket.init({
    userId: DataTypes.INTEGER,
    paketId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User_Paket',
  });
  return User_Paket;
};