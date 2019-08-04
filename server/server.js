const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const database = require('../db/database');

const db = 'CurVit'
const dbConnectUrl = database.connectionString; 
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


// app.post('/todos', (req, res) => {
//     // console.log(req.body);
//     let todo = new Todo({
//         text: req.body.text
//     })

//     todo.save().then((doc) => {
//         res.send(doc)
//     }, (err) => {
//         res.status(400).send(err);
//     })
// });

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

const port = 3000;
app.listen(port, () => {
    console.log(`Started on port ${port}`)
})

module.exports = {app};