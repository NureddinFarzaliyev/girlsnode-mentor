import { Request, Response } from "express";
import { Group } from "./groups.model";
import { Student } from "../students/students.model";

export const createGroup = async (req: Request, res: Response) => {
  try {
    const g = await Group.create(req.body);
    res.status(201).json(g);
  } catch (error) {
    res.status(500).json({ error: "Failed to create group" });
  }
};

export const getGroups = async (_: Request, res: Response) => {
  const g = await Group.findAll();
  res.status(200).json(g);
};

export const getSingleGroup = async (req: Request, res: Response) => {
  const { id } = req.params;
  const g = await Group.findByPk(Number(id), {
    include: [
      {
        model: Student,
        as: "students",
      },
    ],
  });
  if (!g) {
    return res.status(404).json({ error: "Group not found" });
  }
  res.status(200).json(g);
};
