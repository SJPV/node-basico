
// -- 2. Modules --
// const { contenido } = require('./FS/ejemplo-fs-sync.js');
//require('./FS/ejemplo-fs-callbacks.js');
//require('./FS/ejemplo-fs-promesas.js');

// -- 3. Http --
//import { app } from "./3.Htpp/server.js";
//import { app } from "./3.Http/server-json.js";
import { app } from "./3.Http/server-pages.js";

app.listen(3000, () => {
    console.log("Server port 3000 encendido");
});