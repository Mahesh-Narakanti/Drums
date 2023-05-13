for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",sound);
}
function sound(){
    var b=this.innerHTML;
sound1(b);
 banim(b);
}
var na="";
document.addEventListener("keypress",function(event){
    na=na+event.key;
    if(na.includes("kishor"))
    {
    var a=new Audio("sounds/fuck you kishore.mp3");
    na="";
    }
    else if(na.includes("krishna"))
    {
    var a=new Audio("sounds/fuck you krishna.mp3");
    na="";
    }
    else if(na.includes("nikith"))
    {
    var a=new Audio("sounds/fuck you nikith.mp3");
    na="";
    }
    else if(na.includes("praveen"))
    {
    var a=new Audio("sounds/fuck you praveen.mp3");
    na="";
    }
    else if(na.includes("rohith"))
    {
    var a=new Audio("sounds/fuck you rohith.mp3");
    na="";
    }
    else if(na.includes("shyam"))
    {
    var a=new Audio("sounds/fuck you shyam.mp3");
    na="";
    }
    else if(na.includes("simhadri"))
    {
    var a=new Audio("sounds/fuck you simhadri.mp3");
    na="";
    }
    else if(na.includes("vinay"))
    {
    var a=new Audio("sounds/fuck you vinay.mp3");
    na="";
    }
    else if(na.includes("mahesh"))
    {
        var a=new Audio("sounds/mahesh is best.mp3");
        na="";
    }
    else
    sound1(event.key);
    banim(event.key);
    a.play();
});
function sound1(k){
    var aud;
    switch (k) {
        case 'b':aud=new Audio("sounds/tom-1.mp3");break;
        case 'c':aud=new Audio("sounds/tom-2.mp3");break;
        case 'e':aud=new Audio("sounds/tom-3.mp3");break;
        case 'f':aud=new Audio("sounds/tom-4.mp3");break;
        case 'g':aud=new Audio("sounds/snare.mp3");break;
        case 'h':aud=new Audio("sounds/crash.mp3");break;
        case 'i':aud=new Audio("sounds/kick-bass.mp3");break;
        case 'm':aud=new Audio("sounds/tom-2.mp3");break;
        case 'n':aud=new Audio("sounds/tom-3.mp3");break;
        case 'o':aud=new Audio("sounds/tom-4.mp3");break;
        case 'p':aud=new Audio("sounds/snare.mp3");break;
        case 'q':aud=new Audio("sounds/crash.mp3");break;
        case 'r':aud=new Audio("sounds/kick-bass.mp3");break;
        case 't':aud=new Audio("sounds/tom-1.mp3");break;
        case 'u':aud=new Audio("sounds/tom-2.mp3");break;
        case 'v':aud=new Audio("sounds/tom-3.mp3");break;
        case 'x':aud=new Audio("sounds/tom-4.mp3");break;
        case 'y':aud=new Audio("sounds/snare.mp3");break;
        case 'z':aud=new Audio("sounds/crash.mp3");break;
        case 'w':aud=new Audio("sounds/tom-1.mp3");break;
        case 'a':aud=new Audio("sounds/tom-2.mp3");break;
        case 's':aud=new Audio("sounds/tom-3.mp3");break;
        case 'd':aud=new Audio("sounds/tom-4.mp3");break;
        case 'j':aud=new Audio("sounds/snare.mp3");break;
        case 'k':aud=new Audio("sounds/crash.mp3");break;
        case 'l':aud=new Audio("sounds/kick-bass.mp3");break;
        default:aud=new Audio("sounds/tom-1.mp3");break;
    }
    aud.play();
}
function banim(b)
{
    var n;
    if(b=='w' || b=='a' || b=='s' || b=='d' || b=='j' || b=='k' || b=='l')
    n=document.querySelector("."+b);
    else if(b=='b' ||b=='t')
    n=document.querySelector(".w");
    else if(b=='c' || b=='m' || b=='u')
    n=document.querySelector(".a");
    else if(b=='e' || b=='n' || b=='v')
    n=document.querySelector(".s");
    else if(b=='f' || b=='o' || b=='x')
    n=document.querySelector(".d");
    else if(b=='g' || b=='p' || b=='y')
    n=document.querySelector(".j");
    else if(b=='h' || b=='q' || b=='z')
    n=document.querySelector(".k");
    else if(b=='i' || b=='r')
    n=document.querySelector(".l");
    n.classList.add("pressed");
    setTimeout(function(){
        n.classList.remove("pressed");
    },100);
}