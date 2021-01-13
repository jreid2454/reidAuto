const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

//      **Get request**
app.get("/reidAuto", (req, res) => {
    res.sendfile(__dirname + "/index.html")
})
app.get("/reidAuto/style", (req, res) => {
    res.sendfile(__dirname + "/reid_style.css")
})
app.get("/reidAuto/jquery", (req, res) => {
    res.sendFile(__dirname + "/jquery.js")
})
app.get("/reidAuto/script", (req, res) => {
    res.sendFile(__dirname + "/reidautoscript.js")
})
app.get("/reidAuto/first", (req, res) => {
    res.sendFile(__dirname + "/first.jpg")
})
app.get("/reidAuto/second", (req, res) => {
    res.sendFile(__dirname + "/second.jpg")
})
app.get("/reidAuto/third", (req, res) => {
    res.sendFile(__dirname + "/third.jpg")
})
app.get("/reidAuto/fourth", (req, res) => {
    res.sendFile(__dirname + "/fourth.png")
})
app.get("/reidAuto/pricing", (req, res) => {
    res.sendFile(__dirname + "/pricing.html")
})
app.get("/reidAuto/contact", (req, res) => {
    res.sendFile(__dirname + "/contact.html")
})
app.get("/reidAuto/ourWork", (req, res) => {
    res.sendFile(__dirname + "/ourWork.html")
})
    //      **GET request for photos**
    app.get("/reidAuto/pic1", (req, res) => {
        res.sendFile(__dirname + "/photos/1.jpg")
    })
app.get("/reidAuto/pic1", (req, res) => {
    res.sendFile(__dirname + "/photos/1.jpg")
})
app.get("/reidAuto/pic2", (req, res) => {
    res.sendFile(__dirname + "/photos/2.jpg")
})
app.get("/reidAuto/pic3", (req, res) => {
    res.sendFile(__dirname + "/photos/3.jpg")
})
app.get("/reidAuto/pic4", (req, res) => {
    res.sendFile(__dirname + "/photos/4.jpg")
})
app.get("/reidAuto/pic5", (req, res) => {
    res.sendFile(__dirname + "/photos/5.jpg")
})
app.get("/reidAuto/pic6", (req, res) => {
    res.sendFile(__dirname + "/photos/6.jpg")
})
app.get("/reidAuto/pic7", (req, res) => {
    res.sendFile(__dirname + "/photos/7.jpg")
})
app.get("/reidAuto/pngPic1", (req, res) => {
    res.sendFile(__dirname + "/photos/1.png")
})
app.get("/reidAuto/pngPic2", (req, res) => {
    res.sendFile(__dirname + "/photos/2.png")
})
app.get("/reidAuto/pngPic3", (req, res) => {
    res.sendFile(__dirname + "/photos/3.png")
})
app.get("/reidAuto/pngPic4", (req, res) => {
    res.sendFile(__dirname + "/photos/4.png")
})
app.get("/reidAuto/pngPic5", (req, res) => {
    res.sendFile(__dirname + "/photos/5.png")
})
app.get("/reidAuto/pngPic6", (req, res) => {
    res.sendFile(__dirname + "/photos/6.png")
})
app.get("/reidAuto/pngPic7", (req, res) => {
    res.sendFile(__dirname + "/photos/7.png")
})
app.get("/reidAuto/pngPic8", (req, res) => {
    res.sendFile(__dirname + "/photos/8.png")
})
app.get("/reidAuto/pngPic9", (req, res) => {
    res.sendFile(__dirname + "/photos/9.png")
})
app.get("/reidAuto/pngPic10", (req, res) => {
    res.sendFile(__dirname + "/photos/10.png")
})
app.get("/reidAuto/pngPic11", (req, res) => {
    res.sendFile(__dirname + "/photos/11.png")
})
app.get("/reidAuto/pngPic12", (req, res) => {
    res.sendFile(__dirname + "/photos/12.png")
})
app.get("/reidAuto/pngPic13", (req, res) => {
    res.sendFile(__dirname + "/photos/13.png")
})
app.get("/reidAuto/pngPic14", (req, res) => {
    res.sendFile(__dirname + "/photos/14.png")
})
app.get("/reidAuto/pngPic15", (req, res) => {
    res.sendFile(__dirname + "/photos/15.png")
})
app.get("/reidAuto/pngPic16", (req, res) => {
    res.sendFile(__dirname + "/photos/16.png")
})
app.get("/reidAuto/pngPic17", (req, res) => {
    res.sendFile(__dirname + "/photos/17.png")
})
app.get("/reidAuto/pngPic18", (req, res) => {
    res.sendFile(__dirname + "/photos/18.png")
})
app.get("/reidAuto/pngPic19", (req, res) => {
    res.sendFile(__dirname + "/photos/19.png")
})

//          **makes server**
app.listen(81);
console.log("Server is working!");
