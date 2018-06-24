let express = require("express");
let app = express();
let path = require("path");

app.use(express.static(path.join(__dirname, "public")));

let getEmoji = function(){
    let emojis = [
        "&#X1F40A;",
        "&#x1F980;",
        "&#X1F989;",
        "&#x1F916;",
        "&#x1F40F;",
        "&#x1F42A;",
        "&#x1F985;",
        "&#x1F995;"
    ];
    let randNum = Math.floor(Math.random() * emojis.length);
    let chosenEmoji = emojis[randNum];

    return chosenEmoji;
};

app.set("view engine","ejs");

app.get('/', function (req, res){
    let emoji = getEmoji();
    res.render("index.ejs", {emoji: emoji});
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));