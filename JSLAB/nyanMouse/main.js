let wordH1 = document.getElementsByTagName("h1")[0];
let para = document.getElementsByTagName("p")[0];
let divv = document.getElementsByTagName("div")[0];
let wordH2 = document.getElementsByTagName("h2")[0];
let prevX
let prevY
//moouseIn for mouseIn
function mouseIn(){
    wordH1.innerHTML = "YOU'RE IN!"
}
//mouseOut for mouseOut
function mouseOut(){
    wordH1.innerHTML = "YOU'RE OUT!"
    para.innerHTML = ""
    wordH2.innerHTML = " "
}
//mouseHver for mouse hovering
function mouseHver(e){//e for event
    // debugger;
    console.log(e.clientX + "," + e.clientY);
    para.innerHTML = "hanging around huh? You're at "+ e.clientX + "," + e.clientY+".";
}
function direction(e){
    wordH2.innerHTML = " "

    if(e.clientX > prevX) {wordH2.innerHTML += "moving right";}
    if(e.clientX < prevX) {wordH2.innerHTML += "moving left";}
    if(e.clientY > prevY) {wordH2.innerHTML += "<br>moving down"}
    if(e.clientY < prevY) {wordH2.innerHTML += "<br>moving up"}
    prevX= e.clientX;
    prevY=e.clientY;
}
divv.addEventListener("mouseover", mouseIn);
divv.addEventListener("mouseout",mouseOut);
divv.addEventListener("mousemove",mouseHver);
divv.addEventListener("mousemove",direction);