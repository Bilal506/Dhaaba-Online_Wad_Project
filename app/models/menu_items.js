'use strict';
module.exports = (sequelize, DataTypes) => {
  const menu_items = sequelize.define('menu_items', {
    name: DataTypes.STRING,
    status: DataTypes.STRING,
    rate: DataTypes.INTEGER,
    menu_type: DataTypes.STRING
  }, {});
  menu_items.associate = function(models) {
    // associations can be defined here
  };
  return menu_items;
};