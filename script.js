const star1 = document.getElementById("s1");
const star2 = document.getElementById("s2");
const star3 = document.getElementById("s3");
const star4 = document.getElementById("s4");
const star5 = document.getElementById("s5");
const press = document.getElementById("press");

const res = document.getElementById("re");
let val = 0;


press.textContent="";
const fun1 = ()=>{
    star1.src="stary.svg";
    
    val = 1;
    press.textContent="You Gave "+val+" Star Rating";
}

const fun2 = ()=>{
    star1.src="stary.svg";

    star2.src="stary.svg";
    val = 2;
    
    press.textContent="You Gave "+val+" Star Rating";
}

const fun3 = ()=>{
    star1.src="stary.svg";
    star2.src="stary.svg";

    star3.src="stary.svg";
    val = 3;
    
    press.textContent="You Gave "+val+" Star Rating";
}

const fun4 = ()=>{
    star1.src="stary.svg";
    star2.src="stary.svg";
    star3.src="stary.svg";

    star4.src="stary.svg";
    val = 4;
    
    press.textContent="You Gave "+val+" Star Rating";
}

const fun5 = ()=>{
    star1.src="stary.svg";
    star2.src="stary.svg";
    star3.src="stary.svg";
    star4.src="stary.svg";

    star5.src="stary.svg";
    val = 5;
    
    press.textContent="You Gave "+val+" Star Rating";
}


star1.addEventListener("click",fun1);

star2.addEventListener("click",fun2);
star3.addEventListener("click",fun3);
star4.addEventListener("click",fun4);
star5.addEventListener("click",fun5);

setTimeout(()=>{
    press.textContent="You Gave "+val+" Star Rating";
},3000);

const funre = ()=>{

    star1.src="star1.svg";
    star2.src="star1.svg";
    star3.src="star1.svg";
    star4.src="star1.svg";

    star5.src="star1.svg";
    press.textContent="Rating Reset";
}

res.addEventListener("click",funre);

