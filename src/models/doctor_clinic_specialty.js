'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Doctor_Clinic_Special extends Model {
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
    Doctor_Clinic_Special.init({
        // điền các trường của bảng vào đây
        doctorId: DataTypes.INTEGER,
        clinicId: DataTypes.INTEGER,
        specialtyId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Doctor_Clinic_Special',
    });
    return Doctor_Clinic_Special;
};