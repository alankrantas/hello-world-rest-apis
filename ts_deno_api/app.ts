import { opine } from "https://deno.land/x/opine@2.2.0/mod.ts";

const app = opine();

app.get("/", async function (req, res) {
    const name = req.query.name ?? "World";
    const msg = {
        message: `Hello ${name.trim()}!`
    };

    res.setStatus(200).json(msg);
});

app.listen(
    "0.0.0.0:3000",
    () => console.log("TS/Deno REST service started..."),
);