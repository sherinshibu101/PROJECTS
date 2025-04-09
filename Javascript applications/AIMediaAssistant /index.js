import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config(); 
const githubToken = process.env.GITHUB_TOKEN; 
const endpoint = "https://models.inference.ai.azure.com";
const modelName = "gpt-4o"; 
// Initialize OpenAI client
const openai = new OpenAI({
    apiKey: githubToken, 
    baseURL: endpoint,  
});

async function getHotelRecommendation() {
        const completion = await openai.chat.completions.create({
            model: modelName,
            messages: [
                { role: "system", content: "You are an interviewer helping a candidate by sharing ur knowledge in ${language} " },
                { role: "user", content: "Give me the 3 most important questions that can be asked during a CS interview" },
            ],
            stream: true,
            max_tokens: 64
        });
        for await (const chunk of completion) {
            process.stdout.write(chunk.choices[0]?.delta?.content || "");
        }
        

}

getHotelRecommendation();
