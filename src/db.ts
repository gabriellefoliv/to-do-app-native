import mongoose from 'mongoose'

const connectToDatabase = async () => {
    try {
        const connection = await mongoose.connect("mongodb+srv://oliveiragabrielle662:VpxwyDe9RQC8mYdK@cluster0.etlkxw6.mongodb.net/blossom-app?retryWrites=true&w=majority")
        if (connection) {
            console.log("Connection established")
        }
    } catch (error) {
        console.log("error in connectToDatabase", error)
        throw error
    }
}

export default connectToDatabase