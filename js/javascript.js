const btnAdd = document.querySelector(".btn-add");
const inputs = document.querySelector(".inputs");
const inputItems = document.querySelector(".container").getElementsByTagName("input");
const btnsDelete = document.getElementsByClassName("btn-delete");
const btnsDelete2 = document.getElementsByClassName("btn2-delete");
const btnSort = document.querySelector(".btn-sort__down");
const done = document.getElementById("done");
const draggables = document.getElementsByClassName("draggable");
const doneHeight = done.offsetHeight;
const btnDones = document.getElementsByClassName("btn-done");

let flag = 1,
    flagTwo = true,
    number = 1,
    flagSort = true;
id = 1;

btnAdd.addEventListener("click", createInput);
btnSort.addEventListener("click", sort);
btnSort.addEventListener("mouseover", hoverEffectSortBtn);
btnSort.addEventListener("mouseout", hoverEffectSortBtnOut);
Array.from(btnDones).forEach((item) => item.addEventListener("click", dragMobile));

function createInput() {
    Array.from(inputItems)[Array.from(inputItems).length - 1].value.trim() == "" ? (flagTwo = false) : (flagTwo = true);
    if (flag < 5 && flagTwo) {
        flag++;
        id++;
        number++;
        create();
    } else if (flag == 5) {
        let html = `<div class="popup">
                        <span class="popuptext show" id="myPopup"> List is full </span>
                    </div>`;
        Array.from(inputItems)[Array.from(inputItems).length - 1].parentElement.insertAdjacentHTML("beforeend", html);
        setTimeout(() => {
            let popup = document.querySelector(".popup");
            popup.remove();
        }, 1500);
    } else {
        let html = `<div class="popup">
                        <span class="popuptext show" id="myPopup"> This field is empty </span>
                    </div>`;
        Array.from(inputItems)[Array.from(inputItems).length - 1].parentElement.insertAdjacentHTML("beforeend", html);
        setTimeout(() => {
            let popup = document.querySelector(".popup");
            popup.remove();
        }, 700);
    }
}

function create() {
    let html = `<div class="inputs__item draggable" draggable="true" ondragstart="drag(event)" ondragend="dragEnd(event)">
                        <button class="btn-done">
                            <i class="fas fa-plus-square"></i>
                        </button>
                    <div class="btn-delete cross"> 🞡 </div>
                    <input type="text" />
                </div>`;
    inputs.insertAdjacentHTML("beforeend", html);
    Array.from(btnsDelete).forEach((btn) => {
        btn.addEventListener("click", deleteInputFirst);
    });
    Array.from(btnDones).forEach((item) => item.addEventListener("click", dragMobile));
}

function sort() {
    let dataBaza = [];
    const arrInputValue = Array.from(inputItems);
    for (let i = 0; i < arrInputValue.length; i++) {
        if (arrInputValue[i].value.trim() != "") dataBaza.push(arrInputValue[i].value.trim());
        else flag > 1 ? arrInputValue[i].parentElement.remove() : "";
    }
    Array.from(inputItems).length == 0 ? create() : "";
    flag = Array.from(inputItems).length;
    if (flagSort) {
        for (let i = 0; i < dataBaza.length; i++) {
            if (arrInputValue[i].value.trim() != "") arrInputValue[i].value = dataBaza.sort()[i];
        }
        btnSort.src = `img/btn-up.png`;
        flagSort = false;
    } else {
        for (let i = 0; i < dataBaza.length; i++) {
            if (arrInputValue[i].value.trim() != "") arrInputValue[i].value = dataBaza.sort().reverse()[i];
        }
        btnSort.src = `img/btn-down.png`;
        flagSort = true;
    }
}

function deleteInputFirst() {
    if (flag > 1) {
        this.parentElement.remove();
        flag--;
    }
}

function deleteInputSecond() {
    this.parentElement.remove();
}

function drag(e, arg) {
    arg ? e.currentTarget.parentElement.classList.add("dragging") : e.currentTarget.classList.add("dragging");
}

function dragEnd(e) {
    e.currentTarget.classList.remove("dragging");
}

function allowDrop(e) {
    e.preventDefault();
}

function drop(e) {
    const draggable = document.querySelector(".dragging");
    if (draggable.querySelector("input").value.trim() != "" && done.children.length < 10) {
        if (flag > 1) flag--;
        const btn = draggable.querySelector(".btn-delete");
        const inp = draggable.querySelector("input");
        inp.disabled = true;
        btn.removeEventListener("click", deleteInputFirst);
        btn.classList.remove("btn-delete");
        btn.classList.add("btn2-delete");
        btn.addEventListener("click", deleteInputSecond);
        done.appendChild(draggable);
        if (inputs.children.length == 0) create();
    } else if (done.children.length == 10) {
        let html = `<div class="popup">
            <span class="popuptext show" id="myPopup"> List is full </span>
        </div>`;
        done.insertAdjacentHTML("beforeend", html);
        setTimeout(() => {
            let popup = document.querySelector(".popup");
            popup.remove();
        }, 3000);
    } else {
        let html = `<div class="popup">
                        <span class="popuptext show" id="myPopup"> This field is empty </span>
                    </div>`;
        draggable.insertAdjacentHTML("beforeend", html);
        setTimeout(() => {
            let popup = document.querySelector(".popup");
            popup.remove();
        }, 700);
    }
}

function hoverEffectSortBtn() {
    if (flagSort) btnSort.src = `img/btn-down-hover.png`;
    else btnSort.src = `img/btn-up-hover.png`;
}

function hoverEffectSortBtnOut() {
    if (flagSort) btnSort.src = `img/btn-down.png`;
    else btnSort.src = `img/btn-up.png`;
}

function dragMobile(e) {
    let arg = true;
    drag(e, arg);
    allowDrop(e, arg);
    drop(e, arg);
    dragEnd(e, arg);
}
