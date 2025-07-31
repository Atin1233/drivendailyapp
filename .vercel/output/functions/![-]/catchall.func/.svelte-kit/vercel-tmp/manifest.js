export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","favicon.svg","images/cm_logo.svg","images/driven-daily-logo.svg","images/example-home.png","images/rss.svg","robots.txt"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.CEikzKW8.js",app:"_app/immutable/entry/app.tubphQJV.js",imports:["_app/immutable/entry/start.CEikzKW8.js","_app/immutable/chunks/CG66PrcL.js","_app/immutable/chunks/BV9qdzil.js","_app/immutable/chunks/BFqC5wTN.js","_app/immutable/chunks/YpQPQr3W.js","_app/immutable/entry/app.tubphQJV.js","_app/immutable/chunks/BV9qdzil.js","_app/immutable/chunks/BFqC5wTN.js","_app/immutable/chunks/BFf8dqXx.js","_app/immutable/chunks/C7Reg7aU.js","_app/immutable/chunks/Del82Ylf.js","_app/immutable/chunks/Cnl_p21v.js","_app/immutable/chunks/hbSGsm1g.js","_app/immutable/chunks/nYe6a6qS.js","_app/immutable/chunks/D2AOx3bb.js","_app/immutable/chunks/CW8lhDXW.js","_app/immutable/chunks/YpQPQr3W.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/29.js')),
			__memo(() => import('../output/server/nodes/30.js')),
			__memo(() => import('../output/server/nodes/31.js')),
			__memo(() => import('../output/server/nodes/32.js')),
			__memo(() => import('../output/server/nodes/33.js')),
			__memo(() => import('../output/server/nodes/34.js')),
			__memo(() => import('../output/server/nodes/36.js')),
			__memo(() => import('../output/server/nodes/37.js')),
			__memo(() => import('../output/server/nodes/38.js')),
			__memo(() => import('../output/server/nodes/39.js')),
			__memo(() => import('../output/server/nodes/41.js')),
			__memo(() => import('../output/server/nodes/42.js')),
			__memo(() => import('../output/server/nodes/43.js')),
			__memo(() => import('../output/server/nodes/44.js'))
		],
		routes: [
			{
				id: "/auth",
				pattern: /^\/auth\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
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
				id: "/(marketing)/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(marketing)/gallery",
				pattern: /^\/gallery\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(marketing)/health-quiz",
				pattern: /^\/health-quiz\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(marketing)/health-quiz/results",
				pattern: /^\/health-quiz\/results\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(marketing)/recipes",
				pattern: /^\/recipes\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(marketing)/recipes/[id]",
				pattern: /^\/recipes\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(marketing)/recovery",
				pattern: /^\/recovery\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(marketing)/recovery/[id]",
				pattern: /^\/recovery\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 12 },
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
				page: { layouts: [0,2,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(marketing)/workouts",
				pattern: /^\/workouts\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(marketing)/workouts/[id]",
				pattern: /^\/workouts\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 15 },
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
