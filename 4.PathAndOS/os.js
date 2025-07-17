import os from "node:os";

export const fnOS = () => {
    console.log('Sistema operativo:', os.platform());
    console.log('Arquitectura:', os.arch());
    console.log('CPU:', os.cpus()[0].model);
    console.log('RAM total (GB):', (os.totalmem() / (1024 ** 3)).toFixed(2));
    console.log('RAM libre (GB):', (os.freemem() / (1024 ** 3)).toFixed(2));
    console.log('Uptime (horas):', (os.uptime() / 3600).toFixed(2));
    console.log('Usuario actual:', os.userInfo().username);
    console.log('Hostname:', os.hostname());
}

