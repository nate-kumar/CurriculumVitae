const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const database = require('../db/database');
const port = 3000;

const db = 'CurVit'
const dbConnectUrl = database.connectionString; 

mongoose.set('useUnifiedTopology', true);
mongoose.connect(`${dbConnectUrl}/${db}`, {useNewUrlParser: true});

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    next();
})

const Employers = mongoose.model('employers', {
	employer:String
});

const Roles = mongoose.model('roles', {
	role:String
});

const Experiences = mongoose.model('experiences', {
    experienceTitle:String,
    experienceDescription:String,
    project:String,
    role:String,
    employer:String,
    startDate:Date,
    endDate:Date,
    rankFrontEnd:Number,
    rankBackEnd:Number,
    rankProjManagement:Number,
    rankSystemsEng:Number,
});

const Jobs = mongoose.model('jobs', {
    project:String,
    role:String,
    employer:String,
    startDate:Date,
    endDate:Date
})

app.get('/employers', (req, res) => {
    Employers.find((err, employers) => {
        if(err) {
            res.send('employers not found');
        }
        res.json(employers);
    })
})

app.get('/roles', (req, res) => {
    Roles.find((err, roles) => {
        if(err) {
            res.send('roles not found');
        }
        res.json(roles);
    })
})

app.get('/experiences', (req, res) => {
    Experiences.find((err, experiences) => {
        if(err) {
            res.send('experiences not found');
        }
        res.json(experiences);
    })
})

app.get('/jobs', (req, res) => {
    Jobs.find((err, jobs) => {
        if(err) {
            res.send('jobs not found')
        }
        res.json(jobs)
    })
})

app.listen(port, () => {
    console.log(`Started on port ${port}`)
})

module.exports = {app};