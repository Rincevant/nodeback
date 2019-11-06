const express = require('express');
const router = express.Router();
const Tasks = require('../db/tasks');
const User = require('../db/users');
const services = require('../Services/services')

router.get("/" , async (req, res) => {
    res.send("get tasks")
})

// Get all tasks in database
router.get("/all", services.authentificateToken ,async (req, res) => {            
    result = await Tasks.getAllTasks()
    console.table(result.rows)    
    res.setHeader("content-type", "application/json")
    res.status(200).send(JSON.stringify(result.rows))
})

//Get all tasks for one user
router.get("/user", services.authentificateToken, async (req, res) => { 
    result = await Tasks.getTaksFromUserName(req.user.userName)
    console.table(result.rows)    
    res.setHeader("content-type", "application/json")
    res.status(200).send(JSON.stringify(result.rows))   
})

//Add a task to database
router.post("/add", services.authentificateToken, async (req, res) => {
    result = await Tasks.addTask(req.user.userName, req.body.taskTitle)   
    res.setHeader("content-type", "application/json")
    res.status(200).send("Added a task to database")
})

//Delete a task to database
router.delete("/delete", services.authentificateToken , async (req, res) => {
    result = await Tasks.deleteTask(req.query.pkIdTask)   
    res.setHeader("content-type", "application/json")
    res.status(200).send("Deleted a task from database")
})

//Edit a task from database
router.put("/edit", services.authentificateToken , async (req, res) => {
    result = await Tasks.editTask(req.body.taskTitle, req.body.pkIdTask)   
    res.setHeader("content-type", "application/json")
    res.status(200).send("Edited a task from database")
})

//Done a task from database
router.put("/done", services.authentificateToken , async (req, res) => {
    result = await Tasks.doneTask(req.body.pkIdTask)   
    res.setHeader("content-type", "application/json")
    res.status(200).send("Done a task from database")
})

//Undone a task from database
router.put("/undone", services.authentificateToken , async (req, res) => {
    result = await Tasks.unDoneTask(req.body.pkIdTask)   
    res.setHeader("content-type", "application/json")
    res.status(200).send("Undone a task from database")
})

//Add a task from admin to user
router.post("/addtouser", services.authentificateToken, async (req, res) => {
    result = await Tasks.addTask(req.body.userName, req.body.taskTitle)   
    res.setHeader("content-type", "application/json")
    res.status(200).send("Added a task to database")
})



module.exports = router;