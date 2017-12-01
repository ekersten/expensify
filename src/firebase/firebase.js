import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_AUTH,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// const expenses = database.ref('expenses');

// const snapshotToArray = (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// }

// expenses.on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// expenses.on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// expenses.on('child_added', (snapshot) => {
//     console.log('new expense', snapshot.key, snapshot.val());
// });

// // expenses
// //     .once('value')
// //     .then(snapshotToArray)
// //     .catch((e) => {
// //         console.log('Error fetching data.', e);
// //     })

// // expenses.on('value', snapshotToArray);

// expenses.push({
//     description: 'Cable Bill',
//     amount: 10000,
//     note: 'the bill from telecentro',
//     createdAt: 2000
// });









// // database.ref('notes').push({
// //     title: 'Go to Full Stack Tech 2017',
// //     body: 'tecnopolis'
// // });

// // database.ref('notes/-L-8BYZN6p05KUpbPtcy').remove();


// // database.ref().on('value', (snapshot) => {
// //     const data = snapshot.val();
// //     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`)
// // }, (e) => {
// //     console.log('Error fetching data.', e);
// // });

// // database.ref().update({
// //     'job/company': 'Fullstack Developer',
// //     'job/title': 'EGO'
// // });

// // const onValueChange = database.ref().on('value', (snapshot) => {
// //     console.log(snapshot.val());
// // }, (e) => {
// //     console.log('Error with data fetching');
// // });

// // setTimeout(() => {
// //     database.ref('age').set(35)
// // }, 3500);

// // setTimeout(() => {
// //     database.ref().off(onValueChange);
// // }, 7000);

// // setTimeout(() => {
// //     database.ref('age').set(36)
// // }, 10500);

// // database.ref('location/city')
// //     .once('value')
// //     .then((snapshot) => {
// //         const val = snapshot.val();
// //         console.log(val);
// //     })
// //     .catch((e) => {
// //         console.log('Error fetching data.', e);
// //     });


// // database.ref().set({
// //     name: 'Eric Kersten',
// //     age: 35,
// //     stressLevel: 6,
// //     job: {
// //         title: 'Developer',
// //         company: 'Google'
// //     },
// //     location: {
// //         city: 'Villa del Parque',
// //         country: 'Argentina'
// //     }
// // }).then(() => {
// //     console.log('Data is saved');
// // }).catch((e) => {
// //     console.log('This failed.', e);
// // });

// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'Amazon',
// //     'location/city': 'Belgrano'
// // });

// // database.ref().remove().then(() => {
// //     console.log('Data removed');
// // }).catch((e) => {
// //     console.log('Did not remove data.', e);
// // });