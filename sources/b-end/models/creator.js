'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Creator extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Creator.hasMany(models.Video, {
        sourceKey: 'channel',
        foreignKey: 'channel'
      });
    }
  };
  Creator.init({
    name: DataTypes.STRING,
    channel: DataTypes.STRING,
    joined: DataTypes.STRING,
    subscribers_count: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Creator',
  });
  return Creator;
};