const admin = require('firebase-admin');

// Initialize Firebase
const serviceAccount = require('E:/Node-Python-firebase/proj1-443a3-firebase-adminsdk-niwik-8bfde77aa3.json');

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
