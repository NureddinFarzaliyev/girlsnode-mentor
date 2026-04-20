import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../config/db";

export class Book extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
  public authorId!: number;
}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "books",
  },
);
