import { config } from "dotenv";
config();
export const rawdata = process.env.USERSRAW;
export const userobjects = process.env.USERSJSON;
