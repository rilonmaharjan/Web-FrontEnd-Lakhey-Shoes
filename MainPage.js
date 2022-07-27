red=()=>{
    let a=document.getElementById("vcolor");
    let b=a.setAttribute("src","vansred.jpg");
    console.log(b);
}


blue=()=>{
    let a=document.getElementById("vcolor");
    let b=a.setAttribute("src","vansblue.jpg");
    console.log(b);
}

yellow=()=>{
    let a =document.getElementById("vcolor");
    let b=a.setAttribute("src","vansyellow.jpg");
    console.log(b);
}

green=()=>{
    let a =document.getElementById("vcolor");
    let b=a.setAttribute("src","vansgreen.jpg");
    console.log(b);
}

allc=()=>{
    let a =document.getElementById("vcolor");
    let b =a.getAttribute("src");

    if(b=="vansgreen.jpg"){
        red();
    }
    else if(b=="vansred.jpg"){
        blue();
    }
    else if(b=="vansblue.jpg"){
        yellow();
    }
    else{
        green();
    }
}

let change=Light=()=>{

    let pic=document.getElementById("adidas");
    pic.setAttribute("src","whiteadidas.jpg");



    let a=document.getElementById("Header-Top");
    a.style.backgroundColor="#D3C7F8 ";
    let a1=document.getElementById("Navbar");
    a1.style.backgroundColor="#D3C7F8 ";
    let a2=document.getElementById("Banner");
    a2.style.backgroundColor="#DFD7F7 ";
    let a3=document.getElementById("JordanShoes");
    a3.style.backgroundColor="#DFD7F7 ";
    let a4=document.getElementById("AfterJordan");
    a4.style.backgroundColor="#DFD7F7 ";
    let a5=document.getElementById("AdidasShoes");
    a5.style.backgroundColor="#DFD7F7 ";
    let a6=document.getElementById("AfterAdidas");
    a6.style.backgroundColor="#DFD7F7 ";
    let a7=document.getElementById("VansShoes");
    a7.style.backgroundColor="#DFD7F7 ";
    let a8=document.getElementById("AfterVans");
    a8.style.backgroundColor="#DFD7F7 ";
    let a9=document.getElementById("FooterTop");
    a9.style.backgroundColor="#DFD7F7 ";
    let b=document.getElementById("Footer");
    b.style.backgroundColor="#D3C7F8 ";

    let b1=document.getElementsByClassName("nav-link");
    for(let all of b1){
        all.style.color="#444444 ";
    }
    let b3=document.getElementsByClassName("btn");
    for(let all of b3){
        all.style.color="white";
        all.style.backgroundColor="#181818 ";
        all.style.borderRadius="2px solid black";
    }

    let b9 =document.getElementById("btnnn");
    b9.style.backgroundColor="black";
    b9.style.color="white";

    let b4=document.getElementsByClassName("he1");
    for(let all of b4){
        all.style.color="#444444 ";
    }

    let b8=document.getElementsByClassName("he2");
    for(let all of b8){
        all.style.color="black ";
    }

    let b5=document.getElementsByClassName("box");
    for(let all of b5){
        all.style.backgroundColor="#A3B5EB";
    }

        let b6=document.getElementsByClassName("box1");
    for(let all of b6){
        all.style.backgroundColor="#A3B5EB";
        all.style.border="0px";
    }

        let b7=document.getElementsByClassName("box2");
    for(let all of b7){
        all.style.backgroundColor="#A3B5EB";
        all.style.border="0px";

    }

    let b2=document.getElementById("num");
    b2.style.color="#444444 ";
    }
    


let changeagain=Dark=()=>{


    let pic=document.getElementById("adidas");
    pic.setAttribute("src","alogo.jpg");


    let a=document.getElementById("Header-Top");
    a.style.backgroundColor="black";
    let a1=document.getElementById("Navbar");
    a1.style.backgroundColor="black";
    let a2=document.getElementById("Banner");
    a2.style.backgroundColor="black";
    let a3=document.getElementById("JordanShoes");
    a3.style.backgroundColor="black";
    let a4=document.getElementById("AfterJordan");
    a4.style.backgroundColor="black";
    let a5=document.getElementById("AdidasShoes");
    a5.style.backgroundColor="black";
    let a6=document.getElementById("AfterAdidas");
    a6.style.backgroundColor="black";
    let a7=document.getElementById("VansShoes");
    a7.style.backgroundColor="black";
    let a8=document.getElementById("AfterVans");
    a8.style.backgroundColor="black";
    let a9=document.getElementById("FooterTop");
    a9.style.backgroundColor="black";
    let b=document.getElementById("Footer");
    b.style.backgroundColor="black";

    let b1=document.getElementsByClassName("nav-link");
    for(let all of b1){
        all.style.color="rgb(208, 212, 208)";
    }

    let b2=document.getElementById("num");
    b2.style.color="rgb(229, 228, 226)";

    let b3=document.getElementsByClassName("btn");
    for(let all of b3){
        all.style.color="white";
        all.style.backgroundColor="green";
        all.style.borderRadius="2px solid green";
    }
    let b9 =document.getElementById("btnnn");
    b9.style.backgroundColor="white";
    b9.style.color="black";

    let b4=document.getElementsByClassName("he1");
    for(let all of b4){
        all.style.color="rgb(229, 228, 226)";
    }

    let b8=document.getElementsByClassName("he2");
    for(let all of b8){
        all.style.color="rgb(229, 228, 226)";
    }

        let b5=document.getElementsByClassName("box");
    for(let all of b5){
        all.style.backgroundColor="#212527";
    }

        let b6=document.getElementsByClassName("box1");
    for(let all of b6){
        all.style.backgroundColor="#212527";
    }

        let b7=document.getElementsByClassName("box2");
    for(let all of b7){
        all.style.backgroundColor="#212527";
    }
}


Bothfunction=()=>{
    let a=document.getElementById("adidas");
    let n=a.getAttribute("src");

    let c=document.getElementById("bothid");

    if(n=="whiteadidas.jpg"){
        Dark();
        c.innerHTML="Light Mode";
    }
    else{
        Light();
        c.innerHTML="Dark Mode";
    }
}