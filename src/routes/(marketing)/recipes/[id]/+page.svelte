<script lang="ts">
  import { page } from "$app/stores"
  import { WebsiteName } from "../../../../config"

  type RecipeCategory = "vegan" | "vegetarian" | "non-vegetarian"
  type RecipeDifficulty = "easy" | "medium" | "hard"
  type RecipeMeal = "breakfast" | "lunch" | "dinner" | "snack" | "dessert"

  interface Recipe {
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
    author: "Joel Rivas" | "Atin Jain"
    ingredients: string[]
    instructions: string[]
    tags: string[]
    image?: string
  }

  const recipes: Recipe[] = [
    // Vegan Recipes
    {
      id: "vegan-buddha-bowl",
      title: "Rainbow Buddha Bowl",
      description:
        "A colorful, nutrient-packed bowl with quinoa, roasted vegetables, and tahini dressing.",
      category: "vegan",
      difficulty: "easy",
      meal: "lunch",
      prepTime: 15,
      cookTime: 25,
      servings: 2,
      calories: 420,
      author: "Atin Jain",
      ingredients: [
        "1 cup quinoa",
        "1 sweet potato, cubed",
        "1 cup chickpeas",
        "2 cups kale",
        "1 avocado",
        "1/4 cup tahini",
        "2 tbsp lemon juice",
        "1 tbsp maple syrup",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Cook quinoa according to package instructions",
        "Roast sweet potato and chickpeas at 400°F for 20 minutes",
        "Massage kale with olive oil and salt",
        "Make dressing by whisking tahini, lemon juice, maple syrup, and water",
        "Assemble bowl with quinoa base, vegetables, and dressing",
      ],
      tags: ["high-protein", "gluten-free", "meal-prep"],
    },
    {
      id: "vegan-chocolate-smoothie",
      title: "Chocolate Protein Smoothie",
      description:
        "A rich, creamy smoothie packed with plant protein and antioxidants.",
      category: "vegan",
      difficulty: "easy",
      meal: "breakfast",
      prepTime: 5,
      cookTime: 0,
      servings: 1,
      calories: 280,
      author: "Atin Jain",
      ingredients: [
        "1 frozen banana",
        "2 tbsp cocoa powder",
        "1 scoop plant protein powder",
        "1 cup almond milk",
        "1 tbsp almond butter",
        "1 tbsp chia seeds",
        "1 tsp vanilla extract",
      ],
      instructions: [
        "Add all ingredients to a high-speed blender",
        "Blend until smooth and creamy",
        "Add more almond milk if too thick",
        "Pour into a glass and enjoy immediately",
      ],
      tags: ["high-protein", "quick", "post-workout"],
    },
    {
      id: "vegan-lentil-curry",
      title: "Spicy Red Lentil Curry",
      description:
        "A warming, aromatic curry that's perfect for meal prep and freezing.",
      category: "vegan",
      difficulty: "medium",
      meal: "dinner",
      prepTime: 10,
      cookTime: 30,
      servings: 4,
      calories: 380,
      author: "Atin Jain",
      ingredients: [
        "1 cup red lentils",
        "1 onion, diced",
        "3 cloves garlic, minced",
        "1 tbsp ginger, grated",
        "2 tbsp curry powder",
        "1 can coconut milk",
        "2 cups vegetable broth",
        "1 cup spinach",
        "1 tbsp coconut oil",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Sauté onion, garlic, and ginger in coconut oil",
        "Add curry powder and cook for 1 minute",
        "Add lentils, coconut milk, and broth",
        "Simmer for 25 minutes until lentils are tender",
        "Stir in spinach and season to taste",
      ],
      tags: ["high-protein", "meal-prep", "freezer-friendly"],
    },

    // Vegetarian Recipes
    {
      id: "vegetarian-egg-muffins",
      title: "Spinach and Feta Egg Muffins",
      description:
        "Protein-packed breakfast muffins perfect for meal prep and on-the-go mornings.",
      category: "vegetarian",
      difficulty: "easy",
      meal: "breakfast",
      prepTime: 10,
      cookTime: 20,
      servings: 6,
      calories: 180,
      author: "Atin Jain",
      ingredients: [
        "6 large eggs",
        "1 cup spinach, chopped",
        "1/2 cup feta cheese, crumbled",
        "1/4 cup milk",
        "1/4 cup bell peppers, diced",
        "1/4 cup cherry tomatoes, halved",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Preheat oven to 350°F and grease a muffin tin",
        "Whisk eggs and milk in a large bowl",
        "Add vegetables and feta cheese",
        "Pour mixture into muffin cups",
        "Bake for 18-20 minutes until set",
      ],
      tags: ["high-protein", "meal-prep", "quick"],
    },
    {
      id: "vegetarian-quinoa-salad",
      title: "Mediterranean Quinoa Salad",
      description:
        "A refreshing salad packed with Mediterranean flavors and wholesome ingredients.",
      category: "vegetarian",
      difficulty: "easy",
      meal: "lunch",
      prepTime: 15,
      cookTime: 15,
      servings: 4,
      calories: 320,
      author: "Atin Jain",
      ingredients: [
        "1 cup quinoa",
        "1 cucumber, diced",
        "1 cup cherry tomatoes, halved",
        "1/2 cup kalamata olives",
        "1/2 cup feta cheese",
        "1/4 cup red onion, diced",
        "2 tbsp olive oil",
        "1 tbsp lemon juice",
        "1 tsp dried oregano",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Cook quinoa according to package instructions",
        "Let quinoa cool completely",
        "Combine all vegetables and cheese",
        "Make dressing with olive oil, lemon juice, and oregano",
        "Toss everything together and chill for 30 minutes",
      ],
      tags: ["gluten-free", "meal-prep", "refreshing"],
    },

    // Non-Vegetarian Recipes
    {
      id: "nonveg-grilled-salmon",
      title: "Lemon Herb Grilled Salmon",
      description:
        "A simple yet elegant grilled salmon with fresh herbs and citrus.",
      category: "non-vegetarian",
      difficulty: "easy",
      meal: "dinner",
      prepTime: 10,
      cookTime: 12,
      servings: 2,
      calories: 380,
      author: "Joel Rivas",
      ingredients: [
        "2 salmon fillets (6 oz each)",
        "2 lemons",
        "2 tbsp olive oil",
        "2 tbsp fresh dill, chopped",
        "2 tbsp fresh parsley, chopped",
        "2 cloves garlic, minced",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Preheat grill to medium-high heat",
        "Season salmon with salt and pepper",
        "Mix olive oil, herbs, garlic, and lemon juice",
        "Brush mixture over salmon",
        "Grill for 6 minutes per side until flaky",
      ],
      tags: ["high-protein", "omega-3", "quick"],
    },
    {
      id: "nonveg-turkey-burger",
      title: "Lean Turkey Burger",
      description:
        "A juicy, flavorful turkey burger that's much healthier than beef.",
      category: "non-vegetarian",
      difficulty: "easy",
      meal: "lunch",
      prepTime: 10,
      cookTime: 15,
      servings: 4,
      calories: 280,
      author: "Joel Rivas",
      ingredients: [
        "1 lb ground turkey",
        "1/4 cup breadcrumbs",
        "1 egg",
        "1/4 cup onion, diced",
        "2 tbsp Worcestershire sauce",
        "1 tbsp Dijon mustard",
        "1 tsp garlic powder",
        "Salt and pepper to taste",
        "4 whole wheat buns",
      ],
      instructions: [
        "Mix all ingredients except buns in a bowl",
        "Form into 4 patties",
        "Grill or pan-fry for 6-8 minutes per side",
        "Serve on whole wheat buns with your favorite toppings",
      ],
      tags: ["high-protein", "lean", "family-friendly"],
    },
    {
      id: "nonveg-shrimp-tacos",
      title: "Spicy Shrimp Tacos",
      description:
        "Fresh, zesty shrimp tacos with a healthy slaw and avocado crema.",
      category: "non-vegetarian",
      difficulty: "easy",
      meal: "dinner",
      prepTime: 15,
      cookTime: 8,
      servings: 4,
      calories: 320,
      author: "Joel Rivas",
      ingredients: [
        "1 lb shrimp, peeled and deveined",
        "8 corn tortillas",
        "1 avocado",
        "1 cup cabbage slaw",
        "2 limes",
        "2 tbsp olive oil",
        "1 tsp chili powder",
        "1 tsp cumin",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Season shrimp with spices and lime juice",
        "Sauté shrimp for 3-4 minutes until pink",
        "Warm tortillas",
        "Make avocado crema by blending avocado and lime",
        "Assemble tacos with shrimp, slaw, and crema",
      ],
      tags: ["quick", "gluten-free", "fresh"],
    },
    {
      id: "nonveg-chicken-stir-fry",
      title: "Asian Chicken Stir-Fry",
      description:
        "A quick and healthy stir-fry loaded with vegetables and lean protein.",
      category: "non-vegetarian",
      difficulty: "easy",
      meal: "dinner",
      prepTime: 15,
      cookTime: 10,
      servings: 4,
      calories: 320,
      author: "Joel Rivas",
      ingredients: [
        "1 lb chicken breast, sliced",
        "2 cups broccoli florets",
        "1 bell pepper, sliced",
        "1 cup snap peas",
        "2 tbsp soy sauce",
        "1 tbsp sesame oil",
        "2 cloves garlic, minced",
        "1 tbsp ginger, grated",
        "2 tbsp cornstarch",
        "1/4 cup chicken broth",
      ],
      instructions: [
        "Marinate chicken in soy sauce and cornstarch",
        "Stir-fry chicken until golden, set aside",
        "Stir-fry vegetables until crisp-tender",
        "Add garlic and ginger, cook for 30 seconds",
        "Return chicken, add broth, and simmer",
      ],
      tags: ["high-protein", "quick", "gluten-free"],
    },

    // Snack Recipes
    {
      id: "vegan-energy-balls",
      title: "No-Bake Energy Balls",
      description:
        "Nutritious, protein-packed energy balls perfect for pre or post-workout snacks.",
      category: "vegan",
      difficulty: "easy",
      meal: "snack",
      prepTime: 10,
      cookTime: 0,
      servings: 12,
      calories: 120,
      author: "Joel Rivas",
      ingredients: [
        "1 cup dates, pitted",
        "1/2 cup almonds",
        "1/4 cup chia seeds",
        "2 tbsp almond butter",
        "1 tbsp maple syrup",
        "1 tsp vanilla extract",
        "1/4 cup shredded coconut",
        "Pinch of salt",
      ],
      instructions: [
        "Soak dates in warm water for 10 minutes",
        "Process almonds in food processor until finely chopped",
        "Add dates and process until mixture forms a ball",
        "Add remaining ingredients and pulse to combine",
        "Roll into 12 small balls and refrigerate for 30 minutes",
      ],
      tags: ["high-protein", "no-bake", "meal-prep"],
    },
    {
      id: "vegetarian-hummus-plate",
      title: "Mediterranean Hummus Plate",
      description:
        "Creamy homemade hummus with fresh vegetables and whole grain crackers.",
      category: "vegetarian",
      difficulty: "easy",
      meal: "snack",
      prepTime: 15,
      cookTime: 0,
      servings: 4,
      calories: 180,
      author: "Atin Jain",
      ingredients: [
        "1 can chickpeas, drained",
        "2 tbsp tahini",
        "2 tbsp olive oil",
        "2 cloves garlic",
        "1 lemon, juiced",
        "1/2 tsp cumin",
        "Salt and pepper to taste",
        "Fresh vegetables for dipping",
        "Whole grain crackers",
      ],
      instructions: [
        "Blend chickpeas, tahini, olive oil, and garlic",
        "Add lemon juice and cumin, blend until smooth",
        "Season with salt and pepper",
        "Serve with fresh vegetables and crackers",
        "Drizzle with olive oil and sprinkle with paprika",
      ],
      tags: ["high-protein", "gluten-free", "quick"],
    },
    {
      id: "nonveg-protein-bites",
      title: "Greek Yogurt Protein Bites",
      description:
        "Creamy protein bites made with Greek yogurt and honey for a healthy snack.",
      category: "non-vegetarian",
      difficulty: "easy",
      meal: "snack",
      prepTime: 10,
      cookTime: 0,
      servings: 8,
      calories: 90,
      author: "Joel Rivas",
      ingredients: [
        "1 cup Greek yogurt",
        "2 tbsp honey",
        "1/4 cup protein powder",
        "1/4 cup granola",
        "2 tbsp chopped nuts",
        "1 tsp vanilla extract",
        "Fresh berries for topping",
      ],
      instructions: [
        "Mix Greek yogurt, honey, and vanilla",
        "Fold in protein powder until smooth",
        "Spoon mixture into small bowls or ramekins",
        "Top with granola, nuts, and fresh berries",
        "Refrigerate for 30 minutes before serving",
      ],
      tags: ["high-protein", "quick", "refreshing"],
    },

    // Dessert Recipes
    {
      id: "vegan-chocolate-avocado-mousse",
      title: "Chocolate Avocado Mousse",
      description:
        "Rich, creamy chocolate mousse made with avocado for a healthy dessert.",
      category: "vegan",
      difficulty: "easy",
      meal: "dessert",
      prepTime: 10,
      cookTime: 0,
      servings: 4,
      calories: 220,
      author: "Atin Jain",
      ingredients: [
        "2 ripe avocados",
        "1/4 cup cocoa powder",
        "1/4 cup maple syrup",
        "1 tsp vanilla extract",
        "1/4 cup almond milk",
        "Pinch of salt",
        "Fresh berries for garnish",
      ],
      instructions: [
        "Scoop avocado flesh into a food processor",
        "Add cocoa powder, maple syrup, and vanilla",
        "Blend until smooth and creamy",
        "Add almond milk if needed for consistency",
        "Chill for 30 minutes and serve with berries",
      ],
      tags: ["gluten-free", "no-bake", "refined-sugar-free"],
    },
    {
      id: "vegetarian-apple-crisp",
      title: "Healthy Apple Crisp",
      description:
        "A lighter version of apple crisp with oats and minimal added sugar.",
      category: "vegetarian",
      difficulty: "medium",
      meal: "dessert",
      prepTime: 15,
      cookTime: 35,
      servings: 6,
      calories: 280,
      author: "Joel Rivas",
      ingredients: [
        "4 apples, sliced",
        "1 cup rolled oats",
        "1/2 cup whole wheat flour",
        "1/4 cup brown sugar",
        "1/4 cup chopped walnuts",
        "2 tbsp butter",
        "1 tsp cinnamon",
        "1/2 tsp nutmeg",
        "1 tbsp maple syrup",
      ],
      instructions: [
        "Preheat oven to 375°F",
        "Arrange apple slices in a baking dish",
        "Mix oats, flour, sugar, and spices",
        "Cut in butter until crumbly",
        "Sprinkle topping over apples and bake for 35 minutes",
      ],
      tags: ["fiber-rich", "comfort-food", "seasonal"],
    },
    {
      id: "vegetarian-protein-ice-cream",
      title: "Protein Ice Cream",
      description:
        "Creamy, protein-rich ice cream made with Greek yogurt and protein powder.",
      category: "vegetarian",
      difficulty: "medium",
      meal: "dessert",
      prepTime: 10,
      cookTime: 0,
      servings: 4,
      calories: 180,
      author: "Joel Rivas",
      ingredients: [
        "2 cups Greek yogurt",
        "1 scoop vanilla protein powder",
        "2 tbsp honey",
        "1 tsp vanilla extract",
        "1/4 cup mixed berries",
        "1 tbsp dark chocolate chips",
      ],
      instructions: [
        "Mix Greek yogurt, protein powder, honey, and vanilla",
        "Pour into a freezer-safe container",
        "Freeze for 2-3 hours, stirring every 30 minutes",
        "Add berries and chocolate chips before serving",
        "Let soften for 5 minutes before scooping",
      ],
      tags: ["high-protein", "frozen", "post-workout"],
    },

    // More Joel Rivas Recipes
    {
      id: "vegetarian-mexican-quinoa",
      title: "Mexican Quinoa Bowl",
      description:
        "A flavorful, protein-packed quinoa bowl with Mexican spices and fresh vegetables.",
      category: "vegetarian",
      difficulty: "easy",
      meal: "lunch",
      prepTime: 15,
      cookTime: 20,
      servings: 4,
      calories: 350,
      author: "Joel Rivas",
      ingredients: [
        "1 cup quinoa",
        "1 can black beans, drained",
        "1 cup corn kernels",
        "1 bell pepper, diced",
        "1 avocado, sliced",
        "1/4 cup red onion, diced",
        "2 tbsp lime juice",
        "2 tbsp olive oil",
        "1 tsp cumin",
        "1 tsp chili powder",
        "1/4 cup cilantro, chopped",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Cook quinoa according to package instructions",
        "Mix quinoa with black beans, corn, and bell pepper",
        "Add lime juice, olive oil, and spices",
        "Fold in avocado and red onion",
        "Garnish with cilantro and serve warm or cold",
      ],
      tags: ["high-protein", "gluten-free", "meal-prep"],
    },
    {
      id: "vegetarian-caprese-pasta",
      title: "Caprese Pasta Salad",
      description:
        "A fresh, Italian-inspired pasta salad with mozzarella, tomatoes, and basil.",
      category: "vegetarian",
      difficulty: "easy",
      meal: "lunch",
      prepTime: 10,
      cookTime: 12,
      servings: 6,
      calories: 320,
      author: "Joel Rivas",
      ingredients: [
        "12 oz penne pasta",
        "8 oz fresh mozzarella, cubed",
        "2 cups cherry tomatoes, halved",
        "1/2 cup fresh basil, torn",
        "2 tbsp balsamic vinegar",
        "3 tbsp olive oil",
        "2 cloves garlic, minced",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Cook pasta according to package instructions",
        "Drain and rinse with cold water",
        "Combine pasta with mozzarella, tomatoes, and basil",
        "Whisk together vinegar, oil, and garlic for dressing",
        "Toss with dressing and season to taste",
      ],
      tags: ["quick", "refreshing", "summer"],
    },
    {
      id: "nonveg-grilled-chicken-breast",
      title: "Perfect Grilled Chicken Breast",
      description:
        "Juicy, flavorful grilled chicken breast with a simple herb marinade.",
      category: "non-vegetarian",
      difficulty: "easy",
      meal: "dinner",
      prepTime: 10,
      cookTime: 15,
      servings: 4,
      calories: 280,
      author: "Joel Rivas",
      ingredients: [
        "4 chicken breasts (6 oz each)",
        "3 tbsp olive oil",
        "2 tbsp lemon juice",
        "2 cloves garlic, minced",
        "1 tsp dried oregano",
        "1 tsp dried thyme",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Marinate chicken in oil, lemon juice, garlic, and herbs",
        "Let sit for 30 minutes at room temperature",
        "Preheat grill to medium-high heat",
        "Grill for 6-8 minutes per side until internal temperature reaches 165°F",
        "Let rest for 5 minutes before slicing",
      ],
      tags: ["high-protein", "lean", "grilling"],
    },
    {
      id: "nonveg-beef-stir-fry",
      title: "Beef and Broccoli Stir-Fry",
      description:
        "A classic stir-fry with tender beef, crisp broccoli, and savory sauce.",
      category: "non-vegetarian",
      difficulty: "medium",
      meal: "dinner",
      prepTime: 15,
      cookTime: 10,
      servings: 4,
      calories: 380,
      author: "Joel Rivas",
      ingredients: [
        "1 lb flank steak, sliced thin",
        "3 cups broccoli florets",
        "2 tbsp soy sauce",
        "1 tbsp oyster sauce",
        "1 tbsp cornstarch",
        "2 cloves garlic, minced",
        "1 tbsp ginger, grated",
        "2 tbsp vegetable oil",
        "1/4 cup beef broth",
        "2 green onions, sliced",
      ],
      instructions: [
        "Marinate beef in soy sauce and cornstarch for 15 minutes",
        "Stir-fry beef until browned, set aside",
        "Stir-fry broccoli until crisp-tender",
        "Add garlic and ginger, cook for 30 seconds",
        "Return beef, add broth and oyster sauce, simmer until thickened",
      ],
      tags: ["high-protein", "quick", "classic"],
    },
    {
      id: "vegetarian-breakfast-burrito",
      title: "Vegetarian Breakfast Burrito",
      description:
        "A hearty breakfast burrito with eggs, beans, and vegetables.",
      category: "vegetarian",
      difficulty: "easy",
      meal: "breakfast",
      prepTime: 10,
      cookTime: 15,
      servings: 4,
      calories: 420,
      author: "Joel Rivas",
      ingredients: [
        "8 large eggs",
        "1 can refried beans",
        "4 large tortillas",
        "1 cup shredded cheese",
        "1 bell pepper, diced",
        "1/2 cup salsa",
        "1 avocado, sliced",
        "2 tbsp olive oil",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Scramble eggs with bell pepper",
        "Warm tortillas and spread with refried beans",
        "Add eggs, cheese, and salsa to each tortilla",
        "Roll up and serve with avocado slices",
        "Optional: grill for 2 minutes per side for crispy exterior",
      ],
      tags: ["high-protein", "meal-prep", "filling"],
    },
    {
      id: "nonveg-salmon-poke-bowl",
      title: "Salmon Poke Bowl",
      description:
        "A fresh, Hawaiian-inspired bowl with raw salmon, rice, and vegetables.",
      category: "non-vegetarian",
      difficulty: "medium",
      meal: "lunch",
      prepTime: 20,
      cookTime: 0,
      servings: 2,
      calories: 450,
      author: "Joel Rivas",
      ingredients: [
        "8 oz fresh salmon, cubed",
        "1 cup sushi rice",
        "1 cucumber, diced",
        "1 avocado, sliced",
        "1/4 cup edamame",
        "2 tbsp soy sauce",
        "1 tbsp sesame oil",
        "1 tbsp rice vinegar",
        "1 tsp ginger, grated",
        "1 tbsp sesame seeds",
        "1 sheet nori, torn",
      ],
      instructions: [
        "Cook sushi rice according to package instructions",
        "Marinate salmon in soy sauce, sesame oil, and ginger",
        "Arrange rice in bowls",
        "Top with salmon, vegetables, and edamame",
        "Garnish with sesame seeds and nori",
      ],
      tags: ["high-protein", "fresh", "elegant"],
    },

    // Hard Level Recipes
    {
      id: "vegan-risotto-ai-funghi",
      title: "Wild Mushroom Risotto",
      description:
        "A sophisticated, creamy risotto with wild mushrooms, white wine, and truffle oil.",
      category: "vegan",
      difficulty: "hard",
      meal: "dinner",
      prepTime: 20,
      cookTime: 35,
      servings: 4,
      calories: 420,
      author: "Joel Rivas",
      ingredients: [
        "1 1/2 cups arborio rice",
        "8 oz mixed wild mushrooms (shiitake, oyster, chanterelle)",
        "1/2 cup dry white wine",
        "6 cups vegetable broth, kept warm",
        "1 large shallot, finely diced",
        "3 cloves garlic, minced",
        "1/4 cup nutritional yeast",
        "2 tbsp truffle oil",
        "2 tbsp olive oil",
        "1/4 cup fresh parsley, chopped",
        "1/4 cup vegan parmesan",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Sauté mushrooms in olive oil until golden, set aside",
        "In the same pan, sauté shallot and garlic until translucent",
        "Add rice and toast for 2 minutes until slightly translucent",
        "Deglaze with white wine and stir until absorbed",
        "Add warm broth one ladle at a time, stirring constantly",
        "Continue adding broth and stirring for 25-30 minutes",
        "Add mushrooms, nutritional yeast, and truffle oil",
        "Finish with vegan parmesan and parsley",
        "Let rest for 2 minutes before serving",
      ],
      tags: ["elegant", "date-night", "restaurant-quality"],
    },
    {
      id: "vegetarian-beef-wellington",
      title: "Vegetarian Wellington",
      description:
        "A show-stopping vegetarian version of beef wellington with portobello mushrooms and puff pastry.",
      category: "vegetarian",
      difficulty: "hard",
      meal: "dinner",
      prepTime: 45,
      cookTime: 40,
      servings: 6,
      calories: 480,
      author: "Joel Rivas",
      ingredients: [
        "6 large portobello mushrooms",
        "2 sheets puff pastry, thawed",
        "1 cup spinach, wilted",
        "1/2 cup caramelized onions",
        "1/4 cup goat cheese",
        "2 tbsp Dijon mustard",
        "1 egg, beaten",
        "2 tbsp olive oil",
        "2 cloves garlic, minced",
        "1 tsp thyme",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Marinate portobellos in olive oil, garlic, and thyme for 30 minutes",
        "Grill portobellos until tender, about 8 minutes per side",
        "Roll out puff pastry and layer with spinach and caramelized onions",
        "Place portobellos on top and spread with goat cheese",
        "Wrap tightly in pastry, sealing edges with egg wash",
        "Score the top and brush with remaining egg wash",
        "Bake at 400°F for 25-30 minutes until golden brown",
        "Let rest for 10 minutes before slicing",
      ],
      tags: ["elegant", "special-occasion", "impressive"],
    },
    {
      id: "nonveg-duck-confit",
      title: "Duck Confit",
      description:
        "Classic French duck confit with crispy skin and tender meat, served with roasted potatoes.",
      category: "non-vegetarian",
      difficulty: "hard",
      meal: "dinner",
      prepTime: 30,
      cookTime: 180,
      servings: 4,
      calories: 650,
      author: "Joel Rivas",
      ingredients: [
        "4 duck legs with thighs",
        "1 lb duck fat",
        "4 cloves garlic, crushed",
        "4 sprigs fresh thyme",
        "2 bay leaves",
        "1 tbsp sea salt",
        "1 tsp black peppercorns",
        "1 lb baby potatoes",
        "2 tbsp olive oil",
        "Fresh herbs for garnish",
      ],
      instructions: [
        "Season duck legs with salt and refrigerate overnight",
        "Rinse salt from duck and pat dry",
        "Place duck in a deep baking dish with garlic, thyme, and bay leaves",
        "Cover completely with melted duck fat",
        "Bake at 300°F for 2.5-3 hours until very tender",
        "Remove duck from fat and let cool slightly",
        "Heat a skillet and crisp the skin side for 3-4 minutes",
        "Serve with roasted potatoes and fresh herbs",
      ],
      tags: ["french-cuisine", "special-occasion", "gourmet"],
    },
    {
      id: "vegan-chocolate-souffle",
      title: "Vegan Chocolate Soufflé",
      description:
        "Light, airy chocolate soufflé made without eggs, perfect for a sophisticated dessert.",
      category: "vegan",
      difficulty: "hard",
      meal: "dessert",
      prepTime: 25,
      cookTime: 20,
      servings: 4,
      calories: 280,
      author: "Joel Rivas",
      ingredients: [
        "1/2 cup dark chocolate, chopped",
        "1/4 cup coconut oil",
        "1/4 cup aquafaba (chickpea water)",
        "1/4 cup sugar",
        "1/4 cup all-purpose flour",
        "1/4 cup cocoa powder",
        "1/2 cup almond milk",
        "1 tsp vanilla extract",
        "1/4 tsp cream of tartar",
        "Powdered sugar for dusting",
      ],
      instructions: [
        "Butter and sugar 4 ramekins, refrigerate",
        "Melt chocolate and coconut oil together",
        "Whip aquafaba with cream of tartar until stiff peaks form",
        "Gradually add sugar while continuing to whip",
        "Fold chocolate mixture into whipped aquafaba",
        "Sift flour and cocoa powder, fold in gently",
        "Pour into prepared ramekins",
        "Bake at 375°F for 18-20 minutes",
        "Serve immediately with powdered sugar",
      ],
      tags: ["elegant", "chocolate", "impressive"],
    },
    {
      id: "vegetarian-truffle-pasta",
      title: "Truffle Tagliatelle",
      description:
        "Handmade tagliatelle with black truffle, aged parmesan, and brown butter sauce.",
      category: "vegetarian",
      difficulty: "hard",
      meal: "dinner",
      prepTime: 60,
      cookTime: 15,
      servings: 4,
      calories: 520,
      author: "Joel Rivas",
      ingredients: [
        "2 cups all-purpose flour",
        "3 large eggs",
        "1 tbsp olive oil",
        "1/4 cup black truffle, finely shaved",
        "1/2 cup aged parmesan, grated",
        "4 tbsp unsalted butter",
        "2 tbsp truffle oil",
        "1/4 cup pasta water",
        "1/4 cup fresh parsley, chopped",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Make pasta dough: mix flour, eggs, and olive oil",
        "Knead for 10 minutes, wrap and rest for 30 minutes",
        "Roll out dough and cut into tagliatelle strips",
        "Cook pasta in salted water for 3-4 minutes",
        "Brown butter in a large skillet",
        "Add cooked pasta and truffle oil",
        "Toss with parmesan and truffle shavings",
        "Add pasta water to create sauce",
        "Garnish with parsley and serve immediately",
      ],
      tags: ["handmade-pasta", "truffle", "gourmet"],
    },
    {
      id: "nonveg-lobster-thermidor",
      title: "Lobster Thermidor",
      description:
        "Classic French lobster thermidor with cognac cream sauce and gruyère cheese.",
      category: "non-vegetarian",
      difficulty: "hard",
      meal: "dinner",
      prepTime: 40,
      cookTime: 25,
      servings: 2,
      calories: 580,
      author: "Joel Rivas",
      ingredients: [
        "2 live lobsters (1.5 lbs each)",
        "2 tbsp butter",
        "2 tbsp all-purpose flour",
        "1 cup heavy cream",
        "1/4 cup cognac",
        "1/4 cup gruyère cheese, grated",
        "1 tbsp Dijon mustard",
        "1 tbsp fresh tarragon, chopped",
        "1/4 cup breadcrumbs",
        "1 lemon",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Boil lobsters for 8 minutes, then plunge into ice water",
        "Remove meat from shells, chop into chunks",
        "Make roux with butter and flour",
        "Add cream and cognac, simmer until thickened",
        "Add lobster meat, mustard, and tarragon",
        "Stuff mixture back into lobster shells",
        "Top with breadcrumbs and gruyère",
        "Broil for 5-7 minutes until golden and bubbly",
        "Serve with lemon wedges",
      ],
      tags: ["french-cuisine", "luxury", "special-occasion"],
    },
  ]

  $: recipeId = $page.params.id
  $: currentRecipe = recipes.find((r) => r.id === recipeId)

  function getDifficultyColor(difficulty: RecipeDifficulty) {
    switch (difficulty) {
      case "easy":
        return "badge-success"
      case "medium":
        return "badge-warning"
      case "hard":
        return "badge-error"
      default:
        return "badge-neutral"
    }
  }

  function getCategoryColor(category: RecipeCategory) {
    switch (category) {
      case "vegan":
        return "badge-primary"
      case "vegetarian":
        return "badge-secondary"
      case "non-vegetarian":
        return "badge-accent"
      default:
        return "badge-neutral"
    }
  }
</script>

<svelte:head>
  <title>{currentRecipe?.title || "Recipe"} - {WebsiteName}</title>
  <meta
    name="description"
    content={currentRecipe?.description ||
      "Delicious healthy recipe from Driven Daily."}
  />
</svelte:head>

{#if currentRecipe}
  <div class="py-8 lg:py-12 px-6 max-w-4xl mx-auto">
    <!-- Recipe Header -->
    <div class="mb-8">
      <a href="/recipes" class="btn btn-outline btn-sm mb-4">
        ← Back to Recipes
      </a>

      <div class="text-center mb-8">
        <h1
          class="text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
        >
          {currentRecipe.title}
        </h1>
        <p class="text-xl text-slate-600 mb-6">
          {currentRecipe.description}
        </p>

        <!-- Recipe Meta -->
        <div class="flex flex-wrap justify-center gap-4 mb-6">
          <div
            class="badge {getCategoryColor(currentRecipe.category)} badge-lg"
          >
            {currentRecipe.category}
          </div>
          <div
            class="badge {getDifficultyColor(
              currentRecipe.difficulty,
            )} badge-lg"
          >
            {currentRecipe.difficulty}
          </div>
          <div class="badge badge-neutral badge-lg">
            {currentRecipe.meal}
          </div>
        </div>

        <!-- Recipe Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div class="text-center">
            <div class="text-2xl font-bold text-primary">
              {currentRecipe.prepTime}
            </div>
            <div class="text-sm text-slate-600">Prep Time (min)</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-primary">
              {currentRecipe.cookTime}
            </div>
            <div class="text-sm text-slate-600">Cook Time (min)</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-primary">
              {currentRecipe.servings}
            </div>
            <div class="text-sm text-slate-600">Servings</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-primary">
              {currentRecipe.calories}
            </div>
            <div class="text-sm text-slate-600">Calories</div>
          </div>
        </div>

        <!-- Author -->
        <div class="text-center mb-8">
          <p class="text-slate-600">
            Recipe by <span class="font-semibold text-primary"
              >{currentRecipe.author}</span
            >
          </p>
        </div>
      </div>
    </div>

    <div class="grid lg:grid-cols-2 gap-12">
      <!-- Ingredients -->
      <div class="card bg-white shadow-lg border border-primary/10">
        <div class="card-body">
          <h2 class="text-2xl font-bold mb-6">Ingredients</h2>
          <ul class="space-y-3">
            {#each currentRecipe.ingredients as ingredient}
              <li class="flex items-start gap-3">
                <div
                  class="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"
                ></div>
                <span>{ingredient}</span>
              </li>
            {/each}
          </ul>
        </div>
      </div>

      <!-- Instructions -->
      <div class="card bg-white shadow-lg border border-primary/10">
        <div class="card-body">
          <h2 class="text-2xl font-bold mb-6">Instructions</h2>
          <ol class="space-y-4">
            {#each currentRecipe.instructions as instruction, index}
              <li class="flex gap-4">
                <div
                  class="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0"
                >
                  {index + 1}
                </div>
                <span>{instruction}</span>
              </li>
            {/each}
          </ol>
        </div>
      </div>
    </div>

    <!-- Recipe Tags -->
    <div class="mt-8">
      <h3 class="text-xl font-bold mb-4">Recipe Tags</h3>
      <div class="flex flex-wrap gap-2">
        {#each currentRecipe.tags as tag}
          <span class="badge badge-outline">{tag}</span>
        {/each}
      </div>
    </div>

    <!-- Call to Action -->
    <div class="text-center mt-12">
      <div
        class="card bg-gradient-to-r from-primary to-accent text-white shadow-xl"
      >
        <div class="card-body">
          <h3 class="text-2xl font-bold mb-4">Love This Recipe?</h3>
          <p class="text-lg opacity-90 mb-6">
            Discover more healthy recipes and nutrition tips from our experts.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/recipes" class="btn btn-secondary btn-lg">
              Browse More Recipes
            </a>
            <a
              href="/blog"
              class="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary"
            >
              Read Our Blog
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
{:else}
  <!-- Recipe Not Found -->
  <div class="py-8 lg:py-12 px-6 max-w-4xl mx-auto text-center">
    <div class="text-6xl mb-4">🍽️</div>
    <h1 class="text-4xl font-bold mb-4">Recipe Not Found</h1>
    <p class="text-xl text-slate-600 mb-8">
      Sorry, we couldn't find the recipe you're looking for.
    </p>
    <a href="/recipes" class="btn btn-primary btn-lg"> Browse All Recipes </a>
  </div>
{/if}
