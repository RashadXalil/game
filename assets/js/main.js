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
  if (playerName == '') {
    alert('inputu doldur həryerdə bug axtarma')
    return
  }
  screen.innerHTML = ''
  if (startBtn.classList.contains('active')) {
    startBtn.classList.remove('active')
    stopBtn.classList.add('active')
  }
  let currentMode = mode.value
  if ((currentMode = 'normal')) {
    time = 500
  } else if ((currentMode = 'hard')) {
    time = 300
  } else {
    time = 100
  }
  playTime = setInterval(() => {
    let bubble = document.createElement('div')
    bubble.classList.add('tetris__screen__item')
    bubble.style.left = `${Math.floor(Math.random() * 200)}px`
    bubble.style.right = `${Math.floor(Math.random() * 200)}px`
    bubble.style.bottom = `${Math.floor(Math.random() * 150)}px`
    bubble.style.background = `#${Math.floor(Math.random() * 16777215).toString(
      16,
    )}`
    bubble.style.top = `${Math.floor(Math.random() * 150)}px`
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
      if (score >= 50) {
        alert('game over !')
        clearInterval(playTime)
        screen.innerHTML =
          '<img style="width:100%" src="https://cdn.dribbble.com/users/129778/screenshots/905019/atari-game-over.jpg"/>'
        let player = new Player(playerName, score)
        players.push(player)
        localStorage.setItem('players', JSON.stringify(players))
        let array = localStorage.getItem('players')
        arrayJSON = JSON.parse(array)
        tableCreate(arrayJSON)
        score = 0
        scoreBoard.innerHTML = '0'
        startBtn.classList.add('active')
        stopBtn.classList.remove('active')
        return
      }
    })
    setTimeout(() => {
      bubble.style.display = 'none'
    }, 1000)
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
  screen.innerHTML =
    '<img style="width:100%" src="https://cdn.dribbble.com/users/129778/screenshots/905019/atari-game-over.jpg"/>'
  localStorage.setItem('players', JSON.stringify(players))
  let array = localStorage.getItem('players')
  arrayJSON = JSON.parse(array)
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
mode.addEventListener('change', function (e) {
  if (e.target.value == 'normal') {
    time = 700
  } else if (e.target.value == 'hard') {
    time = 400
  } else {
    time = 100
  }
})
