var comment=document.getElementById("comment").value;
var submit=document.getElementById("commentSubmit");
var comments=["Ok","wonderful","cool","good job"];
var i=0;
var list=" ";
var m=document.getElementById("comment1");
submit.onclick= function() {
    //make a request to the server
    //capture a list andrender it as a list
    //From now is shit
    
      for(i;i<4;i++){
          m.innerHTML=comments[i];

          
      }
      

    };
    
    
   
