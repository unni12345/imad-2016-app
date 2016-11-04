
var submit=document.getElementById("commentSubmit");
var comments=[];
var i=0;

var realComment=String(comment);
submit.onclick= function() {
    //make a request to the server
        //capture a list andrender it as a list
    //From now is shit
     m=document.getElementById("commentList");
     var comment=document.getElementById("comment").value;
     comments.push(comment);
     m.innerHTML='<li>'+comment+'</li>';
     alert(comment);
     var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
    
    }
};
xhttp.open("GET", "http://unni12345.imad.hasura-app.io/submit-comment?comment="+comment, true);
xhttp.send();
 
    };
    /*       var request= new XMLHttpRequest();
        
        request.onreadystatechange=function(){
            
        alert("thodangi");
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
      */
    
    
   
