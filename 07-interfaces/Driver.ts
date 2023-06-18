import { BoxingCoach } from "./BoxingCoach";
import { Coach } from "./Coach";
import { MmaCoach } from "./MmaCoach";

let myMmaCoach = new MmaCoach();
let myBoxingCoach = new BoxingCoach();

let theCoaches: Coach[] = [];
theCoaches.push(myMmaCoach);
theCoaches.push(myBoxingCoach);

for(let coach of theCoaches){
    console.log(coach.getDailyWorkout());
}