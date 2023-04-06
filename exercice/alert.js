document.getElementById("xy").innerHTML = ("Une simple page HTML");






// METHODE  POUR DECLARER UNE FONCTION (1)


/* let a= 2, b = 3 , result;

function addNumber(){
result = a+b;

console.log(result);
}

addNumber(); */


// METHODE  POUR DECLARER UNE FONCTION (2)


let a= 2, b = 3 , result;

let addNumber = function(){

    result = a+b;
    console.log(result)
}

addNumber();


//METHODE  POUR ENVOYER DES DONNEE DANS UNE FONCTION