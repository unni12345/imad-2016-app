
var submit=document.getElementById("commentSubmit");
var comments=["Ok","wonderful","cool","good job"];
var i=0;

var realComment=String(comment);
submit.onclick= function() {
    //make a request to the server
        //capture a list andrender it as a list
    //From now is shit

        var request= new XMLHttpRequest();
        
        request.onreadystatechange=function(){
            
       
        if(request.readyState=== XMLHttpRequest.DONE){
            //CAPTURWE THE NAMES
            if(request.STATUS===200){
                alert("keri");
                var comments=comment.responseText;
                comments=JSON.parse(comments);
                var list= '';
                for(i=0;i<comments.length;i++){
                    list=list+'<li>'+comments[i]+'</li>';
                }
                var m=document.getElementById("commentList");
                m.innerHTML=list;
               
                
            }
        }
          
        };
  
           
          
    var comment=document.getElementById("comment").value;
      alert(list);  
     request.open('GET','http://unni12345.imad.hasura-app.io/submit-comment?comment='+comment,true);
     request.send(null);
      
    };
    
    
   
