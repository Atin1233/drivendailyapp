const workoutContent = [
  {
    title: "Full Body Beginner",
    description: "A complete full-body workout perfect for beginners, focusing on fundamental movements and proper form.",
    body: "Bodyweight Squats Push-ups Dumbbell Rows Plank Glute Bridges Bird Dogs beginner-friendly no-equipment full-body workout fundamental movements proper form",
    path: "/workouts/full-body-beginner",
    category: "workout"
  },
  {
    title: "Full Body Advanced",
    description: "High-intensity full-body workout for advanced lifters focusing on compound movements and strength building.",
    body: "Deadlifts Bench Press Weighted Pull-ups Overhead Press Front Squats Barbell Rows Weighted Dips Hanging Leg Raises advanced compound movements strength building",
    path: "/workouts/full-body-advanced",
    category: "workout"
  },
  {
    title: "Full Body Functional",
    description: "Functional movement patterns that improve real-world strength and mobility.",
    body: "Turkish Get-ups Kettlebell Swings Goblet Squats Single-leg Deadlifts functional movement patterns real-world strength mobility",
    path: "/workouts/full-body-functional",
    category: "workout"
  },
  {
    title: "Full Body Intermediate",
    description: "Intermediate full-body workout with moderate intensity and compound movements.",
    body: "Squats Deadlifts Bench Press Pull-ups Overhead Press intermediate compound movements moderate intensity",
    path: "/workouts/full-body-intermediate",
    category: "workout"
  },
  {
    title: "Push Day",
    description: "Focus on chest, shoulders, and triceps with this comprehensive push workout.",
    body: "Bench Press Overhead Press Incline Dumbbell Press Lateral Raises Dips Tricep Extensions push chest shoulders triceps",
    path: "/workouts/push-day",
    category: "workout"
  },
  {
    title: "Pull Day",
    description: "Target back and biceps with this effective pull workout focusing on rowing and pulling movements.",
    body: "Deadlifts Pull-ups Barbell Rows Lat Pulldowns Face Pulls Barbell Curls pull back biceps deadlifts",
    path: "/workouts/pull-day",
    category: "workout"
  },
  {
    title: "Legs Day",
    description: "Build strong, powerful legs with this comprehensive lower body workout.",
    body: "Squats Romanian Deadlifts Leg Press Walking Lunges Calf Raises Planks legs squats deadlifts lower-body",
    path: "/workouts/legs-day",
    category: "workout"
  },
  {
    title: "Upper Body",
    description: "Comprehensive upper body workout targeting chest, back, shoulders, and arms.",
    body: "Bench Press Pull-ups Overhead Press Bent Over Rows Dips Barbell Curls upper body chest back shoulders arms",
    path: "/workouts/upper-body",
    category: "workout"
  },
  {
    title: "Lower Body",
    description: "Focused lower body workout for building strong legs and glutes.",
    body: "Squats Deadlifts Leg Press Lunges Calf Raises lower body legs glutes strength",
    path: "/workouts/lower-body",
    category: "workout"
  },
  {
    title: "Chest Day",
    description: "Dedicated chest workout focusing on all areas of the pectoral muscles.",
    body: "Bench Press Incline Press Decline Press Dumbbell Flyes Push-ups chest pectoral muscles hypertrophy",
    path: "/workouts/chest-day",
    category: "workout"
  },
  {
    title: "Back Day",
    description: "Comprehensive back workout targeting width, thickness, and strength.",
    body: "Deadlifts Pull-ups Barbell Rows Lat Pulldowns Face Pulls back width thickness strength",
    path: "/workouts/back-day",
    category: "workout"
  },
  {
    title: "Shoulders Day",
    description: "Focused shoulder workout for building strong, defined deltoids.",
    body: "Overhead Press Lateral Raises Front Raises Rear Delt Flyes Shrugs shoulders deltoids definition",
    path: "/workouts/shoulders-day",
    category: "workout"
  },
  {
    title: "5x5 Strength Program",
    description: "Classic 5x5 strength program focusing on compound movements and progressive overload.",
    body: "Squats Bench Press Barbell Rows Overhead Press Deadlifts strength 5x5 compound-movements progressive-overload",
    path: "/workouts/strength-5x5",
    category: "workout"
  },
  {
    title: "HIIT Cardio",
    description: "High-intensity interval training for maximum calorie burn and cardiovascular fitness.",
    body: "Burpees Mountain Climbers Jump Squats High Knees Plank Jacks hiit cardio fat-burning no-equipment",
    path: "/workouts/hiit-cardio",
    category: "workout"
  },
  {
    title: "Yoga Flow",
    description: "Gentle yoga flow for flexibility, mobility, and stress relief.",
    body: "Sun Salutation Warrior Sequence Balance Poses Hip Openers Forward Folds yoga flexibility mobility stress-relief",
    path: "/workouts/yoga-flow",
    category: "workout"
  }
];
const recipeContent = [
  {
    title: "Quinoa Buddha Bowl",
    description: "A nutritious and colorful bowl packed with protein, fiber, and essential nutrients.",
    body: "quinoa vegetables chickpeas avocado tahini dressing protein fiber nutrients vegetarian healthy bowl",
    path: "/recipes/vegetarian-quinoa-buddha-bowl",
    category: "recipe"
  },
  {
    title: "Lemon Herb Grilled Salmon",
    description: "Perfectly grilled salmon with fresh herbs and citrus flavors.",
    body: "salmon lemon herbs grilled fish protein omega-3 healthy non-vegetarian",
    path: "/recipes/nonveg-lemon-herb-grilled-salmon",
    category: "recipe"
  },
  {
    title: "Lean Turkey Burger",
    description: "A healthy twist on the classic burger using lean ground turkey.",
    body: "turkey burger lean protein healthy alternative non-vegetarian",
    path: "/recipes/nonveg-turkey-burger",
    category: "recipe"
  },
  {
    title: "Spicy Shrimp Tacos",
    description: "Flavorful shrimp tacos with a spicy kick and fresh toppings.",
    body: "shrimp tacos spicy seafood protein non-vegetarian",
    path: "/recipes/nonveg-shrimp-tacos",
    category: "recipe"
  },
  {
    title: "Protein Ice Cream",
    description: "A healthy, protein-rich ice cream alternative that satisfies your sweet tooth.",
    body: "protein ice cream healthy dessert sweet vegetarian",
    path: "/recipes/vegetarian-protein-ice-cream",
    category: "recipe"
  },
  {
    title: "Wild Mushroom Risotto",
    description: "Creamy risotto with wild mushrooms and parmesan cheese.",
    body: "mushroom risotto creamy parmesan vegetarian hard",
    path: "/recipes/vegetarian-wild-mushroom-risotto",
    category: "recipe"
  },
  {
    title: "Duck Confit",
    description: "Classic French duck confit with crispy skin and tender meat.",
    body: "duck confit French crispy tender non-vegetarian hard",
    path: "/recipes/nonveg-duck-confit",
    category: "recipe"
  },
  {
    title: "Vegan Chocolate Soufflé",
    description: "Light and airy chocolate soufflé made without eggs or dairy.",
    body: "chocolate soufflé vegan dairy-free dessert hard",
    path: "/recipes/vegan-chocolate-souffle",
    category: "recipe"
  },
  {
    title: "Rainbow Buddha Bowl",
    description: "A colorful, nutrient-packed bowl with quinoa, roasted vegetables, and tahini dressing.",
    body: "quinoa sweet potato chickpeas kale avocado tahini vegan healthy bowl",
    path: "/recipes/vegan-buddha-bowl",
    category: "recipe"
  },
  {
    title: "Chocolate Protein Smoothie",
    description: "A rich, creamy smoothie packed with plant protein and antioxidants.",
    body: "banana cocoa protein powder almond milk smoothie vegan breakfast",
    path: "/recipes/vegan-chocolate-smoothie",
    category: "recipe"
  },
  {
    title: "Spicy Red Lentil Curry",
    description: "A warming, aromatic curry that's perfect for meal prep and freezing.",
    body: "lentils curry spices coconut milk vegan dinner meal-prep",
    path: "/recipes/vegan-lentil-curry",
    category: "recipe"
  },
  {
    title: "Egg Muffins",
    description: "Protein-packed breakfast muffins perfect for meal prep and on-the-go eating.",
    body: "eggs vegetables cheese muffins breakfast protein meal-prep",
    path: "/recipes/vegetarian-egg-muffins",
    category: "recipe"
  },
  {
    title: "Quinoa Salad",
    description: "Fresh and nutritious quinoa salad with Mediterranean flavors.",
    body: "quinoa vegetables feta olives mediterranean salad vegetarian",
    path: "/recipes/vegetarian-quinoa-salad",
    category: "recipe"
  },
  {
    title: "Chicken Stir Fry",
    description: "Quick and healthy stir fry with lean chicken and fresh vegetables.",
    body: "chicken stir fry vegetables soy sauce protein healthy dinner",
    path: "/recipes/nonveg-chicken-stir-fry",
    category: "recipe"
  },
  {
    title: "Overnight Oats",
    description: "Easy overnight oats with chia seeds and fresh berries.",
    body: "oats chia seeds berries overnight breakfast vegan healthy",
    path: "/recipes/vegan-overnight-oats",
    category: "recipe"
  },
  {
    title: "Cauliflower Steak",
    description: "Roasted cauliflower steak with herbs and lemon.",
    body: "cauliflower steak roasted herbs lemon vegan healthy dinner",
    path: "/recipes/vegan-cauliflower-steak",
    category: "recipe"
  },
  {
    title: "Chickpea Pasta",
    description: "High-protein pasta made with chickpeas and fresh vegetables.",
    body: "chickpea pasta vegetables protein healthy vegetarian dinner",
    path: "/recipes/vegetarian-chickpea-pasta",
    category: "recipe"
  },
  {
    title: "Energy Balls",
    description: "Nutrient-dense energy balls perfect for pre or post-workout snacks.",
    body: "energy balls dates nuts seeds protein snack healthy",
    path: "/recipes/vegan-energy-balls",
    category: "recipe"
  },
  {
    title: "Hummus Plate",
    description: "Fresh hummus with vegetables and whole grain pita.",
    body: "hummus vegetables pita mediterranean vegetarian snack",
    path: "/recipes/vegetarian-hummus-plate",
    category: "recipe"
  },
  {
    title: "Protein Bites",
    description: "High-protein snack bites with nuts and dried fruits.",
    body: "protein bites nuts dried fruits snack healthy non-vegetarian",
    path: "/recipes/nonveg-protein-bites",
    category: "recipe"
  },
  {
    title: "Chocolate Avocado Mousse",
    description: "Creamy chocolate mousse made with avocado for healthy fats.",
    body: "chocolate avocado mousse dessert healthy fats vegan",
    path: "/recipes/vegan-chocolate-avocado-mousse",
    category: "recipe"
  },
  {
    title: "Apple Crisp",
    description: "Warm apple crisp with oats and cinnamon.",
    body: "apple crisp oats cinnamon dessert vegetarian healthy",
    path: "/recipes/vegetarian-apple-crisp",
    category: "recipe"
  },
  {
    title: "Mexican Quinoa",
    description: "Spicy Mexican quinoa with black beans and corn.",
    body: "quinoa black beans corn mexican spicy vegetarian dinner",
    path: "/recipes/vegetarian-mexican-quinoa",
    category: "recipe"
  },
  {
    title: "Caprese Pasta",
    description: "Fresh caprese pasta with tomatoes, mozzarella, and basil.",
    body: "pasta tomatoes mozzarella basil caprese italian vegetarian",
    path: "/recipes/vegetarian-caprese-pasta",
    category: "recipe"
  },
  {
    title: "Grilled Chicken Breast",
    description: "Perfectly grilled chicken breast with herbs and lemon.",
    body: "chicken breast grilled herbs lemon protein healthy dinner",
    path: "/recipes/nonveg-grilled-chicken-breast",
    category: "recipe"
  },
  {
    title: "Beef Stir Fry",
    description: "Quick beef stir fry with vegetables and soy sauce.",
    body: "beef stir fry vegetables soy sauce protein dinner non-vegetarian",
    path: "/recipes/nonveg-beef-stir-fry",
    category: "recipe"
  },
  {
    title: "Breakfast Burrito",
    description: "Protein-packed breakfast burrito with eggs and vegetables.",
    body: "breakfast burrito eggs vegetables protein meal vegetarian",
    path: "/recipes/vegetarian-breakfast-burrito",
    category: "recipe"
  },
  {
    title: "Salmon Poke Bowl",
    description: "Fresh salmon poke bowl with rice and vegetables.",
    body: "salmon poke bowl rice vegetables hawaiian healthy non-vegetarian",
    path: "/recipes/nonveg-salmon-poke-bowl",
    category: "recipe"
  },
  {
    title: "Risotto ai Funghi",
    description: "Creamy mushroom risotto with wild mushrooms and parmesan.",
    body: "risotto mushrooms parmesan italian creamy vegetarian dinner",
    path: "/recipes/vegan-risotto-ai-funghi",
    category: "recipe"
  },
  {
    title: "Beef Wellington",
    description: "Classic beef wellington with mushroom duxelles and puff pastry.",
    body: "beef wellington mushroom duxelles puff pastry classic non-vegetarian",
    path: "/recipes/vegetarian-beef-wellington",
    category: "recipe"
  },
  {
    title: "Truffle Pasta",
    description: "Luxurious truffle pasta with parmesan and herbs.",
    body: "truffle pasta parmesan herbs luxurious vegetarian dinner",
    path: "/recipes/vegetarian-truffle-pasta",
    category: "recipe"
  },
  {
    title: "Lobster Thermidor",
    description: "Classic French lobster thermidor with cognac cream sauce and gruyère cheese.",
    body: "lobster thermidor french cognac cream sauce gruyère non-vegetarian",
    path: "/recipes/nonveg-lobster-thermidor",
    category: "recipe"
  }
];
const blogContent = [
  {
    title: "The Psychology of Habit Formation",
    description: "Understanding how habits work and how to build lasting fitness routines.",
    body: "habit formation psychology fitness routines behavior change consistency motivation",
    path: "/blog/psychology_habit_formation",
    category: "blog"
  },
  {
    title: "Consistency: The 1% Rule",
    description: "How small daily improvements compound into massive results over time.",
    body: "consistency 1% rule compound improvement daily habits progress",
    path: "/blog/consistency_1_percent_rule",
    category: "blog"
  },
  {
    title: "Mindset Matters",
    description: "The mental game of fitness and how your mindset affects your results.",
    body: "mindset mental game fitness psychology positive thinking results",
    path: "/blog/mindset_matters",
    category: "blog"
  },
  {
    title: "Morning Habits That Stick",
    description: "Simple morning routines that set you up for success throughout the day.",
    body: "morning habits routine success productivity healthy start",
    path: "/blog/morning_habits_that_stick",
    category: "blog"
  },
  {
    title: "Sleep Optimization",
    description: "How quality sleep impacts your fitness progress and overall health.",
    body: "sleep optimization recovery health fitness progress rest",
    path: "/blog/sleep_optimization",
    category: "blog"
  },
  {
    title: "Strength Training for Beginners",
    description: "A complete guide to starting your strength training journey.",
    body: "strength training beginners guide form technique progression",
    path: "/blog/strength_training_beginners",
    category: "blog"
  },
  {
    title: "Protein Guide",
    description: "Everything you need to know about protein for muscle building and recovery.",
    body: "protein muscle building recovery nutrition amino acids",
    path: "/blog/protein_guide",
    category: "blog"
  },
  {
    title: "Home Workout: 20 Minutes",
    description: "Effective 20-minute home workout that requires no equipment.",
    body: "home workout 20 minutes no equipment bodyweight exercises",
    path: "/blog/home_workout_20_min",
    category: "blog"
  },
  {
    title: "Meal Prep Sunday",
    description: "How to prepare healthy meals for the entire week in just a few hours.",
    body: "meal prep Sunday healthy meals planning preparation",
    path: "/blog/meal_prep_sunday",
    category: "blog"
  },
  {
    title: "Cardio Truth",
    description: "Debunking common cardio myths and finding the right approach for you.",
    body: "cardio myths truth fat burning heart rate training",
    path: "/blog/cardio_truth",
    category: "blog"
  },
  {
    title: "How We Built Our 41KB SaaS Website",
    description: "The technical journey behind building a lightweight, fast-loading SaaS website.",
    body: "saas website development performance optimization lightweight fast-loading technical journey",
    path: "/blog/how_we_built_our_41kb_saas_website",
    category: "blog"
  },
  {
    title: "Awesome Post",
    description: "An amazing blog post about fitness and wellness.",
    body: "awesome fitness wellness health amazing blog post",
    path: "/blog/awesome_post",
    category: "blog"
  },
  {
    title: "Example Blog Post",
    description: "An example blog post demonstrating the blog functionality.",
    body: "example blog post demonstration functionality sample content",
    path: "/blog/example_blog_post",
    category: "blog"
  }
];
const recoveryContent = [
  {
    title: "Foam Rolling Basics",
    description: "Essential foam rolling techniques to release muscle tension and improve recovery.",
    body: "foam rolling myofascial release muscle tension blood flow recovery beginner",
    path: "/recovery/foam-rolling-basics",
    category: "recovery"
  },
  {
    title: "Advanced Foam Rolling",
    description: "Advanced foam rolling techniques for deeper muscle release and targeted therapy.",
    body: "advanced foam rolling deep tissue trigger points range of motion chronic pain performance",
    path: "/recovery/advanced-foam-rolling",
    category: "recovery"
  },
  {
    title: "Dynamic Stretching Routine",
    description: "Comprehensive dynamic stretching routine to improve mobility and prevent injury.",
    body: "dynamic stretching mobility flexibility athletic performance injury prevention warm-up",
    path: "/recovery/stretching-routine",
    category: "recovery"
  },
  {
    title: "Recovery Yoga Flow",
    description: "Gentle yoga sequence designed specifically for post-workout recovery and relaxation.",
    body: "yoga recovery relaxation stress hormones mind-body connection recovery process",
    path: "/recovery/yoga-recovery",
    category: "recovery"
  },
  {
    title: "Percussion Therapy",
    description: "Use of percussion massagers to break up muscle knots and improve blood flow.",
    body: "percussion therapy muscle adhesions blood circulation muscle tension recovery soreness",
    path: "/recovery/percussion-therapy",
    category: "recovery"
  },
  {
    title: "Compression Therapy",
    description: "Using compression garments and techniques to improve circulation and reduce swelling.",
    body: "compression therapy blood circulation muscle swelling recovery soreness performance",
    path: "/recovery/compression-therapy",
    category: "recovery"
  },
  {
    title: "Ice Bath Therapy",
    description: "Cold water immersion therapy to reduce inflammation and speed up recovery.",
    body: "ice bath cold therapy inflammation recovery muscle soreness circulation immune function",
    path: "/recovery/ice-bath-therapy",
    category: "recovery"
  },
  {
    title: "Recovery Breathing Techniques",
    description: "Breathing exercises to activate the parasympathetic nervous system and promote recovery.",
    body: "breathing recovery stress hormones oxygen delivery relaxation recovery mode",
    path: "/recovery/breathing-techniques",
    category: "recovery"
  },
  {
    title: "Recovery Meditation",
    description: "Guided meditation specifically designed for post-workout recovery and mental restoration.",
    body: "meditation mental recovery stress reduction focus relaxation recovery",
    path: "/recovery/meditation-recovery",
    category: "recovery"
  },
  {
    title: "Post-Workout Nutrition",
    description: "Optimal nutrition timing and choices for maximum recovery and muscle repair.",
    body: "post-workout nutrition muscle repair glycogen protein carbohydrates recovery",
    path: "/recovery/post-workout-nutrition",
    category: "recovery"
  },
  {
    title: "Hydration for Recovery",
    description: "Proper hydration strategies to support recovery and performance.",
    body: "hydration recovery muscle cramps performance digestion energy levels electrolytes",
    path: "/recovery/hydration-recovery",
    category: "recovery"
  },
  {
    title: "Sleep Optimization for Recovery",
    description: "Sleep strategies to maximize recovery and athletic performance.",
    body: "sleep recovery muscle repair hormone balance cognitive function injury risk",
    path: "/recovery/sleep-optimization",
    category: "recovery"
  },
  {
    title: "Sleep Hygiene Practices",
    description: "Best practices for improving sleep quality and recovery.",
    body: "sleep hygiene recovery stress mood energy levels bedtime routine",
    path: "/recovery/sleep-hygiene",
    category: "recovery"
  }
];
const staticPageContent = [
  {
    title: "Home",
    description: "Welcome to {WebsiteName} - Your comprehensive fitness and nutrition platform.",
    body: "fitness nutrition workouts recipes blog health wellness",
    path: "/",
    category: "page"
  },
  {
    title: "Workouts",
    description: "Comprehensive workout library with programs for all fitness levels and goals.",
    body: "workouts training programs strength cardio yoga functional bodybuilding powerlifting",
    path: "/workouts",
    category: "page"
  },
  {
    title: "Recipes",
    description: "Healthy recipes for every dietary preference and skill level.",
    body: "recipes healthy cooking vegetarian vegan non-vegetarian nutrition meal prep",
    path: "/recipes",
    category: "page"
  },
  {
    title: "Blog",
    description: "Fitness and nutrition articles, tips, and expert advice.",
    body: "blog articles fitness tips nutrition advice health wellness",
    path: "/blog",
    category: "page"
  },
  {
    title: "BMI Calculator",
    description: "Calculate your Body Mass Index and understand what it means for your health.",
    body: "BMI calculator body mass index health assessment weight height",
    path: "/bmi-calculator",
    category: "page"
  },
  {
    title: "Pricing",
    description: "Choose the perfect plan for your fitness journey with our flexible pricing options.",
    body: "pricing plans subscription premium features fitness journey",
    path: "/pricing",
    category: "page"
  },
  {
    title: "Account",
    description: "Sign in or create an account to access your personalized fitness dashboard.",
    body: "account login sign up dashboard personalized fitness tracking",
    path: "/login",
    category: "page"
  },
  {
    title: "Contact Us",
    description: "Get in touch with our team for support, questions, or feedback.",
    body: "contact support questions feedback help team",
    path: "/contact_us",
    category: "page"
  },
  {
    title: "Testimonials",
    description: "Real stories from our community members and their fitness transformations.",
    body: "testimonials success stories transformations community results",
    path: "/testimonials",
    category: "page"
  }
];
const allContent = [
  ...workoutContent,
  ...recipeContent,
  ...blogContent,
  ...recoveryContent,
  ...staticPageContent
];
async function GET() {
  try {
    const Fuse = (await import("fuse.js")).default;
    const fuseOptions = {
      keys: [
        { name: "title", weight: 3 },
        { name: "description", weight: 2 },
        { name: "body", weight: 1 },
        { name: "category", weight: 1 }
      ],
      ignoreLocation: true,
      threshold: 0.3,
      includeScore: true
    };
    const fuse = new Fuse(allContent, fuseOptions);
    const index = fuse.getIndex();
    const searchData = {
      index: index.toJSON(),
      indexData: allContent,
      buildTime: Date.now(),
      totalItems: allContent.length,
      categories: {
        workouts: workoutContent.length,
        recipes: recipeContent.length,
        blog: blogContent.length,
        recovery: recoveryContent.length,
        pages: staticPageContent.length
      }
    };
    return new Response(JSON.stringify(searchData), {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=3600"
        // Cache for 1 hour
      }
    });
  } catch (error) {
    console.error("Search index build error:", error);
    return new Response(JSON.stringify({ error: "Failed to build search index" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
export {
  GET
};
