let express=require("express");
let mongoose=require("mongoose");
let cors=require("cors");
let bodyParser=require("body-parser");

const employeeRoute = require("./routes/employeeroutes");
const salaryRoute=require("./routes/salaryroutes")
mongoose.connect("mongodb://127.0.0.1:27017/Emp")
.then((x)=>{
    console.log(`Connected to Mongo! Database name:"${x.connections[0].name}"`,);
})
.catch((err)=>{
    console.error("Error connecting to mongo",err.reason);
})
const app=express();
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended:true,
    }),
);
app.use(cors());
app.use("/employees",employeeRoute);
app.use("/salary",salaryRoute)


const port=4000;
app.listen(port,()=>{
    console.log("Connected to port"+ port);
})
