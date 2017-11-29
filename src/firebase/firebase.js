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


database.ref().on('value', (snapshot) => {
    const data = snapshot.val();
    console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`)
}, (e) => {
    console.log('Error fetching data.', e);
});

database.ref().update({
    'job/company': 'Fullstack Developer',
    'job/title': 'EGO'
});

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