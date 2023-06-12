'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class schedule extends Model {
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
    schedule.init({
        // điền các trường của bảng vào đây
        currentNumber: DataTypes.INTEGER,
        maxNumber: DataTypes.INTEGER,
        date: DataTypes.DATE,
        timeType: DataTypes.STRING,
        doctorId: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'schedule',
    });
    return schedule;
};