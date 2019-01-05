'use strict';
module.exports = (sequelize, DataTypes) => {
  const rider_details = sequelize.define('rider_details', {
    ridername: DataTypes.STRING,
    ridercontact: DataTypes.STRING,
    rideraddress: DataTypes.STRING,
    rideremail: DataTypes.STRING
  }, {});
  rider_details.associate = function(models) {
    // associations can be defined here
  };
  return rider_details;
};