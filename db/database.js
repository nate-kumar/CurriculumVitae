const {MongoClient} = require('mongodb');
const connectionString = 'mongodb://localhost:27017'

/*
MongoClient.connect(connectionString, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server');
    const db = client.db('CurVit')

    // db.collection('roles').insertOne({
    //     employer: 'Jaguar Land Rover',
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    // db.collection('roles').insertMany([
    //     { role: 'Software Systems Engineer' },
    //     { role: 'Product Development Graduate Engineer' },
    // ]
    // , (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert roles', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    db.collection('experiences').insertMany([
        // {
        //     experienceTitle: 'MATLAB script',
        //     experienceDescription: 'MATLAB script',
        //     project: 'Terrain Response & Auto Terrain Response',
        //     role: 'Software Systems Engineer',
        //     employer: 'Jaguar Land Rover',
        //     startDate: new Date(2015, 8, 1),
        //     endDate: new Date(),
        //     rankFrontEnd: 6,
        //     rankBackEnd: 2,
        //     rankProjManagement: 5,
        //     rankSystemsEng: 7,
        // },
        // {
        //     experienceTitle: 'Automated issues tracker',
        //     experienceDescription: 'Automated issues tracker',
        //     project: 'All Terrain Info Centre & All Surface Information',
        //     role: 'Software Systems Engineer',
        //     employer: 'Jaguar Land Rover',
        //     startDate: new Date(2017, 2, 1),
        //     endDate: new Date(2018, 7, 1),
        //     rankFrontEnd: 8,
        //     rankBackEnd: 6,
        //     rankProjManagement: 7,
        //     rankSystemsEng: 4,
        //   },
        //   {
        //     experienceTitle: 'MATLAB script',
        //     experienceDescription: 'MATLAB script',
        //     project: null,
        //     role: 'Product Development Graduate Engineer',
        //     employer: 'Jaguar Land Rover',
        //     startDate: new Date(2013, 8, 1),
        //     endDate: new Date(2015, 7, 1),
        //     rankFrontEnd: 6,
        //     rankBackEnd: 2,
        //     rankProjManagement: 5,
        //     rankSystemsEng: 7,
        //   },
        //   {
        //     experienceTitle: 'MATLAB script',
        //     experienceDescription: 'MATLAB script',
        //     project: null,
        //     role: 'Product Development Graduate Engineer',
        //     employer: 'Jaguar Land Rover',
        //     startDate: new Date(2013, 8, 1),
        //     endDate: new Date(2015, 7, 1),
        //     rankFrontEnd: 8,
        //     rankBackEnd: 2,
        //     rankProjManagement: 3,
        //     rankSystemsEng: 7,
        //   },
    ]
    , (err, result) => {
        if (err) {
            return console.log('Unable to insert experiences', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    })

    // db.collection('roles').find({}).toArray().then(res => console.log(res))

    client.close();
});
*/


module.exports = {
    connectionString
};
