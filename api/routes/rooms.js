import { Router } from "express";
import {
  createRoom,
  deleteRoom,
  getAllRooms,
  getRoom,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const roomRouter = Router();

//CREATE
roomRouter.post("/:hotelid", verifyAdmin, createRoom);

//UPDATE
roomRouter.put("/:id", verifyAdmin, updateRoom);
roomRouter.put("/availability/:id", updateRoomAvailability);

//DELETE
roomRouter.delete("/:id", verifyAdmin, deleteRoom);

//GET
roomRouter.get("/:id", getRoom);

//GET ALL
roomRouter.get("/", getAllRooms);

export default roomRouter;
