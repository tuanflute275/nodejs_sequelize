'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Clinic extends Model {
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
    Clinic.init({
        // điền các trường của bảng vào đây
        name: DataTypes.STRING,
        address: DataTypes.STRING,
        description:DataTypes.TEXT,
        image:DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Clinic',
    });
    return Clinic;
};