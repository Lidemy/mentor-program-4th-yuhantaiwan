const form = document.forms.lidemyForm;
const name = form.elements.name;
const email = form.elements.email;
const phone = form.elements.phone;
const type = form.elements.type;
const ways = form.elements.ways;
const comment = form.elements.comment;
const error = document.querySelectorAll('.error-text');

const submitBtn = document.querySelector('.submit-btn');


form.addEventListener('submit', function(e) {
  if (!form.checkValidity()) {
    if (!name.validity.valid) {
      name.className = 'error';
      error[0].classList.add('active');
    }
    if (!email.validity.valid) {
      showEmailError();
    }
    if (!phone.validity.valid) {
      showPhoneError();
    }
    if (!type[0].checked && !type[1].checked) {
      error[3].classList.add('active');

    }
    if (!ways.validity.valid) {
      ways.className = 'error';
      error[4].classList.add('active');
    }
    
    e.preventDefault();
    windowScroll();
    return;
  }
  
  let info = `恭喜報名成功！\n以下是你的報名資訊：
  * 暱稱：${name.value}
  * 電子郵件：${email.value}
  * 手機號碼：${phone.value}
  * 報名類型：${type[0].checked?type[0].value:type[1].value}
  * 怎麼知道這個活動的？:${ways.value}
  * 其他：${comment.value}`

  alert(info);

})


email.addEventListener('input', function() {
  if (!email.validity.valid) {
    showEmailError();
  }
})
phone.addEventListener('input', function() {
  if (!phone.validity.valid) {
    showPhoneError();
  }
})


form.addEventListener('click', function() {
  if (type[0].checked || type[1].checked) {
    error[3].classList.remove('active');
  }
})

function showEmailError() {
  if (email.validity.valueMissing) {
    email.className = 'error';
    error[1].classList.add('active');
    error[1].textContent = '欄位資訊為必填';
    return;
  } 
  if (email.validity.typeMismatch) {
    email.className = 'error';
    error[1].classList.add('active');
    error[1].textContent = 'email 格式不正確';
  }
}

function showPhoneError() {
  if (phone.validity.valueMissing) {
    phone.className = 'error';
    error[2].classList.add('active');
    error[2].textContent = '欄位資訊為必填';
    return;
  } 
  if (phone.validity.patternMismatch) {
    phone.className = 'error';
    error[2].classList.add('active');
    error[2].textContent = '請輸入正確的手機號碼';
  }
}

function windowScroll() {
  const nameHeight = name.offsetTop - 60;
  const emailHeight = email.offsetTop - 60;
  const phoneHeight = phone.offsetTop - 60;
  const typeHeight = type[0].offsetTop - 60;
  const waysHeight = ways.offsetTop - 60;
  const commentHeight = comment.offsetTop - 60;

  if (!name.validity.valid) {
    window.scrollTo(0, nameHeight);
    return;
  }
  if (!email.validity.valid) {
    window.scrollTo(0, emailHeight);
    return;
  }
  if (!phone.validity.valid) {
    window.scrollTo(0, phoneHeight);
    return;
  }
  if (!type[0].checked && !type[1].checked) {
    window.scrollTo(0, typeHeight);
    return;
  }
  if (!ways.validity.valid) {
    window.scrollTo(0, waysHeight);
    return;
  }
  if (!comment.validity.valid) {
    window.scrollTo(0, commentHeight);
    return;
  }
}