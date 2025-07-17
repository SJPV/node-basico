
// -- 2. Modules --
// const { contenido } = require('./FS/ejemplo-fs-sync.js');
//require('./FS/ejemplo-fs-callbacks.js');
//require('./FS/ejemplo-fs-promesas.js');

// -- 3. Http --
//import { app } from "./3.Htpp/server.js";
//import { app } from "./3.Http/server-json.js";
//import { app } from "./3.Http/server-pages.js";

/*
app.listen(3000, () => {
    console.log("Server port 3000 encendido");
});
*/


// -- 4. Path And OS
//import {fnPath} from "./4.PathAndOS/path.js"
//fnPath();
//import { fnOS } from "./4.PathAndOS/os.js";
//fnOS();


// -- 5. EventEmitter
//import { myEvent } from "./5.Events/events.js";
//myEvent();

import { MiProceso } from "./5.Events/miProceso.js";

const miEvento = new MiProceso();

miEvento.on("inicio", () => console.log("Inicio de mi Evento"));
miEvento.on("fin", () => console.log("Fin de mi Evento"));

miEvento.iniciar();
