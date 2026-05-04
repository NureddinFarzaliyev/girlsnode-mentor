import { RefreshToken } from "../refreshToken.model";
import { User } from "../user.model";

export const setupRelations = () => {
  User.hasMany(RefreshToken, { foreignKey: "userId", onDelete: "CASCADE" });
  RefreshToken.belongsTo(User, { foreignKey: "userId" });
};
