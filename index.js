const command = 'shutdown /s /t 0'; // Inmediate shutdown
const proc = require('child_process');
const os = require('os');
const express = require('express');
const app = new express();
const router = express.Router();


function getIP4() {
    const ifaces = os.networkInterfaces();
    const addresses = ifaces[`Conexión de área local`];
    console.log(addresses.length)
    return addresses.find(addr => addr.family === 'IPv4')?.address;
}


router.get('/shutdown', (request, response) => {
    proc.exec(command, (err, stdout, stderr) => {
        response.json({output: stdout});
    });
});

app.use('/remote', router);
app.listen(80);

console.log(
    `Server is running at http://${getIP4()}/remote/shutdown`,
    `Have some rest!`
)

