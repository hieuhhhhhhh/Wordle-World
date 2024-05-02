import { config } from "dotenv";
config();
export const port = process.env.PORT;

export const atlasURL = process.env.URL;
export const DBname = process.env.DB; // database
export const collection = process.env.COLLECTION;
