let startYear = 1900;
let leapYear = "високосний рiк";

for (startYear; startYear <= 2100; startYear++) {
    if ((startYear % 4 === 0 && startYear % 100 !== 0) || (startYear % 400 === 0)) {
        console.log(startYear + "-" + leapYear)
    } else {
        console.log(startYear);
    }
}



