import userModel from "../models/user.model.js";

export const createUser = async ({ firstname, lastname, email, password }) => {
  if (!firstname || !email || !password) {
    throw new Error("All fields are required");
  }
  console.log("backend user.service", firstname);
  const user = userModel.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
  });
  console.log("backend user.service", "user", user);

  return user;
};
