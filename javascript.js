let buttonAdd = document.querySelector('.buttonAdd') ;
let rightButtonAdd = document.querySelector('.rightButtonAdd') ;
let leftButtonAdd = document.querySelector('.leftButtonAdd') ;
let deleteButton = document.querySelector('.deleteButton') ;
let sortButton = document.querySelector('.sortButton')
let inputDivs = document.querySelector('.inputDivs') ;
let inputDiv = document.querySelector('.inputDiv') ;
let input = document.querySelector('.input') ;
let plus = document.querySelector('.plus') ;
let sortButtonz = document.querySelector('.sortButtonz')



// При нажатие кнопки "buttonAdd" добавляется новая пустая запись.
function Dobavit(){
    let inputs = document.querySelectorAll('.input')
    let lastElem = inputs[inputs.length-1]
    if(lastElem.value.length!=0){
        
    let newInputDiv = document.createElement('li') ;
    newInputDiv.classList.add('inputDiv')
    inputDivs.append(newInputDiv);
    let newInput = document.createElement('input')
    newInput.classList.add('input')
    let newDeleteButton = document.createElement('button') ;
    newDeleteButton.classList.add('newDeleteButton')
    newDeleteButton.innerHTML= `<img src="./img/Group 52.svg" alt="">`
    newInputDiv.append( newInput,newDeleteButton)
    let newDeleteButtons = document.querySelectorAll('.newDeleteButton')
   
// При нажатие кнопки "newDeleteButtons" удаляется созданная новая запись. ("newDeleteButtons" это кнопки удаления новых созданных записей) 
    newDeleteButtons.forEach((item)=>{
    item.addEventListener('click', function(){
    if(inputDivs.childElementCount>1){item.parentElement.remove()}
})})

// Когда курсор оказывается над кнопкой "newDeleteButtons", меняется цвет заднего фона. ("newDeleteButtons" это кнопки удаления новых созданных записей) 
    newDeleteButtons.forEach((item)=>{
    item.addEventListener('mouseover', function(){
    item.style.background = '#833AE0' ;
})})

// Когда курсор мыши выходит за пределы кнопки "newDeleteButtons", элемент возвращает старый цвет заднего фона. ("newDeleteButtons" это кнопки удаления новых созданных записей)
    newDeleteButtons.forEach((item)=>{
    item.addEventListener('mouseout', function(){
    item.style.background = 'none' ;
    item.style.background = '#C4C4C4' ;
})})


}
    
 // Если последняя запись пустая, то новая не добавляется и меняется цвет границы последней записи  
else{ 
    function redBorder (){
    lastElem.style.border='red 3px solid'
}
    function redOriginalBorder(){
    lastElem.style.border='none'
}
setTimeout(redBorder,100) ;
setTimeout(redOriginalBorder,1000) ;
    function hovz(){
        lastElem.style.border='5px solid #FFDC40'}

    lastElem.addEventListener('mouseover', hovz)
    function hovd(){
        lastElem.style.border='none'}
        
    lastElem.addEventListener('mouseout', hovd)
    
}


let massiv = [];
let  inputlar = document.querySelectorAll('.input')

function value(){ 

for(let i =0;i< inputlar.length;i++){   
        massiv[i]=inputlar[i].value 
} 
 
massiv.sort() 
 
for(let i =0;i< massiv.length;i++){ 
    inputlar[i].value =  massiv[i] 
}
 sortButton.style.display='none'
 sortButtonz.style.display='block'
}
sortButton.addEventListener('click', value) 


function ss(){ 

for(let i =0;i< inputlar.length;i++){   
        massiv[i]=inputlar[i].value 
} 


massiv.sort((a,b) =>{
    if(a<b){
        return 1;

    } 
    if (a>b){
        return-1
    }
}

)
 
for(let i =0;i< massiv.length;i++){ 
    inputlar[i].value =  massiv[i] 
}
 sortButton.style.display='block'
 sortButtonz.style.display='none'
} 
sortButtonz.addEventListener('click', ss)  
}
 
buttonAdd.addEventListener('click', Dobavit) ;
 

// Когда курсор оказывается над кнопкой "buttonAdd" меняется стиль этой кнопки. 
function hover(){
    rightButtonAdd.style.color= '#9953F1';
    rightButtonAdd.style.boxShadow= 'inset 0 0 0 3px #9953F1';
    rightButtonAdd.style.border= '#fff 3px solid';
    rightButtonAdd.style.background= 'rgba(0,0,0,0)';
    leftButtonAdd.style.color= '#9953F1';
    leftButtonAdd.style.boxShadow= 'inset 0 0 0 3px #9953F1';
    leftButtonAdd.style.border= '#fff 3px solid';
    leftButtonAdd.style.background= 'rgba(0,0,0,0)' ;
    plus.style.transform= 'rotate(360deg)' 
}

buttonAdd.addEventListener('mouseover', hover) ;



// Когда курсор мыши выходит за пределы кнопки "buttonAdd" возвращается старая стиль этой кнопки. 
function outhover(){
    rightButtonAdd.style.color= '#FFFFFF';
    rightButtonAdd.style.boxShadow= 'none';
    rightButtonAdd.style.border= 'none';
    rightButtonAdd.style.background= '#833AE0';
    leftButtonAdd.style.color= '#FFFFFF';
    leftButtonAdd.style.boxShadow= 'none';
    leftButtonAdd.style.border= 'none';
    leftButtonAdd.style.background= '#9953F1' ; 
    plus.style.transform= 'none'
}

buttonAdd.addEventListener('mouseout', outhover) ;



// При нажатие "deleteButton", удаляется первая запись. ("deleteButton" это кнопка удаления первой записи которая  есть в начальном состоянии списка.)
function remove(){
    if(inputDivs.childElementCount>1){ inputDiv.remove()} ;
}

deleteButton.addEventListener('click',remove) ;




//Когда курсор оказывается над кнопкой "deleteButton", меняется её стиль. ("deleteButton" это кнопка удаления первой записи которая  есть в начальном состоянии списка.)
function hoverr(){
    deleteButton.style.background = '#833AE0' ;  
}

deleteButton.addEventListener('mouseover', hoverr);



//курсор мыши выходит за пределы кнопки "deleteButton", возвращается её  старая стиль. ("deleteButton" это кнопка удаления первой записи которая  есть в начальном состоянии списка.)
function outhoverr(){
    deleteButton.style.background = 'none' ;
    deleteButton.style.background = '#C4C4C4' ;
}

deleteButton.addEventListener('mouseout', outhoverr);