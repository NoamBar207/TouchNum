
'use strict';
var totalMiliSeconds = 0;

var gNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
var gStreakCounter = 1;
var gInterval;

function onInit() {
  rendGame();
  clearInterval(gInterval);
  // pickNum();
}

function countUpTimer() {
  ++totalMiliSeconds;
  //modal
  var seconds = Math.floor(totalMiliSeconds / 1000);
  var milisec = totalMiliSeconds - seconds * 1000;
  //domm
  document.querySelector('.count-up-timer').innerText = seconds + ':' + milisec;
}


function rendGame() {
  var strHTML = '<tr>';
  var gShuffledNums = gNums.slice();
  gStreakCounter = 1;
  gShuffledNums = gShuffledNums.sort((a, b) => 0.5 - Math.random());
  for (var i = 1; i <= gNums.length; i++) {
    console.log('hereee');
    strHTML += `<td  class= "board" onclick="cellClicked(this)">${gShuffledNums.pop()}</td>`;
    if (i % Math.sqrt(gNums.length) === 0) strHTML += '</tr><tr>';
  }
  strHTML += '</tr>';
  var elTable = document.querySelector('.board');
  elTable.innerHTML = strHTML;
}

function cellClicked(elClick) {
  if (+elClick.innerText === gStreakCounter) {
    elClick.style.backgroundColor = 'blue';
    if (gStreakCounter === 1) gInterval = setInterval(countUpTimer, 1);
    gStreakCounter++;
    if (gStreakCounter === gNums.length + 1) clearInterval(gInterval);
  }
}

function pickNum(number) {
  gNums = [];
  for (var i = 1; i <= +number; i++) {
    gNums.push(i);
  }
  rendGame();
}
