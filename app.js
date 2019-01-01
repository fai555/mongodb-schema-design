// getting-started.js
var mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
mongoose.connect('mongodb://localhost/Twisker');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("connected")
  
  var Reply = new mongoose.Schema({
	  text: String,
  },{ timestamps: true })

  var Post = new mongoose.Schema({
	text: String,
	postType: String,
	replies: [Reply],
},{ timestamps: true })


var Timeline = new mongoose.Schema({
	title: String,
	accessLevel: String,
	ownerId: String,
	ownerType: String,
	authorId: String,
	authorName: String,
	posts:[Post],
},{ timestamps: true })

var User = new mongoose.Schema({
	username: String,
	dateJoined: Date,
	profilePictureURL: String,
	occupation: String,
	location: String,
	settings: String,
	memberType: String,
	timelines: [Timeline],
},{ timestamps: true });
  
var Group = new mongoose.Schema({
	groupName: String,
	dateCreated: Date,
	profilePictureURL: String,
	bio: String,
	accessLevel: String,
	settings: String,
	member: [User],
},{ timestamps: true });
  
var Organization = new mongoose.Schema({
	orgName: String,
	dateCreated: Date,
	orgURL: String,
	profilePictureURL: String,
	bio: String,
	location: String,
	accessLevel: String,
	settings: String,
	groups:[Group],
},{ timestamps: true });


var OrganizationModel = mongoose.model("Organization", Organization);
var GroupModel = mongoose.model("Group", Group);
var UserModel = mongoose.model("User", User);
var TimelineModel = mongoose.model("Timeline", Timeline);


var Twisker = new OrganizationModel({
	orgName:"Twisker",
	dateCreated: new Date(),
	orgURL: "orgURL",
	profilePictureURL: "profilePictureURL",
	bio: "bio",
	location: "location",
	accessLevel: "accessLevel",
	settings: "settings",
	groups:[
		{
			groupName: "Design",
			dateCreated: new Date(),
			profilePictureURL: "profilePictureURL",
			bio: "bio",
			accessLevel: "accessLevel",
			settings: "settings",
			member: [
				{
						username: "tom",
						dateJoined: new Date(),
						profilePictureURL: "profilePictureURL",
						occupation: "occupation",
						location: "location",
						settings: "settings",
						memberType: "memberType",
						timelines: [
							{
								// title: String,
								// accessLevel: String,
								// ownerId: String,
								// ownerType: String,
								// authorId: String,
								// authorName: String,
								// posts:[Post],
							}
						],
				}
			],
		},
		{
			groupName: "Group 2",
			dateCreated: new Date(),
			profilePictureURL: "profilePictureURL",
			bio: "bio",
			accessLevel: "accessLevel",
			settings: "settings",
			member: [
				{
						username: "tom 2",
						dateJoined: new Date(),
						profilePictureURL: "profilePictureURL",
						occupation: "occupation",
						location: "location",
						settings: "settings",
						memberType: "memberType",
						timelines: [],
				}
			],
		}
	]

});

Twisker.save(function (err, Twisker) {
	if (err) return console.error(err);
	// Twisker.speak();
});

});