const express = require("express");
const path = require('path')
const app = express();
const port = 3000;

app.use(express.static('public'));
app.get("/", (req, res) => {
    const p = path.join(__dirname, "public", "projectteammembers.html")
    // res.send("Hello, welcome to my NodeJS application!");
    res.sendFile(p, (err)=>{
        if (err)
            console.log(err);
    });
});

app.listen(port, () => {
 console.log(`myapp is listening on port ${port}!`);
});


