const command = 'shutdown /s /f /t 0'; // Inmediate shutdown
const proc = require('child_process');
const express = require('express');
const app = new express();
const router = express.Router();

router.get('/shutdown', (request, response) => {
    proc.exec(command, (err, stdout, stderr) => {
        response.json({output: stdout});
    });
});

app.use('/remote', router);
app.listen(80);
console.log('Server is running; you may lay down now');

