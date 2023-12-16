import { Response, Request } from "express";
import { getAllUsers, getSingleUser } from "../service/user.service";

export const getAllUsersHandler = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    return res.send(users);
  } catch (error: any) {
    res.sendStatus(400).json({ message: error.message });
  }
};

export const getSingleUserHandler = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await getSingleUser(id);
    console.log(user);
    return res.status(200).send(user);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};
