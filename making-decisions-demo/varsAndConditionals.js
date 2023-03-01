/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonAttack = 35
let jamieAttack = 35

if(jonAttack > jamieAttack){
    console.log('Jon Snow is stronger than Jamie.')
} else if (jonAttack < jamieAttack){
    console.log('Jamie Lannister is stronger with one than Bastard Snow.')
} else{
    console.log('They both fought valiently and found that they were an even match for one another.')
}

let jonHealth = 100
let jonDefense = 0

if(jonHealth > jamieAttack){
    jonHealth = jonHealth - jamieAttack
    console.log('Jamie landed a hit on Jon.')
    console.log('Jons health is at = ' + jonHealth)
} else{
    console.log('Jon was struck in the back by jamie and was slain.')
}

jonDefense = 30

let coinFlip = 'heads'

if (coinFlip === 'heads'){
    console.log('Fight continues')
}   else{
    console.log('Jaime leaves the battle scared')
}

for(let i = 0; i < 5; i++){
    if(jonHealth > jamieAttack - jonDefense){
        jonHealth -= jamieAttack - jonDefense 
        console.log('Jons health is at = ' + jonHealth)
    } else{
        console.log('Jon was struck in the back by jamie and was slain.')
    }
}

while(jonHealth > 0){
    jonHealth -= jamieAttack - jonDefense
    console.log(`Jons health is now at ${jonHealth}`)
    if(jonHealth <= 0){
        console.log('Jon has joined both his fathers in death.')
    }
}