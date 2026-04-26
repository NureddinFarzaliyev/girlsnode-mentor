import { Router } from "express";
import { createGroup, getGroups, getSingleGroup } from "./groups.controller";

export const groupsRouter = Router();

groupsRouter.get("/", getGroups);
groupsRouter.get("/:id", getSingleGroup);
groupsRouter.post("/", createGroup);
