const express = require("express");
const app = express();
const PORT = 3001;
const cors = require("cors");
const mysql = require("mysql2");

const {encrypt , decrypt} = require('./Encryption.js');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"akilan",
    database:"password_man",
});

app.post("/puttable" , (req,res) => {
    const {usname , passc , pinn} = req.body;

    db.query("INSERT INTO signin (username , password , pinn) VALUES (?,?,?)" , [usname , passc , pinn] , (err,result) => {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send("SUCESS");
        }
    })
});

app.post("/addpassword" , (req,res) => {
    const {password,title,passcode} = req.body;
    const hpass = encrypt(password);

    db.query("INSERT INTO passwords (password , title , iv,passcode) VALUES (?,?,?,?)" , [hpass.password,title,hpass.iv,passcode] , (err,result) => {
        if(err)
        {
            console.log(err);
        }
        else{
            res.send("SUCESS");
        }
    })
});

app.get('/showpass' , (req,res) => {
    let passcode = req.query["passcode"];
    
    db.query("SELECT * FROM passwords WHERE passcode = ?", [passcode] ,(err,result) => {
        if(err)
        {
            console.log(err);
        }
        else{
            res.send(result);
        }
    });
});

app.get('/userdet' , (req,res) => {
    db.query("SELECT * FROM signin;" , (err,result) => {
        if(err)
        {
            console.log(err);
        }
        else{
            res.send(result);
        }
    });
});

app.post('/decryptpass',(req,res) => {
    res.send(decrypt(req.body));
})

app.listen(PORT,() => {
    console.log("server is running..");
});