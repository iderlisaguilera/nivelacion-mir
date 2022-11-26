let receta = {}
receta.nombre = "Sandwich"
receta.ingredientes = []
receta.ingredientes = [{nombre: "pan", cantidad: 2}]
receta.ingredientes.push = [{nombre: "queso", cantidad: 1}]

console.log(receta.ingredientes[0].nombre)