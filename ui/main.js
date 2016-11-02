var comment=document.getElementById("comment").value;
var submit=document.getElementById("commentSubmit").value;
var names=["raj","arnab","allan","saurabh"];
var i=0;
var list='';
submit.onclick= function() {
    //make a request to the server
    //capture a list andrender it as a list
    //From now is shit
    for(  i=0; i< names.length();i=i+1){
        list='<li>'+names[i]+'</li>';
        
    }
    
    var ul=document.getElememtById("commentList");
    ul.innerHTML=list;
};