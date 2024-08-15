import { connect, connection } from "mongoose";

export const connectToDB = async () => {
  const mongoUri = "mongodb://localhost:27017/tv_show_db";
  await connect(mongoUri);
};

connection.on("connected", () => {
  if (connection.db) {
    console.log(`App connected to database ${connection.db.databaseName}`);
  } else {
    console.error('Failed to connect to the database. Database is undefined.');
  }
});
