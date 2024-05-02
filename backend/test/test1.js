import { getDB } from "@DBroutines";

const test1 = async () => {
  try {
    let db = await getDB();
    console.log(`established connection for ${db.databaseName} on Atlas`);
  } catch (err) {
    console.log(err);
  } finally {
    process.exit(); // we don't need to disconnect, connection pooled
  }
};

export default test1;
