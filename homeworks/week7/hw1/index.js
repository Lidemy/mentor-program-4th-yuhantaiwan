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
const formNodeList = [name, email, phone, type, ways]
// let flag = false  // 視窗滑動偵測指標

form.addEventListener('submit', function(e) {
  if (!form.checkValidity()){
    e.preventDefault()
    formNodeList.forEach(function(item) {
      if (item.length > 1) {
        const result = isChecked(item)
        if (!result) {
          showBasicError(item)
        }
      } else {
        if (!item.validity.valid) {
          showBasicError(item)
        }
      }
    })
    const firstErrorNode = checkFirstError(formNodeList)
    windowScroll(firstErrorNode)
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
  showFurtherError(e.target)
})

// 針對 type=radio 若有選值就移除錯誤訊息
form.addEventListener('click', function() {
  const result = isChecked(type)
  const error = type[type.length-1].parentNode.nextElementSibling
  if (result) error.classList.remove('active')
})

// 檢查是否有選值
function isChecked(NodeList) {
  // 將 NodeList 轉成 Array
  let array = [...NodeList]
  return array.some(item => item.checked)
} 

// 顯現基本錯誤訊息
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

// 針對 email 和 phone 的 input 顯現更進一步的錯誤訊息 
function showFurtherError(element) {
  const error = element.nextElementSibling
  if (element.validity.valueMissing) {
    showBasicError(element)
    error.textContent = '欄位資訊為必填'
    return
  }
  // HTML 自帶 type=email 的驗證規則
  if (element.name === 'email') {
    if (element.validity.typeMismatch) {
      showBasicError(element)
      error.textContent = 'email 格式不正確'
    }
  }
   // 驗證規則：10碼數字
  if (element.name === 'phone') {
    if (element.validity.patternMismatch) {
      showBasicError(element)
      error.textContent = '請輸入正確的手機號碼'
    }
  }
}

// 檢查第一個驗證未通過的項目
function checkFirstError(nodeList) {
  let firstErrorNode;
  for(let node of nodeList) {
    if (node.length > 1) {
      const result = isChecked(node)
      if (!result) {
        firstErrorNode = node
        break
      }
    } else {
      if (!node.validity.valid) {
        firstErrorNode = node
        break
      }
    }
  }
  return firstErrorNode
}

// 讓視窗滑動到第一個驗證不通過的項目
function windowScroll(element) {
  let height
  if (element.length > 1) {
    height = element[0].offsetTop - 60
  } else {
    height = element.offsetTop - 60
  }
  window.scrollTo({
    top: height,
    behavior: "smooth"
  })
}
