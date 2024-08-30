import OpenAI from "openai";
const client = new OpenAI();
const userProfile = {
  dietaryRestrictions: 'halal',
  cuisinePreferences: 'Indonesian, Sundanese, Javanese',
  ingredientsAvailable: 'tempeh, tofu, coconut milk, chili, lemongrass'
};

const systemPrompt = { 
  role: 'system', 
  content: 'Generate an HTML code for a recipe blog that considers dietary restrictions, cuisine type, and ingredients.'
};

const userContent1 = `I want to create a recipe blog post. Here are my dietary restrictions: ${userProfile.dietaryRestrictions}. My cuisine preferences include: ${userProfile.cuisinePreferences}. The ingredients I have available are: ${userProfile.ingredientsAvailable}.`;

const userContent2 = `Please provide a blog post with a title, description, ingredients, and instructions. Format the ingredients and instructions as follows: Ingredients should be bulleted, and instructions should be numbered.`;

const userContent3 = `The recipe must use only the listed ingredients and should result in a single blog post with instructions not exceeding six steps.`;

const userPrompt = {
  role: 'user',
  content: `${userContent1}\n${userContent2}\n${userContent3}`
};

const response = await client.chat.completions.create({
  model: "gpt-4o",
  messages: [systemPrompt, userPrompt]
});

console.log(response.choices[0].message.content);







