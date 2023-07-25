const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.port || 3030;

app.use(cors());
app.use(express.json());
const supermercado = [
    {id: 1, nombre: "Arroz", marca: "Roa", precio: 2300, cantidad:50},
    {id: 2, nombre: "Lentejas", marca: "Diana", precio: 3000, cantidad:33},
    {id: 3, nombre: "Galletas", marca: "Saltin Noel", precio: 2000, cantidad:21},
    {id: 4, nombre: "Gelatina", marca: "Gel'hada", precio: 5000, cantidad:14},
];
app.get("/", (req, res) => {
    res.send("Hola Clientes, Asi es la creacion de mi API");
});

app.get("/api/supermercado", (req, res) => {
    res.send(supermercado);
});

app.get("/api/supermercado/:id", (req, res) => {
    const producto = supermercado.find((e) => e.id === parseInt(req.params.id));
    if (!producto)
      return res
         .status(404)
         .send("Producto no encontrado en nuestra base de datos");
    else res.send(producto);
});
app.post("/api/supermercado", (req, res) => {
    const product = {
        id: supermercado.length + 1,
        nombre: req.body.nombre,
        marca: req.body.marca,
        precio: parseInt(req.body.precio),
        cantidad: parseInt(req.body.cantidad),
    };
    supermercado.push(product);
    res.send(product);
});
app.put("/api/supermercado/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const prodIndex = supermercado.findIndex((product) => product.id === id);
    if (prodIndex !== -1 ){
        const updateProd = {
            id:id,
            nombre: req.body.nombre,
            marca: req.body.marca,
            precio: parseInt(req.body.precio),
            cantidad: parseInt(req.body.cantidad),
        };
        supermercado [prodIndex]=updateProd;
        res.send(updateProd);
    }else{
    res.status(404).send("Producto no encontrado");
    }
});

app.delete("api/supermercado/:id",(req, res) => {
    const producto = supermercado.find((d)=> d.id === parseInt(req.params.id));
    if (!producto) return res.status(404).send("Producto no encontrado");
    else res.send(producto);

    const index = supermercado.indexOf(producto);
    supermercado.splice(index, 1);
    res.send(producto);
})
app.listen(port, ()=> console.log(`Escuchando el puerto ${port}....`));

