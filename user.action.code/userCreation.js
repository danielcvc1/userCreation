import { database } from "../database.js";
import { createToken } from "../token/tokenCreation.js";
import { DuplicateEntry, handleJoiValidationErrors } from "../errors.js";
import { sendEmailVerification } from "../email/email.sevice.js";
import { hashPassword } from "../password/hashingPassword.js";
import { createUserValidator } from "./userValidation.js";

//Creating a users(open)

export const createUser = async (userCreationData) => {
  //validating user
  const validated = createUserValidator.validate(userCreationData, {
    abortEarly: false,
  });
  if (validated.error) {
    return handleJoiValidationErrors(validated.error);
  }

  //checking if user already exists in db
  let user = await database.User.findOne({
    where: {
      email: userCreationData.email,
    },
  });

  if (user) {
    return DuplicateEntry("email");
  }

  //creating a password(and hashing)

  userCreationData.password = await hashPassword(userCreationData);

  //creating user in database
  user = await database.User.create(userCreationData);

  //generating token
  const token = await createToken(user.id, "VERIFICATION");

  //sending token for verifi
  const uniqueToken = token._previousDataValues.value;

  //sending token for verifi

  //send email
  sendEmailVerification(user.email, uniqueToken);

  //returning user
  return user;

  //Creating a users(close)
};
