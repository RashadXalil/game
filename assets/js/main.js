const screen = document.getElementById('screen')
const startBtn = document.getElementById('startBtn')
const stopBtn = document.getElementById('stopBtn')
const mode = document.getElementById('mode')
const tbody = document.getElementById('tbody')
var time = 0
var score = 0
var playTime
var playerName = ''
let index = 0
class Player {
  constructor(name, score) {
    this.Id = index
    this.name = name
    this.score = score
    index++
  }
}
let players = []
var playerName = ''
const scoreBoard = document.querySelector('.tetris__score__live span')
startBtn.addEventListener('click', function () {
  playerName = prompt('enter your Name')
  if (startBtn.classList.contains('active')) {
    startBtn.classList.remove('active')
    stopBtn.classList.add('active')
  }
  let currentMode = mode.value
  if ((currentMode = 'normal')) {
    time = 900
  } else if ((currentMode = 'hard')) {
    time = 700
  } else {
    time = 500
  }
  playTime = setInterval(() => {
    let bubble = document.createElement('div')
    bubble.classList.add('tetris__screen__item')
    bubble.style.left = `${Math.floor(Math.random() * 100)}px`
    bubble.style.right = `${Math.floor(Math.random() * 100)}px`
    bubble.style.bottom = `${Math.floor(Math.random() * 100)}px`
    bubble.style.background = `#${Math.floor(Math.random() * 16777215).toString(
      16,
    )}`
    bubble.style.top = `${Math.floor(Math.random() * 100)}px`
    screen.append(bubble)
    bubble.addEventListener('click', function (e) {
      console.log(mode.value)
      if (mode.value == 'normal') {
        score += 1
      } else if (mode.value == 'hard') {
        score += 2
      } else {
        score += 3
      }
      e.target.style.display = 'none'
      scoreBoard.innerHTML = score
    })
  }, time)
})
stopBtn.addEventListener('click', function () {
  if (stopBtn.classList.contains('active')) {
    stopBtn.classList.remove('active')
    startBtn.classList.add('active')
  }
  clearInterval(playTime)
  let player = new Player(playerName, score)
  players.push(player)
  screen.innerHTML = ''
  localStorage.setItem('players', JSON.stringify(players))
  let array = localStorage.getItem('players')
  arrayJSON = JSON.parse(array)
  console.log(arrayJSON)
  tableCreate(arrayJSON)
})
function tableCreate(array) {
  let innerHTML = ''
  for (let i = 0; i < array.length; i++) {
    innerHTML += `<tr>
    <th scope="row">${array[i].Id}</th>
    <td>${array[i].name}</td>
    <td>${array[i].score}</td>
  </tr>`
  }
  tbody.innerHTML = innerHTML
}
