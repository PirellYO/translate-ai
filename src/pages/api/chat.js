import axios from 'axios';

export async function translateText(text) {
  const apiKey = process.env.OPENAI_API_KEY;
  const endpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions';
  const prompt = `Traduire "${text}" en français`;

  const response = await axios.post(endpoint, {
    prompt: prompt,
    max_tokens: 60,
    n: 1,
    stop: '\n',
    temperature: 0.7,
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
  });

  const translatedText = response.data.choices[0].text;
  return translatedText.trim();
}