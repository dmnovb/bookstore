import User from "../models/user.model";

export const getUserByEmail = (email: string) => {
  return User.findOne({ email });
};

export const createUser = (values: Record<string, any>) => {
  new User(values);
};
