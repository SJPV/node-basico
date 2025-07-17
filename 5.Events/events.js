import { EventEmitter } from "node:events";

const event = new EventEmitter();

event.on("saludo", (dato) => {
    console.log("Nuestro evento Saludo ", dato);
});

event.once("despedida", () => {
    console.log("Adiós...");
})

export const myEvent = () => {
    event.emit("saludo", {"name": "illika", "age": 18});
    event.emit("despedida");
    event.emit("despedida");
}

