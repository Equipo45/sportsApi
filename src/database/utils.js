const fs = require("fs")

//save to the local database
const saveToDataBase = (DB) => {
    fs.writeFileSync("./src/database/db.json",JSON.stringify(DB,null,2),{
        encoding:"utf-8"
    });
};

module.exports = { saveToDataBase };