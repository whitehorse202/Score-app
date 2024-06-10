
let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
//console.log(guestScoreBtnOne)
let guestScoreEl = document.getElementById("guest-score")
//console.log(guestScoreEl)
let guestScore = 0

let homeScoreBtnOne = document.getElementById("home-score-btn-1")
//console.log(homeScoreBtnOne)
let homeScoreEl = document.getElementById("home-score")
//console.log(homeScoreEl)
let homeScore = 0


function increaseHomeScoreOne() {
  // console.log("increase home score one button clicked")
    homeScore += 1
  // console.log(homeScore)
   homeScoreEl.textContent = homeScore
}
function increaseHomeScoreTwo() {
     homeScore += 2
    homeScoreEl.textContent = homeScore
}
function increaseHomeScoreThree() {
   homeScore += 3
  homeScoreEl.textContent = homeScore
}


function increaseGuestScoreOne() {
   //console.log("increase guest score one button clicked")
   guestScore += 1
  // console.log(guestScore)
  guestScoreEl.textContent = guestScore
}
function increaseGuestScoreTwo() {
     guestScore += 2
   guestScoreEl.textContent = guestScore
}
function increaseGuestScoreThree() {
     guestScore += 3
    guestScoreEl.textContent = guestScore
}
