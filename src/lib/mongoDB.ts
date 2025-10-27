// lib/mongodb.ts
import { MongoClient, MongoClientOptions } from "mongodb";

const uri = `mongodb+srv://ayon008:shariar5175@cluster0.vgoyzza.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=Cluster0`;

const options: MongoClientOptions = {};

if (!uri) {
    throw new Error("Please add your Mongo URI to .env.local");
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
    // This allows TypeScript to recognize the global variable for HMR in dev
    var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === "development") {
    // In development, use a global variable to preserve the connection
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    // In production, create a new client for each connection
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

export default clientPromise;
