import { Router } from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const userRouter = Router();

userRouter.get("/checkauth", verifyToken, (req, res, next) => {
  res.send("hi user, u are auth");
});

userRouter.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("you can delete your account");
});

userRouter.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("you are admin and kefin ne istese onu da ede bilersen");
});

//UPDATE
userRouter.put("/:id", verifyUser, updateUser);

//DELETE
userRouter.delete("/:id", verifyUser, deleteUser);

//GET
userRouter.get("/:id", verifyUser, getUser);

//GET ALL
userRouter.get("/", verifyAdmin, getAllUsers);

export default userRouter;
