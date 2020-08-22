const form = document.forms.lidemyForm
const {
        name,
        email,
        phone,
        type,
        ways,
        comment
      } = form.elements
const submitBtn = document.querySelector('.submit-btn')
const formArray = [name, email, phone, type, ways]
let flag = false  // 視窗滑動偵測指標

form.addEventListener('submit', function(e) {
  if (!form.checkValidity()){
    e.preventDefault()
    formArray.forEach(function(item, index) {
      if (item.length > 1) {
        const result = isAllChecked(item)
        if (!result) {
          showBasicError(item)
        }
      } else {
        if (!item.validity.valid) {
          showBasicError(item)
        }
      }
    })
    formArray.forEach(function(item) {
      windowScroll(item)
    })
    return
  }
  
  const info = `恭喜報名成功！\n以下是你的報名資訊：
  * 暱稱：${name.value}
  * 電子郵件：${email.value}
  * 手機號碼：${phone.value}
  * 報名類型：${type[0].checked ? type[0].value : type[1].value}
  * 怎麼知道這個活動的:${ways.value}
  * 其他：${comment.value ? comment.value : '無'}`

  alert(info)
})

// 針對 email 與 phone 做 input 的即時監聽

form.addEventListener('input', function(e) {
  if (e.target.id === 'email') {    
    if (!email.validity.valid) {
      showFutherError(email)
    }
  }
  if (e.target.id === 'phone') {
    if (!phone.validity.valid) {
      showFutherError(phone)
    }
  }
})

// 針對 type=radio 若有選值就移除錯誤訊息
form.addEventListener('click', function() {
  const result = isAllChecked(type)
  const error = type[type.length-1].parentNode.nextElementSibling
  if (result) error.classList.remove('active')
})

function isAllChecked(element) {
  let result = false
  element.forEach(function(item, index) {
    if (item.checked) {
      result = true
      return
    }
  })
  return result
} 

function showBasicError(element) {
  if (element.length > 1) {
    const error = element[element.length-1].parentNode.nextElementSibling
    error.classList.add('active')
  } else {
    const error = element.nextElementSibling
    element.className = 'error'
    error.classList.add('active')
  }
} 

function showFutherError(element) {
  const error = element.nextElementSibling
  if (element.validity.valueMissing) {
    showBasicError(element)
    error.textContent = '欄位資訊為必填'
    return
  }
  // HTML 自帶 type=email 的驗證規則
  if (email.validity.typeMismatch) {
    showBasicError(email)
    error.textContent = 'email 格式不正確'
  }
   // 驗證規則：10碼數字
  if (phone.validity.patternMismatch) {
    showBasicError(phone)
    error.textContent = '請輸入正確的手機號碼'
  }
}

// 讓視窗滑動到第一個驗證不通過的項目
function windowScroll(element) {
  if (flag) return
  if (element.length > 1) {
    const result = isAllChecked(element)
    if (!result) {
      const height = element[0].offsetTop - 60
      window.scrollTo(0, height)
      flag = true
    }
  } else {
    if (!element.validity.valid) {
      const height = element.offsetTop - 60
      window.scrollTo(0, height)
      flag = true
    }
  }
}