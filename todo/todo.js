/**
 * Created by Vestein on 02.11.2015.
 */

var ulTodo;
var input;
var data = [];

addEventListener("load", init);

function init() {
    document.getElementById('clear').addEventListener('click', clearTodo);
    document.getElementById('add').addEventListener('click', addTodo);

    ulTodo = document.getElementById('todos');
    input = document.getElementById('newTodo');

    loadTodo();
}

function loadTodo() {
    data = JSON.parse(localStorage.data);
    ulTodo.innerHTML = '';

    if (data.length > 0) {
        for (var i = 0; i < data.length; i++) {
            var li = document.createElement('li');
            var checkbox = document.createElement('input');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.setAttribute('id', i);
            checkbox.setAttribute('class', 'checkbox');
            checkbox.checked = data[i].checked;
            checkbox.addEventListener('change', updateTodo);
            li.appendChild(checkbox);
            li.appendChild(document.createTextNode(data[i].value));
            ulTodo.appendChild(li);
        }
    } else {
        ulTodo.appendChild(document.createTextNode('Ingenting å gjøre!'));
    }
}

function saveTodo() {
    localStorage.data = JSON.stringify(data);
}

function updateTodo() {
    data[this.id].checked = this.checked;
    saveTodo();
}

function addTodo() {
    if (input.value.length > 0) {
        data.push({
            value: input.value,
            checked: false
        });
        input.value = '';
        saveTodo();
        loadTodo();
    } else {
        //TODO add 'popup'
    }

}

function clearTodo() {
    var newData = [];

    for (var i = 0; i < ulTodo.children.length; i++) {
        if (! ulTodo.children[i].getElementsByTagName('input')[0].checked) {
            newData.push(data[i]);
        }
    }

    data = newData;
    saveTodo();
    loadTodo();
}
