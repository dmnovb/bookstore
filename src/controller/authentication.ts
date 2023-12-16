import { Request, Response } from "express";
import { getUserByEmail, createUser } from "../service/user.service";
import { authentication, random } from "../utils/hash";

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, username } = req.body;

    if (!email || !password || !username) return res.sendStatus(400);

    const existingUser = await getUserByEmail(email);

    if (existingUser)
      return res.status(400).json({
        message: "User with this email already exists.",
      });

    const salt = random();
    const user = createUser({
      email,
      password,
      username,
      authentication: {
        salt,
        password: authentication(salt, password),
      },
    });
    return res.sendStatus(200).json(user);
  } catch (error) {
    console.log(error);
  }
};
