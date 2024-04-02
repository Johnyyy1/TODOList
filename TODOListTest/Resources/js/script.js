var todo = []

function add() {
    var list = document.getElementById("input").value;
    if (list == "") {
        document.getElementById("task-list").innerHTML = "Please enter a task";
    }else{
        todo.push(list);
        var ul = document.createElement("ul");
        var li = document.createElement("li");
        ul.appendChild(li);
        li.innerHTML = todo[todo.length - 1]; 
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "check";
        checkbox.style.height = "25px";
        checkbox.style.width = "25px";
        checkbox.value = "off";
        var p = document.createElement("p");
        p.innerHTML = document.getElementById("description").value;
        document.getElementById("task-list").appendChild(ul).appendChild(checkbox); 
        document.getElementById("task-list").appendChild(p);
            checkbox.addEventListener("click", function () {
                checkbox.remove();
                ul.remove();
                li.remove();
                p.remove();
            }) 
    }
}