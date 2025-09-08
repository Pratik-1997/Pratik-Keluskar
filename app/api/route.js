// src/app/api/portfolio/route.js
import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

// Create a cached connection
let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  try {
    const uri = process.env.MONGODB_URI;
    
    // Log the connection string (with password masked for security)
    const maskedUri = uri.replace(/:[^:]*@/, ':****@');
    console.log('Connecting to:', maskedUri);
    
    const client = new MongoClient(uri);
    
    await client.connect();
    console.log("Connected to MongoDB successfully");
    
    const db = client.db('portfolio');
    
    // Cache the connection
    cachedClient = client;
    cachedDb = db;
    
    return { client, db };
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error.message);
    
    // Provide more specific error messages
    if (error.message.includes('querySrv ENOTFOUND')) {
      throw new Error('DNS lookup failed. Check your connection string format.');
    } else if (error.message.includes('Authentication failed')) {
      throw new Error('Authentication failed. Check your username and password.');
    } else {
      throw error;
    }
  }
}

// Handle GET requests
export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const collection = db.collection('data');
    
    const portfolioData = await collection.findOne({});
    
    if (!portfolioData) {
      return NextResponse.json(
        { error: 'No portfolio data found' }, 
        { status: 404 }
      );
    }
    
    return NextResponse.json(portfolioData, { status: 200 });
  } catch (error) {
    console.error("MongoDB error:", error.message);
    
    return NextResponse.json(
      { error: error.message }, 
      { status: 500 }
    );
  }
}

// Handle POST requests
export async function POST(request) {
  try {
    const body = await request.json();
    const { db } = await connectToDatabase();
    const collection = db.collection('data');
    
    const result = await collection.updateOne(
      {}, 
      { $set: body }, 
      { upsert: true }
    );
    
    return NextResponse.json(
      { 
        message: 'Data updated successfully',
        upsertedId: result.upsertedId,
        matchedCount: result.matchedCount,
        modifiedCount: result.modifiedCount
      }, 
      { status: 200 }
    );
  } catch (error) {
    console.error("MongoDB error:", error.message);
    
    return NextResponse.json(
      { error: error.message }, 
      { status: 500 }
    );
  }
}