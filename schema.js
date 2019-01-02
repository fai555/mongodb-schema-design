const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'Twisker';
 

const insertDocuments = function(db, callback) {
    // Get the documents collection
    const organization = db.collection('organization');
    const group = db.collection('group');
    const user = db.collection('organization');
    const timeline = db.collection('timeline');
    // Insert some documents
    organization.insertMany(
      [{
        orgName:"Twisker",
        dateCreated: new Date(),
        orgURL: "orgURL",
        profilePictureURL: "profilePictureURL",
        bio: "bio",
        location: "location",
        accessLevel: "accessLevel",
        settings: "settings",
        groups:[],
        members:[],
      },
      {
        orgName:"org 2",
        dateCreated: new Date(),
        orgURL: "orgURL",
        profilePictureURL: "profilePictureURL",
        bio: "bio",
        location: "location",
        accessLevel: "accessLevel",
        settings: "settings",
        groups:[],
        members:[],
      }
    ]
      , function(err, org) {
      
      // console.log(JSON.stringify(result,null,4))

      group.insertMany(
        [
          {
            groupName: "Design",
            dateCreated: new Date(),
            profilePictureURL: "profilePictureURL",
            bio: "bio",
            accessLevel: "accessLevel",
            settings: "settings",
            members: []
          },
          {
            groupName: "Group 1",
            dateCreated: new Date(),
            profilePictureURL: "profilePictureURL",
            bio: "bio",
            accessLevel: "accessLevel",
            settings: "settings",
            members: []
          },
          {
            groupName: "Group 2",
            dateCreated: new Date(),
            profilePictureURL: "profilePictureURL",
            bio: "bio",
            accessLevel: "accessLevel",
            settings: "settings",
            members: []
          },
          {
            groupName: "Group 3",
            dateCreated: new Date(),
            profilePictureURL: "profilePictureURL",
            bio: "bio",
            accessLevel: "accessLevel",
            settings: "settings",
            members: []
          },
          {
            groupName: "Group 4",
            dateCreated: new Date(),
            profilePictureURL: "profilePictureURL",
            bio: "bio",
            accessLevel: "accessLevel",
            settings: "settings",
            members: []
          },
          {
            groupName: "Group 5",
            dateCreated: new Date(),
            profilePictureURL: "profilePictureURL",
            bio: "bio",
            accessLevel: "accessLevel",
            settings: "settings",
            members: []
          },
          {
            groupName: "Group 6",
            dateCreated: new Date(),
            profilePictureURL: "profilePictureURL",
            bio: "bio",
            accessLevel: "accessLevel",
            settings: "settings",
            members: []
          },
          {
            groupName: "Group 7",
            dateCreated: new Date(),
            profilePictureURL: "profilePictureURL",
            bio: "bio",
            accessLevel: "accessLevel",
            settings: "settings",
            members: []
          },
          {
            groupName: "Group 8",
            dateCreated: new Date(),
            profilePictureURL: "profilePictureURL",
            bio: "bio",
            accessLevel: "accessLevel",
            settings: "settings",
            members: []
          }
        ],
        function(err, gr){
          
          


        }
      )


      callback(org);
    });
  }



// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
  db.dropDatabase();
 
  insertDocuments(db, function() {
    client.close();
  });
});