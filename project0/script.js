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

  const listCheckbox = `<input type='checkbox' class='${classNames.TODO_CHECKBOX}' onClick='isChecked()' value='unchecked'></input>`
  const deleteButton = `<button class='todo-delete' onClick='deleteListItem()'>delete</button>`
  const listContent = `<div id='li${listCount}' class='todo-container'>${listCheckbox} TODO ${listCount}: <i>placeholder text for todo</i> ${deleteButton}</div>`


  let listItem = document.createElement("div")
  listItem.innerHTML = listContent

  list.appendChild(listItem)

  //list.innerHTML += listContent

}

function isChecked() {
  let status = event.target
  if (status.value === "unchecked") {
    status.value = "checked"
    uncheckUpdate("remove")
  } else {
    status.value = "unchecked"
    uncheckUpdate("add")
  }
}

function deleteListItem() {
  let parent = event.target.parentElement
  let checkValue = parent.children[0].value
 
  listCount--
  itemCountSpan.innerHTML = listCount

  if (checkValue === "unchecked") {
    uncheckUpdate("remove")
  }
  parent.remove()
}

function uncheckUpdate(str) {
  if (str === "remove") {
    uncheckedCount--
    uncheckedCountSpan.innerHTML = uncheckedCount
  } else if (str === "add") {
    uncheckedCount++
    uncheckedCountSpan.innerHTML = uncheckedCount
  }
}