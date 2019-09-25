const express = require ("express");
const app = express();

/*
app.get("/handler1", function(req,res){
    res.status(200)
    res.set("Content-type", "text/plain")
    res.send("<h1>Hola</h1>")
});


app.get("/handler2", function(req,res){
    res.send("Escribe Handler2")
});


//Actividad 02
app.get("/handler3", function(req,res){
    res.send("Hola x3")
    console.log("baseUrl")
    console.dir(req.baseUrl)
    console.log("body")
    console.dir(req.body)
    console.log("hostname")
    console.dir(req.hostname)
    console.log("method")
    console.dir(req.method)
    console.log("originalUrl")
    console.dir(req.originalUrl)
    console.log("path")
    console.dir(req.path)
    console.log("protocol")
    console.dir(req.protocol)
    console.log("query")
    console.dir(req.query)
});

//actividad 3

app.use(function(req,res,next){
    console.log("Soy un middleware");
    res.send("Soy un middleware")
    next();
})

//actividad 4

*/
//actividad 4 modificadad por memo. Me genera un error si descomento todo
// Error: Can't set headers after they are sent.
const router = express.Router();

router.get("/", (req,res)=>{
    res.sendFile(__dirname +"/public/file.txt");
});

app.use("/asset", router);


app.listen(9000, () => {
    console.log("El servidor está escuchando el puerto 9000")
});