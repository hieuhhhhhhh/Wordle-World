import { config } from "dotenv";
config();
export const port = process.env.PORT;

export const atlasURL = process.env.URL;
export const DBname = process.env.DB; // database
export const usersColl = process.env.USERSCOLLECTION; // users collection

export const originalScore = Number(process.env.SCORE);
export const maxGuesses = Number(process.env.MAXGUESSES);
export const gameTime = Number(process.env.GAMETIME);

export const hashKey = process.env.HASHKEY;
export const tokenTimeout = process.env.TOKENTIMEOUT;
