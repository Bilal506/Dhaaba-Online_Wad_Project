'use strict';
module.exports = (sequelize, DataTypes) => {
  const order_details = sequelize.define('order_details', {
    date: DataTypes.STRING,
    status_order: DataTypes.STRING
  }, {});
  order_details.associate = function(models) {
    // associations can be defined here
  };
  return order_details;
};