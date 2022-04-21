import express from "express";
import { createUser, getUsers, getUserwithId, patchUserWithId, deleteUserWithId } from "../controllers/users.js";


const router = express.Router();


// All functions are inside controllers folder accroding to each method.
//route to get all users will start as /users as endpoint, endpoint is defined in index.js with app.use('/users', usersRoutes);
router.get("/", getUsers);

router.post("/", createUser);

//req.params
router.get('/:id', getUserwithId);

router.delete('/:id', deleteUserWithId);

router.patch('/:id', patchUserWithId);


export default router;