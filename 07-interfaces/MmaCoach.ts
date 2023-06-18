import { Coach } from "./Coach";

export class MmaCoach implements Coach{
    getDailyWorkout(): string {
        return "Practice your takedown defense";
    }

}