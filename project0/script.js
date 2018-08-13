const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
let listCount = 0
let uncheckedCount = 0

function newTodo() {
  listCount++
  uncheckedCount++
  itemCountSpan.innerHTML = listCount
  uncheckedCountSpan.innerHTML = uncheckedCount

  const listCheckbox = `<input type='checkbox' class='todo-checkbox' onClick='isChecked()' value='unchecked'></input>`
  const deleteButton = `<button class='todo-delete' onClick='deleteListItem()'>delete</button>`
  const listContent = `<div id='li${listCount}' class='todo-container'>${listCheckbox} TODO ${listCount}: <i>placeholder text for todo</i> ${deleteButton}</div>`

  list.innerHTML += listContent

}

function isChecked() {
  let status = event.target
  if (status.value === "unchecked") {
    status.value = "checked"
    uncheckedCount--
    uncheckedCountSpan.innerHTML = uncheckedCount
  } else {
    status.value = "unchecked"
    uncheckedCount++
    uncheckedCountSpan.innerHTML = uncheckedCount
  }
}

function deleteListItem() {
  let parent = event.target.parentElement
  let checkValue = parent.children[0].value
 
  listCount--
  itemCountSpan.innerHTML = listCount
  
  if (checkValue === "unchecked") {
    uncheckedCount--
    uncheckedCountSpan.innerHTML = uncheckedCount
  }
  parent.remove()
}