const express = require('express');
const app = express();
const router = express.Router();

router.get('/', (req, res) => {
 res.sendFile(__dirname +'/public/index.html');
});
app.use('/asset', router);

app.listen(9000, () => {
    console.log("El servidor está escuchando por el puerto 9000...")
});