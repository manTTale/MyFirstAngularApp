let sportsOne: string[] = ["Golf", "Criket", "Tennis", "Swimming", "MMA"];

// for (let i=0; i<sportsOne.length;i++){
//     console.log(sportsOne[i]);
// }

//kinda like foreach
for (let sport of sportsOne){
    if(sport == "MMA"){
        console.log(`This is my favorite sport >>> ${sport}`)
    }
    else{
        console.log(sport);
    }
    
}