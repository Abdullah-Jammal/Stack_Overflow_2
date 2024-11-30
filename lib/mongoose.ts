import mongoose, { Mongoose } from "mongoose";

import logger from "./logger";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("MongoDb is not defined");
}

interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache;
}

let cashed = global.mongoose;

if (!cashed) {
  cashed = global.mongoose = { conn: null, promise: null };
}

const dbConnect = async (): Promise<Mongoose> => {
  if (cashed.conn) {
    logger.info("Using existing mongoose connection");
    return cashed.conn;
  }
  if (!cashed.promise) {
    cashed.promise = mongoose
      .connect(MONGODB_URI, {
        dbName: "devflow",
      })
      .then((result) => {
        logger.info("Connected to MongoDB");
        return result;
      })
      .catch((error) => {
        logger.info("Error Connecting to MongDB", error);
        throw error;
      });
  }
  cashed.conn = await cashed.promise;
  return cashed.conn;
};

export default dbConnect;
