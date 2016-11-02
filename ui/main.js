var comment=document.getElementById("comment").value;
var submit=document.getElementById("commentSubmit");
var comments=["Ok","wonderful","cool","good job"];
var i=0;
var list=" ";
var m=document.getElementById("commentList");
var n=document.getElementById("comment2");
var o=document.getElementById("comment3");
submit.onclick= function() {
    //make a request to the server
    //capture a list andrender it as a list
    //From now is shit
    
          for(i=0;i<comments.length;i++){
              m.innerHTML='<li>'+comments[i]+'</li>';
          }

          
      
      

    };
    
    
   
