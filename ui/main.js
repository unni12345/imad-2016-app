
var submit=document.getElementById("commentSubmit");
var comments=[];
var i=0;

var realComment=String(comment);
submit.onclick= function() {
    //make a request to the server
   
     var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     console.log("user loged in");
     alert("logged in successfully");// Typical action to be performed when the document is ready:
    
    }else if (this.status==403){
        alert("username orpassword is incorrect");
    }else (this.status==500){
        alert("Something happened at the server");
        
    }
};

var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
console.log("username");
console.log("password");
request.setRequestHeader('Content-Type','application/jason');

xhttp.open("POST", "http://unni12345.imad.hasura-app.io/login", true);
xhttp.send(JSON.stringify({username:username,password:password}));
 
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
    
    
   
