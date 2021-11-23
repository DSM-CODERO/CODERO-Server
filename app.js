const express = require("express");
const app = express();
const { sequelize } = require("./models");
const PORT = process.env.PORT || 4000;

const Router = require("./routes/index");

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use('/', Router); 

app.set("jwt-secret", process.env.JWT_KEY);


sequelize.sync({ force : false })
    .then(() => {
        console.log("Connected to Database");
    })
    .catch((err) => {
        console.error(err);
    });

app.listen(PORT, () => {
   console.log(`Listening on ${PORT}`);
});