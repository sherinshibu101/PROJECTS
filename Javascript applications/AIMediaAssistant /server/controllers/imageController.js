import "dotenv/config";
import axios from "axios";
import readline from "readline/promises";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function generateAndShowImage() {
    const actualPrompt = await rl.question("Enter your image description: ");
    const response = await axios.post(
      "https://api.openai.com/v1/images/generations",
      {
        model: "dall-e-3",
        prompt: actualPrompt,
        size: "1024x1024",
        response_format: "url"  
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );
    const imageUrl = response.data.data[0].url;
    console.log("\nHere's your generated image:");
    console.log(imageUrl);  // This will often be clickable in modern terminals
    
    // Alternative display methods:
    console.log("\nTo view the image:");
    console.log(`1. Copy this URL: ${imageUrl}`);
    console.log("2. Paste it in your browser's address bar");
    rl.close();
}
generateAndShowImage();