"use strict";

module.exports = function(sequelize, DataTypes) {
    var Measure = sequelize.define('Measure', {
        date: {
            type: DataTypes.DATE,
            field: 'date',
            allowNull: false
        },
        gpsCoordinate: {
            type: DataTypes.FLOAT(10,6),
            field: 'gps_coordinate'
        },
        temperature: {
            type: DataTypes.DECIMAL(5,2),
            field: 'temperature',
            allowNull: false
        },
        humidity: {
            type: DataTypes.DECIMAL(5,2).UNSIGNED,
            field: 'humidity',
            allowNull: false
        }
    }, {
        freezeTableName: true // Model tableName will be the same as the model name
    });

    return Measure;
};
