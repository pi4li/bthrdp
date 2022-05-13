const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.get("/download", (req,res)=>{
    res.redirect("https://eu2.contabostorage.com/5c302ed2574345c1bce6f9733cf795f2:pi4li/BTH_EXTERNAL.rdp")
})

const listener = app.listen(3034, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
