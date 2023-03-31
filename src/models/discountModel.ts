import { Model, DataTypes, Sequelize } from 'sequelize';

export interface IDiscount {
  id?: string;
  description: string;
  amount?: number;
  calculate?: () => number;
}

export class Discount extends Model {
  public id!: string;
  public description!: string;
  public amount?: number;

  public calculate(): number {
    return 0;
  }

  public static initialize(sequelize: Sequelize): void {
    this.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        amount: {
          type: DataTypes.FLOAT,
          allowNull: true,
        },
      },
      {
        sequelize,
      }
    );
  }
}
