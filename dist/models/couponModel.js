"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coupon = void 0;
const sequelize_1 = require("sequelize");
class Coupon extends sequelize_1.Model {
    isValid() {
        return this.rules.every((rule) => rule.validate());
    }
    apply() {
        if (!this.isValid()) {
            return false;
        }
        this.isActive = true;
        this.discounts.forEach((discount) => {
            discount.calculate();
        });
        return true;
    }
    static initialize(sequelize) {
        this.init({
            id: {
                type: sequelize_1.DataTypes.UUID,
                defaultValue: sequelize_1.DataTypes.UUIDV4,
                primaryKey: true,
            },
            code: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
            },
            isActive: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
        }, {
            sequelize,
        });
    }
}
exports.Coupon = Coupon;
//# sourceMappingURL=couponModel.js.map