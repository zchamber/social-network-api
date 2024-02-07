// const mongoose = require('mongoose');
// const { User, Thought, Reaction } = require('../models'); // Import your Mongoose models

// // Predefined data
// const userNames = [
//   "John", "Sarah", "Michael", "David", "Jessica", "Christopher", "Amanda", "Matthew", "Jennifer",
//   "Andrew", "Elizabeth", "James", "Lauren", "Joshua", "Samantha", "Robert", "Ashley", "William", "Brittany",
//   "Daniel", "Megan", "Joseph", "Kayla", "Benjamin", "Nicole", "Ryan", "Victoria", "Nicholas", "Rachel",
//   "Jacob", "Stephanie", "Tyler", "Christina", "Jonathan", "Emily", "Brandon", "Heather", "Zachary", "Tiffany",
//   "Justin", "Michelle", "Emily", "Eric", "Amber", "Alexander", "Kevin", "Melissa", "Cody", "Katie"
// ];

// const userEmails = [
//   "john@example.com", "sarah@example.com", "michael@example.com", "david@example.com",
//   "jessica@example.com", "christopher@example.com", "amanda@example.com", "matthew@example.com", "jennifer@example.com",
//   "andrew@example.com", "elizabeth@example.com", "james@example.com", "lauren@example.com", "joshua@example.com",
//   "samantha@example.com", "robert@example.com", "ashley@example.com", "william@example.com", "brittany@example.com",
//   "daniel@example.com", "megan@example.com", "joseph@example.com", "kayla@example.com", "benjamin@example.com",
//   "nicole@example.com", "ryan@example.com", "victoria@example.com", "nicholas@example.com", "rachel@example.com",
//   "jacob@example.com", "stephanie@example.com", "tyler@example.com", "christina@example.com", "jonathan@example.com",
//   "emily@example.com", "brandon@example.com", "heather@example.com", "zachary@example.com", "tiffany@example.com",
//   "justin@example.com", "michelle@example.com", "emily@example.com", "eric@example.com", "amber@example.com", "alexander@example.com",
//    "kevin@example.com", "melissa@example.com", "cody@example.com", "katie@example.com"
// ];

// const thoughts = [
//   "What a beautiful day!", "I'm feeling excited about my project!", "Just finished a great book.",
//   "Feeling grateful for my friends.", "Can't wait for the weekend!", "Working hard towards my goals.",
//   "Reflecting on life's journey.", "Feeling inspired by nature.", "Enjoying a cup of coffee.",
//   "Feeling motivated to learn something new.", "Excited for the future.", "Feeling blessed for my family.",
//   "Reflecting on past accomplishments.", "Feeling optimistic about tomorrow.", "Enjoying the little things in life.",
//   "Striving to be a better person.", "Appreciating the present moment.", "Thinking about my next adventure.",
//   "Grateful for the opportunities ahead.", "Feeling loved and appreciated."
// ];

// const reactions = [
//   "Wow, that's awesome!", "I totally agree with you!", "You're so talented!", "That's incredible!", "I'm impressed!",
//   "You're amazing!", "Keep up the great work!", "You're an inspiration!", "So proud of you!", "You're doing great!",
//   "I'm rooting for you!", "You deserve it!", "Well done!", "I'm happy for you!", "You're on fire!",
//   "Great job!", "I admire your determination!", "You're unstoppable!", "That's fantastic!", "You're going places!"
// ];

// // Function to seed the database
// const seedDatabase = async () => {
//   try {
//     // Connect to MongoDB
//     const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/social-network-api';
//     await mongoose.connect(MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     });
//     console.log('Connected to MongoDB');

//     // Insert users into the database
//     await User.deleteMany(); // Clear existing users
//     const createdUsers = await User.insertMany(userNames.map((username, index) => ({ username, email: userEmails[index] })));

//     // Insert thoughts into the database
//     await Thought.deleteMany(); // Clear existing thoughts
//     const createdThoughts = await Thought.insertMany(thoughts.map(thoughtText => ({ thoughtText })));

//     // Insert reactions into the database
//     await Reaction.deleteMany(); // Clear existing reactions
//     const createdReactions = await Reaction.insertMany(reactions.map(reactionBody => ({ reactionBody })));

//     console.log('Database seeded successfully!');
//   } catch (error) {
//     console.error('Error seeding database:', error);
//   } finally {
//     mongoose.disconnect();
//   }
// };

// // Call the seedDatabase function to populate the database
// seedDatabase();




const mongoose = require("mongoose");
const { User, Thought, Reaction } = require("../models");

mongoose.connect("mongodb://127.0.0.1:27017/social-network-api");

