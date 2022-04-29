import { verifyToken } from "../token/tokenVerification.js";
import { verifyUserValidator } from "../token/userValidatorTokenJoi.js";
import { database } from "../database.js";

export const verifyUser = async (data) => {
  //validate incoming data
  const validated = verifyUserValidator.validate(data, { abortEarly: false });
  if (validated.error) {
    return {
      message: validated.error.details[0].message,
      path: validated.error.details[0].path,
    };
  }

  //check if user with inputed email exist
  const user = await database.User.findOne({
    where: {
      email: data.email,
    },
  });

  if (!user) {
    return { message: "User not found!" };
  }
  if (user._previousDataValues.verified != null) {
    return { message: "User already verified!" };
  }

  //check if token is valid
  const isValid = await verifyToken(user.id, data.token, "Verification");
  if (!isValid) {
    return { message: "Inputed token is invalid! Please try a valid one." };
  }

  //verification of the user
  user.verified = new Date();
  user.save();

  return { verified: true, message: "User succsessfuly verified!" };
};
