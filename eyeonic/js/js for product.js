const EyeGlassBtn=document.getElementById("eye_glass");
const SunGlassesBtn=document.getElementById("sun_glasses");
const ContectLanceBtn=document.getElementById("contect_lences");
const eye=document.getElementById("eye");
const sun=document.getElementById("sun");
const contect=document.getElementById("contect");



EyeGlassBtn.addEventListener('click' , ()=>{
    if (eye.style.display ==='block') {
        eye.style.display ='none';
        // console.log("run by sun gla");
    }
    else{
        eye.style.display = 'block';
        sun.style.display ='none' ;
        contect.style.display ='none' ;
    }
  
})
// for sun glasses 
SunGlassesBtn.addEventListener('click' , ()=>{
    if (sun.style.display ==='block') {
        sun.style.display ='none';
        // console.log("run by sun gla");
    }else{
        sun.style.display = 'block';
        eye.style.display ='none' ;
        contect.style.display ='none' ;
    }

})
// for contect lencesss
ContectLanceBtn.addEventListener('click' , ()=>{
    if (contect.style.display ==='block') {
        contect.style.display ='none' ;
        // console.log("run by sun gla");
    }else{
        contect.style.display = 'block';
        sun.style.display ='none' ;
        eye.style.display ='none' ;
    }
})

