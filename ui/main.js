var comment=document.getElementById("comment").value;
var submit=document.getElementById("commentSubmit");
var comments=["Ok","wonderful","cool","good job"];
var i=0;
var list = '';// the space is really important here , check for it always
var m=document.getElementById("commentList");
var realComment=String(comment);
submit.onclick= function() {
    //make a request to the server
        //capture a list andrender it as a list
    //From now is shit

          for(i=0;i<4;i++){
              list= list +'<li>'+comment+'</li>';
          
              
          }
           m.innerHTML=list;
          

        
      
      

    };
    
    
   
