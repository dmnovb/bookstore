import { Response, Request, NextFunction } from "express";
import { getUserBySessionToken } from "../service/user.service";
import { merge } from "lodash";

export const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const sessionToken = req.cookies["BOOKSTORE_COOKIE"];
    console.log("REquest is here:", req);
    console.log("token:", sessionToken);
    if (sessionToken === undefined)
      return res.status(403).json({ message: "undefined" });

    const existingUser = await getUserBySessionToken(sessionToken);

    if (!existingUser) return res.status(403);

    merge(req, { identity: existingUser });
    next();
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};
