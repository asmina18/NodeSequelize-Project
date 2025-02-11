import express, { response } from "express";
import dotenv from "dotenv"
import { request } from "http";
import sequelize from "./Config/sequelizeConfig.js";

dotenv.config()
const port =process.env.PORT || 4000 // eller mojer menyat svoy port kakoy ti hochesh, v teminale mojesh uvidet izmenenie
const app = express();


// Forside (Root)
app.get("/", async(request, response) => {
    response.send("Velkommen til forsiden!");
});
app.get("/test", async (request, response) => {
    try {
        await sequelize.authenticate();
        response.send("Forbindelse til databasen er succesfuld!");
    } catch (error) {
        console.error(`Fejl! Kunne ikke forbinde til databasen: ${error}`);
        response.status(500).send("Kunne ikke forbinde til databasen.");
    }
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
