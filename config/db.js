const db = require("../models")

async function  connectDatabase(){
    try{
        await db.sequelize.authenticate();
        console.log("Database berhasil terhubung");

        await db.sequelize.sync({ alter: true});
        console.log("Database tersinkronasi");
    } catch (err) {
        console.error("Database gagal terhubung", err.message);
        process.exit(1);
    }
}

module.exports = connectDatabase;