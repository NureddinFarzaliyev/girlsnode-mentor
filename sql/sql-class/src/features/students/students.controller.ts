import { Request, Response } from "express";
import { Student } from "./students.model";
import { Group } from "../groups/groups.model";

export const createStudent = async (req: Request, res: Response) => {
  try {
    const s = await Student.create(req.body);
    res.status(201).json(s);
  } catch (err) {
    console.error("Error creating student:", err);
    res.status(500).json({ error: "Failed to create student" });
  }
};

export const getStudents = async (_req: Request, res: Response) => {
  const students = await Student.findAll();
  res.json(students);
};

export const getSingleStudent = async (req: Request, res: Response) => {
  const id = req.params.id;
  const student = await Student.findByPk(Number(id), {
    include: [
      {
        model: Group,
        as: "groups",
      },
    ],
  });

  if (!student) {
    return res.status(404).json({ error: "Student not found" });
  }

  res.json(student);
};
