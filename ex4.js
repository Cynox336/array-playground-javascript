/**
 * indexOF
 */

 /**
  * LA función indexOf es muy usada en JavaScript; y en otros lenguajes de programación hay funciones similares. Sirve para indicar, en que posición se encuentra un elemento en un array
  */

 let muchos_peces = ["Dory", "Nemo", "Shipho", "Estrella"]
 let pezPosicion = muchos_peces.indexOf("Nemo")
 console.log("Nemo está en la posición: " + pezPosicion)

 /**
  * Fíjate sin embargo qué valor arroja aplicar indexOf cuando buscamos a "estrella". CONTESTA: ¿Por qué crees que sucede esto?
  * Por que arriba pone Estrella con la E mayuscula y abajo pone estrella con la E minuscula y este esta buscando un estrella en vez de un Estrella que es lo que tenemos en la posicion 3
  */

  let pezPosicion2 = muchos_peces.indexOf("estrella")
  console.log("Estrella está en la posición: " + pezPosicion2)

  
