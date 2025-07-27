<script lang="ts">
  import { WebsiteName } from "../../../config"

  type WorkoutCategory = "strength" | "cardio" | "flexibility" | "hiit" | "yoga"
  type WorkoutDifficulty = "beginner" | "intermediate" | "advanced"
  type WorkoutSplit =
    | "full-body"
    | "push-pull-legs"
    | "upper-lower"
    | "bro-split"
    | "arnold-split"
    | "strength-focused"
    | "powerlifting"
    | "bodybuilding"
    | "functional"
    | "cardio-focused"

  interface Workout {
    id: string
    title: string
    description: string
    category: WorkoutCategory
    difficulty: WorkoutDifficulty
    split: WorkoutSplit
    duration: number // in minutes
    exercises: Exercise[]
    author: "Joel Rivas" | "Atin Jain"
    tags: string[]
    image?: string
  }

  interface Exercise {
    name: string
    sets: number
    reps: string
    rest: string
    notes?: string
  }

  const workouts: Workout[] = [
    // Full Body Workouts
    {
      id: "full-body-beginner",
      title: "Full Body Beginner",
      description:
        "A complete full-body workout perfect for beginners, focusing on fundamental movements and proper form.",
      category: "strength",
      difficulty: "beginner",
      split: "full-body",
      duration: 45,
      author: "Joel Rivas",
      exercises: [
        { name: "Bodyweight Squats", sets: 3, reps: "12-15", rest: "60s" },
        { name: "Push-ups (Knee or Wall)", sets: 3, reps: "8-12", rest: "60s" },
        { name: "Dumbbell Rows", sets: 3, reps: "10-12 each arm", rest: "60s" },
        { name: "Plank", sets: 3, reps: "30-45 seconds", rest: "60s" },
        { name: "Glute Bridges", sets: 3, reps: "12-15", rest: "60s" },
        { name: "Bird Dogs", sets: 3, reps: "10 each side", rest: "60s" },
      ],
      tags: ["full-body", "beginner-friendly", "no-equipment"],
    },
    {
      id: "full-body-advanced",
      title: "Full Body Advanced",
      description:
        "High-intensity full-body workout for advanced lifters focusing on compound movements and strength building.",
      category: "strength",
      difficulty: "advanced",
      split: "full-body",
      duration: 90,
      author: "Atin Jain",
      exercises: [
        { name: "Deadlifts", sets: 5, reps: "5", rest: "180s" },
        { name: "Bench Press", sets: 4, reps: "6-8", rest: "150s" },
        { name: "Weighted Pull-ups", sets: 4, reps: "6-8", rest: "150s" },
        { name: "Overhead Press", sets: 4, reps: "6-8", rest: "120s" },
        { name: "Front Squats", sets: 3, reps: "8-10", rest: "120s" },
        { name: "Barbell Rows", sets: 3, reps: "8-10", rest: "120s" },
        { name: "Weighted Dips", sets: 3, reps: "8-10", rest: "90s" },
        { name: "Hanging Leg Raises", sets: 3, reps: "12-15", rest: "60s" },
      ],
      tags: ["full-body", "advanced", "compound-movements", "strength"],
    },
    {
      id: "full-body-functional",
      title: "Functional Full Body",
      description:
        "Functional movement patterns that translate to real-world strength and mobility.",
      category: "strength",
      difficulty: "intermediate",
      split: "full-body",
      duration: 60,
      author: "Joel Rivas",
      exercises: [
        { name: "Turkish Get-ups", sets: 3, reps: "5 each side", rest: "90s" },
        { name: "Kettlebell Swings", sets: 4, reps: "15-20", rest: "90s" },
        { name: "Renegade Rows", sets: 3, reps: "10 each arm", rest: "90s" },
        {
          name: "Single-leg Deadlifts",
          sets: 3,
          reps: "10 each leg",
          rest: "90s",
        },
        { name: "Bear Crawls", sets: 3, reps: "20 yards", rest: "60s" },
        { name: "Pallof Press", sets: 3, reps: "10 each side", rest: "60s" },
      ],
      tags: ["functional", "full-body", "kettlebells", "mobility"],
    },
    {
      id: "full-body-intermediate",
      title: "Full Body Intermediate",
      description:
        "An intermediate full-body workout that builds strength and muscle with compound movements.",
      category: "strength",
      difficulty: "intermediate",
      split: "full-body",
      duration: 60,
      author: "Atin Jain",
      exercises: [
        { name: "Barbell Squats", sets: 4, reps: "8-10", rest: "90s" },
        { name: "Bench Press", sets: 4, reps: "8-10", rest: "90s" },
        { name: "Bent Over Rows", sets: 4, reps: "10-12", rest: "90s" },
        { name: "Overhead Press", sets: 3, reps: "8-10", rest: "90s" },
        { name: "Romanian Deadlifts", sets: 3, reps: "10-12", rest: "90s" },
        {
          name: "Plank Variations",
          sets: 3,
          reps: "45-60 seconds",
          rest: "60s",
        },
      ],
      tags: ["full-body", "compound-movements", "strength-building"],
    },

    // Push-Pull-Legs Workouts
    {
      id: "push-day",
      title: "Push Day",
      description:
        "Focus on chest, shoulders, and triceps with this comprehensive push workout.",
      category: "strength",
      difficulty: "intermediate",
      split: "push-pull-legs",
      duration: 75,
      author: "Joel Rivas",
      exercises: [
        { name: "Bench Press", sets: 4, reps: "6-8", rest: "120s" },
        { name: "Overhead Press", sets: 4, reps: "8-10", rest: "120s" },
        { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", rest: "90s" },
        { name: "Lateral Raises", sets: 3, reps: "12-15", rest: "60s" },
        { name: "Dips", sets: 3, reps: "8-12", rest: "90s" },
        { name: "Tricep Extensions", sets: 3, reps: "12-15", rest: "60s" },
      ],
      tags: ["push", "chest", "shoulders", "triceps"],
    },
    {
      id: "pull-day",
      title: "Pull Day",
      description:
        "Target back and biceps with this effective pull workout focusing on rowing and pulling movements.",
      category: "strength",
      difficulty: "intermediate",
      split: "push-pull-legs",
      duration: 75,
      author: "Atin Jain",
      exercises: [
        { name: "Deadlifts", sets: 4, reps: "6-8", rest: "120s" },
        { name: "Pull-ups", sets: 4, reps: "6-10", rest: "120s" },
        { name: "Barbell Rows", sets: 4, reps: "8-10", rest: "90s" },
        { name: "Lat Pulldowns", sets: 3, reps: "10-12", rest: "90s" },
        { name: "Face Pulls", sets: 3, reps: "12-15", rest: "60s" },
        { name: "Barbell Curls", sets: 3, reps: "10-12", rest: "60s" },
      ],
      tags: ["pull", "back", "biceps", "deadlifts"],
    },
    {
      id: "legs-day",
      title: "Legs Day",
      description:
        "Build strong, powerful legs with this comprehensive lower body workout.",
      category: "strength",
      difficulty: "intermediate",
      split: "push-pull-legs",
      duration: 75,
      author: "Joel Rivas",
      exercises: [
        { name: "Squats", sets: 4, reps: "8-10", rest: "120s" },
        { name: "Romanian Deadlifts", sets: 4, reps: "8-10", rest: "120s" },
        { name: "Leg Press", sets: 3, reps: "10-12", rest: "90s" },
        { name: "Walking Lunges", sets: 3, reps: "20 steps", rest: "90s" },
        { name: "Calf Raises", sets: 4, reps: "15-20", rest: "60s" },
        { name: "Planks", sets: 3, reps: "60 seconds", rest: "60s" },
      ],
      tags: ["legs", "squats", "deadlifts", "lower-body"],
    },

    // Upper-Lower Split
    {
      id: "upper-body",
      title: "Upper Body",
      description:
        "Comprehensive upper body workout targeting chest, back, shoulders, and arms.",
      category: "strength",
      difficulty: "intermediate",
      split: "upper-lower",
      duration: 70,
      author: "Atin Jain",
      exercises: [
        { name: "Bench Press", sets: 4, reps: "8-10", rest: "120s" },
        { name: "Pull-ups", sets: 4, reps: "6-10", rest: "120s" },
        { name: "Overhead Press", sets: 3, reps: "8-10", rest: "90s" },
        { name: "Bent Over Rows", sets: 3, reps: "10-12", rest: "90s" },
        { name: "Dips", sets: 3, reps: "8-12", rest: "90s" },
        { name: "Barbell Curls", sets: 3, reps: "10-12", rest: "60s" },
      ],
      tags: ["upper-body", "push-pull", "compound-movements"],
    },
    {
      id: "lower-body",
      title: "Lower Body",
      description:
        "Build strength and power in your lower body with this comprehensive leg workout.",
      category: "strength",
      difficulty: "intermediate",
      split: "upper-lower",
      duration: 70,
      author: "Joel Rivas",
      exercises: [
        { name: "Squats", sets: 4, reps: "8-10", rest: "120s" },
        { name: "Romanian Deadlifts", sets: 4, reps: "8-10", rest: "120s" },
        { name: "Leg Press", sets: 3, reps: "10-12", rest: "90s" },
        {
          name: "Bulgarian Split Squats",
          sets: 3,
          reps: "10 each leg",
          rest: "90s",
        },
        { name: "Standing Calf Raises", sets: 4, reps: "15-20", rest: "60s" },
        { name: "Core Circuit", sets: 3, reps: "45 seconds each", rest: "60s" },
      ],
      tags: ["lower-body", "squats", "deadlifts", "legs"],
    },

    // Arnold Split Workouts
    {
      id: "arnold-chest-back",
      title: "Arnold Split: Chest & Back",
      description:
        "Classic Arnold Schwarzenegger split focusing on chest and back in the same session for maximum muscle stimulation.",
      category: "strength",
      difficulty: "advanced",
      split: "arnold-split",
      duration: 90,
      author: "Joel Rivas",
      exercises: [
        { name: "Bench Press", sets: 4, reps: "8-10", rest: "120s" },
        { name: "Pull-ups", sets: 4, reps: "8-12", rest: "120s" },
        { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", rest: "90s" },
        { name: "Barbell Rows", sets: 3, reps: "10-12", rest: "90s" },
        { name: "Decline Bench Press", sets: 3, reps: "10-12", rest: "90s" },
        { name: "Lat Pulldowns", sets: 3, reps: "12-15", rest: "90s" },
        { name: "Dumbbell Flyes", sets: 3, reps: "12-15", rest: "60s" },
        { name: "Face Pulls", sets: 3, reps: "15-20", rest: "60s" },
        { name: "Dips", sets: 3, reps: "To failure", rest: "90s" },
        { name: "Straight-arm Pulldowns", sets: 3, reps: "12-15", rest: "60s" },
      ],
      tags: ["arnold-split", "chest", "back", "advanced", "bodybuilding"],
    },
    {
      id: "arnold-shoulders-arms",
      title: "Arnold Split: Shoulders & Arms",
      description:
        "Intensive shoulder and arm workout following Arnold's legendary training principles.",
      category: "strength",
      difficulty: "advanced",
      split: "arnold-split",
      duration: 85,
      author: "Atin Jain",
      exercises: [
        { name: "Overhead Press", sets: 4, reps: "8-10", rest: "120s" },
        { name: "Barbell Curls", sets: 4, reps: "10-12", rest: "90s" },
        { name: "Lateral Raises", sets: 4, reps: "12-15", rest: "90s" },
        { name: "Close-grip Bench Press", sets: 3, reps: "8-10", rest: "90s" },
        { name: "Rear Delt Flyes", sets: 3, reps: "12-15", rest: "60s" },
        { name: "Hammer Curls", sets: 3, reps: "10-12 each arm", rest: "90s" },
        { name: "Upright Rows", sets: 3, reps: "10-12", rest: "90s" },
        { name: "Tricep Dips", sets: 3, reps: "10-12", rest: "90s" },
        { name: "Front Raises", sets: 3, reps: "12-15", rest: "60s" },
        { name: "Preacher Curls", sets: 3, reps: "10-12", rest: "60s" },
        { name: "Shrugs", sets: 3, reps: "15-20", rest: "60s" },
        { name: "Skull Crushers", sets: 3, reps: "12-15", rest: "60s" },
      ],
      tags: ["arnold-split", "shoulders", "arms", "advanced", "bodybuilding"],
    },
    {
      id: "arnold-legs",
      title: "Arnold Split: Legs",
      description:
        "Comprehensive leg workout designed to build massive, powerful legs like Arnold's.",
      category: "strength",
      difficulty: "advanced",
      split: "arnold-split",
      duration: 95,
      author: "Joel Rivas",
      exercises: [
        { name: "Squats", sets: 5, reps: "8-10", rest: "150s" },
        { name: "Romanian Deadlifts", sets: 4, reps: "8-10", rest: "150s" },
        { name: "Leg Press", sets: 4, reps: "12-15", rest: "120s" },
        {
          name: "Walking Lunges",
          sets: 3,
          reps: "20 steps each leg",
          rest: "120s",
        },
        { name: "Leg Extensions", sets: 3, reps: "15-20", rest: "90s" },
        { name: "Leg Curls", sets: 3, reps: "15-20", rest: "90s" },
        { name: "Standing Calf Raises", sets: 4, reps: "20-25", rest: "90s" },
        { name: "Seated Calf Raises", sets: 3, reps: "20-25", rest: "60s" },
        { name: "Hip Thrusts", sets: 3, reps: "12-15", rest: "90s" },
        { name: "Ab Wheel Rollouts", sets: 3, reps: "10-12", rest: "60s" },
      ],
      tags: ["arnold-split", "legs", "advanced", "bodybuilding", "squats"],
    },

    // Bro Split
    {
      id: "chest-day",
      title: "Chest Day",
      description:
        "Dedicated chest workout focusing on all areas of the pectoral muscles.",
      category: "strength",
      difficulty: "intermediate",
      split: "bro-split",
      duration: 60,
      author: "Atin Jain",
      exercises: [
        { name: "Bench Press", sets: 4, reps: "8-10", rest: "120s" },
        { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", rest: "90s" },
        { name: "Decline Push-ups", sets: 3, reps: "12-15", rest: "90s" },
        { name: "Cable Flyes", sets: 3, reps: "12-15", rest: "60s" },
        { name: "Dips", sets: 3, reps: "8-12", rest: "90s" },
        { name: "Push-ups", sets: 3, reps: "To failure", rest: "60s" },
      ],
      tags: ["chest", "push", "bench-press", "dumbbells"],
    },
    {
      id: "back-day",
      title: "Back Day",
      description:
        "Comprehensive back workout targeting all major back muscles for width and thickness.",
      category: "strength",
      difficulty: "intermediate",
      split: "bro-split",
      duration: 65,
      author: "Joel Rivas",
      exercises: [
        { name: "Deadlifts", sets: 4, reps: "6-8", rest: "120s" },
        { name: "Pull-ups", sets: 4, reps: "6-10", rest: "120s" },
        { name: "Barbell Rows", sets: 4, reps: "8-10", rest: "90s" },
        { name: "Lat Pulldowns", sets: 3, reps: "10-12", rest: "90s" },
        { name: "Face Pulls", sets: 3, reps: "12-15", rest: "60s" },
        { name: "Hyperextensions", sets: 3, reps: "12-15", rest: "60s" },
      ],
      tags: ["back", "pull", "deadlifts", "pull-ups"],
    },
    {
      id: "shoulders-day",
      title: "Shoulders Day",
      description:
        "Complete shoulder workout targeting all three deltoid heads for balanced development.",
      category: "strength",
      difficulty: "intermediate",
      split: "bro-split",
      duration: 55,
      author: "Atin Jain",
      exercises: [
        { name: "Overhead Press", sets: 4, reps: "8-10", rest: "120s" },
        { name: "Lateral Raises", sets: 4, reps: "12-15", rest: "90s" },
        { name: "Rear Delt Flyes", sets: 3, reps: "12-15", rest: "60s" },
        { name: "Upright Rows", sets: 3, reps: "10-12", rest: "90s" },
        { name: "Front Raises", sets: 3, reps: "12-15", rest: "60s" },
        { name: "Shrugs", sets: 3, reps: "12-15", rest: "60s" },
      ],
      tags: ["shoulders", "deltoids", "overhead-press", "isolation"],
    },

    // Powerlifting Workouts
    {
      id: "powerlifting-squat",
      title: "Powerlifting: Squat Focus",
      description:
        "Dedicated squat training session following powerlifting principles for maximum strength development.",
      category: "strength",
      difficulty: "advanced",
      split: "powerlifting",
      duration: 120,
      author: "Joel Rivas",
      exercises: [
        { name: "Back Squats", sets: 5, reps: "3-5", rest: "240s" },
        { name: "Pause Squats", sets: 3, reps: "3-5", rest: "180s" },
        { name: "Box Squats", sets: 3, reps: "3-5", rest: "180s" },
        { name: "Good Mornings", sets: 3, reps: "8-10", rest: "120s" },
        { name: "Leg Press", sets: 3, reps: "8-10", rest: "120s" },
        { name: "Standing Calf Raises", sets: 4, reps: "12-15", rest: "90s" },
        { name: "Planks", sets: 3, reps: "60 seconds", rest: "60s" },
      ],
      tags: ["powerlifting", "squat", "strength", "advanced"],
    },
    {
      id: "powerlifting-bench",
      title: "Powerlifting: Bench Press Focus",
      description:
        "Specialized bench press training with variations to improve competition performance.",
      category: "strength",
      difficulty: "advanced",
      split: "powerlifting",
      duration: 100,
      author: "Atin Jain",
      exercises: [
        { name: "Competition Bench Press", sets: 5, reps: "3-5", rest: "240s" },
        { name: "Pause Bench Press", sets: 3, reps: "3-5", rest: "180s" },
        { name: "Close-grip Bench Press", sets: 3, reps: "5-8", rest: "180s" },
        { name: "Incline Bench Press", sets: 3, reps: "6-8", rest: "150s" },
        { name: "Dumbbell Press", sets: 3, reps: "8-10", rest: "120s" },
        { name: "Tricep Extensions", sets: 3, reps: "10-12", rest: "90s" },
        { name: "Lateral Raises", sets: 3, reps: "12-15", rest: "60s" },
      ],
      tags: ["powerlifting", "bench-press", "strength", "advanced"],
    },
    {
      id: "powerlifting-deadlift",
      title: "Powerlifting: Deadlift Focus",
      description:
        "Intensive deadlift training session designed to build maximum pulling strength.",
      category: "strength",
      difficulty: "advanced",
      split: "powerlifting",
      duration: 110,
      author: "Joel Rivas",
      exercises: [
        { name: "Conventional Deadlifts", sets: 5, reps: "3-5", rest: "240s" },
        { name: "Romanian Deadlifts", sets: 3, reps: "5-8", rest: "180s" },
        { name: "Deficit Deadlifts", sets: 3, reps: "3-5", rest: "180s" },
        { name: "Barbell Rows", sets: 3, reps: "8-10", rest: "150s" },
        { name: "Pull-ups", sets: 3, reps: "6-8", rest: "120s" },
        { name: "Face Pulls", sets: 3, reps: "12-15", rest: "90s" },
        { name: "Hanging Leg Raises", sets: 3, reps: "10-12", rest: "60s" },
      ],
      tags: ["powerlifting", "deadlift", "strength", "advanced"],
    },

    // Bodybuilding Workouts
    {
      id: "bodybuilding-chest",
      title: "Bodybuilding: Chest Hypertrophy",
      description:
        "High-volume chest workout focused on muscle growth and definition.",
      category: "strength",
      difficulty: "intermediate",
      split: "bodybuilding",
      duration: 75,
      author: "Atin Jain",
      exercises: [
        { name: "Incline Barbell Press", sets: 4, reps: "8-12", rest: "120s" },
        { name: "Flat Dumbbell Press", sets: 4, reps: "10-12", rest: "120s" },
        { name: "Decline Bench Press", sets: 3, reps: "10-12", rest: "90s" },
        { name: "Cable Flyes", sets: 3, reps: "12-15", rest: "90s" },
        { name: "Dumbbell Flyes", sets: 3, reps: "12-15", rest: "90s" },
        { name: "Push-ups", sets: 3, reps: "To failure", rest: "60s" },
        { name: "Dips", sets: 3, reps: "To failure", rest: "90s" },
      ],
      tags: ["bodybuilding", "chest", "hypertrophy", "volume"],
    },
    {
      id: "bodybuilding-back",
      title: "Bodybuilding: Back Hypertrophy",
      description:
        "Comprehensive back workout targeting width, thickness, and definition.",
      category: "strength",
      difficulty: "intermediate",
      split: "bodybuilding",
      duration: 80,
      author: "Joel Rivas",
      exercises: [
        { name: "Pull-ups", sets: 4, reps: "8-12", rest: "120s" },
        { name: "Barbell Rows", sets: 4, reps: "10-12", rest: "120s" },
        { name: "Lat Pulldowns", sets: 3, reps: "12-15", rest: "90s" },
        { name: "T-Bar Rows", sets: 3, reps: "10-12", rest: "90s" },
        {
          name: "Single-arm Dumbbell Rows",
          sets: 3,
          reps: "12 each arm",
          rest: "90s",
        },
        { name: "Face Pulls", sets: 3, reps: "15-20", rest: "60s" },
        { name: "Straight-arm Pulldowns", sets: 3, reps: "12-15", rest: "60s" },
        { name: "Hyperextensions", sets: 3, reps: "15-20", rest: "60s" },
      ],
      tags: ["bodybuilding", "back", "hypertrophy", "width"],
    },

    // Functional Training
    {
      id: "functional-strength",
      title: "Functional Strength",
      description:
        "Movement-based training that improves real-world strength and mobility.",
      category: "strength",
      difficulty: "intermediate",
      split: "functional",
      duration: 70,
      author: "Atin Jain",
      exercises: [
        { name: "Turkish Get-ups", sets: 3, reps: "5 each side", rest: "120s" },
        { name: "Kettlebell Swings", sets: 4, reps: "20", rest: "90s" },
        { name: "Goblet Squats", sets: 3, reps: "12-15", rest: "90s" },
        {
          name: "Single-leg Deadlifts",
          sets: 3,
          reps: "10 each leg",
          rest: "90s",
        },
        { name: "Renegade Rows", sets: 3, reps: "10 each arm", rest: "90s" },
        { name: "Bear Crawls", sets: 3, reps: "30 yards", rest: "60s" },
        { name: "Pallof Press", sets: 3, reps: "10 each side", rest: "60s" },
        {
          name: "Plank Variations",
          sets: 3,
          reps: "45 seconds each",
          rest: "60s",
        },
      ],
      tags: ["functional", "kettlebells", "mobility", "real-world"],
    },
    {
      id: "functional-cardio",
      title: "Functional Cardio",
      description:
        "High-intensity functional movements that build endurance and strength simultaneously.",
      category: "hiit",
      difficulty: "intermediate",
      split: "functional",
      duration: 45,
      author: "Joel Rivas",
      exercises: [
        { name: "Burpees", sets: 5, reps: "30 seconds", rest: "30s" },
        { name: "Mountain Climbers", sets: 5, reps: "30 seconds", rest: "30s" },
        { name: "Kettlebell Swings", sets: 5, reps: "20", rest: "30s" },
        { name: "Jump Squats", sets: 5, reps: "30 seconds", rest: "30s" },
        { name: "Bear Crawls", sets: 5, reps: "20 yards", rest: "30s" },
        { name: "High Knees", sets: 5, reps: "30 seconds", rest: "30s" },
        { name: "Rest", sets: 1, reps: "2 minutes", rest: "0s" },
      ],
      tags: ["functional", "cardio", "hiit", "endurance"],
    },

    // Cardio-Focused Workouts
    {
      id: "cardio-endurance",
      title: "Endurance Cardio",
      description:
        "Steady-state cardio workout to build cardiovascular endurance and stamina.",
      category: "cardio",
      difficulty: "beginner",
      split: "cardio-focused",
      duration: 60,
      author: "Atin Jain",
      exercises: [
        { name: "Treadmill Running", sets: 1, reps: "30 minutes", rest: "0s" },
        { name: "Stationary Bike", sets: 1, reps: "20 minutes", rest: "0s" },
        { name: "Rowing Machine", sets: 1, reps: "10 minutes", rest: "0s" },
      ],
      tags: ["cardio", "endurance", "steady-state", "beginner"],
    },
    {
      id: "cardio-intervals",
      title: "Interval Cardio",
      description:
        "High-intensity interval training for maximum calorie burn and cardiovascular fitness.",
      category: "hiit",
      difficulty: "intermediate",
      split: "cardio-focused",
      duration: 40,
      author: "Joel Rivas",
      exercises: [
        {
          name: "Sprint Intervals",
          sets: 8,
          reps: "30 seconds sprint",
          rest: "90s walk",
        },
        { name: "Hill Sprints", sets: 6, reps: "45 seconds", rest: "120s" },
        {
          name: "Tabata Protocol",
          sets: 8,
          reps: "20s work/10s rest",
          rest: "60s between sets",
        },
        { name: "Stair Climber", sets: 5, reps: "2 minutes", rest: "60s" },
      ],
      tags: ["cardio", "intervals", "hiit", "sprints"],
    },

    // Strength Focused
    {
      id: "strength-5x5",
      title: "5x5 Strength Program",
      description:
        "Classic 5x5 strength program focusing on compound movements and progressive overload.",
      category: "strength",
      difficulty: "advanced",
      split: "strength-focused",
      duration: 90,
      author: "Joel Rivas",
      exercises: [
        { name: "Squats", sets: 5, reps: "5", rest: "180s" },
        { name: "Bench Press", sets: 5, reps: "5", rest: "180s" },
        { name: "Barbell Rows", sets: 5, reps: "5", rest: "180s" },
        { name: "Overhead Press", sets: 5, reps: "5", rest: "180s" },
        { name: "Deadlifts", sets: 1, reps: "5", rest: "180s" },
      ],
      tags: ["strength", "5x5", "compound-movements", "progressive-overload"],
    },

    // Additional Push-Pull-Legs Variations
    {
      id: "push-day-advanced",
      title: "Advanced Push Day",
      description:
        "High-volume push workout for advanced lifters focusing on chest, shoulders, and triceps development.",
      category: "strength",
      difficulty: "advanced",
      split: "push-pull-legs",
      duration: 90,
      author: "Atin Jain",
      exercises: [
        { name: "Bench Press", sets: 5, reps: "5-8", rest: "150s" },
        { name: "Overhead Press", sets: 4, reps: "6-8", rest: "120s" },
        { name: "Incline Dumbbell Press", sets: 4, reps: "8-10", rest: "120s" },
        { name: "Weighted Dips", sets: 3, reps: "8-10", rest: "120s" },
        { name: "Lateral Raises", sets: 4, reps: "12-15", rest: "90s" },
        { name: "Close-grip Bench Press", sets: 3, reps: "8-10", rest: "90s" },
        { name: "Rear Delt Flyes", sets: 3, reps: "12-15", rest: "60s" },
        { name: "Tricep Extensions", sets: 3, reps: "12-15", rest: "60s" },
        { name: "Front Raises", sets: 3, reps: "12-15", rest: "60s" },
      ],
      tags: ["push", "advanced", "chest", "shoulders", "triceps"],
    },
    {
      id: "pull-day-advanced",
      title: "Advanced Pull Day",
      description:
        "Comprehensive pull workout targeting back thickness, width, and bicep development.",
      category: "strength",
      difficulty: "advanced",
      split: "push-pull-legs",
      duration: 90,
      author: "Joel Rivas",
      exercises: [
        { name: "Deadlifts", sets: 5, reps: "5-8", rest: "180s" },
        { name: "Weighted Pull-ups", sets: 4, reps: "6-8", rest: "150s" },
        { name: "Barbell Rows", sets: 4, reps: "8-10", rest: "120s" },
        { name: "Lat Pulldowns", sets: 3, reps: "10-12", rest: "90s" },
        { name: "T-Bar Rows", sets: 3, reps: "10-12", rest: "90s" },
        { name: "Face Pulls", sets: 3, reps: "15-20", rest: "60s" },
        { name: "Barbell Curls", sets: 3, reps: "10-12", rest: "90s" },
        { name: "Hammer Curls", sets: 3, reps: "10-12 each arm", rest: "60s" },
        { name: "Preacher Curls", sets: 3, reps: "10-12", rest: "60s" },
      ],
      tags: ["pull", "advanced", "back", "biceps", "deadlifts"],
    },
    {
      id: "legs-day-advanced",
      title: "Advanced Legs Day",
      description:
        "Intensive leg workout designed to build strength and size in all lower body muscles.",
      category: "strength",
      difficulty: "advanced",
      split: "push-pull-legs",
      duration: 95,
      author: "Atin Jain",
      exercises: [
        { name: "Squats", sets: 5, reps: "6-8", rest: "180s" },
        { name: "Romanian Deadlifts", sets: 4, reps: "8-10", rest: "150s" },
        { name: "Leg Press", sets: 4, reps: "10-12", rest: "120s" },
        {
          name: "Walking Lunges",
          sets: 3,
          reps: "20 steps each leg",
          rest: "120s",
        },
        { name: "Leg Extensions", sets: 3, reps: "15-20", rest: "90s" },
        { name: "Leg Curls", sets: 3, reps: "15-20", rest: "90s" },
        { name: "Standing Calf Raises", sets: 4, reps: "20-25", rest: "90s" },
        { name: "Seated Calf Raises", sets: 3, reps: "20-25", rest: "60s" },
        { name: "Hip Thrusts", sets: 3, reps: "12-15", rest: "90s" },
      ],
      tags: ["legs", "advanced", "squats", "deadlifts", "lower-body"],
    },

    // Additional Upper-Lower Variations
    {
      id: "upper-body-advanced",
      title: "Advanced Upper Body",
      description:
        "High-intensity upper body workout for advanced lifters focusing on strength and hypertrophy.",
      category: "strength",
      difficulty: "advanced",
      split: "upper-lower",
      duration: 85,
      author: "Joel Rivas",
      exercises: [
        { name: "Bench Press", sets: 5, reps: "5-8", rest: "150s" },
        { name: "Weighted Pull-ups", sets: 4, reps: "6-8", rest: "150s" },
        { name: "Overhead Press", sets: 4, reps: "6-8", rest: "120s" },
        { name: "Barbell Rows", sets: 4, reps: "8-10", rest: "120s" },
        { name: "Weighted Dips", sets: 3, reps: "8-10", rest: "90s" },
        { name: "Barbell Curls", sets: 3, reps: "10-12", rest: "90s" },
        { name: "Lateral Raises", sets: 3, reps: "12-15", rest: "60s" },
        { name: "Tricep Extensions", sets: 3, reps: "12-15", rest: "60s" },
      ],
      tags: ["upper-body", "advanced", "strength", "hypertrophy"],
    },
    {
      id: "lower-body-advanced",
      title: "Advanced Lower Body",
      description:
        "Comprehensive lower body workout for advanced lifters focusing on strength and power development.",
      category: "strength",
      difficulty: "advanced",
      split: "upper-lower",
      duration: 90,
      author: "Atin Jain",
      exercises: [
        { name: "Squats", sets: 5, reps: "5-8", rest: "180s" },
        { name: "Romanian Deadlifts", sets: 4, reps: "6-8", rest: "150s" },
        { name: "Leg Press", sets: 4, reps: "8-10", rest: "120s" },
        {
          name: "Bulgarian Split Squats",
          sets: 3,
          reps: "8-10 each leg",
          rest: "120s",
        },
        { name: "Good Mornings", sets: 3, reps: "8-10", rest: "90s" },
        { name: "Standing Calf Raises", sets: 4, reps: "15-20", rest: "90s" },
        { name: "Hanging Leg Raises", sets: 3, reps: "12-15", rest: "60s" },
        {
          name: "Plank Variations",
          sets: 3,
          reps: "60 seconds each",
          rest: "60s",
        },
      ],
      tags: ["lower-body", "advanced", "strength", "power"],
    },

    // Additional Bro Split Variations
    {
      id: "arms-day",
      title: "Arms Day",
      description:
        "Dedicated arm workout focusing on biceps and triceps development with high volume.",
      category: "strength",
      difficulty: "intermediate",
      split: "bro-split",
      duration: 70,
      author: "Joel Rivas",
      exercises: [
        { name: "Barbell Curls", sets: 4, reps: "10-12", rest: "90s" },
        { name: "Close-grip Bench Press", sets: 4, reps: "8-10", rest: "120s" },
        { name: "Hammer Curls", sets: 3, reps: "10-12 each arm", rest: "90s" },
        { name: "Tricep Dips", sets: 3, reps: "8-12", rest: "90s" },
        { name: "Preacher Curls", sets: 3, reps: "10-12", rest: "90s" },
        { name: "Skull Crushers", sets: 3, reps: "12-15", rest: "90s" },
        {
          name: "Concentration Curls",
          sets: 3,
          reps: "12-15 each arm",
          rest: "60s",
        },
        { name: "Tricep Pushdowns", sets: 3, reps: "12-15", rest: "60s" },
        { name: "21s", sets: 3, reps: "21 reps", rest: "90s" },
        {
          name: "Overhead Tricep Extensions",
          sets: 3,
          reps: "12-15",
          rest: "60s",
        },
      ],
      tags: ["arms", "biceps", "triceps", "isolation", "volume"],
    },
    {
      id: "abs-day",
      title: "Abs & Core Day",
      description:
        "Comprehensive core workout targeting all abdominal muscles and improving stability.",
      category: "strength",
      difficulty: "intermediate",
      split: "bro-split",
      duration: 50,
      author: "Atin Jain",
      exercises: [
        { name: "Hanging Leg Raises", sets: 4, reps: "12-15", rest: "90s" },
        { name: "Ab Wheel Rollouts", sets: 3, reps: "10-12", rest: "90s" },
        {
          name: "Cable Woodchoppers",
          sets: 3,
          reps: "12-15 each side",
          rest: "90s",
        },
        {
          name: "Plank Variations",
          sets: 3,
          reps: "60 seconds each",
          rest: "60s",
        },
        { name: "Russian Twists", sets: 3, reps: "20 each side", rest: "60s" },
        { name: "Dead Bugs", sets: 3, reps: "10 each side", rest: "60s" },
        { name: "Cable Crunches", sets: 3, reps: "15-20", rest: "60s" },
        {
          name: "Side Planks",
          sets: 3,
          reps: "45 seconds each side",
          rest: "60s",
        },
      ],
      tags: ["abs", "core", "stability", "isolation"],
    },

    // Cardio Workouts
    {
      id: "hiit-cardio",
      title: "HIIT Cardio",
      description:
        "High-intensity interval training for maximum calorie burn and cardiovascular fitness.",
      category: "hiit",
      difficulty: "intermediate",
      split: "full-body",
      duration: 30,
      author: "Joel Rivas",
      exercises: [
        { name: "Burpees", sets: 8, reps: "30 seconds", rest: "30s" },
        { name: "Mountain Climbers", sets: 8, reps: "30 seconds", rest: "30s" },
        { name: "Jump Squats", sets: 8, reps: "30 seconds", rest: "30s" },
        { name: "High Knees", sets: 8, reps: "30 seconds", rest: "30s" },
        { name: "Plank Jacks", sets: 8, reps: "30 seconds", rest: "30s" },
        { name: "Rest", sets: 1, reps: "2 minutes", rest: "0s" },
      ],
      tags: ["hiit", "cardio", "fat-burning", "no-equipment"],
    },

    // Flexibility/Yoga
    {
      id: "yoga-flow",
      title: "Yoga Flow",
      description:
        "Gentle yoga flow for flexibility, mobility, and stress relief.",
      category: "yoga",
      difficulty: "beginner",
      split: "full-body",
      duration: 45,
      author: "Atin Jain",
      exercises: [
        { name: "Sun Salutation A", sets: 3, reps: "5 rounds", rest: "30s" },
        {
          name: "Warrior Sequence",
          sets: 2,
          reps: "Hold 30s each",
          rest: "30s",
        },
        { name: "Balance Poses", sets: 2, reps: "Hold 20s each", rest: "30s" },
        { name: "Hip Openers", sets: 2, reps: "Hold 30s each", rest: "30s" },
        { name: "Forward Folds", sets: 2, reps: "Hold 30s each", rest: "30s" },
        { name: "Savasana", sets: 1, reps: "5 minutes", rest: "0s" },
      ],
      tags: ["yoga", "flexibility", "mobility", "stress-relief"],
    },
  ]

  let searchTerm = ""
  let selectedCategory: WorkoutCategory | "all" = "all"
  let selectedDifficulty: WorkoutDifficulty | "all" = "all"
  let selectedSplit: WorkoutSplit | "all" = "all"

  // Get unique categories from workouts
  $: uniqueCategories = Array.from(new Set(workouts.map((w) => w.category)))

  $: filteredWorkouts = workouts.filter((workout) => {
    const matchesSearch =
      workout.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      workout.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      workout.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      )

    const matchesCategory =
      selectedCategory === "all" || workout.category === selectedCategory
    const matchesDifficulty =
      selectedDifficulty === "all" || workout.difficulty === selectedDifficulty
    const matchesSplit =
      selectedSplit === "all" || workout.split === selectedSplit

    return matchesSearch && matchesCategory && matchesDifficulty && matchesSplit
  })

  function getDifficultyColor(difficulty: WorkoutDifficulty) {
    switch (difficulty) {
      case "beginner":
        return "badge-success"
      case "intermediate":
        return "badge-warning"
      case "advanced":
        return "badge-error"
      default:
        return "badge-neutral"
    }
  }

  function getCategoryColor(category: WorkoutCategory) {
    switch (category) {
      case "strength":
        return "badge-primary"
      case "cardio":
        return "badge-secondary"
      case "hiit":
        return "badge-accent"
      case "yoga":
        return "badge-info"
      case "flexibility":
        return "badge-neutral"
      default:
        return "badge-neutral"
    }
  }

  function getSplitColor(split: WorkoutSplit) {
    switch (split) {
      case "full-body":
        return "badge-primary"
      case "push-pull-legs":
        return "badge-secondary"
      case "upper-lower":
        return "badge-accent"
      case "bro-split":
        return "badge-info"
      case "strength-focused":
        return "badge-warning"
      default:
        return "badge-neutral"
    }
  }
</script>

<svelte:head>
  <title>Workout Plans - {WebsiteName}</title>
  <meta
    name="description"
    content="Discover effective workout plans and training splits from our fitness experts. Strength, cardio, HIIT, and yoga workouts for every fitness level."
  />
</svelte:head>

<div class="py-8 lg:py-12 px-6 max-w-7xl mx-auto">
  <!-- Header Section -->
  <div class="text-center mb-12">
    <h1
      class="text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
    >
      Workout Plans
    </h1>
    <p class="text-xl text-slate-600 max-w-3xl mx-auto">
      Discover effective workout plans and training splits designed by our
      fitness experts. From beginner-friendly routines to advanced strength
      programs, we have options for every fitness level and goal.
    </p>
  </div>

  <!-- Search and Filters -->
  <div class="card bg-white shadow-lg border border-primary/10 mb-8">
    <div class="card-body">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- Search -->
        <div class="form-control">
          <label class="label">
            <span class="label-text font-semibold">Search Workouts</span>
          </label>
          <input
            type="text"
            placeholder="Search by name, description, or tags..."
            class="input input-bordered"
            bind:value={searchTerm}
          />
        </div>

        <!-- Category Filter -->
        <div class="form-control">
          <label class="label">
            <span class="label-text font-semibold">Category</span>
          </label>
          <select class="select select-bordered" bind:value={selectedCategory}>
            <option value="all">All Categories</option>
            {#each uniqueCategories as category}
              <option value={category}
                >{category.charAt(0).toUpperCase() + category.slice(1)}</option
              >
            {/each}
          </select>
        </div>

        <!-- Difficulty Filter -->
        <div class="form-control">
          <label class="label">
            <span class="label-text font-semibold">Difficulty</span>
          </label>
          <select
            class="select select-bordered"
            bind:value={selectedDifficulty}
          >
            <option value="all">All Levels</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <!-- Split Filter -->
        <div class="form-control">
          <label class="label">
            <span class="label-text font-semibold">Training Split</span>
          </label>
          <select class="select select-bordered" bind:value={selectedSplit}>
            <option value="all">All Splits</option>
            <option value="full-body">Full Body</option>
            <option value="push-pull-legs">Push/Pull/Legs</option>
            <option value="upper-lower">Upper/Lower</option>
            <option value="bro-split">Bro Split</option>
            <option value="strength-focused">Strength Focused</option>
          </select>
        </div>
      </div>
    </div>
  </div>

  <!-- Results Count -->
  <div class="mb-6">
    <p class="text-slate-600">
      Showing {filteredWorkouts.length} workout{filteredWorkouts.length !== 1
        ? "s"
        : ""}
    </p>
  </div>

  <!-- Workouts Grid -->
  <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each filteredWorkouts as workout}
      <div
        class="card bg-white shadow-lg border border-primary/10 hover:shadow-xl transition-shadow"
      >
        <div class="card-body">
          <!-- Workout Header -->
          <div class="flex justify-between items-start mb-4">
            <h3 class="text-xl font-bold text-primary">{workout.title}</h3>
            <div class="text-right">
              <div class="text-sm text-slate-500">{workout.duration} min</div>
            </div>
          </div>

          <!-- Description -->
          <p class="text-slate-600 mb-4 line-clamp-2">{workout.description}</p>

          <!-- Badges -->
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="badge {getCategoryColor(workout.category)}">
              {workout.category}
            </span>
            <span class="badge {getDifficultyColor(workout.difficulty)}">
              {workout.difficulty}
            </span>
            <span class="badge {getSplitColor(workout.split)}">
              {workout.split}
            </span>
          </div>

          <!-- Exercise Preview -->
          <div class="mb-4">
            <h4 class="font-semibold text-sm text-slate-700 mb-2">
              Exercises:
            </h4>
            <div class="space-y-1">
              {#each workout.exercises.slice(0, 3) as exercise}
                <div class="text-sm text-slate-600">
                  • {exercise.name} ({exercise.sets} sets)
                </div>
              {/each}
              {#if workout.exercises.length > 3}
                <div class="text-sm text-slate-500">
                  +{workout.exercises.length - 3} more exercises
                </div>
              {/if}
            </div>
          </div>

          <!-- Author and Tags -->
          <div class="flex justify-between items-center">
            <div class="text-sm text-slate-500">
              By <span class="font-semibold text-primary">{workout.author}</span
              >
            </div>
            <a href="/workouts/{workout.id}" class="btn btn-primary btn-sm">
              View Workout
            </a>
          </div>
        </div>
      </div>
    {/each}
  </div>

  <!-- No Results -->
  {#if filteredWorkouts.length === 0}
    <div class="text-center py-12">
      <div class="text-6xl mb-4">💪</div>
      <h2 class="text-2xl font-bold mb-4">No Workouts Found</h2>
      <p class="text-slate-600 mb-6">
        Try adjusting your search criteria or filters to find the perfect
        workout.
      </p>
      <button
        class="btn btn-primary"
        on:click={() => {
          searchTerm = ""
          selectedCategory = "all"
          selectedDifficulty = "all"
          selectedSplit = "all"
        }}
      >
        Clear Filters
      </button>
    </div>
  {/if}

  <!-- Call to Action -->
  <div class="text-center mt-12">
    <div
      class="card bg-gradient-to-r from-primary to-accent text-white shadow-xl"
    >
      <div class="card-body">
        <h3 class="text-2xl font-bold mb-4">
          Ready to Transform Your Fitness?
        </h3>
        <p class="text-lg opacity-90 mb-6">
          Join our community and get access to personalized workout plans and
          expert guidance.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/pricing" class="btn btn-secondary btn-lg"> View Plans </a>
          <a
            href="/blog"
            class="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary"
          >
            Read Fitness Tips
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
