//connect the MongoClient require mongodb -------------->
const { MongoClient } = require("mongodb");


const mongoose=require("mongoose");

const dbUrl = process.env.MONGODB_URL//Please Copy and paste the address of Majority
const connectionParams ={
  useNewUrlParser: true, 
  useUnifiedTopology: true 
}
// for development use this
const connectToMongo = async () => {
mongoose.connect(dbUrl, connectionParams).then(()=>{
  console.info("Connection on the DB")
}).catch((e)=>{
  console.log("Error:", e);
});
}

exports.connection = connectToMongo;
