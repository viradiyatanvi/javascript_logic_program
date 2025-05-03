let btn1=document.querySelector('#btn1');

let mode="light";

btn1.addEventListener("click",()=>{
    if(mode==="light"){
        mode="dark";
        document.querySelector("body").style.backgroundColor="black";
        document.querySelector("h1").style.color="white";
    }
    else{
        mode="light";
        document.querySelector("body").style.backgroundColor="white";
        document.querySelector("h1").style.color="black";
    } 
    console.log(mode);
})

let btn2=document.querySelector("#btn2");

btn2.ondblclick=()=>{
    console.log("double click");
}