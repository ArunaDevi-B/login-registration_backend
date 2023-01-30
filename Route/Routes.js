const express = require('express');
const userService = require('../Services/user-services');

const app= express();

app.post('/register', async(req,res) => {
    try {
        await userService.registerUser(req.body);
        res.send(true);
    } catch(error) {
        console.log("error in route-registeruser", error);
        res.status(500).send(error);
    }
});

app.post('/login', async(req,res) => {
    try {
        const login = await userService.loginUser(req.body);
        console.log(login)
        if (!login) {
            res.status(401).send(login);
            return;
        }
        res.send(login);
    } catch (error) {
        console.log('error in loginUser', error);
    }
});

module.exports = app;