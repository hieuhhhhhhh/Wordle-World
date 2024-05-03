import * as DBroutines from "backend/DBroutines";

const db = await DBroutines.getDB();

const token = { username: "hieusdf", expiry: null };
const tokenRes = await DBroutines.addDoc(db, "tokens", token);

token._id = tokenRes.insertedId;
setTimeout(async () => {
  const res = await DBroutines.getDoc(db, "tokens", { _id: token._id });

  console.log(res);
}, 3000);
