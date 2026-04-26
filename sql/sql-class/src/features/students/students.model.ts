import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/db";
import { Group } from "../groups/groups.model";

export class Student extends Model {
  public id!: number;
  public name!: string;
  public surname!: string;
  public description!: string;

  public addGroup!: (group: Group) => Promise<void>;
  public getGroups!: () => Promise<Group[]>;
}

Student.init(
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
    surname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "students",
  },
);
