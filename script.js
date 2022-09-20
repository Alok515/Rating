const star1 = document.getElementById("s1");
const star2 = document.getElementById("s2");
const star3 = document.getElementById("s3");
const star4 = document.getElementById("s4");
const star5 = document.getElementById("s5");
const press = document.getElementById("press");

const bt1 = document.getElementById("b1");
const bt2 = document.getElementById("b2");
const bt3 = document.getElementById("b3");
const bt4 = document.getElementById("b4");
const bt5 = document.getElementById("b5");
const res = document.getElementById("re");
let val = 0;

const cl = document.querySelectorAll("cl");
press.textContent="";
const fun1 = ()=>{
    star1.src="stary.svg";
    
    val = 1;
    press.textContent="You Gave "+val+" Star Rating";
    bt3.disabled=true;
    bt2.disabled=true;
    bt4.disabled=true;
    bt5.disabled=true;
}

const fun2 = ()=>{
    star1.src="stary.svg";
    star2.src="stary.svg";
    
    val = 2;
    
    press.textContent="You Gave "+val+" Star Rating";
    bt1.disabled=true;
    bt3.disabled=true;
    bt4.disabled=true;
    bt5.disabled=true;
}

const fun3 = ()=>{
    star1.src="stary.svg";
    star2.src="stary.svg";

    star3.src="stary.svg";
    val = 3;
    
    press.textContent="You Gave "+val+" Star Rating";
    bt1.disabled=true;
    bt2.disabled=true;
    bt4.disabled=true;
    bt5.disabled=true;
}

const fun4 = ()=>{
    star1.src="stary.svg";
    star2.src="stary.svg";
    star3.src="stary.svg";

    star4.src="stary.svg";
    
    val = 4;
    
    press.textContent="You Gave "+val+" Star Rating";
    bt1.disabled=true;
    bt2.disabled=true;
    bt3.disabled=true;
    bt5.disabled=true;
}

const fun5 = ()=>{
    star1.src="stary.svg";
    star2.src="stary.svg";
    star3.src="stary.svg";
    star4.src="stary.svg";

    star5.src="stary.svg";
    
    
    val = 5;
    
    press.textContent="You Gave "+val+" Star Rating";
    bt1.disabled=true;
    bt2.disabled=true;
    bt3.disabled=true;
    bt4.disabled=true;
}


bt1.addEventListener("click",fun1);

bt2.addEventListener("click",fun2);
bt3.addEventListener("click",fun3);
bt4.addEventListener("click",fun4);
bt5.addEventListener("click",fun5);

setTimeout(()=>{
    press.textContent="You Gave "+val+" Star Rating";
},3000);

const funre = ()=>{

    star1.src="star1.svg";
    star2.src="star1.svg";
    star3.src="star1.svg";
    star4.src="star1.svg";
    star5.src="star1.svg";
    bt1.disabled=false;
    bt2.disabled=false;
    bt3.disabled=false;
    bt4.disabled=false;
    bt5.disabled=false;
    
    val=0;
    press.textContent="Rating Reset";
}

res.addEventListener("click",funre);

