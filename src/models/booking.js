'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Booking extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // định danh mối quan hệ 1 bác sĩ có nhiều bệnh nhân
        }
    };
    Booking.init({
        // điền các trường của bảng vào đây
        statusId: DataTypes.STRING,
        doctorId: DataTypes.INTEGER,
        patientId: DataTypes.INTEGER,
        date: DataTypes.DATE,
        timeType: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Booking',
    });
    return Booking;
};