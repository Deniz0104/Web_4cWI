let calendar = {
    month: 0,
    startingDay: 1,
    amountOfWeekdays: 7,
    months: [
        {name: "Januar", days: "31", offset: 4},
        {name: "Februar", days: "28", offset: 0},
        {name: "März", days: "31", offset: 0},
        {name: "April", days: "30", offset: 3},
        {name: "Mai", days: "31", offset: 5},
        {name: "Juni", days: "30", offset: 1},
        {name: "Juli", days: "31", offset: 3},
        {name: "August", days: "31", offset: 6},
        {name: "September", days: "30", offset: 4},
        {name: "Oktober", days: "31", offset: 2},
        {name: "November", days: "30", offset: 0},
        {name: "Dezember", days: "31", offset: 2},
    ],
    weekDays: ["MO", "DI", "MI", "DO", "FR", "SA", "SO"],
};

function printWeek(){
    let days = " |  ";
    for (let day = 0; day < calendar.weekDays.length; day++) {
        const element = calendar.weekDays[day];
        days += element + "  |  ";
    }
    console.log(days)
}

function printDaysOfMonth(month, startingDay) {
    let week = " |  ";
    console.log(" ");
    console.log(" | " + calendar.months[month].name + " | ");
    printWeek();
    for (let index = 0; index < startingDay; index++) {
        week += "    |  ";
        
    }


    for (let daysMonth = 1; daysMonth <= calendar.months[month].days; daysMonth++) {
        
        week += daysMonth + "  |  ";
        if ((daysMonth+startingDay) % 7 == 0) {
            console.log(week);
            week = " |  ";
        }
    }
    console.log(week);
}



for (let i = 0; i < 12; i++) {
    printDaysOfMonth(i, calendar.months[i].offset);
}

