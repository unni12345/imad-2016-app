var comment=document.getElementById("comment").value;
var submit=document.getElementById("commentSubmit");
var comments=["Ok","wonderful","cool","good job"];
var i=0;
var list = '';// the space is really important here , check for it always
var m=document.getElementById("commentList");
var n=document.getElementById("comment2");
var o=document.getElementById("comment3");
submit.onclick= function() {
    //make a request to the server
    //capture a list andrender it as a list
    //From now is shit
    
          for(i=0;i<4;i++){
              list='<li>'+comments[i]+'</li>';
          
              
          }
           m.innerHTML=list;
          

        
      
      

    };
    
    
   
