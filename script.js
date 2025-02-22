var ul = document.getElementById("list-item")

function add(){
     var text = document.getElementById("txt")
     var list = document.createElement("li")
     list.innerHTML = text.value + `<button id="delete-btn" onclick="del(event)">Delete</button>`
     ul.append(list)
 

}
function del(event){

    event.target.parentElement.remove()

}