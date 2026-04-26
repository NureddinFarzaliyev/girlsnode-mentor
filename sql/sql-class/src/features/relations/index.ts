import { Group } from "../groups/groups.model";
import { Student } from "../students/students.model";

export const setupRelations = () => {
  Student.belongsToMany(Group, { through: "StudentGroups", as: "groups" });
  Group.belongsToMany(Student, { through: "StudentGroups", as: "students" });
};

// hasMany - one -> many (foreign key refers here)
// belongsTo - many -> one (foreign key)
// hasOne - one -> one (foreign key refers here)
// belongsToMany - many -> many (requires the junction table)