const seedDatabase = async () => {
  try {
    // Clear existing data
    await User.deleteMany();
    await Thought.deleteMany();
    await Reaction.deleteMany();

    const arrayLength = 5; // Number of users, thoughts, and reactions created
    //SECTION CREATE USERS
    const userList = [
      "Aaran",
      "Aaren",
      "Aarez",
      "Aarman",
      "Aaron",
      "Aaron-James",
      "Aarron",
      "Aaryan",
      "Aaryn",
      "Aayan",
      "Aazaan",
      "Abaan",
      "Abbas",
      "Abdallah",
      'Jared',
      'Courtney',
      'Gillian',
      'Clark',
      'Jared',
      'Grace',
      'Kelsey',
      'Tamar',
      'Alex',
      'Mark',
      'Tamar',
      'Farish',
      'Sarah',
      'Nathaniel',
      'Parker',  
      'Zhuo',
      'Zi',
      'Zidane',
      'Zijie',
      'Zinedine',
      'Zion',
      'Zishan',
      'Ziya',
      'Ziyaan',
      'Zohaib',
      'Zohair',
      'Zoubaeir',
      'Zubair',
      'Zubayr',
      'Zuriel',
      'Xander',
    ];
    let newUsers = [];


    for (let i = 0; i < arrayLength; i++) {
      let randomFirstName = getRandomNumber(0, userList.length);
      let randomLastName = getRandomNumber(0, userList.length);
      let firstName = userList[randomFirstName];
      let lastName = userList[randomLastName];
      let userName = `${lastName}, ${firstName}`;
      let emailAddress = `${lastName.toLowerCase()}_${firstName.toLowerCase()}@example.com`;

      let newUser = {
        _id: new mongoose.Types.ObjectId(),
        username: userName,
        email: emailAddress,
        thoughts: [],
        friends: [],
      }

      newUsers.push(newUser);
    }
    // console.log(newUsers);

    //SECTION CREATE THOUGHTS
    const thoughtList = [
      "I need friends",
      "I cant find My Phone",
      "Just learned to play the piano, lookout world!",
      "Starbase Defenderis easily game of the year",
      "Tower Defense is way better than Starbase Defender",
      "Monopoly Money Manager is a crap game and I will be refunding it",
      "Any good new Movie trailers",
      "Hello world",
      "Stupid Social Media App keeps crashing",
      "What time is it?",
      "Message me if you can see this",
      "Email me pics of your high scores",
      "Compass is a terrible broswer",
      "Firefox, at least it aint compass",
      "This workout app makes it so easy to log my logs you feel me?",
      "Cooking apps suck, they dont even make the food for you",
      "Pokerface is a top tier song",
      "I am so sick of mongoDB",
    ];
    let newThoughts = [];

    for (let i = 0; i < arrayLength; i++) {
      let newThought = {
        _id: new mongoose.Types.ObjectId(),
        thoughtText: thoughtList[i],
        username: newUsers[i].username,
        reactions: [],
      }

      newThoughts.push(newThought);
    }
    // console.log(newThoughts);

    //SECTION CREATE REACTIONS
    const reactionList = [
      "I agree",
      "Find My Phone man I am sick of this",
      "Learning Piano is for losers",
      "Starbase Defender is pretty good I think",
      "Tower Defense is the best game I have played",
      "Monopoly Money Manager really sucks bro, they are thiefs for selling this",
      "Movie trailers have been pretty bad lately",
      "Hello world",
      "Stupid Social Media App",
      "Notes, you suck",
      "Message me?",
      "Email me?",
      "Who are you?",
      "This is sick",
      "Running apps suck",
      "Cooking apps are great",
      "Poker is terrible",
      "Deliveries are always late, thats why I dont have the internet",
    ];
    let newReactions = [];

    for (let i = 0; i < arrayLength; i++) {
      let id = new mongoose.Types.ObjectId();
      let newReaction = {
        _id: id,
        reactionId: id,
        reactionBody: reactionList[i],
        username: newUsers[i].username,
      }

      newReactions.push(newReaction);
    }
    console.log(newReactions);

    //SECTION PUSH _IDS FOR REACTION, THOUGHTS, FRIENDS INTO THOUGHT OR USER OBJECT
    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    for (let i = 0; i < newThoughts.length; i++) {
      let randomUser = getRandomNumber(0, arrayLength);
      let randomThought = getRandomNumber(0, arrayLength);
      let randomReaction = getRandomNumber(0, arrayLength);
      let randomFriend = getRandomNumber(0, arrayLength);

      //PUSH REACTION INTO THOUGHT REACTON ARRAY
      newThoughts[randomThought].reactions.push(
        newReactions[randomReaction]._id
      );

      //PUSH THOUGHTS INTO USER THOUGHT ARRAY
      newUsers[randomUser].thoughts.push(newThoughts[randomThought]._id);

      //PUSH FRIENDS INTO USER FRIEND ARRAY
      newUsers[randomUser].friends.push(newUsers[randomFriend]._id);
    }

    //SECTION INSERT USER
    await User.deleteMany();
    await User.insertMany(newUsers)
      .then((result) => {
        // console.log('New users inserted successfully:', result);
        console.log("New users inserted successfully");
      })
      .catch((error) => {
        console.error("Error inserting new users:", error);
      });

    //SECTION INSERT THOUGHTS
    await Thought.deleteMany();
    await Thought.insertMany(newThoughts)
      .then((result) => {
        // console.log('New thought inserted successfully:', result);
        console.log("New thought inserted successfully");
      })
      .catch((error) => {
        console.error("Error inserting new thought:", error);
      });

    //SECTION INSERT REACTIONS
    await Reaction.deleteMany();
    await Reaction.insertMany(newReactions)
      then((result) => {
        // console.log('New reaction inserted successfully:', result);
        console.log("New reaction inserted successfully");
      })
      .catch((error) => {
        console.error("Error inserting new reaction:", error);
      });

    console.log("Database seeded successfully 🌱🌱🌱🌱🌱🌱");
    console.info("Seeding complete! 🌱🌱🌱🌱🌱🌱🌱");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    console.info("Process exit");
    process.exit(0);
  }
};

seedDatabase();