import { Request, Response } from "express";
import { Student } from "../students/students.model";
import { Group } from "../groups/groups.model";

export const createStudentGroup = async (req: Request, res: Response) => {
  try {
    if (!req.body?.studentId || !req.body?.groupId) {
      return res
        .status(400)
        .json({ message: "Student ID and Group ID are required" });
    }

    const { studentId, groupId } = req.body;

    const student = await Student.findByPk(studentId);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    const group = await Group.findByPk(groupId);
    if (!group) {
      return res.status(404).json({ message: "Group not found" });
    }

    await student.addGroup(group);

    res.status(201).json({ message: "Student added to group successfully" });
  } catch (error) {
    console.error("Error creating student group:", error);
  }
};
