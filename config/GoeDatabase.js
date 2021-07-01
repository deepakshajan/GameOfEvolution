const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

class GoeDatabase {

  static async connectDB() {
    try {
      await mongoose.connect(
        db,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true
        }
      );
  
      console.log('GOELog: MongoDB is Connected...');
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  }

}

module.exports = GoeDatabase;