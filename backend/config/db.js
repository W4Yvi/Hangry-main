import mongoose from 'mongoose';

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/hangry';

export const connectDB = async () => {
  try {
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`✅ Database Connected: ${mongoUrl}`);
  } catch (error) {
    console.error(`❌ Database Connection Failed: ${error.message}`);
    process.exit(1);
  }
};
