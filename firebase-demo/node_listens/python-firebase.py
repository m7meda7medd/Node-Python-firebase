import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Initialize Firebase
cred = credentials.Certificate('E:/Node-Python-firebase/firebase-demo/proj1-443a3-firebase-adminsdk-niwik-8bfde77aa3.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

# Add Data
def add_data(doc,name,height,gender):
    doc_ref = db.collection('demo').document(doc)
    doc_ref.set({
        'name': name,
        'height':height,
        'gender':gender

    })
    print("Data added.")



if __name__ == '__main__':
    add_data("User5","Ammar",,)
