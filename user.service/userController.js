import { createUser } from "../user.action.code/userCreation.js";
import { verifyUser } from "../user.action.code/userVerification.js";
import { userLogin } from "../user.action.code/userLogin.js";
import { resendToken } from "../user.action.code/resendToken.js";
import { database } from "../database.js";

//control modules
//accountCreation
export const accountCreation = async (req, res) => {

const {firstName,lastName,email,password,birthYear}=req.body

  const data = req.body;
  if (!data) {
    return { message: "Error, no data inputed!" };
  }
  try {
    const response = await createUser(data);
    res.json(response);
  } catch (err) {
    console.log(err);
  }
};

//logIn
export const logIn = async (req, res) => {
  const data = req.body;

  const response = await userLogin(data);

  res.json({ response: response });
};

//resendToken
export const resendAuthToken = async (req, res) => {
  const data = req.query;

  const resend = await resendToken(data);
  if (!resendToken) {
    return { message: "Error at resend" };
  }
  res.send({ message: resend });
};

//verificationAccount
export const verificationAccount = async (req, res) => {
  const data = req.body;
  if (!data.email || !data.token) {
    res.status(404).json({
      key: "NOT_FOUND",
      message:
        "Error at data input! Please check youre data and then proceed to next step.",
    });
    return;
  }
  const response = await verifyUser(data);
  if (!response) {
    return { message: "Error at user verification!" };
  }
  res.json({ response: response });
};

//getting all users
export const getAllUsers=async (req, res) => {
  const { first_name, last_name } = req.query

  let where = {}
  if (first_name) {
      where.firstName = first_name
  }

  if (last_name) {
      where.lastName = last_name
  }

  const users = await database.User.findAndCountAll({
      where
  })
  res.json(users)
}

//getting user by id

export const getUserById=async (req,res)=>{

  const id = req.params.id

  const user = await database.User.findOne({
    where: {
        id,
    },
    //adding more tables that includes this user
    include:{
      model:database.Order
    }
})

res.json(user)

}
