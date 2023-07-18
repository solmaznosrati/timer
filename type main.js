const timers=document.querySelector(".timer");
const  testArea=document.querySelector(".testArea");
const originText=document.querySelector(".exampes p").innerHTML;
const textWright=document.querySelector(".text-wright");


var tims=[0,0,0,0];
var timerrunning=false;
var Interval;

function zeroo(times){
    if(times<=9){
        times="0"+times;
    }
   return times;
}

function runtimers(){

let currentTimer=zeroo(tims[0])+":"+zeroo(tims[1])+":"+zeroo(tims[2]);

timers.innerHTML=currentTimer;

tims[3]++;
tims[0]=Math.floor((tims[3]/100)/60);
tims[1]=Math.floor((tims[3]/100)-(tims[0]*60));
tims[2]=Math.floor((tims[3])-(tims[1]*100)-(tims[0]*6000));

}

function start(){
var a=testArea.value.length;
if(a==0 && !timerrunning){
    timerrunning=true;
Interval=setInterval(runtimers,10);
}}
function spellchck(){
 let textEnterd=testArea.value;
 let originTextMch=originText.substring(0,textEnterd.length);

 if(textEnterd==originText){
    textWright.style.bordercolor="green";
    clearInterval(Interval);
 }
 else{
    if(textEnterd==originTextMch){
        textWright.style.bordercolor="yellow";
    }
    else{
        textWright.style.bordercolor="red";
    }
 }
}

testArea.addEventListener('keypress',start);
testArea.addEventListener('keyup',spellchck);

