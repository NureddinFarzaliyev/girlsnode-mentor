import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/db";

export class Group extends Model {
  public id!: number;
  public name!: string;
}

Group.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "groups",
  },
);
