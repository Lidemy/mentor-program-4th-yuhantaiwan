const url = 'https://api.twitch.tv/kraken/'
const clientID = 'n5gu5njs9jy4znhnx54e2ejtqpzirf'
const cardTemplate = `<a href="$url" class="card-item" target="_blank">
  <div class="card-top">
    <img src="$preview" alt="">
  </div>
  <div class="card-bottom">
    <div class="user-avatar">
      <img src="$logo" alt="">
    </div>
    <div class="card-info">
      <p class="card-title">$status</p>
      <p class="card-text">$name</p>
    </div>
  </div>
</a>`
const emptyCard = `<div class="empty-card"><a href="" class="more-card-btn">More Streams</a></div>
<div class="empty-card"></div>`
const gameslimit = 5
const streamsLimit = 20
let currGame = ''
let offset = 0

getTopGames(topGames => {
  for (let game of topGames) {
    let element = document.createElement('li')
    element.textContent = game
    document.querySelector('.navbar').appendChild(element)
    document.querySelector('.title').innerText = topGames[0]
  }
  getStreams(topGames[0], game => renderStreamCards(game))
})

document.querySelector('.navbar').addEventListener('click', function(e) {
  if (e.target.tagName.toLowerCase() === 'li') {
    currGame = e.target.innerText
    document.querySelector('.title').innerText = currGame
    offset = 0
    getStreams(currGame, streams => renderStreamCards(streams))
  }
})

function getTopGames(callback) {
  const request = new XMLHttpRequest()
  request.open('Get', `${url}games/top?limit=${gameslimit}`)
  request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json')
  request.setRequestHeader('Client-ID', clientID)
  request.send()
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      const response = JSON.parse(request.responseText)
      console.log(response)
      let topGames = response.top.map((data) => data.game.name)
      console.log(topGames)
      callback(topGames)
    }
  }
}

function getStreams(game, callback) {
  const request = new XMLHttpRequest()
  game = encodeURIComponent(game)   // 重要！記得編碼轉換
  request.open('Get', `${url}streams?game=${game}&limit=${streamsLimit}&offset=${offset}`)
  request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json')
  request.setRequestHeader('Client-ID', clientID)
  request.send()
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      const response = JSON.parse(request.responseText)
      console.log(response)
      let streams = response.streams
      callback(streams)
    }
  }
}

function renderNavbar(topGames) {
  for (let game of topGames) {
    let element = document.createElement('li')
    element.textContent = game
    document.querySelector('.navbar').appendChild(element)
  }
}

function renderStreamCards(streams) {
  if (offset === 0) {
    document.querySelector('.card-groups').innerHTML = ''
  }
  for (let stream of streams) {
    let element = document.createElement('a')
    let cardItem = cardTemplate
      .replace('$url', stream.channel.url)
      .replace('$preview', stream.preview.large)
      .replace('$logo', stream.channel.logo)
      .replace('$status', stream.channel.status)
      .replace('$name', stream.channel.name)
    document.querySelector('.card-groups').appendChild(element)
    element.outerHTML = cardItem    // 要先 appendChild，才能 outerHTML
  }
  appendEmptyCard()
  if (offset <= 900) {
    loadMoreCards()
  }
}

function appendEmptyCard() {
  let element = document.createElement('div')
  document.querySelector('.card-groups').appendChild(element)
  element.outerHTML = emptyCard
}

function removeEmptyCard() {
  document.querySelectorAll('.empty-card').forEach(item => item.remove())
}

function loadMoreCards() {
  document.querySelector('.more-card-btn').addEventListener('click', function(e) {
    e.preventDefault()
    offset = offset + streamsLimit
    getStreams(currGame, streams => {
      console.log(offset)
      removeEmptyCard()
      renderStreamCards(streams)
    })
  })
}
