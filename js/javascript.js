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
btnSort.addEventListener('mouseover', hoverEffectSortBtn);
btnSort.addEventListener('mouseout', hoverEffectSortBtnOut);

function createInput() {
    let arr = Array.from(inputItems)
    (arr[arr.length - 1].value.trim() == '') ? flagTwo = false : flagTwo = true;
    if (flag < 5 && flagTwo) {
        flag++;
        id++;
        number++;
        create();
    } else if(flag == 5){
        let html = `<div class="popup">
                        <span class="popuptext show" id="myPopup"> List is full </span>
                    </div>`
        arr[arr.length - 1].parentElement.insertAdjacentHTML("beforeend", html);
        setTimeout(() => {
            let popup = document.querySelector('.popup');
            popup.remove();
        }, 1500);
    } else {
        let html = `<div class="popup">
                        <span class="popuptext show" id="myPopup"> This field is empty </span>
                    </div>`
        arr[arr.length - 1].parentElement.insertAdjacentHTML("beforeend", html);
        setTimeout(() => {
            let popup = document.querySelector('.popup');
            popup.remove();
        }, 700);
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
        if (arrInputValue[i].value.trim() != '') dataBaza.push(arrInputValue[i].value.trim())
        else arrInputValue[i].parentElement.remove();
    }
    flag = dataBaza.length;
    if (flagSort) {
        for (let i = 0; i < dataBaza.length; i++) {
            if (arrInputValue[i].value.trim() != '') arrInputValue[i].value = dataBaza.sort()[i];
        }
        btnSort.src = `img/btn-up.png`
        flagSort = false;
    } else {
        for (let i = 0; i < dataBaza.length; i++) {
            if (arrInputValue[i].value.trim() != '') arrInputValue[i].value = dataBaza.sort().reverse()[i];
        }
        btnSort.src = `img/btn-down.png`
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
    } else if (done.children.length == 10) {
        let html = `<div class="popup">
            <span class="popuptext show" id="myPopup"> List is full </span>
        </div>`
        done.insertAdjacentHTML("beforeend", html);
        setTimeout(() => {
            let popup = document.querySelector('.popup');
            popup.remove();
        }, 3000);
    } else {
        let html = `<div class="popup">
                        <span class="popuptext show" id="myPopup"> This field is empty </span>
                    </div>`
        draggable.insertAdjacentHTML("beforeend", html);
        setTimeout(() => {
            let popup = document.querySelector('.popup');
            popup.remove();
        }, 700);
    }
};

function hoverEffectSortBtn() {
    if (flagSort) btnSort.src = `img/btn-down-hover.png`
    else btnSort.src = `img/btn-up-hover.png`
};

function hoverEffectSortBtnOut() {
    if (flagSort) btnSort.src = `img/btn-down.png`
    else btnSort.src = `img/btn-up.png`
};














