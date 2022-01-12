function clock (){

    var hour=document.getElementById("hours");
    var minutes=document.getElementById("min");
    var seconds=document.getElementById("secs");
    var am=document.getElementById("am-pm");

    var time = new Date();
    var a=time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
    var b=time.getMinutes() ;
    var c=time.getSeconds() ;
    var d=time.getHours()>= 12 ? "PM" : "AM";
    
    hour.innerHTML=a;
    minutes.innerHTML=b;
    seconds.innerHTML=c;
    am.innerHTML=d;

}

setInterval(clock,1000);


function setTime() {

    var i=document.getElementById("wakeUpTimeSelector").value;
    var j=document.getElementById("lunchTimeSelector").value;
    var k=document.getElementById("napTimeSelector").value;
    var hourr =new Date().getHours();
    
    if(Number(i) == hourr){

        document.getElementById('img-container').setAttribute("src","./assets./wakeup_image.png");
        document.getElementById('text-container').innerHTML="HEY WAKE UP!!";
        document.getElementById('block').innerHTML='Good morning ';
        
        // Number(j)=0;
        // Number(k)=0;
    }

     if(Number(j) == hourr){

        document.getElementById('img-container').setAttribute("src","./assets./lunch_image.png");
        document.getElementById('text-container').innerHTML="Lets have some lunch!!";
        document.getElementById('block').innerHTML='Good Afternoon ' ;
        // Number(i)=0;
        // Number(k)=0;
    }

     if(Number(k) == hourr) {
        document.getElementById('img-container').setAttribute("src","./assets./goodnight_image.png");
        document.getElementById('text-container').innerHTML="Have a Good Night!!";
        document.getElementById('block').innerHTML='Good night ' ;
        // Number(j)=0;
        // Number(i)=0;
    }

     
}