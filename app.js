// app.js file content

// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)


// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
const fromDollarToYen= (valor) =>{

    return valor*oneEuroIs.JPY*(1/1.2)
}
const fromEuroToDollar =(valor) =>{

  return valor*oneEuroIs.USD
}
const fromYenToPound = (valor)=>{

  return oneEuroIs.GBP*((1/(valor*oneEuroIs.JPY*(1/1.2)))*(1/1.2))
} 
module.exports = { sum, fromEuroToDollar,fromDollarToYen,fromYenToPound};
console.log(fromDollarToYen(1))
console.log(fromYenToPound(3.5))