
var submit=document.getElementById("submit");

submit.onclick= function() {
    //make a request to the server
   
     var request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     console.log("user loged in");
     alert("logged in successfully");// Typical action to be performed when the document is ready:
    
    }else if (this.status==403){
        alert("username or password is incorrect");
    }else if(this.status==500){
        alert("Something happened at the server");
    }
        
    
};

var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
console.log("username");
console.log("password");
request.setRequestHeader('Content-Type','application/jason');

request.open("POST", "http://unni12345.imad.hasura-app.io/login", true);
request.send(JSON.stringify({username:username,password:password}));
 
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
    
    
   
