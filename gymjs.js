var a = document.querySelectorAll(".header .container .navbar ul li"); 

a[0].onclick = function (){
    
    "use strict";
    var y =scrollY,
        animation; 
    if( y > 0) {
        
        animation= setInterval(function(){
           
          y -=10; 
            scrollTo(0,y);
            if(y<=0){
                clearInterval(animation);
            }
        },1)
    }
}

a[1].onclick = function () {
    
    "use strict";
    var y = window.scrollY,
        
        animation; 
    
    if ( y < 1703.75) {
        
        animation = setInterval(function (){
            
            if(y >=1703.75) {
                clearInterval(animation);
            }
            
            y +=10; 
            scrollTo(0,y);
            
        },1)
    }
    else if (y >1703.75) {
         animation = setInterval(function (){
             if (y<=1703.75) {
                 clearInterval(animation);
             }
            
            y -=10; 
            scrollTo(0,y);
            
        },1)
        
        
        
    }
    window.scrollTo(0,1703.75);
        
}




/* two */

a[2].onclick = function () {
    
    "use strict";
    var y = window.scrollY,
        
        animation; 
    
    if ( y < 2572.5) {
        
        animation = setInterval(function (){
            
            if(y >=2572.5) {
                clearInterval(animation);
            }
            
            y +=10; 
            scrollTo(0,y);
            
        },1)
    }
    else if (y > 2572.5) {
         animation = setInterval(function (){
             if (y<=2572.5) {
                 clearInterval(animation);
             }
            
            y -=10; 
            scrollTo(0,y);
            
        },1)
        
        
        
    }
    window.scrollTo(0,2572.5);
        
}



// three 
a[3].onclick = function () {
    
    "use strict";
    var y = window.scrollY,
        
        animation; 
    
    if ( y < 3402.5) {
        
        animation = setInterval(function (){
            
            if(y >=3402.5) {
                clearInterval(animation);
            }
            
            y +=10; 
            scrollTo(0,y);
            
        },1)
    }
    else if (y > 3402.5) {
         animation = setInterval(function (){
             if (y<=3402.5) {
                 clearInterval(animation);
             }
            
            y -=10; 
            scrollTo(0,y);
            
        },1)
        
        
        
    }
    window.scrollTo(0,3402.5);
        
}


///////////////////////////////////

var button = document.querySelector(".container3 .right button"),
    form = document.querySelector(".container7 .right"),
    close = document.getElementById("close");


button.onclick = function() {
    
    "use strict";
    
    form.classList.add("memeber");
    close.style.display = "block";
}
close.onclick = function () {
    "use strict"; 
    form.classList.remove("memeber");
}



window.onscroll = function() {
    "use strict"; 
    if(window.pageYOffset >= 1598.75 && window.pageYOffset <=2173.75){
        a[1].style.color = "red"; 
        console.log("reda")
    }
    else {
                a[1].style.color = "#EEE"; 

    }
     if (window.pageYOffset >= 2308.75 &&window.pageYOffset <=3120){
        a[2].style.color = "red"; }
       else {
                a[2].style.color = "#EEE"; 

    }
    
     if(window.pageYOffset >= 3221.25 &&window.pageYOffset <=3626.25){
        a[3].style.color = "red"; 
    }
    else {
                        a[3].style.color = "#EEE"; 

    }       
   
}



var home = document.querySelectorAll(".custom ul li"); 
console.log(home)
home[3].onclick = function(){
    "use strict"; 
    window.scrollTo(0,0);
}



