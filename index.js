// Code your solutions in this file
let names = ["jaden", "ksenia", "kj"];
let cards = [];

function  writeCards(names, birthday){
  for(let i = 0; i < names.length; i++){
   cards.push(`Thank you, ${names[i]}, for the wonderful ${birthday} gift!`);

  }return cards
  }



function countDown(number){
while (number > -1) {
  console.log(number--);
}
}
