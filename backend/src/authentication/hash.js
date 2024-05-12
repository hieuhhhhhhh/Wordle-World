import crypto from "crypto";
import * as config from "backend/config";

const hashString = (inputString) => {
  const hmac = crypto.createHmac("md5", config.hashKey);
  hmac.update(inputString);
  return hmac.digest("hex");
};

export default hashString;
