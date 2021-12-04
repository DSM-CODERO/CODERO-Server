const express = require("express");
const app = express();
const { sequelize } = require("./models");
const router = require("./routes/index");
const PORT = process.env.PORT || 4000;

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use("/", router);

app.set("jwt-secret", process.env.JWT_KEY);


sequelize.sync({ force : false })
    .then(() => {
        console.log("database 연결 성공")
    })
    .catch((err) => {
        console.error(err);
    });

app.listen(PORT, () => {
   console.log(`Listening on`, PORT);
});