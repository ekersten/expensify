import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBOsugskgmjDO_3FnIBS6f2ffU9wJyQr1M",
    authDomain: "expensify-dbf63.firebaseapp.com",
    databaseURL: "https://expensify-dbf63.firebaseio.com",
    projectId: "expensify-dbf63",
    storageBucket: "expensify-dbf63.appspot.com",
    messagingSenderId: "921895678722"
};

firebase.initializeApp(config);

const database = firebase.database();

const expenses = database.ref('expenses');

expenses.push({
    description: 'Gas Bill',
    amount: 10000,
    note: 'this is my gas bill',
    createdAt: 2000
});

expenses.push({
    description: 'Water Bill',
    amount: 25000,
    note: '',
    createdAt: 3000
});

expenses.push({
    description: 'Cable Bill',
    amount: 1500,
    note: '',
    createdAt: 1500
});









// database.ref('notes').push({
//     title: 'Go to Full Stack Tech 2017',
//     body: 'tecnopolis'
// });

// database.ref('notes/-L-8BYZN6p05KUpbPtcy').remove();


// database.ref().on('value', (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`)
// }, (e) => {
//     console.log('Error fetching data.', e);
// });

// database.ref().update({
//     'job/company': 'Fullstack Developer',
//     'job/title': 'EGO'
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching');
// });

// setTimeout(() => {
//     database.ref('age').set(35)
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(36)
// }, 10500);

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data.', e);
//     });


// database.ref().set({
//     name: 'Eric Kersten',
//     age: 35,
//     stressLevel: 6,
//     job: {
//         title: 'Developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Villa del Parque',
//         country: 'Argentina'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Belgrano'
// });

// database.ref().remove().then(() => {
//     console.log('Data removed');
// }).catch((e) => {
//     console.log('Did not remove data.', e);
// });