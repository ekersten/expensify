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

database.ref().set({
    name: 'Eric Kersten',
    age: 35,
    stressLevel: 6,
    job: {
        title: 'Developer',
        company: 'Google'
    },
    location: {
        city: 'Villa del Parque',
        country: 'Argentina'
    }
}).then(() => {
    console.log('Data is saved');
}).catch((e) => {
    console.log('This failed.', e);
});

database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Belgrano'
});

// database.ref().remove().then(() => {
//     console.log('Data removed');
// }).catch((e) => {
//     console.log('Did not remove data.', e);
// });