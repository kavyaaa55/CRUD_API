import { display, create, UpdateData, deleteData } from "../controller/userController.js";
import express from 'express'

const route = express.Router();

route.get('/display',display)
route.post('/create', create)
route.put('/update/:id', UpdateData)
route.delete('/delete/:id',deleteData)

export default route;