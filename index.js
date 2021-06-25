import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mysql from 'mysql';

import dotenv from 'dotenv';
import e from 'express';
dotenv.config()
const app = express();


app.use(bodyParser.json({limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true , limit: "30mb" }));
app.use(cors());
var dataList=[];

app.get("/", async (req,res)=>{
   res.send("success")
    
})


var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hr'
})

db.connect(function (err) {
    if(err){
        console.log('Database is connected error!');
    }else{
        console.log('Database is connected successfully!');
        app.listen(3000, () => {
            console.log("Server running !!!!! ")
        })
    }
    
   
});
//benefit_plans
app.get("/addbenefit_plans", async function(req,res){
    const plan_Name = req.query.plan_Name;
    const deductable = req.query.deductable;
    const percentageCoPay = req.query.percentageCoPay;
 
    let sql = await `INSERT INTO benefit_plans(Plan_Name, Deductable, Percentage_CoPay) VALUES ("${plan_Name}",${parseInt(deductable)},${parseInt(percentageCoPay)})`;
    db.query( sql , function(err, data) {
        if (err){
            res.status(404).send({ success: false, message: "error" });
        }else{
            res.status(200).send({ success: true, message: "success" });
        };
       // data chứa thông tin: số dòng chèn ...
    });
 })
 app.get("/editbenefit_plans", async function(req,res){
    const id = req.query.id;
    const plan_Name = req.query.plan_Name;
    const deductable = req.query.deductable;
    const percentageCoPay = req.query.percentageCoPay;
 
    let sql = await `UPDATE benefit_plans SET Plan_Name="${plan_Name}",Deductable=${parseInt(deductable)},Percentage_CoPay=${parseInt(percentageCoPay)} WHERE Benefit_Plan_ID=${parseInt(id)}`;
    db.query( sql , function(err, data) {
        if (err){
            res.status(404).send({ success: false, message: "error" });
        }else{
            res.status(200).send({ success: true, message: "success" });
        };
       // data chứa thông tin: số dòng chèn ...
    });
 })
 app.get("/deletebenefit_plans", async function(req,res){
    const id = req.query.id;
    let sql = await `DELETE FROM benefit_plans WHERE Benefit_Plan_ID = ${parseInt(id)}`;
    db.query( sql , function(err, data) {
        if (err){
            res.status(404).send({ success: false, message: "error" });
        }else{
            res.status(200).send({ success: true, message: "success" });
        };
       // data chứa thông tin: số dòng chèn ...
    });
 })
