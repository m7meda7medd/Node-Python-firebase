const admin = require('firebase-admin');

// Initialize Firebase
const serviceAccount = require('E:/Node-Python-firebase/proj1-443a3-firebase-adminsdk-niwik-8bfde77aa3.json');

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
