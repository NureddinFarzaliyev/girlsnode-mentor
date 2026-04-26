import { Router } from "express";
import {
  createStudent,
  getSingleStudent,
  getStudents,
} from "./students.controller";

export const studentsRouter = Router();

studentsRouter.get("/", getStudents);
studentsRouter.get("/:id", getSingleStudent);
studentsRouter.post("/", createStudent);
