var agora = new Date()
var hora = agora.getHours()
console.log(`Agora sao exatamente ${hora} horas.`)
if(hora < 5 ){
    console.log(`Bom Madrugada`)
} else if ( hora < 12){
    console.log( `Bom Dia` )
} else if ( hora <= 18 )  {
    console.log(`Boa tarde`)
} else {
    console.log(`Boa Noite`)
}