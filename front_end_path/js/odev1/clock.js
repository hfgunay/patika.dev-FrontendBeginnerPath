// DOMS
let userName = document.getElementById("myName")
let clock = document.getElementById("myClock")

// variable for username
let username = prompt("Adınız:");

// check username and assing myName
if (username.trim().length > 0) {
    myName.innerHTML = username;
} else {
    myName.innerHTML = "Guest";
}

// getting day

function getDayString(dayNumber) {
    const days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    return days[dayNumber];
}



// getting time and day

function getTime() {
    const date = new Date();
    const options = { hour12: false };

    currentDate = `${date.toLocaleTimeString('tr-TR', options)} ${getDayString(date.getDay())}`;
    return currentDate;
}
function showTime() {
    clock.innerHTML = getTime();
}

// run and refresh every time
setInterval(showTime);

