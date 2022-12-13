let add_button = document.getElementById("add_btn");
let firstE = document.querySelector("li");
let sortButton = document.querySelector(".sort");


let id = 1;
add_button.addEventListener('click' , ()=>{
    // Unhide input field
    if(firstE.style.display === "none"){
        firstE.style.display = ""; 
        return;
    }else{
        if(firstE.querySelector("input").value == "" ){
            let x = firstE.querySelector("input")
            x.style.border = "2px solid red"

            if(!firstE.querySelector("span")){
                let span = document.createElement('span')
                span.innerText = "⚠️Must be filled"
                span.setAttribute("class" , "validation");
                firstE.appendChild(span);
            }
            return;
        }
    }

    if(firstE.querySelector("span")){
        firstE.querySelector("span").remove();
    }
    firstE.querySelector("input").style.border = ""
    // Create a new task and add to list
    let itm = firstE;
    let cln = itm.cloneNode(true);
    cln.setAttribute('id' , id)
    cln.querySelector("input").disabled = true;
    cln.querySelector("input").className = "input_task_item"
    cln.querySelector("input").setAttribute("value", firstE.querySelector("input").value);
    cln.querySelector(".x").setAttribute("onclick","this.parentElement.remove()");
    document.getElementById("myList").appendChild(cln);
    id++;
    if (firstE.style.display !== "none")
        firstE.style.display = "none";
    firstE.querySelector("input").value = "";
})

let bool = false;
sortButton.addEventListener('click', ()=>{
    let ul = document.getElementById("myList");
    let e = ul.getElementsByClassName("input_task_item");
    let arr = Array.from(e);
    let compare = (a, b) => {
        return a.value.localeCompare(b.value, undefined, {
            numeric: true,
            sensitivity: 'base'
          });
        }
    arr.sort(compare);
    if(bool){
        arr.reverse();
        sortButton.src = "./Resources/asc_normal.svg"
    }else{
        sortButton.src = "./Resources/des_normal.svg"
    }
    for(let i = 0; i < arr.length; i++){
        ul.append(arr[i].parentElement);
    }
    bool = bool ? false : true;
})

function hover(element) {
    element.setAttribute('src', './Resources/x_button_hover.svg');
}
function unhover(element) {
    element.setAttribute('src', './Resources/x_button.svg');
}

function allowDrop(ev) {
    ev.preventDefault();
}
    function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    document.getElementById(data).querySelector("input").style.backgroundColor = "#40ffa96b"
    ev.target.appendChild(document.getElementById(data));
}



