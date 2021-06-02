let addToDoButton = document.getElementById('addlist');
let ToDoContainer = document.getElementById('todocontainer');
let inputField = document.getElementById('inputfield');

addToDoButton.addEventListener('click', function(){
    add();
   });
function Onenter(event,ele){
    console.log(ele.value);
    if (event.keyCode === 13) {
        add();
    }
};
function add(){
    var paragraph = document.createElement('p');
    paragraph.innerText = inputField.value;
    ToDoContainer.appendChild(paragraph);
    inputField.value="";

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration="line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        ToDoContainer.removeChild(paragraph);
    })
};
