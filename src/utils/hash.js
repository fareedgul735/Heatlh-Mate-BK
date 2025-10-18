import bcrypt from "bcrypt";

export const hashedPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

export const comparePssword = async (password, hashed) => {
  return bcrypt.compare(password, hashed);
};
