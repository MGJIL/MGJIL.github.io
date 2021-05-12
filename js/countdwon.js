var countDownDate = new Date("05/24/2021 21:59:59 UTC").getTime();
// Update the count down every 1 second
var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with

    holorloge = document.querySelectorAll(".Boite_Interval1")
    holorloge[0].querySelector(".number").innerText = days
    holorloge[0].querySelector("svg").lastElementChild.setAttribute('stroke-dashoffset', days/365 * 173)
    holorloge[1].querySelector(".number").innerText = hours
    holorloge[1].querySelector("svg").lastElementChild.setAttribute('stroke-dashoffset', hours/24 * 173)
    holorloge[2].querySelector(".number").innerText = minutes
    holorloge[2].querySelector("svg").lastElementChild.setAttribute('stroke-dashoffset', minutes/60 * 173)
    holorloge[3].querySelector(".number").innerText = seconds
    holorloge[3].querySelector("svg").lastElementChild.setAttribute('stroke-dashoffset', seconds/60 * 173)

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
