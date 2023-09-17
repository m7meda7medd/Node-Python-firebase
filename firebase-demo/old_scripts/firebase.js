const admin = require('firebase-admin');

// Initialize Firebase
const serviceAccount = require('/home/roner1/node_pi/firebase-demo/pi-demo-7ff2c-firebase-adminsdk-y9jqj-cc619b0113.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Listen for data changes
const docRef = db.collection('demo').doc('Ahmed');

const observer = docRef.onSnapshot(docSnapshot => {
  console.log(`Received document snapshot: ${docSnapshot.id}`);
  console.log(docSnapshot.data());
}, err => {
  console.log(`Encountered error: ${err}`);
});
