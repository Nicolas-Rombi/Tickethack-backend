const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://zoe:VJ1XIaQamn02ZPQ3@cluster0.0rxk5.mongodb.net/tickethack';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
