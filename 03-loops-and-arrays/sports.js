var sportsOne = ["Golf", "Criket", "Tennis", "Swimming", "MMA"];
// for (let i=0; i<sportsOne.length;i++){
//     console.log(sportsOne[i]);
// }
//kinda like foreach
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var sport = sportsOne_1[_i];
    if (sport == "MMA") {
        console.log("This is my favorite sport ".concat(sport));
    }
    else {
        console.log(sport);
    }
}
