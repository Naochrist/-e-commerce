import { Model, DataTypes, Sequelize } from 'sequelize';
import { Discount } from './discountModel';
import { Rule } from './rulesModel';

export interface ICoupon {
  id?: string;
  code: string;
  description: string;
  discounts?: Array<Discount>;
  rules?: Array<Rule>;
  isValid?: () => boolean;
  apply?: () => boolean;
  isActive?: boolean;
}

export class Coupon extends Model {
  public id!: string;
  public code!: string;
  public description!: string;
  public discounts!: Array<Discount>;
  public rules!: Array<Rule>;
  public isActive!: boolean;

  public isValid(): boolean {
    return this.rules.every((rule) => rule.validate());
  }

  public apply(): boolean {
    if (!this.isValid()) {
      return false;
    }

    this.isActive = true;
    this.discounts.forEach((discount) => {
      discount.calculate();
    });

    return true;
  }

  public static initialize(sequelize: Sequelize): void {
    this.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        code: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        isActive: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
      },
      {
        sequelize,
      }
    );
  }
}



