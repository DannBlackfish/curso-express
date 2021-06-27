const { MongoClient } = require("mongodb");
const { config } = require("../config");

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

const MONGO_URI = `mongodb://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${DB_NAME}?ssl=true&authSource=admin&retryWrites=true` // prettier-ignore

class MongoLib {
  constructor() {
      console.log('MONGO_URI', MONGO_URI)
    this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true });
    this.dbName = DB_NAME;
  }

  async connect() {
    try {
      await this.client.connect()
      console.log('Connected successfully to mongo')
      return this.client.db(this.dbName)
    } catch (error) {
      console.log(error)
    }
  }
  
  async getAll(collection, query) {
    try {      
      const db = await this.connect()
      return await db.collection(collection).find(query).toArray()
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = MongoLib;