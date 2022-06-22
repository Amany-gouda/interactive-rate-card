const rateCircle = document.getElementsByClassName("rate");
const btn = document.getElementsByClassName("btn");
const thanq = document.getElementsByClassName("thank-u");
const resultP = document.getElementsByClassName("resultP");
let activeCircle = document.getElementsByClassName("active");

for(let i=0; i<rateCircle.length; i++){
    rateCircle[i].addEventListener("click",()=>{
        for(let j=0; j<rateCircle.length; j++){
            rateCircle[j].classList.remove("active");
        };
        rateCircle[i].classList.add("active");
        btn[0].addEventListener("click",()=>{
            thanq[0].style.display="block";
            console.log(i);
            resultP[0].innerHTML=`You selected ${i+1} out of 5` 
        });
                
    })
}

