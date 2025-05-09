const {MongoClient} = require("mongodb")

const url="mongodb+srv://sweta:%40Error050@cluster0.9vzhd3d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client=new MongoClient(url)

const dbName= "Helloworld"

async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      console.log("successfull")
      // Send a ping to confirm a successful connection
      const db =client.db(dbName);
       const collection = db.collection('documents')
       return 'done'
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }