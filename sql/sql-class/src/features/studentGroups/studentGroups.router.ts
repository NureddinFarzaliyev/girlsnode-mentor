import { Router } from "express";
import { createStudentGroup } from "./studentGroups.controller";

export const studentGroupsRouter = Router();

studentGroupsRouter.post("/", createStudentGroup);
