let random_number=Math.floor(Math.random()*2+1);
document.getElementById("computer_output_in_pc").innerHTML=random_number;
// console.log(random_number);


let out="OUT";
let not_out="NOT OUT"


let number_by_you=prompt("enter your number");



if (random_number==number_by_you) {
    console.log("you will 0ut");
    document.getElementById("score").innerHTML=out;
}
else{
    document.getElementById("score").innerHTML=not_out;
}


