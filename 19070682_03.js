//CARRILLO ALVARADO JORDY ALEXANDRO
//PRACTICA DE LYA 2
var entrada = "Lo más importante en la vida siempre será la familia, Dominic Toretto";
    const lex = str => 
    {
        return str.split(' ').map(item =>
             {
                return item.trim()
            }
        )
    }
    let frase=entrada.split(" ");
console.log("Frase : ", frase)

console.log("Longitud de frase: ", frase.length);