const express =require("express");
const path =require("path");
const hbs =require("hbs");
const User = require("../src/models/usermsg");

require("../src/db/conn")
const port =process.env.PORT ||3000;
const app =express();

const staticpath = path.join(__dirname,"../public");
const viewspath = path.join(__dirname,"../templates/views");
const partialspath = path.join(__dirname,"../templates/partials");


app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));
app.use(express.static(staticpath));
app.use(express.urlencoded({extended:false}));


app.set("view engine","hbs");
app.set("views",viewspath);

hbs.registerPartials(partialspath);

app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/home",(req,res)=>{
    res.render("index");
});
app.get("/about",(req,res)=>{
    res.render("about");
});
app.get("/gallery",(req,res)=>{
    res.render("gallery");
});
app.get("/service",(req,res)=>{
    res.render("service");
});
app.post("/contact",async(req,res)=>{
    try{
        // res.send(req.body);
        const UserData = new User(req.body);
         await UserData.save();
         res.status(201).render("index")
    }catch(error){
        res.status(500).send(error);
    }

})

app.listen(port,()=>{
console.log(`server is running on the port number${port}`);
});