import User from "../models/user.model";

export const getUserByEmail = (email: string) => {
  return User.findOne({ email });
};

export const createUser = async (values: Record<string, any>) => {
  return await User.create(values);
};

export const getAllUsers = () => {
  return User.find();
};

export const getSingleUser = (id: string) => {
  return User.findById(id);
};

export const getUserBySessionToken = (sessionToken: string) => {
  return User.find({ "authentication.sessionToken": sessionToken });
};
