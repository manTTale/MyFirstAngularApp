import { Coach } from "./Coach";

export class BoxingCoach implements Coach{
    getDailyWorkout(): string {
        return "Practice your jab";
    }

}