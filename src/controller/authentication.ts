import { Request, Response } from "express";
import { getUserByEmail, createUser } from "../service/user.service";
import { authentication, random } from "../utils/hash";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      console.log("no email or pass");
      return res.sendStatus(400);
    }

    const user = await getUserByEmail(email).select(
      "+authentication.salt +authentication.password"
    );

    if (!user) {
      console.log("no user");
      return res.sendStatus(400);
    }

    const expectedHashedPassword = authentication(
      user.authentication.salt,
      password
    );

    if (user.authentication.password !== expectedHashedPassword) {
      return res.sendStatus(403);
    }

    const salt = random();
    user.authentication.sessionToken = authentication(
      salt,
      user._id.toString()
    );

    // await user.save();

    res.cookie("BOOKSTORE_COOKIE", user.authentication.sessionToken);

    return res.status(200).json(user);
  } catch (error: unknown) {
    return res.sendStatus(400).json({ message: error });
  }
};

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
    return res.sendStatus(200).json(user).end();
  } catch (error) {
    console.log(error);
  }
};
