"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Discount = void 0;
const sequelize_1 = require("sequelize");
class Discount extends sequelize_1.Model {
    calculate() {
        return 0;
    }
    static initialize(sequelize) {
        this.init({
            id: {
                type: sequelize_1.DataTypes.UUID,
                defaultValue: sequelize_1.DataTypes.UUIDV4,
                primaryKey: true,
            },
            description: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            amount: {
                type: sequelize_1.DataTypes.FLOAT,
                allowNull: true,
            },
        }, {
            sequelize,
        });
    }
}
exports.Discount = Discount;
//# sourceMappingURL=discountModel.js.map