import mongoose from "mongoose";
import express from "express";

const app = express();
app.use(express.json());
const PORT = 3000;

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/accesslearn");
    console.log("DB CONNECTED");
    
    // Start server after successful DB connection
    app.listen(PORT, () => {
      console.log(`Listening on PORT ${PORT}`);
    });
  } catch (error) {
    console.error("error: ", error);
    process.exit(1); // Exit with failure
  }
};

// Define your routes here
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Initialize connection
connectDB();
/*
app.get('/hello',function(req,res){
    res.send('Hello User from a GET endpoint');
});


app.post('/hello', function(req,res)
{
    res.send('Hello ,'+ req.body.name +' from a POST endpoint');
});

app.listen(8000, function()
{
    console.log('Server is running on port 8000');
});

app.get('/hello/:name', function(req,res)
{
    res.send('Hello, ' + req.params.name + ' from a GET endpoint');
}); */