import axios from "axios";
import "dotenv/config";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import FormData from "form-data";
import readline from "readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function transcribeAudio() {
    const userInput = await rl.question("Enter the path to your MP3 file (or drag & drop file here): ");
    const recordingPath = path.resolve(userInput.trim().replace(/^["']|["']$/g)); 
    
    if (!fs.existsSync(recordingPath)) {
      throw new Error("File not found. Please check the path and try again.");
    }

    if (path.extname(recordingPath).toLowerCase() !== ".mp3") {
      throw new Error("Only MP3 files are supported.");
    }
    const model = "whisper-1";
    const data = new FormData();
    data.append("file", fs.createReadStream(recordingPath));

    const response = await axios.post(
      "https://api.openai.com/v1/audio/transcriptions",
      data,
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": `multipart/form-data; boundary=${data.getBoundary()}`,
        }
      }
    );
    console.log(response.data.text);

    const outputPath = path.join(__dirname, "transcription.txt");
    fs.writeFileSync(outputPath, response.data.text);
    console.log(`\nSaved to: ${outputPath}`);
    rl.close();
}

transcribeAudio();