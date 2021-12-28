function clock (){


    var hour=document.getElementById("hours");
    var minutes=document.getElementById("min");
    var seconds=document.getElementById("secs");
    var am=document.getElementById("am-pm");

    var time = new Date();
    var a=time.getHours();
    var b=time.getMinutes();
    var c=time.getSeconds();
    

    hour.innerHTML=a;
    minutes.innerHTML=b;
    seconds.innerHTML=c;





    
}

setInterval(clock,1000);

function Makediv(){

    var container=document.createElement('div');
    container.className="grid-item";
    container.id="block";

    // document.getElementById("grid-container1").appendChild(container);

    var invalue1=document.getElementById("wakeUpTimeSelector");
    var value=invalue1.options[invalue1.selectedIndex].text;
    document.getElementById("block").innerHTML="wake up time is "+value;


    var invalue2=document.getElementById("lunchTimeSelector");
    var value=invalue2.options[invalue2.selectedIndex].text;
    document.getElementById("block").innerHTML="Its afternoon time "+value;


    var invalue3=document.getElementById("napTimeSelector");
    var value=invalue3.options[invalue3.selectedIndex].text;
    document.getElementById("block").innerHTML="nap time is "+value;




}

function setTime() {

    var i=document.getElementById("wakeUpTimeSelector").value;
    var j=document.getElementById("lunchTimeSelector").value;
    var k=document.getElementById("napTimeSelector").value;
    var hourr =new Date().getHours();
    
    if(i == hourr){

        document.getElementById('img-container').setAttribute("src","./assets./wakeup_image.png");
        document.getElementById('text-container').innerHTML="HEY WAKE UP!!";
    }

     if(j == hourr){

        document.getElementById('img-container').style.backgroundImage="url(./assets/lunch_image.png)";
        document.getElementById('text-container').innerHTML="Lets have some lunch!!";
    }

     if(k == hourr) {
        document.getElementById('img-container').style.backgroundImage="url(./assets/goodnight_image.png)";
        document.getElementById('text-container').innerHTML="Good Night!!";
    }

     
}