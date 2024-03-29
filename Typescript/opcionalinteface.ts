interface Heroe {
    nombre: string;
    poder?: string;
    arma?: string;
}

let superman: Heroe = {
    nombre: 'Superman',
    poder: 'Super fuerza'
}

let ironman: Heroe = {
    nombre: 'Iron-Man',
    arma: 'Mark-39'
}

let thor: Heroe = {
    nombre:'Thor',
    poder: 'Rayos',
    arma: 'Martillo'
}


function getHeroe( heroe: Heroe){
    let mensaje:string;
    
    if (heroe.poder && heroe.arma){
        return mensaje = `${ heroe.nombre } tiene el poder de:  ${heroe.poder} y su arma es: ${ heroe.arma}`
    } else if(heroe.arma) {
        return mensaje = `${ heroe.nombre } tiene un arma que es: ${ heroe.arma}`
    }else if(heroe.poder){
        return mensaje = `${ heroe.nombre } tiene el poder de: ${ heroe.poder}`
    }
}

document.body.textContent = getHeroe(thor);