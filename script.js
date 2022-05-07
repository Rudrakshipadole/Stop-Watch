var h=0;
var m=0;
var s=0;
var lap=0;




start=()=>{
  timer();
}

function timer (){
  s=parseInt(s);
  m=parseInt(m);
  h=parseInt(h);
  s=s+1;
  if(s==60){m=m+1;s=0}
  if(m==60){h=h+1;s=0;m=0}
  if(s<10 || s==0){
    s="0"+s;
  }

  if(m<10 || m==0){
    m="0"+m;
  }
  if(h<10 || h==0){
    h="0"+h;
  }
  
document.getElementById("s").innerText=s;
document.getElementById("m").innerText=m;
document.getElementById("h").innerText=h;



 to= setTimeout("timer()",1000)
}
reset=()=>{
  stop();
  s=0;m=0;h=0
  document.getElementById("s").innerText="00";
  document.getElementById("m").innerText="00";
  document.getElementById("h").innerText="00";
  document.getElementById("lapContainer").innerHTML=null
}
stop=()=>{

  clearTimeout(to);
  
}
setLap=()=>{
  lap++;
  document.getElementById("lapContainer").innerHTML+=` <h1 class="lap"> LAP ${lap}     ${h}:${s}:${m} </h1> <br> `;

}