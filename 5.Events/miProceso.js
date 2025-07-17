import { EventEmitter } from "node:events";

export class MiProceso extends EventEmitter {

    iniciar() {
        this.emit("inicio");
        setTimeout(() => { this.emit("fin") }, 5000);
    }

}

