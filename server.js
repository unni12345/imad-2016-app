var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=require('pg').Pool;
var config={
    user:'unni12345',
    database:'unni12345',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
};
var pool=new Pool(config);
var app = express();
app.use(morgan('combined'));
var articleone={
    title:"Raj Krishnan V",
    content:`<h1 align='center'>I am Raj Krishnan V</h1>
<p>I amstudying electrical engineering, but i am interested in computer science. It's a fast miving field and thus you need to learn many things and that too very fast. Be a <del>beginner</del>
pro ....<br>
which i am of course.</p>`
};
var htmlMade=function(data){
    title=data.title;
    content=data.content;
    var htmlTemplate=`<html>
    <head>
    <title>
    ${title}
    </title>
    </head>
    <body background="http://designs.josephr.mobi/blog/img/blog-big-codes.jpg"  bgcolor='red'> 
    < font color='red'>
    ${content}
    <h2><a href="wwww.google.co.in">Visit the ultimate resource</a></h2>
    </font>
    </body>
    </html>`;
    return htmlTemplate;
};
app.get('/articles/:artcleName', function (req, res) {
 pool.query("select * from article where id='"+req.params.artcleName+"'",function(err,result){
     if(err){
         res.status(500).send(err.toString());
         
     }
     else{
         res.send(JSON.stringify(result.rows));
     }
 });
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'indexmain.html'));
});
app.get('/maddi', function (req, res) {
  res.sendFile(path.join(__dirname,'ui/madi.png'));
});
app.get('/kungfupanda.html',function(req,res){
    res.sendFile(path.join(__dirname,'css1.html'));
});
app.get('/sigin.html',function(req,res){
    res.sendFile(path.join(__dirname,'signin.html'));
});
app.get('/signup.html',function(req,res){
    res.sendFile(path.join(__dirname,'sigup.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/panda.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'hd-wallpaper-kung-fu-panda.jpg'));
});
app.get('/article-one', function (req, res) {
  res.sendFile(htmlMade(articleone));
});
app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname,'rajkv.html'));
});
var comments=[];
app.get('/submit-comment',function(req,res){// submit-comment?comment=ricksaw
    var comment=req.query.comment;
     
    comments.push(comment);
    res.send(JSON.stringify(comments));//get the name fromthe request
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
