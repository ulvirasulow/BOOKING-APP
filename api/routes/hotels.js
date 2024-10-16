import { Router } from "express";
import {
  countByCity,
  countBytType,
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  getHotelRooms,
  updateHotel,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const hotelRouter = Router();

//CREATE
hotelRouter.post("/", verifyAdmin, createHotel);

//UPDATE
hotelRouter.put("/:id", verifyAdmin, updateHotel);

//DELETE
hotelRouter.delete("/:id", verifyAdmin, deleteHotel);

//GET
hotelRouter.get("/find/:id", getHotel);

//GET ALL
hotelRouter.get("/", getAllHotels);

hotelRouter.get("/countByCity", countByCity);
hotelRouter.get("/countByType", countBytType);
hotelRouter.get("/room/:id", getHotelRooms);

export default hotelRouter;
