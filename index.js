
// ⁡⁣⁣⁢Forklaring:

// http: indbygget Node modul med forskellige server funktioner
// createServer: metode på http modul som kan oprette en server
// request: Anmodningen vi sender til serveren.
// response: Svaret vi modtager fra serveren.
// listen: En callback-funktion med den port, som vores server skal lytte på. I dette tilfælde er den sat til port 4000.
// Prøv nu at køre kommandoen⁡
import http, { request } from "http"

// Definerer porten, som serveren skal køre på.
// Du kan ændre portnummeret ved at tilpasse værdien nedenfor.
const port = 4000;  // Skift '4000' til et andet nummer, hvis du vil bruge en anden port.

http.createServer((request,response)=>{
    response.writeHead(200,{"Content":"text/plain"})
    response.end("Hello world")

    console.log("server responede with helllo world");

}).listen(port,()=>{
    console.log(`server kører på port http//localhost:${port}`);

})