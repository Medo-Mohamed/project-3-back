const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");
///////////////////////////////////////////////

let htmlDirectory = path.join(__dirname, "../public");
app.use(express.static(htmlDirectory));

//////////////////////////////////////////////////

app.set("view engine", "hbs");
let viewsDirectory = path.join(__dirname, "../temp/views");
app.set("views", viewsDirectory);
let partialsDirectory = path.join(__dirname, "../temp/partials");
hbs.registerPartials(partialsDirectory);


/////////////////////////////////////////////////////
app.get("/", (req, res) => {
    res.render("home", {
        title: "HOME",
        name: "MOHAMMED AHMED SHEHATA",
        city: "ASSUIT",
        age: 24,
        image: "./images/images.jpg",
        describe: "this my first test at hbs pages...",
        id: 1,
    })
})
app.get("/team", (req, res) => {
    res.render("team", {
        title: "TEAM",
        name: "KHALED ABD ELMOHSEN",
        city: "ASSUIT",
        image: "./images/1.jpg",
        age: 28,
        describe: "this my first test at hbs pages...",
        id: 2,
    })
})
app.get("/service", (req, res) => {
    res.render("service", {
        title: "SERVICE",
        name: "BASSEM MOHAMMED HASHEM",
        city: "ASSUIT",
        age: 32,
        image: "./images/3.jpg",
        describe: "this my first test at hbs pages...",
        id: 3,
    })
})
app.get("/item", (req, res) => {
    res.render("item", {
        title: "ITEM",
        name: "MOHAMMED KALAF NASR",
        city: "ASSUIT",
        age: 27,
        image: "./images/2.jpg",
        describe: "this my first test at hbs pages...",
        id: 4,
    })
})
app.get("/info", (req, res) => {
    res.render("info", {
        title: "INFO",
        name: "ALI NOR ELDEN",
        city: "ASSUIT",
        age: 22,
        image: "./images/1854.jpg",
        describe: "this my first test at hbs pages...",
        id: 5,
    })
})







//////////////////////////////////////////////////
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Browser listening to port : " + port);
})