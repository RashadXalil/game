const screen = document.getElementById('screen')
const startBtn = document.getElementById('startBtn')
const stopBtn = document.getElementById('stopBtn')
const mode = document.getElementById('mode')
const tbody = document.getElementById('tbody')
const modal = document.getElementById('modal')
const video = document.getElementById('modal-video')
var godmode = new Audio('/assets/sound/godmode.mp3')
var kayu = new Audio('/assets/sound/cayu.mp3')
var hard = new Audio('/assets/sound/hard.mp3')
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
mode.addEventListener('change', function (e) {
  clearInterval(playTime)
  if (e.target.value == 'normal') {
    time = 1000
    document.getElementById('body').classList.remove('godmode')
    hard.pause()
    godmode.pause()
    kayu.play()
    playTime = setInterval(() => {
      let bubble = document.createElement('div')
      bubble.classList.add('tetris__screen__item')
      bubble.style.left = `${Math.floor(Math.random() * 200)}px`
      bubble.style.right = `${Math.floor(Math.random() * 200)}px`
      bubble.style.bottom = `${Math.floor(Math.random() * 150)}px`
      bubble.style.background = `#${Math.floor(
        Math.random() * 16777215,
      ).toString(16)}`
      bubble.style.top = `${Math.floor(Math.random() * 150)}px`
      screen.append(bubble)
      bubble.addEventListener('click', function (e) {
        if (mode.value == 'normal') {
          score += 1
        } else if (mode.value == 'hard') {
          score += 2
        } else {
          score += 3
        }
        e.target.style.display = 'none'
        scoreBoard.innerHTML = score
        if (score >= 100) {
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
          kayu.pause()
          hard.pause()
          godmode.pause()
          return
        }
      })
      setTimeout(() => {
        bubble.style.display = 'none'
      }, 1000)
    }, time)
  } else if (e.target.value == 'hard') {
    if (playerName == '') {
      playerName = prompt('enter your Name')
      if (playerName == '') {
        alert('inputu doldur h??ryerd?? bug axtarma')
        return
      }
    }
    startBtn.classList.remove('active')
    stopBtn.classList.add('active')
    score = 0
    time = 500
    kayu.pause()
    document.getElementById('body').classList.remove('godmode')
    godmode.pause()
    hard.loop = true
    hard.play()
    playTime = setInterval(() => {
      let bubble = document.createElement('div')
      bubble.classList.add('tetris__screen__item')
      bubble.style.left = `${Math.floor(Math.random() * 200)}px`
      bubble.style.right = `${Math.floor(Math.random() * 200)}px`
      bubble.style.bottom = `${Math.floor(Math.random() * 150)}px`
      bubble.style.background = `#${Math.floor(
        Math.random() * 16777215,
      ).toString(16)}`
      bubble.style.top = `${Math.floor(Math.random() * 150)}px`
      screen.append(bubble)
      bubble.addEventListener('click', function (e) {
        if (mode.value == 'normal') {
          score += 1
        } else if (mode.value == 'hard') {
          score += 2
        } else {
          score += 3
        }
        e.target.style.display = 'none'
        scoreBoard.innerHTML = score
        if (score >= 100) {
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
          kayu.pause()
          hard.pause()
          godmode.pause()
          return
        }
      })
      setTimeout(() => {
        bubble.style.display = 'none'
      }, 700)
    }, time)
  } else {
    if (playerName == '') {
      playerName = prompt('enter your Name')
      if (playerName == '') {
        alert('inputu doldur h??ryerd?? bug axtarma')
        return
      }
    }
    let firstPrompt = confirm('are u sure?')
    if (firstPrompt) {
      let secondPrompt = confirm('olum baak')
      if (secondPrompt) {
        startBtn.classList.remove('active')
        stopBtn.classList.add('active')
        score = 0
        time = 100
        kayu.pause()
        hard.pause()
        document.getElementsByTagName('body')[0].style.background =
          'https://c.tenor.com/vxFNoJHV3I4AAAAC/chiquichico.gif'
        godmode.loop = false
        godmode.play()
        document.getElementById('body').classList.add('godmode')
        modal.style.display = 'block'
        video.autoplay = true
        let modalFadeIn = setTimeout(() => {
          modal.style.display = 'none'
        }, 3000)
        playTime = setInterval(() => {
          let bubble = document.createElement('div')
          bubble.classList.add('tetris__screen__item')
          bubble.style.left = `${Math.floor(Math.random() * 200)}px`
          bubble.style.right = `${Math.floor(Math.random() * 200)}px`
          bubble.style.bottom = `${Math.floor(Math.random() * 150)}px`
          bubble.style.background = `#${Math.floor(
            Math.random() * 16777215,
          ).toString(16)}`
          bubble.style.top = `${Math.floor(Math.random() * 150)}px`
          screen.append(bubble)
          bubble.addEventListener('click', function (e) {
            if (mode.value == 'normal') {
              score += 1
            } else if (mode.value == 'hard') {
              score += 2
            } else {
              score += 3
            }
            e.target.style.display = 'none'
            scoreBoard.innerHTML = score
            if (score >= 100) {
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
              kayu.pause()
              hard.pause()
              godmode.pause()
              return
            }
          })
          setTimeout(() => {
            bubble.style.display = 'none'
          }, 200)
        }, time)
      }
    }
  }
})
startBtn.addEventListener('click', function () {
  playerName = prompt('enter your Name')
  if (playerName == '') {
    alert('inputu doldur h??ryerd?? bug axtarma')
    return
  }
  screen.innerHTML = ''
  if (startBtn.classList.contains('active')) {
    startBtn.classList.remove('active')
    stopBtn.classList.add('active')
  }
  let currentMode = mode.value
  if (currentMode == 'normal') {
    time = 1000
    console.log('normal mode')
    hard.pause()
    godmode.pause()
    kayu.play()
    playTime = setInterval(() => {
      let bubble = document.createElement('div')
      bubble.classList.add('tetris__screen__item')
      bubble.style.left = `${Math.floor(Math.random() * 200)}px`
      bubble.style.right = `${Math.floor(Math.random() * 200)}px`
      bubble.style.bottom = `${Math.floor(Math.random() * 150)}px`
      bubble.style.background = `#${Math.floor(
        Math.random() * 16777215,
      ).toString(16)}`
      bubble.style.top = `${Math.floor(Math.random() * 150)}px`
      screen.append(bubble)
      bubble.addEventListener('click', function (e) {
        if (mode.value == 'normal') {
          score += 1
        } else if (mode.value == 'hard') {
          score += 2
        } else {
          score += 3
        }
        e.target.style.display = 'none'
        scoreBoard.innerHTML = score
        if (score >= 100) {
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
          kayu.pause()
          hard.pause()
          godmode.pause()
          return
        }
      })
      setTimeout(() => {
        bubble.style.display = 'none'
      }, 1000)
    }, time)
  } else if (currentMode == 'hard') {
    console.log('hardmode')
    kayu.pause()
    godmode.pause()
    hard.play()
    time = 500
  } else {
    kayu.pause()
    hard.pause()
    console.log('godmode')
    godmode.play()
    time = 100
  }
})
stopBtn.addEventListener('click', function () {
  scoreBoard.innerHTML = ''
  if (stopBtn.classList.contains('active')) {
    stopBtn.classList.remove('active')
    startBtn.classList.add('active')
  }
  clearInterval(playTime)
  kayu.pause()
  hard.pause()
  godmode.pause()
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
