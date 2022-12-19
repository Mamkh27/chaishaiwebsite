
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

//Mongo Connection credentials
const CONNECTION_URL =
  "mongodb+srv://luxe3sixty:chaishai1@cluster0.syd8n.mongodb.net/?retryWrites=true&w=majority";
const DATABASE_NAME = process.env.DATABASE_NAME;
const MongoClient = require("mongodb").MongoClient;
let _db;
module.exports = {
  connectToServer: function (callback) {
    MongoClient.connect(CONNECTION_URL, function (err, client) {
      _db = client.db(DATABASE_NAME);
      console.log("Connected to database: " + DATABASE_NAME);
      return callback(err);
    });
  },
  getDb: function () {
    return _db;
  },
};

