export type RecipeCategory = "vegan" | "vegetarian" | "non-vegetarian"
export type RecipeDifficulty = "easy" | "medium" | "hard"
export type RecipeMeal = "breakfast" | "lunch" | "dinner" | "snack" | "dessert"

export interface Recipe {
  id: string
  title: string
  description: string
  category: RecipeCategory
  difficulty: RecipeDifficulty
  meal: RecipeMeal
  prepTime: number
  cookTime: number
  servings: number
  calories: number
  protein: number // in grams
  author: "Joel Rivas" | "Atin Jain"
  ingredients: string[]
  instructions: string[]
  tags: string[]
  image?: string
}

export const recipes: Recipe[] = [
  // Vegan Recipes
  {
    id: "vegan-buddha-bowl",
    title: "Rainbow Buddha Bowl",
    description: "A colorful, nutrient-packed bowl with quinoa, roasted vegetables, and tahini dressing.",
    category: "vegan",
    difficulty: "easy",
    meal: "dinner",
    prepTime: 15,
    cookTime: 25,
    servings: 2,
    calories: 450,
    protein: 18,
    author: "Joel Rivas",
    ingredients: [
      "1 cup quinoa",
      "1 sweet potato, cubed",
      "1 cup chickpeas",
      "2 cups kale",
      "1 avocado",
      "2 tbsp tahini",
      "1 lemon",
      "2 tbsp olive oil",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Cook quinoa according to package instructions",
      "Roast sweet potato and chickpeas at 400°F for 20 minutes",
      "Massage kale with olive oil and lemon juice",
      "Make tahini dressing by mixing tahini, lemon juice, and water",
      "Assemble bowl with quinoa, vegetables, and dressing"
    ],
    tags: ["quinoa", "sweet potato", "chickpeas", "kale", "avocado", "tahini", "vegan", "healthy", "bowl"]
  },
  {
    id: "vegan-chocolate-smoothie",
    title: "Chocolate Protein Smoothie",
    description: "A rich, creamy smoothie packed with plant protein and antioxidants.",
    category: "vegan",
    difficulty: "easy",
    meal: "breakfast",
    prepTime: 5,
    cookTime: 0,
    servings: 1,
    calories: 320,
    protein: 25,
    author: "Atin Jain",
    ingredients: [
      "1 banana",
      "2 tbsp cocoa powder",
      "1 scoop plant protein powder",
      "1 cup almond milk",
      "1 tbsp almond butter",
      "1 tbsp maple syrup"
    ],
    instructions: [
      "Add all ingredients to a blender",
      "Blend until smooth and creamy",
      "Pour into a glass and enjoy immediately"
    ],
    tags: ["banana", "cocoa", "protein powder", "almond milk", "smoothie", "vegan", "breakfast"]
  },
  {
    id: "vegan-lentil-curry",
    title: "Spicy Red Lentil Curry",
    description: "A warming, aromatic curry that's perfect for meal prep and freezing.",
    category: "vegan",
    difficulty: "medium",
    meal: "dinner",
    prepTime: 10,
    cookTime: 30,
    servings: 4,
    calories: 380,
    protein: 22,
    author: "Joel Rivas",
    ingredients: [
      "1 cup red lentils",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "1 tbsp ginger, grated",
      "2 tbsp curry powder",
      "1 can coconut milk",
      "2 cups vegetable broth",
      "1 cup spinach"
    ],
    instructions: [
      "Sauté onion, garlic, and ginger in oil",
      "Add curry powder and cook for 1 minute",
      "Add lentils, coconut milk, and broth",
      "Simmer for 25 minutes until lentils are tender",
      "Stir in spinach and serve"
    ],
    tags: ["lentils", "curry", "spices", "coconut milk", "vegan", "dinner", "meal-prep"]
  },
  {
    id: "vegan-overnight-oats",
    title: "Overnight Oats",
    description: "Easy overnight oats with chia seeds and fresh berries.",
    category: "vegan",
    difficulty: "easy",
    meal: "breakfast",
    prepTime: 5,
    cookTime: 0,
    servings: 1,
    calories: 280,
    protein: 12,
    author: "Atin Jain",
    ingredients: [
      "1/2 cup rolled oats",
      "1 tbsp chia seeds",
      "1/2 cup almond milk",
      "1 tbsp maple syrup",
      "1/4 cup mixed berries",
      "1 tbsp almond butter"
    ],
    instructions: [
      "Mix oats, chia seeds, almond milk, and maple syrup",
      "Refrigerate overnight",
      "Top with berries and almond butter before serving"
    ],
    tags: ["oats", "chia seeds", "berries", "overnight", "vegan", "healthy", "breakfast"]
  },
  {
    id: "vegan-cauliflower-steak",
    title: "Cauliflower Steak",
    description: "Roasted cauliflower steak with herbs and lemon.",
    category: "vegan",
    difficulty: "medium",
    meal: "dinner",
    prepTime: 10,
    cookTime: 25,
    servings: 2,
    calories: 180,
    protein: 8,
    author: "Joel Rivas",
    ingredients: [
      "1 large cauliflower head",
      "3 tbsp olive oil",
      "2 tbsp herbs (rosemary, thyme)",
      "1 lemon",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Cut cauliflower into 1-inch steaks",
      "Brush with olive oil and season with herbs",
      "Roast at 400°F for 25 minutes",
      "Squeeze lemon over before serving"
    ],
    tags: ["cauliflower", "steak", "roasted", "herbs", "lemon", "vegan", "healthy", "dinner"]
  },
  {
    id: "vegan-energy-balls",
    title: "Energy Balls",
    description: "Nutrient-dense energy balls perfect for pre or post-workout snacks.",
    category: "vegan",
    difficulty: "easy",
    meal: "snack",
    prepTime: 15,
    cookTime: 0,
    servings: 12,
    calories: 120,
    protein: 4,
    author: "Atin Jain",
    ingredients: [
      "1 cup dates",
      "1/2 cup almonds",
      "1/4 cup chia seeds",
      "2 tbsp cocoa powder",
      "1 tbsp maple syrup"
    ],
    instructions: [
      "Process dates and almonds in a food processor",
      "Add remaining ingredients and pulse to combine",
      "Roll into 12 balls",
      "Refrigerate for 30 minutes before serving"
    ],
    tags: ["energy balls", "dates", "nuts", "seeds", "protein", "snack", "healthy", "vegan"]
  },
  {
    id: "vegan-chocolate-avocado-mousse",
    title: "Chocolate Avocado Mousse",
    description: "Creamy chocolate mousse made with avocado for healthy fats.",
    category: "vegan",
    difficulty: "easy",
    meal: "dessert",
    prepTime: 10,
    cookTime: 0,
    servings: 2,
    calories: 220,
    protein: 3,
    author: "Joel Rivas",
    ingredients: [
      "1 ripe avocado",
      "2 tbsp cocoa powder",
      "2 tbsp maple syrup",
      "1/4 cup almond milk",
      "1 tsp vanilla extract"
    ],
    instructions: [
      "Blend all ingredients until smooth",
      "Chill for 30 minutes",
      "Serve with fresh berries"
    ],
    tags: ["chocolate", "avocado", "mousse", "dessert", "healthy fats", "vegan"]
  },
  {
    id: "vegan-risotto-ai-funghi",
    title: "Risotto ai Funghi",
    description: "Creamy mushroom risotto with wild mushrooms and parmesan.",
    category: "vegan",
    difficulty: "hard",
    meal: "dinner",
    prepTime: 15,
    cookTime: 30,
    servings: 4,
    calories: 420,
    protein: 14,
    author: "Joel Rivas",
    ingredients: [
      "1 cup arborio rice",
      "2 cups mixed mushrooms",
      "4 cups vegetable broth",
      "1 onion, diced",
      "2 cloves garlic, minced",
      "1/2 cup nutritional yeast",
      "2 tbsp olive oil"
    ],
    instructions: [
      "Sauté onion and garlic in olive oil",
      "Add mushrooms and cook until browned",
      "Add rice and stir for 2 minutes",
      "Gradually add broth, stirring constantly",
      "Finish with nutritional yeast"
    ],
    tags: ["risotto", "mushrooms", "parmesan", "italian", "creamy", "vegan", "dinner"]
  },

  // Vegetarian Recipes
  {
    id: "vegetarian-egg-muffins",
    title: "Egg Muffins",
    description: "Protein-packed breakfast muffins perfect for meal prep and on-the-go eating.",
    category: "vegetarian",
    difficulty: "easy",
    meal: "breakfast",
    prepTime: 10,
    cookTime: 20,
    servings: 6,
    calories: 180,
    protein: 15,
    author: "Atin Jain",
    ingredients: [
      "6 eggs",
      "1/2 cup cheese, grated",
      "1/2 cup vegetables (spinach, bell peppers)",
      "1/4 cup milk",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Preheat oven to 350°F",
      "Whisk eggs with milk and seasonings",
      "Add vegetables and cheese",
      "Pour into muffin tins",
      "Bake for 20 minutes"
    ],
    tags: ["eggs", "vegetables", "cheese", "muffins", "breakfast", "protein", "meal-prep", "vegetarian"]
  },
  {
    id: "vegetarian-quinoa-salad",
    title: "Quinoa Salad",
    description: "Fresh and nutritious quinoa salad with Mediterranean flavors.",
    category: "vegetarian",
    difficulty: "easy",
    meal: "lunch",
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    calories: 320,
    protein: 16,
    author: "Joel Rivas",
    ingredients: [
      "1 cup quinoa",
      "1 cup cherry tomatoes",
      "1/2 cup feta cheese",
      "1/4 cup olives",
      "1 cucumber, diced",
      "2 tbsp olive oil",
      "1 lemon"
    ],
    instructions: [
      "Cook quinoa and let cool",
      "Chop vegetables and combine",
      "Add feta and olives",
      "Dress with olive oil and lemon juice"
    ],
    tags: ["quinoa", "vegetables", "feta", "olives", "mediterranean", "salad", "vegetarian"]
  },
  {
    id: "vegetarian-chickpea-pasta",
    title: "Chickpea Pasta",
    description: "High-protein pasta made with chickpeas and fresh vegetables.",
    category: "vegetarian",
    difficulty: "medium",
    meal: "dinner",
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    calories: 380,
    protein: 28,
    author: "Atin Jain",
    ingredients: [
      "1 lb chickpea pasta",
      "2 cups mixed vegetables",
      "1/2 cup parmesan cheese",
      "2 tbsp olive oil",
      "2 cloves garlic, minced",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Cook pasta according to package instructions",
      "Sauté vegetables and garlic",
      "Combine pasta and vegetables",
      "Top with parmesan cheese"
    ],
    tags: ["chickpea pasta", "vegetables", "protein", "healthy", "vegetarian", "dinner"]
  },
  {
    id: "vegetarian-hummus-plate",
    title: "Hummus Plate",
    description: "Fresh hummus with vegetables and whole grain pita.",
    category: "vegetarian",
    difficulty: "easy",
    meal: "snack",
    prepTime: 10,
    cookTime: 0,
    servings: 2,
    calories: 280,
    protein: 12,
    author: "Joel Rivas",
    ingredients: [
      "1 cup chickpeas",
      "2 tbsp tahini",
      "2 cloves garlic",
      "1 lemon",
      "2 tbsp olive oil",
      "Assorted vegetables",
      "Whole grain pita"
    ],
    instructions: [
      "Blend chickpeas, tahini, garlic, and lemon juice",
      "Drizzle with olive oil",
      "Serve with vegetables and pita"
    ],
    tags: ["hummus", "vegetables", "pita", "mediterranean", "vegetarian", "snack"]
  },
  {
    id: "vegetarian-apple-crisp",
    title: "Apple Crisp",
    description: "Warm apple crisp with oats and cinnamon.",
    category: "vegetarian",
    difficulty: "medium",
    meal: "dessert",
    prepTime: 15,
    cookTime: 35,
    servings: 6,
    calories: 320,
    protein: 6,
    author: "Atin Jain",
    ingredients: [
      "6 apples, sliced",
      "1 cup oats",
      "1/2 cup flour",
      "1/2 cup brown sugar",
      "1/2 cup butter",
      "2 tsp cinnamon"
    ],
    instructions: [
      "Preheat oven to 375°F",
      "Layer sliced apples in baking dish",
      "Mix oats, flour, sugar, and cinnamon",
      "Cut in butter and sprinkle over apples",
      "Bake for 35 minutes"
    ],
    tags: ["apple crisp", "oats", "cinnamon", "dessert", "vegetarian", "healthy"]
  },
  {
    id: "vegetarian-mexican-quinoa",
    title: "Mexican Quinoa",
    description: "Spicy Mexican quinoa with black beans and corn.",
    category: "vegetarian",
    difficulty: "medium",
    meal: "dinner",
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    calories: 340,
    protein: 18,
    author: "Joel Rivas",
    ingredients: [
      "1 cup quinoa",
      "1 can black beans",
      "1 cup corn",
      "1 bell pepper, diced",
      "2 tbsp taco seasoning",
      "1 lime",
      "Fresh cilantro"
    ],
    instructions: [
      "Cook quinoa according to package instructions",
      "Add beans, corn, and bell pepper",
      "Season with taco seasoning",
      "Garnish with lime and cilantro"
    ],
    tags: ["quinoa", "black beans", "corn", "mexican", "spicy", "vegetarian", "dinner"]
  },
  {
    id: "vegetarian-caprese-pasta",
    title: "Caprese Pasta",
    description: "Fresh caprese pasta with tomatoes, mozzarella, and basil.",
    category: "vegetarian",
    difficulty: "easy",
    meal: "dinner",
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    calories: 380,
    protein: 16,
    author: "Atin Jain",
    ingredients: [
      "1 lb pasta",
      "2 cups cherry tomatoes",
      "1 cup mozzarella balls",
      "1/2 cup fresh basil",
      "2 tbsp olive oil",
      "Balsamic glaze"
    ],
    instructions: [
      "Cook pasta according to package instructions",
      "Halve tomatoes and combine with mozzarella",
      "Toss with olive oil and basil",
      "Drizzle with balsamic glaze"
    ],
    tags: ["pasta", "tomatoes", "mozzarella", "basil", "caprese", "italian", "vegetarian"]
  },
  {
    id: "vegetarian-breakfast-burrito",
    title: "Breakfast Burrito",
    description: "Protein-packed breakfast burrito with eggs and vegetables.",
    category: "vegetarian",
    difficulty: "medium",
    meal: "breakfast",
    prepTime: 15,
    cookTime: 10,
    servings: 2,
    calories: 420,
    protein: 22,
    author: "Joel Rivas",
    ingredients: [
      "4 eggs",
      "2 tortillas",
      "1 cup black beans",
      "1/2 cup cheese",
      "1 avocado",
      "Salsa and sour cream"
    ],
    instructions: [
      "Scramble eggs with cheese",
      "Warm tortillas",
      "Layer beans, eggs, and avocado",
      "Roll and serve with salsa"
    ],
    tags: ["breakfast burrito", "eggs", "vegetables", "protein", "meal", "vegetarian"]
  },
  {
    id: "vegetarian-beef-wellington",
    title: "Beef Wellington",
    description: "Classic beef wellington with mushroom duxelles and puff pastry.",
    category: "vegetarian",
    difficulty: "hard",
    meal: "dinner",
    prepTime: 30,
    cookTime: 45,
    servings: 4,
    calories: 580,
    protein: 32,
    author: "Joel Rivas",
    ingredients: [
      "1 lb beef tenderloin",
      "1 sheet puff pastry",
      "2 cups mushrooms, finely chopped",
      "2 shallots, minced",
      "2 cloves garlic",
      "1 egg for egg wash"
    ],
    instructions: [
      "Sear beef on all sides",
      "Make mushroom duxelles",
      "Wrap beef in duxelles and prosciutto",
      "Wrap in puff pastry and brush with egg wash",
      "Bake at 400°F for 45 minutes"
    ],
    tags: ["beef wellington", "mushroom duxelles", "puff pastry", "classic", "vegetarian"]
  },
  {
    id: "vegetarian-truffle-pasta",
    title: "Truffle Pasta",
    description: "Luxurious truffle pasta with parmesan and herbs.",
    category: "vegetarian",
    difficulty: "medium",
    meal: "dinner",
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    calories: 420,
    protein: 14,
    author: "Atin Jain",
    ingredients: [
      "1/2 lb pasta",
      "2 tbsp truffle oil",
      "1/2 cup parmesan cheese",
      "2 tbsp butter",
      "Fresh herbs (parsley, thyme)",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Cook pasta according to package instructions",
      "Reserve 1 cup pasta water",
      "Toss pasta with truffle oil, butter, and parmesan",
      "Add pasta water to create sauce",
      "Garnish with herbs"
    ],
    tags: ["truffle pasta", "parmesan", "herbs", "luxurious", "vegetarian", "dinner"]
  },

  // Non-Vegetarian Recipes
  {
    id: "nonveg-chicken-stir-fry",
    title: "Chicken Stir Fry",
    description: "Quick and healthy stir fry with lean chicken and fresh vegetables.",
    category: "non-vegetarian",
    difficulty: "medium",
    meal: "dinner",
    prepTime: 15,
    cookTime: 10,
    servings: 4,
    calories: 320,
    protein: 35,
    author: "Atin Jain",
    ingredients: [
      "1 lb chicken breast, sliced",
      "3 cups mixed vegetables",
      "3 tbsp soy sauce",
      "2 cloves garlic, minced",
      "1 tbsp ginger, grated",
      "2 tbsp oil"
    ],
    instructions: [
      "Stir-fry chicken until golden",
      "Add vegetables and aromatics",
      "Season with soy sauce",
      "Serve over rice or noodles"
    ],
    tags: ["chicken", "stir fry", "vegetables", "soy sauce", "protein", "healthy", "dinner", "non-vegetarian"]
  },
  {
    id: "nonveg-protein-bites",
    title: "Protein Bites",
    description: "High-protein snack bites with nuts and dried fruits.",
    category: "non-vegetarian",
    difficulty: "easy",
    meal: "snack",
    prepTime: 15,
    cookTime: 0,
    servings: 12,
    calories: 140,
    protein: 8,
    author: "Joel Rivas",
    ingredients: [
      "1 cup protein powder",
      "1/2 cup nuts",
      "1/2 cup dried fruits",
      "2 tbsp honey",
      "2 tbsp coconut oil"
    ],
    instructions: [
      "Mix all ingredients in a bowl",
      "Form into 12 balls",
      "Refrigerate for 30 minutes",
      "Store in an airtight container"
    ],
    tags: ["protein bites", "nuts", "dried fruits", "snack", "healthy", "non-vegetarian"]
  },
  {
    id: "nonveg-grilled-chicken-breast",
    title: "Grilled Chicken Breast",
    description: "Perfectly grilled chicken breast with herbs and lemon.",
    category: "non-vegetarian",
    difficulty: "medium",
    meal: "dinner",
    prepTime: 10,
    cookTime: 20,
    servings: 2,
    calories: 280,
    protein: 42,
    author: "Atin Jain",
    ingredients: [
      "2 chicken breasts",
      "2 tbsp olive oil",
      "2 tbsp herbs (rosemary, thyme)",
      "1 lemon",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Season chicken with herbs and lemon",
      "Preheat grill to medium-high",
      "Grill for 8-10 minutes per side",
      "Let rest for 5 minutes before slicing"
    ],
    tags: ["chicken breast", "grilled", "herbs", "lemon", "protein", "healthy", "dinner", "non-vegetarian"]
  },
  {
    id: "nonveg-beef-stir-fry",
    title: "Beef Stir Fry",
    description: "Quick beef stir fry with vegetables and soy sauce.",
    category: "non-vegetarian",
    difficulty: "medium",
    meal: "dinner",
    prepTime: 15,
    cookTime: 10,
    servings: 4,
    calories: 380,
    protein: 38,
    author: "Joel Rivas",
    ingredients: [
      "1 lb beef strips",
      "3 cups mixed vegetables",
      "3 tbsp soy sauce",
      "2 cloves garlic, minced",
      "1 tbsp ginger, grated",
      "2 tbsp oil"
    ],
    instructions: [
      "Stir-fry beef until browned",
      "Add vegetables and aromatics",
      "Season with soy sauce",
      "Serve over rice"
    ],
    tags: ["beef", "stir fry", "vegetables", "soy sauce", "protein", "dinner", "non-vegetarian"]
  },
  {
    id: "nonveg-salmon-poke-bowl",
    title: "Salmon Poke Bowl",
    description: "Fresh salmon poke bowl with rice and vegetables.",
    category: "non-vegetarian",
    difficulty: "medium",
    meal: "dinner",
    prepTime: 20,
    cookTime: 0,
    servings: 2,
    calories: 420,
    protein: 32,
    author: "Atin Jain",
    ingredients: [
      "1/2 lb fresh salmon, cubed",
      "1 cup sushi rice",
      "1 avocado, sliced",
      "1 cucumber, diced",
      "2 tbsp soy sauce",
      "1 tbsp sesame oil",
      "Sesame seeds"
    ],
    instructions: [
      "Cook sushi rice and let cool",
      "Marinate salmon in soy sauce and sesame oil",
      "Assemble bowl with rice, salmon, and vegetables",
      "Garnish with sesame seeds"
    ],
    tags: ["salmon", "poke bowl", "rice", "vegetables", "hawaiian", "healthy", "non-vegetarian"]
  },
  {
    id: "nonveg-duck-confit",
    title: "Duck Confit",
    description: "Classic French duck confit with crispy skin and tender meat.",
    category: "non-vegetarian",
    difficulty: "hard",
    meal: "dinner",
    prepTime: 30,
    cookTime: 180,
    servings: 4,
    calories: 580,
    protein: 45,
    author: "Joel Rivas",
    ingredients: [
      "4 duck legs",
      "1 lb duck fat",
      "4 cloves garlic",
      "4 sprigs thyme",
      "2 bay leaves",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Season duck legs with salt and herbs",
      "Refrigerate overnight",
      "Cover with duck fat in a pot",
      "Cook at 200°F for 3 hours",
      "Crisp skin under broiler before serving"
    ],
    tags: ["duck confit", "French", "crispy", "tender", "classic", "non-vegetarian"]
  },
  {
    id: "nonveg-lobster-thermidor",
    title: "Lobster Thermidor",
    description: "Classic French lobster thermidor with cognac cream sauce and gruyère cheese.",
    category: "non-vegetarian",
    difficulty: "hard",
    meal: "dinner",
    prepTime: 45,
    cookTime: 30,
    servings: 2,
    calories: 680,
    protein: 28,
    author: "Joel Rivas",
    ingredients: [
      "2 lobster tails",
      "1/4 cup cognac",
      "1/2 cup heavy cream",
      "1/2 cup gruyère cheese",
      "2 tbsp butter",
      "2 tbsp flour",
      "Fresh herbs"
    ],
    instructions: [
      "Cook lobster and remove meat",
      "Make cognac cream sauce",
      "Combine lobster with sauce",
      "Top with gruyère and broil",
      "Garnish with herbs"
    ],
    tags: ["lobster thermidor", "French", "cognac", "cream sauce", "gruyère", "non-vegetarian"]
  }
] 