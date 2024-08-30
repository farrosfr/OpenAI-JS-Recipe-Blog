# Recipe Blog Generator

This Node.js script uses OpenAI's API to generate an HTML code for a recipe blog post based on dietary restrictions, cuisine preferences, and available ingredients. The generated blog post includes a title, description, ingredients list, and cooking instructions.

## Features

- Customizable dietary restrictions and cuisine preferences.
- Uses available ingredients to create a recipe.
- Generates a complete blog post with formatted ingredients and instructions.
- Instructions are concise, limited to six steps.

## Requirements

- Node.js installed on your machine.
- An OpenAI API key.

## Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/yourusername/recipe-blog-generator.git
    cd recipe-blog-generator
    ```

2. Install the necessary dependencies:
    ```bash
    npm install openai
    ```

3. Set up your OpenAI API key:
    - Create a `.env` file in the root of the project.
    - Add your API key to the `.env` file:
      ```
      OPENAI_API_KEY=your-openai-api-key
      ```

## Usage

1. Customize the user profile with your dietary restrictions, cuisine preferences, and available ingredients:
    ```javascript
    const userProfile = {
      dietaryRestrictions: 'halal',
      cuisinePreferences: 'Indonesian, Sundanese, Javanese',
      ingredientsAvailable: 'tempeh, tofu, coconut milk, chili, lemongrass'
    };
    ```

2. Run the script:
    ```bash
    node index.js
    ```

3. The script will generate an HTML code for the recipe blog post and log it to the console.

## Example Output

An example of the output might look like this:

```html
<h1>Delicious Sundanese Tofu Tempeh Curry</h1>
<p>This Sundanese-inspired dish is a perfect blend of traditional flavors using tofu and tempeh, all within the constraints of halal dietary restrictions.</p>

<h2>Ingredients:</h2>
<ul>
  <li>Tempeh</li>
  <li>Tofu</li>
  <li>Coconut milk</li>
  <li>Chili</li>
  <li>Lemongrass</li>
</ul>

<h2>Instructions:</h2>
<ol>
  <li>Prepare the tofu and tempeh by cutting them into bite-sized pieces.</li>
  <li>In a pan, heat coconut milk and add finely chopped lemongrass.</li>
  <li>Add the tofu and tempeh to the pan and stir well.</li>
  <li>Add chili to taste and simmer until the tofu and tempeh are fully cooked.</li>
  <li>Adjust seasoning if needed.</li>
  <li>Serve hot with steamed rice.</li>
</ol>
