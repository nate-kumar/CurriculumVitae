const {MongoClient} = require('mongodb');

// Use when running MongoDB locally
// const connectionString = 'mongodb://localhost:27017'

// Use when running MongoDB via Cloud Atlas cluster
const connectionString = 'mongodb+srv://nk-user:Test@123@cluster0.depff.mongodb.net/CurVit?retryWrites=true&w=majority'

// Sychronous file read as JSON is small. If large, use Async method fs.readFile.
const fs = require('fs');
const experiences = JSON.parse(fs.readFileSync('../CurriculumVitae/db/experiences.json', 'utf8'));
const jobs = JSON.parse(fs.readFileSync('../CurriculumVitae/db/jobs.json', 'utf8'));

MongoClient.connect(connectionString, { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log(`Connected to MongoDB server: ${client.isConnected()}`);
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

    // db.collection('experiences').insertMany(
    //     experiences.experiences   
    // , (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert experiences', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    // db.collection('jobs').insertMany(
    //     jobs.jobs   
    // , (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert jobs', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    // db.collection('roles').find({}).toArray().then(res => console.log(res))

    client.close();
});



module.exports = {
    connectionString
};
