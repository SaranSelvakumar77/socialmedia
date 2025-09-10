import mongoose from "mongoose";

const connecttoDb = async () => {
    const connection = process.env.MONGO_URI
    try {
        await mongoose.connect(connection)
        console.log("DB connected Successfully")
    } catch (error) {
        console.error("DB connect failed");

    }
}
export default connecttoDb