import { database } from "../database.js";
import { passwordValidation } from "../password/passwordValidation.js";

export const userLogin = async (data) => {
  if (!data.email) {
    return { message: "Error at email input! Check field and try again!" };
  }

  if (!data.password) {
    return { message: "Error at password input! Check field and try again!" };
  }
  //check db for user
  let user = await database.User.findOne({
    where: {
      email: data.email,
    },
  });
  //check if user exists
  if (!user) {
    return {
      message: "User with that email does not exist! Please try a valid email.",
    };
  }
  //check for valid acc
  if (!user.dataValues.verified) {
    return {
      message: "Please verify youre account, so we know you are not a bot!",
    };
  }
  //password comparison
  const passIsValid = await passwordValidation(user.password, data.password);
  if (passIsValid == false) {
    return { response: "Error!", message: "Passwords do not match!" };
  }

  return {
    response: "Succsess!",
    message: `Log in succsesful! Welcome, ${user.firstName}!`,
  };
};
