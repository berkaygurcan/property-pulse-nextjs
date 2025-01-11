import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.set("strictQuery", true);

    if (mongoose.connection.readyState === 1) {
        console.log("MongoDB is already connected");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000, // 30 saniye zaman aşımı
        });
        console.log("MongoDB bağlantısı başarılı");
    } catch (error) {
        console.error("MongoDB bağlantı hatası:", error);
        throw new Error("Veritabanı bağlantısı kurulamadı");
    }
};

export default connectDB;
