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
    isSingle: false,
    location: {
        city: 'Villa del Parque',
        country: 'Argentina'
    }
});

database.ref('age').set(36);
database.ref('location/city').set('Ciudad de Buenos Aires');

database.ref('attributes').set({
    height: 180,
    weight: 90
});