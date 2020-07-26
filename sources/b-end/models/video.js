'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Video extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Video.belongsTo(models.Creator, {
        foreignKey: 'channel',
        targetKey: 'channel'
      });
    }
  };
  Video.init({
    name: DataTypes.STRING,
    link: DataTypes.STRING,
    channel: DataTypes.STRING,
    view_count: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Video',
  });
  return Video;
};