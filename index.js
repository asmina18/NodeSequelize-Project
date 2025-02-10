import express, { response } from "express";
import { request } from "http";

const app = express();
const port = 4000;

app.get("/", (request, response) => {

    response.send("Velkommen til min side");
});

app.get("/about", (request, response) => {

    response.send("Dette er about siden...");
});

app.get("/contact", (request, response) => {

    response.send("Dette er kontakt siden...");
});

app.listen(port, () => {
    console.log(`Server kører på http://localhost:${port}`);
});
