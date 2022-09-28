import mongoose from "mongoose";
import dotenv from "dotenv";

const dotenvRes = dotenv.config({ silent: true });

// modify in .env to connect to atlas
const database_url = process.env.DATABASE_URL;
    
const connect = async () => {
  await mongoose
    .connect(database_url, {
      useNewURLParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database is connected!");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connect;
