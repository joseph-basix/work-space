
// let crie;

// function crieDeGeurre() {
    
//     crie = "toujours plus fort! "
//     console.log(crie);
// }
// crieDeGeurre();

// console.log(crie);


// let nombreUn = 4, nombreDeux = 7; // variable a porte globale 

// function addition() {
//     console.log(nombreUn+nombreDeux);
// }
// addition();


// let nombreUn = 4, nombreDeux = 7; 

// function addition(nombreA,nombreB) {
    
//     let result = nombreA + nombreB;
//     return result;
// }
// console.log(addition(nombreUn,nombreDeux));


// Tres importent 

// function division (nombreA,nombreB) {
//     let result = nombreA * nombreB;
//     return result;
// }
// division(6,8);

// let resulatDivision = 3;

// console.log(division(6,9)+ resulatDivision );


// let preparation = 10, cuisson = 15; 

// function cuisinier(nombreDeGateaux,minuteDePreparation,minuteDecuisson) {
    
//     let resultat = nombreDeGateaux * (minuteDecuisson + minuteDePreparation);
//     return resultat;
// }
// console.log(cuisinier(5,preparation,cuisson));


// function prevoirAge() {
    
//     let age = prompt("quel est votre age? ");
//     //age = parseInt(age);
//     //age = parseFloat(age)
//     age = Number(age);
//     alert (" bientot vous aurez " + (age + 1)+ " ans");

    
// }
// prevoirAge();


// 1.1 LES FONCTION ANONYME 

// let fonctionAnonyme = function() {
//     console.log('je suis une fonction anonyme');
// }
// fonctionAnonyme();


// // deuxiem facon d'appeler 


// function (params) { console.log(object);}()



function abracadabra () {
    
    let prenom= "jean";
    let nom = "paul";
    let Age= 30;

 prompt('Quelle est votre prenom');
  prompt('Quelle est votre nom ! ');
 prompt('Quelle est votre age! ');

     console.log(` Sapristi ! On ne m'avait pas prévenu que c'était vous  ${prenom}  ! Euh... Je veux dire... Monsieur le grand magicien ${nom} Cela fait déjà ${age} ans que vous faites rayonner notre contrée ! `);

}
abracadabra();