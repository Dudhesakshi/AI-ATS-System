import axios from "axios";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;


export const analyzeResumeAI = async (resumeText) => {

    try {

        const response = await axios.post(
            API_URL,
            {
                contents: [
                    {
                        parts: [
                            {
                                text: `
Analyze this resume and provide:

1. Resume Score (0–100)
2. Strengths
3. Missing Skills
4. Recommendations
5. Job Match Percentage

Resume Content:

${resumeText}
`
                            }
                        ]
                    }
                ]
            },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

        const result =
            response?.data?.candidates?.[0]
                ?.content?.parts?.[0]?.text;

        return result || "No AI response found";

    }

    catch (error) {

        console.error(
            "Gemini API Error:",
            error.response?.data || error.message
        );

        return "Error analyzing resume";

    }

};