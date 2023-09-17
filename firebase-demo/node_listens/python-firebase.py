import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Initialize Firebase
cred = credentials.Certificate("/home/roner1/node_pi/firebase-demo/pi-demo2-firebase-adminsdk-ma4np-37bfb96940.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

# Add Data
def add_data():
    doc_ref = db.collection('demo').document('Omar')
    doc_ref.set({
        'name': 'Ahmedd',
        'height':'180 cm',
        'gender':'Male'

    })
    print("Data added.")



if __name__ == '__main__':
    add_data()
