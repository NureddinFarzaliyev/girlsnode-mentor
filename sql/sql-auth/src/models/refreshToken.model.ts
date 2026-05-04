import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";
import { User } from "./user.model";

export class RefreshToken extends Model {
  public id!: number;
  public token!: string;
  public userId!: number;
  public expiresAt!: Date;
  public isRevoked!: boolean;
  public userAgent!: string;
  public ipAddress!: string;
}

RefreshToken.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    token: {
      type: DataTypes.STRING(500),
      allowNull: false,
      unique: true,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    isRevoked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    userAgent: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    ipAddress: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
  },
  {
    tableName: "refresh_tokens",
    timestamps: true,
    sequelize,
  },
);
