import { createOrder } from "./order.creation.js";

export const newOrder=async (req,res)=>{

    const data = req.body;
    if (!data) {
      return { message: "Error, no data inputed!" };
    }
    try {
      const response = await createOrder(data);
      res.json(response);
    } catch (err) {
      console.log(err);
    }
  };






