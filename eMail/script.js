/*
  1 - Creo un input che chieda la mail
  2 - Creo una lista di persone "approvate"
  3 - Confronto il valore dell'input con la lista e If true stampa 
      risposta positiva else stampa risposta negativa
  */


const approvedList = ["a@gmail.it" , "b@gmail.it", "c@gmail.it" ];



let provaA = document.getElementById("btn-sent");

provaA.addEventListener("click", function(){
  
  let daVerificare = document.getElementById('testo').value;

  let result = false;

for(let i=0; i<approvedList.length; i++){

  if(daVerificare === approvedList[i] ){
    result = true;
  }
}

if(result == true){
  alert("Non errore");
}else{
  alert("Errore");
}
})




// 1 - Creare generatori numerici random da 1 a 6
// 2 - Confrontare i due numeri
// 3 - Stabilire numero più alto 
// 4 - Stampare vincitore


let human = Math.floor(Math.random() * 6);
console.log(human);

let computer = Math.floor(Math.random() * 6);
console.log(computer);


if(human > computer){

  alert("human wins")

}else if (human < computer){
  alert("computer wins")
}else{
  alert("it's a draw")
}