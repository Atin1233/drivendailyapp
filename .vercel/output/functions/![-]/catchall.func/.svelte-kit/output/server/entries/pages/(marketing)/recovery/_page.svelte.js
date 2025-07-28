import { Y as ensure_array_like, X as head, W as stringify, S as pop, Q as push } from "../../../../chunks/index.js";
import { a as WebsiteName } from "../../../../chunks/config.js";
import { e as escape_html } from "../../../../chunks/escaping.js";
import { a as attr } from "../../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  let filteredTechniques;
  const recoveryTechniques = [
    // Physical Therapy
    {
      id: "foam-rolling-basics",
      title: "Foam Rolling Basics",
      description: "Essential foam rolling techniques to release muscle tension and improve recovery.",
      category: "physical-therapy",
      difficulty: "beginner",
      duration: 15,
      benefits: [
        "Releases muscle tension",
        "Improves blood flow",
        "Reduces muscle soreness",
        "Enhances flexibility",
        "Speeds up recovery"
      ],
      instructions: [
        "Start with major muscle groups: calves, hamstrings, quads, glutes",
        "Roll slowly and pause on tender spots for 30-60 seconds",
        "Breathe deeply and relax into the pressure",
        "Spend 2-3 minutes per muscle group",
        "Avoid rolling over bones or joints"
      ],
      equipment: ["Foam roller"],
      author: "Joel Rivas",
      tags: [
        "foam-rolling",
        "myofascial-release",
        "recovery",
        "beginner-friendly"
      ]
    },
    {
      id: "advanced-foam-rolling",
      title: "Advanced Foam Rolling",
      description: "Advanced foam rolling techniques for deeper muscle release and targeted therapy.",
      category: "physical-therapy",
      difficulty: "advanced",
      duration: 25,
      benefits: [
        "Deep tissue release",
        "Targets specific trigger points",
        "Improves range of motion",
        "Reduces chronic pain",
        "Enhances athletic performance"
      ],
      instructions: [
        "Use targeted pressure on specific muscle knots",
        "Incorporate movement while rolling (active release)",
        "Focus on problem areas identified during assessment",
        "Use different roller densities for various muscle groups",
        "Combine with stretching for maximum benefit"
      ],
      equipment: [
        "Foam roller",
        "Lacrosse ball",
        "Massage stick"
      ],
      author: "Atin Jain",
      tags: [
        "advanced",
        "deep-tissue",
        "trigger-points",
        "performance"
      ]
    },
    {
      id: "stretching-routine",
      title: "Dynamic Stretching Routine",
      description: "Comprehensive dynamic stretching routine to improve mobility and prevent injury.",
      category: "mobility",
      difficulty: "beginner",
      duration: 20,
      benefits: [
        "Improves joint mobility",
        "Increases muscle flexibility",
        "Enhances athletic performance",
        "Reduces injury risk",
        "Improves posture"
      ],
      instructions: [
        "Start with light cardio to warm up muscles",
        "Perform each stretch for 10-15 repetitions",
        "Move slowly and controlled through each movement",
        "Focus on major muscle groups and joints",
        "End with static stretches for tight areas"
      ],
      equipment: [],
      author: "Joel Rivas",
      tags: [
        "stretching",
        "mobility",
        "flexibility",
        "injury-prevention"
      ]
    },
    {
      id: "yoga-recovery",
      title: "Recovery Yoga Flow",
      description: "Gentle yoga sequence designed specifically for post-workout recovery and relaxation.",
      category: "wellness",
      difficulty: "beginner",
      duration: 30,
      benefits: [
        "Promotes relaxation",
        "Improves flexibility",
        "Reduces stress hormones",
        "Enhances mind-body connection",
        "Speeds up recovery process"
      ],
      instructions: [
        "Start in a comfortable seated position",
        "Focus on deep, controlled breathing",
        "Move slowly and mindfully through poses",
        "Hold poses for 5-10 breaths",
        "End with 5 minutes of meditation"
      ],
      equipment: ["Yoga mat"],
      author: "Atin Jain",
      tags: [
        "yoga",
        "recovery",
        "relaxation",
        "mindfulness"
      ]
    },
    {
      id: "percussion-therapy",
      title: "Percussion Therapy",
      description: "Use of percussion massagers to break up muscle knots and improve blood flow.",
      category: "recovery-tools",
      difficulty: "intermediate",
      duration: 15,
      benefits: [
        "Breaks up muscle adhesions",
        "Improves blood circulation",
        "Reduces muscle tension",
        "Speeds up recovery",
        "Relieves muscle soreness"
      ],
      instructions: [
        "Start with low intensity and gradually increase",
        "Focus on major muscle groups for 2-3 minutes each",
        "Move slowly and systematically",
        "Avoid bony areas and joints",
        "Use different attachments for various muscle groups"
      ],
      equipment: ["Percussion massager"],
      author: "Joel Rivas",
      tags: [
        "percussion-therapy",
        "muscle-recovery",
        "blood-flow",
        "tension-relief"
      ]
    },
    {
      id: "breathing-techniques",
      title: "Recovery Breathing Techniques",
      description: "Breathing exercises to activate the parasympathetic nervous system and promote recovery.",
      category: "wellness",
      difficulty: "beginner",
      duration: 10,
      benefits: [
        "Activates recovery mode",
        "Reduces stress hormones",
        "Improves oxygen delivery",
        "Enhances relaxation",
        "Speeds up recovery"
      ],
      instructions: [
        "Find a comfortable seated position",
        "Inhale deeply through nose for 4 counts",
        "Hold breath for 4 counts",
        "Exhale slowly through mouth for 6 counts",
        "Repeat for 5-10 minutes"
      ],
      equipment: [],
      author: "Atin Jain",
      tags: [
        "breathing",
        "recovery",
        "stress-reduction",
        "relaxation"
      ]
    },
    {
      id: "post-workout-nutrition",
      title: "Post-Workout Nutrition",
      description: "Optimal nutrition timing and choices for maximum recovery and muscle repair.",
      category: "nutrition",
      difficulty: "beginner",
      duration: 5,
      benefits: [
        "Speeds up muscle repair",
        "Replenishes glycogen stores",
        "Reduces muscle soreness",
        "Improves recovery",
        "Enhances performance"
      ],
      instructions: [
        "Consume protein within 30 minutes post-workout",
        "Include carbohydrates to replenish glycogen",
        "Stay hydrated with water and electrolytes",
        "Eat a balanced meal within 2 hours",
        "Consider supplements like BCAAs or creatine"
      ],
      equipment: [],
      author: "Atin Jain",
      tags: [
        "nutrition",
        "post-workout",
        "muscle-repair",
        "recovery"
      ]
    },
    {
      id: "sleep-optimization",
      title: "Sleep Optimization for Recovery",
      description: "Sleep strategies to maximize recovery and athletic performance.",
      category: "sleep",
      difficulty: "beginner",
      duration: 480,
      // 8 hours
      benefits: [
        "Maximizes muscle repair",
        "Improves hormone balance",
        "Enhances cognitive function",
        "Reduces injury risk",
        "Speeds up recovery"
      ],
      instructions: [
        "Aim for 7-9 hours of quality sleep",
        "Maintain consistent sleep schedule",
        "Create a relaxing bedtime routine",
        "Optimize sleep environment (dark, cool, quiet)",
        "Avoid screens 1 hour before bed"
      ],
      equipment: [],
      author: "Atin Jain",
      tags: [
        "sleep",
        "recovery",
        "hormones",
        "performance"
      ]
    }
  ];
  let searchQuery = "";
  function getCategoryColor(category) {
    switch (category) {
      case "physical-therapy":
        return "badge-primary";
      case "mobility":
        return "badge-secondary";
      case "recovery-tools":
        return "badge-accent";
      case "wellness":
        return "badge-success";
      case "nutrition":
        return "badge-warning";
      case "sleep":
        return "badge-info";
      default:
        return "badge-outline";
    }
  }
  function getCategoryIcon(category) {
    switch (category) {
      case "physical-therapy":
        return "🛠️";
      case "mobility":
        return "🤸‍♀️";
      case "recovery-tools":
        return "⚡";
      case "wellness":
        return "🧘‍♀️";
      case "nutrition":
        return "🥗";
      case "sleep":
        return "😴";
      default:
        return "💆‍♂️";
    }
  }
  function getDifficultyColor(difficulty) {
    switch (difficulty) {
      case "beginner":
        return "badge-success";
      case "intermediate":
        return "badge-warning";
      case "advanced":
        return "badge-error";
      default:
        return "badge-outline";
    }
  }
  let animatedStats = { techniques: 0, categories: 0, benefits: 0 };
  filteredTechniques = recoveryTechniques.filter((technique) => {
    const matchesSearch = technique.title.toLowerCase().includes(searchQuery.toLowerCase()) || technique.description.toLowerCase().includes(searchQuery.toLowerCase()) || technique.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSearch;
  });
  const each_array = ensure_array_like(filteredTechniques);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Recovery - ${escape_html(WebsiteName)}</title>`;
    $$payload2.out += `<meta name="description" content="Comprehensive recovery techniques, physical therapies, and wellness practices for active people." class="svelte-kmw11k">`;
  });
  $$payload.out += `<div class="py-20 bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 text-white relative overflow-hidden svelte-kmw11k"><div class="absolute inset-0 overflow-hidden svelte-kmw11k"><div class="absolute inset-0 opacity-5 svelte-kmw11k"><div class="absolute top-10 left-10 text-6xl transform rotate-12 svelte-kmw11k">🧘‍♀️</div> <div class="absolute top-20 right-20 text-4xl transform -rotate-12 svelte-kmw11k">💆‍♂️</div> <div class="absolute bottom-20 left-1/4 text-5xl transform rotate-6 svelte-kmw11k">⚡</div> <div class="absolute bottom-10 right-1/3 text-3xl transform -rotate-6 svelte-kmw11k">🛠️</div></div> <div class="absolute inset-0 svelte-kmw11k"><div class="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent svelte-kmw11k"></div> <div class="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent svelte-kmw11k"></div> <div class="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent svelte-kmw11k"></div> <div class="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent svelte-kmw11k"></div></div></div> <div class="container mx-auto px-6 relative z-10 svelte-kmw11k"><div class="max-w-6xl mx-auto svelte-kmw11k"><div class="grid lg:grid-cols-2 gap-16 items-center svelte-kmw11k"><div class="text-left space-y-8 svelte-kmw11k"><div class="slide-in-left svelte-kmw11k"><h1 class="text-5xl lg:text-7xl font-bold mb-6 leading-tight font-poppins svelte-kmw11k">Recovery &amp; <span class="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent svelte-kmw11k">Wellness</span></h1></div> <div class="slide-in-right svelte-kmw11k"><p class="text-xl lg:text-2xl opacity-90 leading-relaxed mb-8 svelte-kmw11k">Essential recovery techniques, physical therapies, and wellness
              practices to help active people recover faster, prevent injury,
              and optimize performance.</p></div> <div class="grid grid-cols-3 gap-6 svelte-kmw11k"><div class="stat-card svelte-kmw11k"><div class="text-3xl font-bold mb-2 svelte-kmw11k">${escape_html(animatedStats.techniques)}</div> <div class="text-sm opacity-80 svelte-kmw11k">Techniques</div></div> <div class="stat-card svelte-kmw11k"><div class="text-3xl font-bold mb-2 svelte-kmw11k">${escape_html(animatedStats.categories)}</div> <div class="text-sm opacity-80 svelte-kmw11k">Categories</div></div> <div class="stat-card svelte-kmw11k"><div class="text-3xl font-bold mb-2 svelte-kmw11k">${escape_html(animatedStats.benefits)}</div> <div class="text-sm opacity-80 svelte-kmw11k">Benefits</div></div></div></div> <div class="relative svelte-kmw11k"><div class="card bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 svelte-kmw11k"><div class="card-body p-8 svelte-kmw11k"><div class="text-center mb-6 svelte-kmw11k"><div class="text-4xl mb-4 svelte-kmw11k">⚡</div> <h3 class="text-2xl font-bold text-white mb-2 svelte-kmw11k">Most Popular</h3> <div class="text-4xl font-bold text-purple-400 mb-2 svelte-kmw11k">15 min</div> <div class="text-white/80 svelte-kmw11k">Foam Rolling Basics</div></div> <ul class="space-y-3 mb-6 text-sm svelte-kmw11k"><li class="flex items-center text-white/90 svelte-kmw11k"><span class="text-green-400 mr-2 svelte-kmw11k">✓</span> Release muscle tension</li> <li class="flex items-center text-white/90 svelte-kmw11k"><span class="text-green-400 mr-2 svelte-kmw11k">✓</span> Improve blood flow</li> <li class="flex items-center text-white/90 svelte-kmw11k"><span class="text-green-400 mr-2 svelte-kmw11k">✓</span> Speed up recovery</li></ul> <a href="/recovery/foam-rolling-basics" class="btn btn-primary btn-lg w-full svelte-kmw11k">Learn Technique →</a></div></div> <div class="absolute -top-6 -right-6 w-12 h-12 bg-purple-400 rounded-full float-animation svelte-kmw11k"></div> <div class="absolute -bottom-6 -left-6 w-8 h-8 bg-indigo-400 rounded-full float-animation svelte-kmw11k" style="animation-delay: -2s;"></div></div></div></div></div></div> <div class="py-16 lg:py-20 px-6 max-w-7xl mx-auto svelte-kmw11k"><div class="mb-16 svelte-kmw11k"><div class="search-card svelte-kmw11k"><div class="mb-8 svelte-kmw11k"><div class="relative max-w-2xl mx-auto svelte-kmw11k"><input type="text"${attr("value", searchQuery)} placeholder="Search recovery techniques..." class="search-input svelte-kmw11k"> <svg class="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400 svelte-kmw11k" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" class="svelte-kmw11k"></path></svg></div></div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 svelte-kmw11k"><div class="filter-group svelte-kmw11k"><label class="filter-label svelte-kmw11k">Category</label> <select class="filter-select svelte-kmw11k"><option value="all" class="svelte-kmw11k">All Categories</option><option value="physical-therapy" class="svelte-kmw11k">🛠️ Physical Therapy</option><option value="mobility" class="svelte-kmw11k">🤸‍♀️ Mobility</option><option value="recovery-tools" class="svelte-kmw11k">⚡ Recovery Tools</option><option value="wellness" class="svelte-kmw11k">🧘‍♀️ Wellness</option><option value="nutrition" class="svelte-kmw11k">🥗 Nutrition</option><option value="sleep" class="svelte-kmw11k">😴 Sleep</option></select></div> <div class="filter-group svelte-kmw11k"><label class="filter-label svelte-kmw11k">Difficulty</label> <select class="filter-select svelte-kmw11k"><option value="all" class="svelte-kmw11k">All Levels</option><option value="beginner" class="svelte-kmw11k">🟢 Beginner</option><option value="intermediate" class="svelte-kmw11k">🟡 Intermediate</option><option value="advanced" class="svelte-kmw11k">🔴 Advanced</option></select></div></div></div></div> <div class="mb-12 svelte-kmw11k"><div class="text-center svelte-kmw11k"><h2 class="text-3xl font-bold text-gray-800 mb-3 font-poppins svelte-kmw11k">${escape_html(filteredTechniques.length)} Technique${escape_html(filteredTechniques.length !== 1 ? "s" : "")} Found</h2> <p class="text-gray-600 text-lg svelte-kmw11k">${escape_html("All recovery techniques")}</p></div></div> <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 svelte-kmw11k"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let technique = each_array[$$index];
    $$payload.out += `<a${attr("href", `/recovery/${technique.id}`)} class="block group svelte-kmw11k"><div class="recovery-card svelte-kmw11k"><div class="recovery-header svelte-kmw11k"><div class="flex flex-wrap gap-2 svelte-kmw11k"><span${attr("class", `badge ${stringify(getCategoryColor(technique.category))} badge-sm svelte-kmw11k`)}>${escape_html(getCategoryIcon(technique.category))}
                ${escape_html(technique.category.replace("-", " "))}</span> <span${attr("class", `badge ${stringify(getDifficultyColor(technique.difficulty))} badge-sm svelte-kmw11k`)}>${escape_html(technique.difficulty)}</span></div> <div class="duration-badge svelte-kmw11k"><span class="text-xs svelte-kmw11k">${escape_html(technique.duration)} min</span></div></div> <h3 class="recovery-title svelte-kmw11k">${escape_html(technique.title)}</h3> <p class="recovery-description svelte-kmw11k">${escape_html(technique.description)}</p> <div class="recovery-stats svelte-kmw11k"><div class="stat-item svelte-kmw11k"><div class="stat-value svelte-kmw11k">${escape_html(technique.duration)}</div> <div class="stat-label svelte-kmw11k">Minutes</div></div> <div class="stat-item svelte-kmw11k"><div class="stat-value svelte-kmw11k">${escape_html(technique.benefits.length)}</div> <div class="stat-label svelte-kmw11k">Benefits</div></div> <div class="stat-item svelte-kmw11k"><div class="stat-value svelte-kmw11k">${escape_html(technique.difficulty)}</div> <div class="stat-label svelte-kmw11k">Level</div></div></div> <div class="recovery-meta svelte-kmw11k"><div class="meta-info svelte-kmw11k"><span class="meta-item svelte-kmw11k"><svg class="w-4 h-4 svelte-kmw11k" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" class="svelte-kmw11k"></path></svg> ${escape_html(technique.difficulty)}</span> <span class="meta-item svelte-kmw11k"><svg class="w-4 h-4 svelte-kmw11k" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" class="svelte-kmw11k"></path></svg> ${escape_html(technique.duration)} min</span></div> <div class="author-info svelte-kmw11k">By ${escape_html(technique.author)}</div></div></div></a>`;
  }
  $$payload.out += `<!--]--></div> `;
  if (filteredTechniques.length === 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="text-center py-16 svelte-kmw11k"><div class="text-6xl mb-4 svelte-kmw11k">🧘‍♀️</div> <h3 class="text-2xl font-bold text-gray-800 mb-4 svelte-kmw11k">No Recovery Techniques Found</h3> <p class="text-gray-600 mb-8 svelte-kmw11k">Try adjusting your search terms or filters to find what you're looking
        for.</p> <button class="btn btn-primary btn-lg svelte-kmw11k">Clear Filters</button></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="mt-20 svelte-kmw11k"><div class="text-center mb-12 svelte-kmw11k"><h2 class="text-3xl font-bold text-gray-800 mb-4 font-poppins svelte-kmw11k">Recovery Categories</h2> <p class="text-gray-600 text-lg svelte-kmw11k">Explore different types of recovery techniques</p></div> <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 svelte-kmw11k"><div class="category-card svelte-kmw11k"><div class="text-4xl mb-4 svelte-kmw11k">🛠️</div> <h3 class="text-xl font-bold mb-2 svelte-kmw11k">Physical Therapy</h3> <p class="text-gray-600 svelte-kmw11k">Hands-on techniques for muscle recovery and injury prevention</p></div> <div class="category-card svelte-kmw11k"><div class="text-4xl mb-4 svelte-kmw11k">🤸‍♀️</div> <h3 class="text-xl font-bold mb-2 svelte-kmw11k">Mobility</h3> <p class="text-gray-600 svelte-kmw11k">Stretching and flexibility exercises for better movement</p></div> <div class="category-card svelte-kmw11k"><div class="text-4xl mb-4 svelte-kmw11k">⚡</div> <h3 class="text-xl font-bold mb-2 svelte-kmw11k">Recovery Tools</h3> <p class="text-gray-600 svelte-kmw11k">Equipment-based recovery methods and techniques</p></div> <div class="category-card svelte-kmw11k"><div class="text-4xl mb-4 svelte-kmw11k">🧘‍♀️</div> <h3 class="text-xl font-bold mb-2 svelte-kmw11k">Wellness</h3> <p class="text-gray-600 svelte-kmw11k">Mind-body practices for holistic recovery</p></div> <div class="category-card svelte-kmw11k"><div class="text-4xl mb-4 svelte-kmw11k">🥗</div> <h3 class="text-xl font-bold mb-2 svelte-kmw11k">Nutrition</h3> <p class="text-gray-600 svelte-kmw11k">Nutritional strategies to support recovery</p></div> <div class="category-card svelte-kmw11k"><div class="text-4xl mb-4 svelte-kmw11k">😴</div> <h3 class="text-xl font-bold mb-2 svelte-kmw11k">Sleep</h3> <p class="text-gray-600 svelte-kmw11k">Sleep optimization for maximum recovery</p></div></div></div></div>`;
  pop();
}
export {
  _page as default
};
