const prizeBtn = document.querySelectorAll('.prize-btn')
const prizeSection = document.querySelector('.prize')
const activityDialog = document.querySelector('.activity-dialog')
const prizeOutcome = document.querySelector('.prize-outcome')
const prizeText = document.querySelector('.prize-outcome-text')
const loading = document.querySelector('.loading')

prizeBtn[0].addEventListener('click', function(e) {
  e.preventDefault()
  getPrize()
})
prizeBtn[1].addEventListener('click', function(e) {
  e.preventDefault()
  window.location.reload()
})

function getPrize() {
  loading.classList.remove('hidden')
  const request = new XMLHttpRequest()
  request.onload = function() {
    loading.classList.add('hidden')
    if (request.status >= 200 && request.status < 400) {
      console.log(JSON.parse(request.responseText))
      const response = JSON.parse(request.responseText)
      prizeSection.className = 'prize'
      if (!activityDialog.classList.contains('hidden')) {
        activityDialog.classList.add('hidden')
        prizeOutcome.classList.remove('hidden')
      }
      switch (response.prize) {
        case 'FIRST':
          prizeSection.classList.add('first')
          prizeText.textContent = '恭喜你中頭獎了！日本東京來回雙人遊！'
          break
        case 'SECOND':
          prizeSection.classList.add('second')
          prizeText.textContent = '二獎！90 吋電視一台！'
          break
        case 'THIRD':
          prizeSection.classList.add('third')
          prizeText.textContent = '恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！'
          break
        case 'NONE':
          prizeSection.classList.add('none')
          prizeText.textContent = '銘謝惠顧'
          break
        default:
          alert('error')
      }
    } else {
      console.log(request.responseText)
      alert('伺服器發生錯誤，請再試一次')
    }
  }
  request.open('GET', 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery')
  request.send()
  request.onerror = function() {
    alert('發送請求失敗，請再試一次！')
  }
}

