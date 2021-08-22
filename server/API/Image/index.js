// Libraries
import express from "express";
import passport from "passport";
import AWS from "aws-sdk";
import multer from "multer";

// Database model
import { ImageModel } from "../../database/allModels";

const Router = express.Router();

// Multer Config
const storage = multer.memoryStorage();
const upload = multer({ storage });

// AWS s3 bucket config
const s3Bucket = new AWS.S3({
    accessKeyId: process.env.AWS_S3_ACCESS_KEY,
    secretAccessKey: process.env.AWS_S3_SECRET_KEY,
    region: "ap-south-1",
});

/*
Route   :  /
Des     :  Uploads given image to S3 bucket,and saves file link to mongodb
params  :  None
Access  :  Public
Method  :  POST
*/
Router.post("/", upload.single("file"), async (req, res) => {
  try {
      const file = req.file;
      
      // S3 bucket options
      const bucketOptions = {
          Bucket: "zomato-project-123",
          Key: file.originalname,
          Body: file.buffer,
          ContentType: file.mimetype,
          ACL: "public-read", // Access Control List
      };

      const s3Upload = (options) =>{
          return new Promise((resolve, reject) => 
            s3Bucket.upload(options, (error, data) => {
                if(error) return reject(error);
                return resolve(data);
          })
        );
      };

      const uploadImage = await s3Upload(bucketOptions);

      return res.status(200).json({ uploadImage });
    } catch (error) {
      return res.status(500).json({ error: error.message }); 
    }
});

export default Router;