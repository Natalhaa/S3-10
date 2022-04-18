let competidores= []
function positions (firstPlace, secondPlace, lastPlace){
        if("Daniel" === lastPlace){
        competidores.push(`1º Colocado: ${firstPlace} 2º Colocado: ${lastPlace}
         3º Colocado: ${secondPlace}`)
    }
    else if ("Daniel" === secondPlace){
        competidores.push(`1º Colocado: ${secondPlace} 2º Colocado: ${firstPlace}
        3º Colocado: ${lastPlace}`)
    }
    else(
        competidores.push(`1º Colocado: ${firstPlace} 2º Colocado: ${secondPlace}
        3º Colocado: ${lastPlace}`)
    )
    return competidores
}
console.log(positions("Rafael", "Manoel","Daniel"))
