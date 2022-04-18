let competidores= []
function positions (firstPlace, secondPlace, lastPlace){
        if("Daniel" === lastPlace){
        competidores.push(`1º Colocado: ${firstPlace} 2º Colocado: ${lastPlace} 3º Colocado: ${secondPlace}`)
    }
    return competidores
}
console.log(positions("Rafael", "Manoel","Daniel"))
