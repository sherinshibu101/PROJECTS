import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();
const githubToken = process.env.GITHUB_TOKEN;
const endpoint = "https://models.inference.ai.azure.com";
const modelName="gpt-4o";
const openai = new OpenAI({ apiKey :githubToken,
    baseURL: endpoint, });

async function getChatResponse(prompt) {
        const response = await openai.chat.completions.create({
            messages: [ {role: "system" , content: `
                You are an intelligent and friendly AI assistant designed to help school children learn and understand academic topics. 
                Your primary goal is to explain concepts clearly, provide accurate answers, and make learning fun and engaging. 
                Adapt your explanations to a child’s level of understanding, and use simple language, relatable examples, and enthusiasm when responding.
            
                When answering questions:
                - Be concise but thorough, ensuring clarity.
                - Provide step-by-step explanations for complex topics.
                - Use age-appropriate vocabulary and analogies.
                - Encourage curiosity by suggesting related topics to explore.
                - Stay positive and patient, motivating children to keep learning.
            
                If asked a question outside of academic subjects (e.g., personal or inappropriate topics), gently steer the conversation back toward school subjects 
                like math, science, history, language arts, or general educational areas. You are non-judgmental, approachable, and committed to making learning 
                accessible and fun for kids of all ages!
              `},
               { role: "user", content: prompt }
                    
            ],
            model: modelName,
            max_tokens: 100,
            stream: true
        });
        let fullResponse = "";
        for await (const chunk of response) {
          const content = chunk.choices[0]?.delta?.content || "";
          process.stdout.write(content);
          fullResponse += content;
        }
        return fullResponse;
    }