//employment
app.get("/addemployment", async function(req,res){
   
    const employmentstatus = req.query.employmentstatus;
    const hiredate = req.query.hiredate;
    const workerscompcode = req.query.workerscompcode;
    const terminationdate = req.query.terminationdate;
    const rehiredate = req.query.rehiredate;
    const lastreviewdate = req.query.lastreviewdate;
    let sql = await `INSERT INTO employment(Employment_Status,Hire_Date,Workers_Comp_Code, Termination_Date, Rehire_Date, Last_Review_Date) VALUES ("${employmentstatus}","${hiredate}","${workerscompcode}","${terminationdate}","${rehiredate}","${lastreviewdate}")`;
    db.query( sql , function(err, data) {
        if (err){
            res.status(404).send({ success: false, message: "error" });
        }else{
            res.status(200).send({ success: true, message: "success" });
        };
       // data chứa thông tin: số dòng chèn ...
    });
 })
 app.get("/eidtemployment", async function(req,res){
    const id = req.query.id;
    const employmentstatus = req.query.employmentstatus;
    const hiredate = req.query.hiredate;
    const workerscompcode = req.query.workerscompcode;
    const terminationdate = req.query.terminationdate;
    const rehiredate = req.query.rehiredate;
    const lastreviewdate = req.query.lastreviewdate;
    let sql = await `UPDATE employment SET Employment_Status="${employmentstatus}",Hire_Date="${hiredate}",Workers_Comp_Code="${workerscompcode}",Termination_Date="${terminationdate}",Rehire_Date="${rehiredate}",Last_Review_Date="${lastreviewdate}" WHERE Employee_ID=${parseInt(id)}`;
    db.query( sql , function(err, data) {
        if (err){
            res.status(404).send({ success: false, message: "error" });
        }else{
            res.status(200).send({ success: true, message: "success" });
        };
       // data chứa thông tin: số dòng chèn ...
    });
 })
 app.get("/deleteemployment", async function(req,res){
    const id = req.query.id;
    let sql = await `DELETE FROM employment WHERE Employee_ID = ${parseInt(id)}`;
    db.query( sql , function(err, data) {
        if (err){
            res.status(404).send({ success: false, message: "error" });
        }else{
            res.status(200).send({ success: true, message: "success" });
        };
       // data chứa thông tin: số dòng chèn ...
    });
 })
 //emergency

 app.get("/addemergency", async function(req,res){
   
    const emergencycontactname = req.query.emergencycontactname;
    const phonenumber = req.query.phonenumber;
    const relationship = req.query.relationship;
   
    let sql = await `INSERT INTO emergency_contacts(Emergency_Contact_Name, Phone_Number, Relationship) VALUES ("${emergencycontactname}","${phonenumber}","${relationship}")`;
    db.query( sql , function(err, data) {
        if (err){
            res.status(404).send({ success: false, message: "error" });
        }else{
            res.status(200).send({ success: true, message: "success" });
        };
       // data chứa thông tin: số dòng chèn ...
    });
 })
 app.get("/editemergency", async function(req,res){
    const id = req.query.id;
    const emergencycontactname = req.query.emergencycontactname;
    const phonenumber = req.query.phonenumber;
    const relationship = req.query.relationship;
   
    let sql = await `UPDATE emergency_contacts SET Emergency_Contact_Name="${emergencycontactname}",Phone_Number="${phonenumber}",Relationship="${relationship}" WHERE Employee_ID=${parseInt(id)}`;
    db.query( sql , function(err, data) {
        if (err){
            res.status(404).send({ success: false, message: "error" });
        }else{
            res.status(200).send({ success: true, message: "success" });
        };
       // data chứa thông tin: số dòng chèn ...
    });
 })
 app.get("/deleteemergency", async function(req,res){
    const id = req.query.id;
   
    let sql = await `DELETE FROM emergency_contacts WHERE Employee_ID=${parseInt(id)}`;
    db.query( sql , function(err, data) {
        if (err){
            res.status(404).send({ success: false, message: "error" });
        }else{
            res.status(200).send({ success: true, message: "success" });
        };
       // data chứa thông tin: số dòng chèn ...
    });
 })

 //personnal
 app.get("/addpersonal", async function(req,res){
   
    const First_Name = req.query.First_Name;
    const Last_Name = req.query.Last_Name;
    const Middle_Initial = req.query.Middle_Initial;
    const Address1 = req.query.Address1;
    const Address2 = req.query.Address2;
    const City = req.query.City;
    const State = req.query.State;
    const Zip = req.query.Zip;
    const Email = req.query.Email;
    const Phone_Number = req.query.Phone_Number;
    const Social_Security_Number = req.query.Social_Security_Number;
    const Drivers_License = req.query.Drivers_License;
    const Marital_Status = req.query.Marital_Status;
    const Gender = req.query.Gender;
    const Shareholder_Status = req.query.Shareholder_Status;
    const Benefit_Plans = req.query.Benefit_Plans;
    const Ethnicity = req.query.Ethnicity;
   
    let sql = await `INSERT INTO personal(First_Name, Last_Name, Middle_Initial, Address1, Address2, City, State, Zip, Email,
    Phone_Number, Social_Security_Number, Drivers_License, Marital_Status, Gender, Shareholder_Status, Benefit_Plans,Ethnicity) 
    VALUES ("${First_Name}","${Last_Name}","${Middle_Initial}","${Address1}","${Address2}","${City}","${State}",${parseInt(Zip)},"${Email}","${Phone_Number}","${Social_Security_Number}","${Drivers_License}","${Marital_Status}",${parseInt(Gender)},${parseInt(Shareholder_Status)},${parseInt(Benefit_Plans)},"${Ethnicity}")`;
    db.query( sql , function(err, data) {
        if (err){
            res.status(404).send({ success: false, message: "error" });
        }else{
            res.status(200).send({ success: true, message: "success" });
        };
       // data chứa thông tin: số dòng chèn ...
    });
 })
 app.get("/deletepersonal", async function(req,res){
    const id = req.query.id;
   
    let sql = await `DELETE FROM personal WHERE Employee_ID=${parseInt(id)}`;
    db.query( sql , function(err, data) {
        if (err){
            res.status(404).send({ success: false, message: "error" });
        }else{
            res.status(200).send({ success: true, message: "success" });
        };
       // data chứa thông tin: số dòng chèn ...
    });
 })

 app.get("/editpersonal", async function(req,res){
    const id = req.query.id;
    const First_Name = req.query.First_Name;
    const Last_Name = req.query.Last_Name;
    const Middle_Initial = req.query.Middle_Initial;
    const Address1 = req.query.Address1;
    const Address2 = req.query.Address2;
    const City = req.query.City;
    const State = req.query.State;
    const Zip = req.query.Zip;
    const Email = req.query.Email;
    const Phone_Number = req.query.Phone_Number;
    const Social_Security_Number = req.query.Social_Security_Number;
    const Drivers_License = req.query.Drivers_License;
    const Marital_Status = req.query.Marital_Status;
    const Gender = req.query.Gender;
    const Shareholder_Status = req.query.Shareholder_Status;
    const Benefit_Plans = req.query.Benefit_Plans;
    const Ethnicity = req.query.Ethnicity;
   
    let sql = await `UPDATE personal SET First_Name="${First_Name}",Last_Name="${Last_Name}",Middle_Initial="${Middle_Initial}",Address1="${Address1}",Address2="${Address2}",
    City="${City}",State="${State}",Zip=${parseInt(Zip)},Email="${Email}",Phone_Number="${Phone_Number}",Social_Security_Number="${Social_Security_Number}",
    Drivers_License="${Drivers_License}",Marital_Status="${Marital_Status}",Gender=${parseInt(Gender)},Shareholder_Status=${parseInt(Shareholder_Status)},Benefit_Plans=${parseInt(Benefit_Plans)},Ethnicity="${Ethnicity}" WHERE Employee_ID=${parseInt(id)}`;
    db.query( sql , function(err, data) {
        if (err){
            res.status(404).send({ success: false, message: "error" });
        }else{
            res.status(200).send({ success: true, message: "success" });
        };
       // data chứa thông tin: số dòng chèn ...
    });
 })