//let name = 1
//let dom
//function 
//onclick
//textContent


let homeScore = 0
let homeScoreboard = document.getElementById("home-score")

function addOneHome() {
    homeScore += 1
    homeScoreboard.textContent = homeScore
}

function addTwoHome() {
    homeScore += 2
    homeScoreboard.textContent = homeScore

}


function addThreeHome() {
    homeScore += 3
    homeScoreboard.textContent = homeScore
}


function resetHome() {
    homeScore = 0
    homeScoreboard.textContent = homeScore
}


let guestScore = 0
let guestScoreboard = document.getElementById("guest-score")


function addOneGuest() {
    guestScore += 1
    guestScoreboard.textContent = guestScore
}

function addTwoGuest() {
    guestScore += 2
    guestScoreboard.textContent = guestScore

}


function addThreeGuest() {
    guestScore += 3
    guestScoreboard.textContent = guestScore
}


function resetGuest() {
    guestScore = 0
    guestScoreboard.textContent = guestScore
}