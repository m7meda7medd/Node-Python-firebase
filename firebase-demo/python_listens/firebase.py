import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Initialize Firebase
cred = credentials.Certificate("/home/roner1/node_pi/firebase-demo/pi-demo2-firebase-adminsdk-ma4np-37bfb96940.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

# Listen for data changes in the collection
collection_ref = db.collection('demo')

def on_snapshot(doc_snapshot, changes, read_time):
    for change in changes:
        if change.type.name == 'ADDED':
            print(f"New document added with ID: {change.document.id}")
            print(change.document.to_dict())
        elif change.type.name == 'MODIFIED':
            print(f"Document modified with ID: {change.document.id}")
            print(change.document.to_dict())
        elif change.type.name == 'REMOVED':
            print(f"Document deleted with ID: {change.document.id}")

# Watch the entire collection
col_query = collection_ref.on_snapshot(on_snapshot)

# Keep the listener alive
while True:
    pass
