var comment=document.getElementById("comment").value;
var submit=document.getElementById("commentSubmit");
var comments=["Ok","wonderful","cool","good job"];
var i=0;
var list='';
submit.onclick= function() {
    //make a request to the server
    //capture a list andrender it as a list
    //From now is shit
    for(  i=0; i< 4;i++){
        list='<li>'+names[i]+'</li>';
        alert("something");
    }
    
    
   var ul=document.getElememtById("commentList");
   ul.innerHTML=list;
};