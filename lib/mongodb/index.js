import { MongoClient } from "mongodb";

const URI = "mongodb+srv://ykunal837:IpMyjjjCSe13sSVK@cluster0.wgefijn.mongodb.net/?retryWrites=true&w=majority";

const options = {};

if (!URI) throw new Error("Please add your Mongo URI to .env.local");

let client = new MongoClient(URI, options);

let clientPromise;

if (process.env.NODE_ENV !== "production") {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  clientPromise = client.connect();
}

export default clientPromise;
