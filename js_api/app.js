import express from "express"

const app = express();

app.get("/", async function (req, res) {
    const name = req.query.name ?? "World";
    const msg = { 
        message: `Hello ${name.trim()}!` 
    };
    
    res.status(200).json(msg);
});

console.log("JS REST service started...")
app.listen(3000, "0.0.0.0");