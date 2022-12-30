const headTwo=document.getElementById("head-2");
const btn=document.getElementById('btn');
// const hone=document.getElementByTagName("h1[0]");
// const body=document.getElementByTagName("body").firstElementChild.innerHTML=text


    btn.addEventListener("click",function1);
        function function1(){
            headTwo.innerHTML="MERN Stack"
            headTwo.style.color="red"
            // const body=document.getElementByTagName("body").firstElementChild.innerHTML=text
        }
// hone.document.


// Q  3

function clock(){
    let date=new Date();
    let hour=date.getHours();
    let minute=date.getMinutes();
    let seconds=date.getSeconds();

    document.getElementById("HH").innerHTML=hour + ":";
    document.getElementById("MM").innerHTML=minute +":"
    document.getElementById("SS").innerHTML=seconds +":"
}
setInterval(clock,1000)



// Q  4

const myheadTw=document.querySelector("#myhead-2");
const mybtn=document.querySelector("#my-btn");

mybtn.addEventListener("click",fun4)
function fun4(){
    myheadTw.innerHTML="Elevation accademy"
    myheadTw.style.color="glod"
}




// Q 5

const headThree=document.querySelector("#head-3");
const button=document.querySelector("#button");

button.addEventListener("click",fun5)
function fun5(){
    headThree.style.visibility="hidden"
}


    
