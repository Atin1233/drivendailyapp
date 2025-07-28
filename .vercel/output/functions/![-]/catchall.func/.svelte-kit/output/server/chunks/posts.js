const blogInfo = {
  name: "Driven Daily",
  description: "Research-backed wellness content for your daily progress"
};
const blogPosts = [
  {
    title: "5 Morning Habits That Actually Stick (Backed by Science)",
    description: "Transform your mornings with these research-backed habits that busy people can actually maintain.",
    link: "/blog/morning_habits_that_stick",
    date: "2024-01-15",
    category: "Daily Habits",
    readTime: "5 min read",
    author: "Joel Rivas"
  },
  {
    title: "The Protein Guide: How Much Do You Really Need?",
    description: "Cut through the confusion with this simple guide to protein for fitness, weight loss, and overall health.",
    link: "/blog/protein_guide",
    date: "2024-01-12",
    category: "Easy Nutrition",
    readTime: "7 min read",
    author: "Atin Jain"
  },
  {
    title: "Home Workout: 20-Minute Full Body (No Equipment)",
    description: "A complete workout you can do anywhere. Perfect for busy schedules and fitness beginners.",
    link: "/blog/home_workout_20_min",
    date: "2024-01-10",
    category: "Fitness Fundamentals",
    readTime: "4 min read",
    author: "Joel Rivas"
  },
  {
    title: "Why Your Mindset Matters More Than Your Workout",
    description: "The psychology behind sustainable fitness progress and how to build lasting motivation.",
    link: "/blog/mindset_matters",
    date: "2024-01-08",
    category: "Mindset & Motivation",
    readTime: "6 min read",
    author: "Atin Jain"
  },
  {
    title: "Meal Prep Sunday: 5 Recipes Under 30 Minutes",
    description: "Simple, healthy recipes that will fuel your week without spending hours in the kitchen.",
    link: "/blog/meal_prep_sunday",
    date: "2024-01-05",
    category: "Easy Nutrition",
    readTime: "8 min read",
    author: "Joel Rivas"
  },
  {
    title: "The Truth About Cardio: What Science Actually Says",
    description: "Debunking common cardio myths and finding the right approach for your goals.",
    link: "/blog/cardio_truth",
    date: "2024-01-03",
    category: "Fitness Fundamentals",
    readTime: "6 min read",
    author: "Atin Jain"
  },
  {
    title: "Building Consistency: The 1% Rule for Lasting Change",
    description: "How small daily improvements compound into massive results over time.",
    link: "/blog/consistency_1_percent_rule",
    date: "2024-01-01",
    category: "Mindset & Motivation",
    readTime: "5 min read",
    author: "Joel Rivas"
  },
  {
    title: "Sleep Optimization: The Missing Link in Your Fitness Journey",
    description: "How quality sleep impacts your workouts, recovery, and overall progress more than you think.",
    link: "/blog/sleep_optimization",
    date: "2023-12-28",
    category: "Daily Habits",
    readTime: "6 min read",
    author: "Atin Jain"
  },
  {
    title: "Strength Training for Beginners: A Complete Guide",
    description: "Everything you need to know to start strength training safely and effectively, even if you've never lifted weights.",
    link: "/blog/strength_training_beginners",
    date: "2023-12-25",
    category: "Fitness Fundamentals",
    readTime: "8 min read",
    author: "Joel Rivas"
  },
  {
    title: "The Psychology of Habit Formation: Why Most People Fail",
    description: "Understanding the science behind habit formation and how to design your environment for success.",
    link: "/blog/psychology_habit_formation",
    date: "2023-12-22",
    category: "Mindset & Motivation",
    readTime: "7 min read",
    author: "Atin Jain"
  },
  {
    title: "Quick Healthy Snacks: 10 Options Under 200 Calories",
    description: "Nutritious snack ideas that will keep you energized without derailing your nutrition goals.",
    link: "/blog/quick_healthy_snacks",
    date: "2023-12-20",
    category: "Easy Nutrition",
    readTime: "5 min read",
    author: "Joel Rivas"
  },
  {
    title: "HIIT vs Steady State Cardio: Which is Better for You?",
    description: "Breaking down the pros and cons of different cardio approaches to help you choose what works best.",
    link: "/blog/hiit_vs_steady_state",
    date: "2023-12-18",
    category: "Fitness Fundamentals",
    readTime: "6 min read",
    author: "Atin Jain"
  },
  {
    title: "Stress Management for Better Fitness Results",
    description: "How chronic stress sabotages your progress and practical strategies to manage it effectively.",
    link: "/blog/stress_management_fitness",
    date: "2023-12-15",
    category: "Mindset & Motivation",
    readTime: "7 min read",
    author: "Joel Rivas"
  },
  {
    title: "The Ultimate Guide to Pre and Post-Workout Nutrition",
    description: "What to eat before and after your workouts to maximize performance and recovery.",
    link: "/blog/pre_post_workout_nutrition",
    date: "2023-12-12",
    category: "Easy Nutrition",
    readTime: "8 min read",
    author: "Atin Jain"
  },
  {
    title: "Building a Home Gym on a Budget: Essential Equipment Guide",
    description: "Create an effective home workout space without breaking the bank with these essential pieces.",
    link: "/blog/home_gym_budget",
    date: "2023-12-10",
    category: "Fitness Fundamentals",
    readTime: "6 min read",
    author: "Joel Rivas"
  },
  {
    title: "The Power of Visualization in Achieving Your Fitness Goals",
    description: "How mental imagery and visualization techniques can accelerate your physical progress.",
    link: "/blog/visualization_fitness_goals",
    date: "2023-12-08",
    category: "Mindset & Motivation",
    readTime: "5 min read",
    author: "Atin Jain"
  },
  {
    title: "Meal Timing: When to Eat for Optimal Performance",
    description: "The science behind meal timing and how to structure your eating schedule for better results.",
    link: "/blog/meal_timing_performance",
    date: "2023-12-05",
    category: "Easy Nutrition",
    readTime: "7 min read",
    author: "Joel Rivas"
  },
  {
    title: "Recovery Techniques: Beyond Just Rest Days",
    description: "Advanced recovery strategies that will help you train harder and avoid burnout.",
    link: "/blog/recovery_techniques",
    date: "2023-12-03",
    category: "Fitness Fundamentals",
    readTime: "6 min read",
    author: "Atin Jain"
  },
  {
    title: "Goal Setting That Actually Works: The SMART Method",
    description: "How to set fitness goals that you'll actually achieve using proven goal-setting strategies.",
    link: "/blog/smart_goal_setting",
    date: "2023-12-01",
    category: "Mindset & Motivation",
    readTime: "5 min read",
    author: "Joel Rivas"
  }
];
for (const post of blogPosts) {
  if (!post.parsedDate) {
    const dateParts = post.date.split("-");
    post.parsedDate = new Date(
      parseInt(dateParts[0]),
      parseInt(dateParts[1]) - 1,
      parseInt(dateParts[2])
    );
  }
}
const sortedBlogPosts = blogPosts.sort(
  (a, b) => (b.parsedDate?.getTime() ?? 0) - (a.parsedDate?.getTime() ?? 0)
);
export {
  blogInfo as b,
  sortedBlogPosts as s
};
