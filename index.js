import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";

const app = express();

// Conexion de BD
db.authenticate()
  .then(() => console.log("Conexion exitosa"))
  .catch((error) => console.log(error));

// Definir puertos
const port = process.env.PORT || 4000;

//Habilitar PUG
app.set("view engine", "pug");

//Definir carpeta publica
app.use(express.static("public"));

//Definir año actual
app.use((req, res, next) => {
  const year = new Date();
  res.locals.fecha = year.getFullYear();
  res.locals.NombreSitio = "Agencia de viajes";
  return next();
});

//parseear data
app.use(express.urlencoded({extended:true}));

// Agregar Router
app.use("/", router);

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${4000}`);
});
