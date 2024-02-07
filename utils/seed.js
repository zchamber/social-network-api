const mongoose = require('mongoose');
const { User, Thought, Reaction } = require('../models'); // Import your Mongoose models

// Predefined data
const userNames = [
  "John", "Sarah", "Michael", "David", "Jessica", "Christopher", "Amanda", "Matthew", "Jennifer",
  "Andrew", "Elizabeth", "James", "Lauren", "Joshua", "Samantha", "Robert", "Ashley", "William", "Brittany",
  "Daniel", "Megan", "Joseph", "Kayla", "Benjamin", "Nicole", "Ryan", "Victoria", "Nicholas", "Rachel",
  "Jacob", "Stephanie", "Tyler", "Christina", "Jonathan", "Emily", "Brandon", "Heather", "Zachary", "Tiffany",
  "Justin", "Michelle", "Emily", "Eric", "Amber", "Alexander", "Kevin", "Melissa", "Cody", "Katie"
];

const userEmails = [
  "john@example.com", "sarah@example.com", "michael@example.com", "david@example.com",
  "jessica@example.com", "christopher@example.com", "amanda@example.com", "matthew@example.com", "jennifer@example.com",
  "andrew@example.com", "elizabeth@example.com", "james@example.com", "lauren@example.com", "joshua@example.com",
  "samantha@example.com", "robert@example.com", "ashley@example.com", "william@example.com", "brittany@example.com",
  "daniel@example.com", "megan@example.com", "joseph@example.com", "kayla@example.com", "benjamin@example.com",
  "nicole@example.com", "ryan@example.com", "victoria@example.com", "nicholas@example.com", "rachel@example.com",
  "jacob@example.com", "stephanie@example.com", "tyler@example.com", "christina@example.com", "jonathan@example.com",
  "emily@example.com", "brandon@example.com", "heather@example.com", "zachary@example.com", "tiffany@example.com",
  "justin@example.com", "michelle@example.com", "emily@example.com", "eric@example.com", "amber@example.com", "alexander@example.com",
   "kevin@example.com", "melissa@example.com", "cody@example.com", "katie@example.com"
];

const thoughts = [
  "What a beautiful day!", "I'm feeling excited about my project!", "Just finished a great book.",
  "Feeling grateful for my friends.", "Can't wait for the weekend!", "Working hard towards my goals.",
  "Reflecting on life's journey.", "Feeling inspired by nature.", "Enjoying a cup of coffee.",
  "Feeling motivated to learn something new.", "Excited for the future.", "Feeling blessed for my family.",
  "Reflecting on past accomplishments.", "Feeling optimistic about tomorrow.", "Enjoying the little things in life.",
  "Striving to be a better person.", "Appreciating the present moment.", "Thinking about my next adventure.",
  "Grateful for the opportunities ahead.", "Feeling loved and appreciated."
];

const reactions = [
  "Wow, that's awesome!", "I totally agree with you!", "You're so talented!", "That's incredible!", "I'm impressed!",
  "You're amazing!", "Keep up the great work!", "You're an inspiration!", "So proud of you!", "You're doing great!",
  "I'm rooting for you!", "You deserve it!", "Well done!", "I'm happy for you!", "You're on fire!",
  "Great job!", "I admire your determination!", "You're unstoppable!", "That's fantastic!", "You're going places!"
];

// Function to seed the database
const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/social-network-api';
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');

    // Insert users into the database
    await User.deleteMany(); // Clear existing users
    const createdUsers = await User.insertMany(userNames.map((username, index) => ({ username, email: userEmails[index] })));

    // Insert thoughts into the database
    await Thought.deleteMany(); // Clear existing thoughts
    const createdThoughts = await Thought.insertMany(thoughts.map(thoughtText => ({ thoughtText })));

    // Insert reactions into the database
    await Reaction.deleteMany(); // Clear existing reactions
    const createdReactions = await Reaction.insertMany(reactions.map(reactionBody => ({ reactionBody })));

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.disconnect();
  }
};

// Call the seedDatabase function to populate the database
seedDatabase();
