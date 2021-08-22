// Env variables 
require("dotenv").config();

// Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

// configs
import googleAuthConfig from "./config/google.config";

// Microservies routes
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Image from "./API/Image";
//import Menu from "./API/menu";

// Database connection
import ConnectDB from "./database/connection";

const zomato = express();

// Application Middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());

// passport cofiguration 
googleAuthConfig(passport);

// Application routes
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/image", Image);
//zomato.use("/menu", Menu);

zomato.get("/", (req, res) => res.json({ message: "Setup success" }));

zomato.listen(4000, () => 
  ConnectDB()
  .then(() => console.log("Server is running!!!"))
  .catch(() => console.log("Server is running, But database connection failed..."))
);