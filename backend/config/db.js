const mongoose = require("mongoose")
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

const conn = async () => {
    try {
        const dbCon = await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.kxqak.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
        console.log("Conectou ao banco!")
        return dbCon
    } catch (error) {
        console.log(error)
    }
}

conn()

module.exports = conn
