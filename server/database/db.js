import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://yuvrajkori29:bzafeeDTzKyq4t10@cluster0.d35nq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;