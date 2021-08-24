// Libraries
import express from "express";
import passport from "passport";

// Database model
import { UserModel } from "../../database/allModels";

const Router = express.Router();

/*
Route   :  /:_id
Des     :  Get user data
params  :  _id
Access  :  Public
Method  :  GET
*/
Router.get("/:id", async(req, res) =>{
    try {
        const { _id } = req.params;
        const getUser = await UserModel.findById(_id);

        return res.json({ user: getUser });
      } catch (error) {
        return res.status(500).json({ error: error.message });  
      }
});

/*
Route   :  /update/:_id
Des     :  update user id
params  :  _id
Body    :  user data
Access  :  Public
Method  :  PUT
*/
Router.put("/update/:userId", async(req, res) => {
  try {
      const { userId } = req.params;
      const { userData } = req.body;

      const updateUserData = await UserModel.findByIdAndUpdate(userId, 
      {
        $set: userData,
      }, 
      {  new: true }
      );

      return res.json({ user: updateUserData });
    } catch (error) {
      return res.status(500).json({ error: error.message });  
    }
});

export default Router;