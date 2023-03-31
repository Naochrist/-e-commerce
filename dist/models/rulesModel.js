"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rule = void 0;
const sequelize_1 = require("sequelize");
class Rule extends sequelize_1.Model {
    validate() {
        return false;
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
                allowNull: false,
            },
        }, {
            sequelize,
        });
    }
}
exports.Rule = Rule;
//# sourceMappingURL=rulesModel.js.map