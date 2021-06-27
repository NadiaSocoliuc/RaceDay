let raceNumber = Math.floor(Math.random() * 1000);

let registeredTime = "early";

let runnerAge = 17;

if(registeredTime === "early" && runnerAge >= 18) {
    console.log(raceNumber += 1000);
}

if(registeredTime === "early" && runnerAge >= 18) {
    console.log(`You will race at 9:30 am. Your race number is ${raceNumber}`);
} else if (registeredTime !== "early" && runnerAge >= 18) {
    console.log(`You will race at 11:00 am. Your race number is ${raceNumber}`);
} else {
    console.log(`You will race at 12:30 am. Your race number is ${raceNumber}`);
}
