const mongoose = require('mongoose'),
  // Remember to specify the specific database
  dbURI = "mongodb://localhost:27017/student_db"
  
mongoose.connect(dbURI, 
  { useNewUrlParser: true, useUnifiedTopology: true, });

mongoose.set("useCreateIndex", true);

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`)
});
mongoose.connection.on('error', (error) =>{
  console.log(`Mongoose connection error: `, error);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

// For nodemon restart
process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
});
// For app termination
process.once('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0);
  });
});
// For Heroku app termination
process.once('SIGTERM', () => {
  gracefulShutdown('Heroku app shutdown', () => {
    process.exit(0);
  });
});