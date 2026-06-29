import axios from "axios";

export async function sendMsgToAI(message) {
  const response = await axios.post(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      model: "openai/gpt-3.5-turbo",

      messages: [
        {
          role: "user",
          content: message,
        },
      ],
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_OPENROUTER_API_KEY}`,
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "BrainBuddy",
        "Content-Type": "application/json",
      },
    }
  );

  return response.data.choices[0].message.content;
}