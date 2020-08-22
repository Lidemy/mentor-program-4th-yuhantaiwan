// 點擊 新增
document.querySelector('.add-btn').addEventListener('click', function() {
  addNewTodo()
})
// 按 enter 新增
document.addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {
    addNewTodo()
  }
})

document.querySelector('.item-list').addEventListener('click', function(e) {
  const target = e.target
  // 完成
  if (target.classList.contains('item-name')) {
    const icon = target.nextElementSibling;
    target.classList.toggle('done')
    icon.classList.toggle('done')
  }
  // 刪除
  if (target.classList.contains('delete-icon')) {
    target.parentNode.remove();
  }
})

// 新增
function addNewTodo() {
  let newTodo = document.querySelector('.add-input').value.trim();
  if(!newTodo) return
  newTodo = escapeHtml(newTodo)
  const newItem = document.createElement('li')
  newItem.className = 'item'
  const newContent = 
  `<p class="item-name">${newTodo}</p>
  <span class="delete-icon">x</span>`
  newItem.innerHTML = newContent
  document.querySelector('.item-list').appendChild(newItem)
  document.querySelector('.add-input').value = ''
}

// 跳脫 HTML tag 
function escapeHtml(unsafe) {
  return unsafe
       .replace(/&/g, "&amp;")
       .replace(/</g, "&lt;")
       .replace(/>/g, "&gt;")
       .replace(/"/g, "&quot;")
       .replace(/'/g, "&#039;");
}