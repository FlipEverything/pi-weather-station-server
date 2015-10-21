"use strict";

module.exports = function(sequelize, DataTypes) {
    var Measure = sequelize.define('Measure', {
        date: {
            type: DataTypes.DATE,
            field: 'date',
            allowNull: false
        },
        gpsLongitude: {
            type: DataTypes.FLOAT(12,8),
            field: 'gps_longitude'
        },
        gpsLatitude: {
            type: DataTypes.FLOAT(12,8),
            field: 'gps_latitude'
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

