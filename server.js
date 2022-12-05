const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
let bodyParser=require('body-parser');
  
const multer = require('multer')
const app = express();
const port = 2701;

app.use(cors());
app.set('view engine', 'ejs');
app.use(express.static('uploads'));

const upload = multer({ dest: 'public/images/' })

app.post('/profile', upload.single('cvfile'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    console.log(req.file)
    res.send("ok")
})
  

const uri = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.1';
mongoose.connect(uri, {
    useNewUrlParser: true,
});

const connection = mongoose.connection;

try{
connection.once('open', () => {
    console.log("MongoDB connection established sucessfully");
})} catch(e){
    console.log(e)
}


app.use(bodyParser.json())

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));


const careersRouter = require('./routes/careers.js')
app.use('/careers', careersRouter);

app.listen(port, () =>{
    console.log("server started on "  + port)
})