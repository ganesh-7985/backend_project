require("dotenv").config()

import mongoose from "mongoose";
import { DB_NAME } from "../db/index.js";

const app = express();

const connectDB = async ()=>{ 
try{
   const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
   console.log(` \n MONGODB Connnected Successfully!! DB HOST ${connectionInstance.connection.host}`)

}
catch(error){
   console.log("Connection Failed !!",error);
   process.exit(1);
}
}

export default connectDB;