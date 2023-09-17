const admin = require('firebase-admin');

// Initialize Firebase
const serviceAccount = require('/home/roner1/node_pi/firebase-demo/pi-demo2-firebase-adminsdk-ma4np-37bfb96940.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Listen for data changes on the entire collection
const collectionRef = db.collection('demo');

const observer = collectionRef.onSnapshot(querySnapshot => {
  console.log('Received collection snapshot');
  querySnapshot.forEach(docSnapshot => {
    console.log(`Document ID: ${docSnapshot.id}`);
    console.log(docSnapshot.data());
  });
}, err => {
  console.log(`Encountered error: ${err}`);
});

