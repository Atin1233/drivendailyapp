export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/cm_logo.svg","images/driven-daily-logo.svg","images/example-home.png","images/rss.svg","robots.txt"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.CMyHpK9e.js",app:"_app/immutable/entry/app.B9Gz_bCJ.js",imports:["_app/immutable/entry/start.CMyHpK9e.js","_app/immutable/chunks/ByK_e989.js","_app/immutable/chunks/CddOsZcZ.js","_app/immutable/chunks/h12K--vQ.js","_app/immutable/entry/app.B9Gz_bCJ.js","_app/immutable/chunks/CddOsZcZ.js","_app/immutable/chunks/D-vY586r.js","_app/immutable/chunks/B9QI8j-U.js","_app/immutable/chunks/BJmlBrM1.js","_app/immutable/chunks/CCXyYejH.js","_app/immutable/chunks/B0hXOaSJ.js","_app/immutable/chunks/CfsQceG7.js","_app/immutable/chunks/BEhHH_o6.js","_app/immutable/chunks/h12K--vQ.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/29.js')),
			__memo(() => import('../output/server/nodes/30.js')),
			__memo(() => import('../output/server/nodes/31.js')),
			__memo(() => import('../output/server/nodes/32.js')),
			__memo(() => import('../output/server/nodes/34.js')),
			__memo(() => import('../output/server/nodes/35.js')),
			__memo(() => import('../output/server/nodes/36.js')),
			__memo(() => import('../output/server/nodes/37.js')),
			__memo(() => import('../output/server/nodes/39.js')),
			__memo(() => import('../output/server/nodes/40.js')),
			__memo(() => import('../output/server/nodes/41.js'))
		],
		routes: [
			{
				id: "/(marketing)/blog/rss.xml",
				pattern: /^\/blog\/rss\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/(marketing)/blog/rss.xml/_server.ts.js'))
			},
			{
				id: "/(marketing)/bmi-calculator",
				pattern: /^\/bmi-calculator\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/(marketing)/contact_us",
				pattern: /^\/contact_us\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(marketing)/health-quiz",
				pattern: /^\/health-quiz\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(marketing)/health-quiz/results",
				pattern: /^\/health-quiz\/results\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(marketing)/recipes",
				pattern: /^\/recipes\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(marketing)/recipes/[id]",
				pattern: /^\/recipes\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(marketing)/recovery",
				pattern: /^\/recovery\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(marketing)/recovery/[id]",
				pattern: /^\/recovery\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(marketing)/search/api.json",
				pattern: /^\/search\/api\.json\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/(marketing)/search/api.json/_server.ts.js'))
			},
			{
				id: "/(marketing)/testimonials",
				pattern: /^\/testimonials\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(marketing)/workouts",
				pattern: /^\/workouts\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(marketing)/workouts/[id]",
				pattern: /^\/workouts\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 13 },
				endpoint: null
			}
		],
		prerendered_routes: new Set(["/","/blog","/blog/cardio_truth","/blog/consistency_1_percent_rule","/blog/hiit_vs_steady_state","/blog/home_gym_budget","/blog/home_workout_20_min","/blog/meal_prep_sunday","/blog/meal_timing_performance","/blog/mindset_matters","/blog/morning_habits_that_stick","/blog/pre_post_workout_nutrition","/blog/protein_guide","/blog/psychology_habit_formation","/blog/quick_healthy_snacks","/blog/recovery_techniques","/blog/sleep_optimization","/blog/smart_goal_setting","/blog/strength_training_beginners","/blog/stress_management_fitness","/blog/visualization_fitness_goals","/pricing","/search"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
