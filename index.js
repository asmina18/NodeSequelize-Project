import express from "express";
import dotenv from "dotenv"

dotenv.config()
const port =process.env.PORT || 4000 // eller mojer menyat svoy port kakoy ti hochesh, v teminale mojesh uvidet izmenenie
const app = express();


// Forside (Root)
app.get("/", (request, response) => {
    response.send("Velkommen til forsiden!");
});

// Biler til salg
app.get("/biler", (request, response) => {
    response.send("Her kan du se biler til salg.");
});

// Hvem er vi?
app.get("/om-os", (request, response) => {
    response.send("Vi er et firma, der sælger biler!");
});

// Find os
app.get("/find-os", (request, response) => {
    response.send("Du kan finde os på Hovedgaden 123, 1000 København.");
});

// Kontakt side
app.get("/kontakt", (request, response) => {
    response.send("Kontakt os på kontakt@biler.dk eller ring på 12345678.");
});

// Håndterer alle ukendte sider (404 fejl)
app.use((request, response) => {
    response.status(404).send("Siden blev ikke fundet!");
});

// Starter serveren
app.listen(port, () => {
    console.log(`Server kører på http://localhost:${port}`);
});
