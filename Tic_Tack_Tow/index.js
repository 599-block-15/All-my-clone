const random_number_1=Math.floor(Math.random()*9+1);
const random_number_2=Math.floor(Math.random()*9+1);
const random_number_3=Math.floor(Math.random()*9+1);
const random_number_4=Math.floor(Math.random()*9+1);
const random_number_5=Math.floor(Math.random()*9+1);
const random_number_6=Math.floor(Math.random()*9+1);
const random_number_7=Math.floor(Math.random()*9+1);
const random_number_8=Math.floor(Math.random()*9+1);
const random_number_9=Math.floor(Math.random()*9+1);

function check() {
    
    if (random_number_1==2) {
        cell_1.innerHTML=("O");
        cell_1.classList.add("font");
       
       
    }
}
    


const cell_1=document.getElementById('box-1');
const cell_2=document.getElementById('box-2');
const cell_3=document.getElementById('box-3');
const cell_4=document.getElementById('box-4');
const cell_5=document.getElementById('box-5');
const cell_6=document.getElementById('box-6');
const cell_7=document.getElementById('box-7');
const cell_8=document.getElementById('box-8');
const cell_9=document.getElementById('box-9');

cell_1.addEventListener("click",myfunction_1);
cell_2.addEventListener("click",myfunction_2);
cell_3.addEventListener("click",myfunction_3);
cell_4.addEventListener("click",myfunction_4);
cell_5.addEventListener("click",myfunction_5);
cell_6.addEventListener("click",myfunction_6);
cell_7.addEventListener("click",myfunction_7);
cell_8.addEventListener("click",myfunction_8);
cell_9.addEventListener("click",myfunction_9);



function myfunction_1() {
    cell_1.innerHTML=("X");
    cell_1.classList.add("font");
}
function myfunction_2() {
    cell_2.innerHTML=("X");
    cell_2.classList.add("font");
}
function myfunction_3() {
    cell_3.innerHTML=("X");
    cell_3.classList.add("font");
    
}
function myfunction_4() {
    cell_4.innerHTML=("X");
    cell_4.classList.add("font");
    
}

function myfunction_5() {
    cell_5.innerHTML=("X");
    cell_5.classList.add("font");
    
}

function myfunction_6() {
    cell_6.innerHTML=("X");  
    cell_6.classList.add("font");
    
}

function myfunction_7() {
    cell_7.innerHTML=("X");
    cell_7.classList.add("font");
    
}

function myfunction_8() {
    cell_8.innerHTML=("X");
    cell_8.classList.add("font");
    
}

function myfunction_9() {
    cell_9.innerHTML=("X");
    cell_9.classList.add("font");
    
}