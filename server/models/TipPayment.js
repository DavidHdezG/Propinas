import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
export const TipPayment = sequelize.define('tip_payment', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    totalTips: {
        type: DataTypes.STRING,
        allowNull: true
    },
    payList : {
        type: DataTypes.JSON,
        allowNull: true
    },
    tipDivision: {
        type: DataTypes.STRING,
        allowNull: true
    },
},{
    timestamps: false
});