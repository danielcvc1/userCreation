import { ordersValidator } from "./order.validation.js"
import { database } from "../database.js";
import { handleJoiValidationErrors } from "../errors.js";


export const createOrder = async (orderData) => {

    //validation of data

    const validate = ordersValidator.validate(orderData, {
        abortEarly: false,
    })
    if (validate.error) {
        return handleJoiValidationErrors(validate.error);
    }

    //order belongs to user
    const user = await database.User.findOne({
        where: {
            id: orderData.userId,
        },


    })
    if (!user) {

        return ({
            message: "User with the given id could not be found!"
        })
    }


    //creating order

    const order = await database.Order.create(orderData);

    return order




}










