const admin = require('firebase-admin');

// Initialize Firebase
const serviceAccount = require('/home/roner1/node_pi/firebase-demo/pi-demo2-firebase-adminsdk-ma4np-37bfb96940.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Specify the document ID
const documentId = 'Galal'; // Replace with your desired document ID

// Add data to the specified document
const dataToAdd = {
  name: 'Galal',
  gender: 'Male',
  height:'180 CM'
};

const docRef = db.collection('demo').doc(documentId);

docRef.set(dataToAdd)
  .then(() => {
    console.log(`Data added to document with ID: ${documentId}`);
  })
  .catch(error => {
    console.error(`Error adding data: ${error}`);
  });
