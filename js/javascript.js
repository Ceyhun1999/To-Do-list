const btnAdd = document.querySelector('.btn-add');
    inputs = document.querySelector('.inputs'),
    inputItems = document.querySelector('.container').getElementsByTagName('input'),
    btnsDelete = document.getElementsByClassName('btn-delete'),
    btnsDelete2 = document.getElementsByClassName('btn2-delete'),
    btnSort = document.querySelector('.btn-sort__down'),
    done = document.getElementById('done'),
    draggables = document.getElementsByClassName('draggable'),
    doneHeight = done.offsetHeight;
let flag = 1,
    flagTwo = true,
    number = 1,
    flagSort = true;
    id = 1;

btnAdd.addEventListener('click', createInput);

btnSort.addEventListener('click', sort);

function createInput() {
    (Array.from(inputItems)[Array.from(inputItems).length - 1].value.trim() == '') ? flagTwo = false : flagTwo = true;
    if (flag < 5 && flagTwo) {
        flag++;
        id++;
        number++;
        create();
    }
};

function create() {
    let html = `<div class="inputs__item draggable" draggable="true" ondragstart="drag(event)" ondragend="dragEnd(event)">
                    <div class="btn-delete cross"> 🞡 </div>
                    <input type="text" />
                </div>`;
    inputs.insertAdjacentHTML("beforeend", html);
    Array.from(btnsDelete).forEach(btn => {
        btn.addEventListener('click', deleteInputFirst)
    })
};

function sort() {
    let dataBaza = [];
    const arrInputValue =  Array.from(inputItems);
    
    for (let i = 0; i < arrInputValue.length; i++) {
        if (arrInputValue[i].value.trim() != '') dataBaza.push(arrInputValue[i].value.trim());
    }
    if (flagSort) {
        for (let i = 0; i < arrInputValue.length; i++) {
            if (arrInputValue[i].value.trim() != '') arrInputValue[i].value = dataBaza.sort()[i];
        }
        flagSort = false;
    } else {
        for (let i = 0; i < arrInputValue.length; i++) {
            if (arrInputValue[i].value.trim() != '') arrInputValue[i].value = dataBaza.sort().reverse()[i];
        }
        flagSort = true;
    }
};

function deleteInputFirst() {
    if (flag > 1) {
        this.parentElement.remove()
        flag--;
    }
};

function deleteInputSecond() {
    this.parentElement.remove()
};

function drag(e) {
    e.currentTarget.classList.add('dragging')
};

function dragEnd(e) {
    e.currentTarget.classList.remove('dragging')
};

function allowDrop(e) {
    e.preventDefault();
};

function drop(e) {
    const draggable = document.querySelector('.dragging');
    if (draggable.querySelector('input').value.trim() != '' && done.children.length < 10) {
        if (flag > 1) flag--;
        const btn = draggable.querySelector('.btn-delete');
        const inp = draggable.querySelector('input');
        inp.disabled = true;
        btn.removeEventListener('click', deleteInputFirst);
        btn.classList.remove('btn-delete');
        btn.classList.add('btn2-delete');
        btn.addEventListener('click', deleteInputSecond);
        done.appendChild(draggable);
        if (inputs.children.length == 0) create();
    }
   
};


















