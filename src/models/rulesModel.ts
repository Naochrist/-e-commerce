import { Model, DataTypes, Sequelize } from 'sequelize';

export interface IRule {
  id?: string;
  description: string;
  amount: number;
  validate?: () => boolean;
}

export class Rule extends Model {
  public id!: string;
  public description!: string;
  public amount!: number;

  public validate(): boolean {
    return false;
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
          allowNull: false,
        },
      },
      {
        sequelize,
      }
    );
  }
}