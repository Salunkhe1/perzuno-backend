const mongoose = require('mongoose');

const uri = "mongodb+srv://madhurisalunkhe777_db_user:FKaJ3CKpciRuB0nO@cluster0.zcou7up.mongodb.net/?appName=Cluster0";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
