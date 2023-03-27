const disply_form=document.getElementById("_form");
const address=document.getElementById("address");
//button
const addressAndEmail=document.getElementById("btn4con");
const massege=document.getElementById("send-massege");

massege.addEventListener("click", ()=>{
    disply_form.style.display="block";
    address.style.display="none"
})
addressAndEmail.addEventListener("click", ()=>{
    disply_form.style.display="none";
    address.style.display="flex"
})