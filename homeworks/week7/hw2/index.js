const transitionDuration = 300

function getHeight(element) {
  element.style.display = 'block';
  let height = element.scrollHeight + 'px';
  element.style.display = '';
  return height;
}

function showContent(element) {
  let height = getHeight(element);
  element.classList.add('open')
  element.style.height = height;
  setTimeout(function() {
    element.style.height = 'auto';
  }, transitionDuration)
}

function hideContent(element) {
  let height = getHeight(element);
  element.style.height = height;
  setTimeout(function() {
    element.style.height = 0;
  }, 1)
  setTimeout(function() {
    element.classList.remove('open');
  }, transitionDuration)
}

document.querySelector('.question-list').addEventListener('click', function(e) {
  let answer = e.target.nextElementSibling;
   if (answer.classList.contains('open')) {
    hideContent(answer);
    return
   }
  showContent(answer);
})