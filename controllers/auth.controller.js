import bcrypt from "bcrypt";

export const register = (req, res) => {
  //db operations
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hash(password);
  console.log(hashedPassword);
};

export const login = (req, res) => {
  //db operations
  console.log("Login endpoint");
};

export const logout = (req, res) => {
  //db operations
};
