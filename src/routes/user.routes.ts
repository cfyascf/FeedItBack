import { Router } from "express";
import { createUserController, deleteUserController, getUserByIdController, getUserByMatchController, updateUserController } from "../controllers/user.controller";
import { validateBody, validateToken } from "../middleware/validate.middleware";
import { createUserSchema, updateUserSchema } from "../schemas/user.schema";

const userRoutes = Router();

userRoutes
    .post("", validateBody(createUserSchema), createUserController)
    .put("", validateBody(updateUserSchema), validateToken, updateUserController)
    .get("/match", getUserByMatchController)
    .get("", getUserByIdController)
    .delete("", validateToken, deleteUserController);

export default userRoutes;