"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BoxingCoach_1 = require("./BoxingCoach");
var MmaCoach_1 = require("./MmaCoach");
var myMmaCoach = new MmaCoach_1.MmaCoach();
var myBoxingCoach = new BoxingCoach_1.BoxingCoach();
var theCoaches = [];
theCoaches.push(myMmaCoach);
theCoaches.push(myBoxingCoach);
for (var _i = 0, theCoaches_1 = theCoaches; _i < theCoaches_1.length; _i++) {
    var coach = theCoaches_1[_i];
    console.log(coach.getDailyWorkout());
}
