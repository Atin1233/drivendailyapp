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
		client: {start:"_app/immutable/entry/start.BWFYXjlB.js",app:"_app/immutable/entry/app.CCCUszYU.js",imports:["_app/immutable/entry/start.BWFYXjlB.js","_app/immutable/chunks/DIdMOMjp.js","_app/immutable/chunks/BXvjSyo1.js","_app/immutable/chunks/IQuOyDNd.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/DmsxExlk.js","_app/immutable/entry/app.CCCUszYU.js","_app/immutable/chunks/3WEM7Ar6.js","_app/immutable/chunks/BXvjSyo1.js","_app/immutable/chunks/cMSbZ_VT.js","_app/immutable/chunks/CkAdDOH0.js","_app/immutable/chunks/UyLqrWNA.js","_app/immutable/chunks/Bra_S4fl.js","_app/immutable/chunks/ChysxtMs.js","_app/immutable/chunks/BpRsWIjX.js","_app/immutable/chunks/vC8Mi9xF.js","_app/immutable/chunks/DukglcIF.js","_app/immutable/chunks/DmsxExlk.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js')),
			__memo(() => import('../output/server/nodes/10.js')),
			__memo(() => import('../output/server/nodes/11.js')),
			__memo(() => import('../output/server/nodes/12.js')),
			__memo(() => import('../output/server/nodes/13.js')),
			__memo(() => import('../output/server/nodes/14.js')),
			__memo(() => import('../output/server/nodes/15.js')),
			__memo(() => import('../output/server/nodes/16.js')),
			__memo(() => import('../output/server/nodes/17.js')),
			__memo(() => import('../output/server/nodes/18.js')),
			__memo(() => import('../output/server/nodes/19.js')),
			__memo(() => import('../output/server/nodes/20.js')),
			__memo(() => import('../output/server/nodes/21.js')),
			__memo(() => import('../output/server/nodes/22.js')),
			__memo(() => import('../output/server/nodes/47.js')),
			__memo(() => import('../output/server/nodes/48.js')),
			__memo(() => import('../output/server/nodes/49.js')),
			__memo(() => import('../output/server/nodes/50.js')),
			__memo(() => import('../output/server/nodes/51.js')),
			__memo(() => import('../output/server/nodes/52.js')),
			__memo(() => import('../output/server/nodes/53.js')),
			__memo(() => import('../output/server/nodes/54.js')),
			__memo(() => import('../output/server/nodes/55.js')),
			__memo(() => import('../output/server/nodes/57.js')),
			__memo(() => import('../output/server/nodes/58.js')),
			__memo(() => import('../output/server/nodes/59.js')),
			__memo(() => import('../output/server/nodes/60.js')),
			__memo(() => import('../output/server/nodes/62.js')),
			__memo(() => import('../output/server/nodes/63.js')),
			__memo(() => import('../output/server/nodes/64.js'))
		],
		routes: [
			{
				id: "/(admin)/account/(menu)",
				pattern: /^\/account\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(admin)/account/api",
				pattern: /^\/account\/api\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/(admin)/account/(menu)/billing",
				pattern: /^\/account\/billing\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(admin)/account/(menu)/billing/manage",
				pattern: /^\/account\/billing\/manage\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(admin)/account/create_profile",
				pattern: /^\/account\/create_profile\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/(admin)/account/select_plan",
				pattern: /^\/account\/select_plan\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/(admin)/account/(menu)/settings",
				pattern: /^\/account\/settings\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(admin)/account/(menu)/settings/change_email_subscription",
				pattern: /^\/account\/settings\/change_email_subscription\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(admin)/account/(menu)/settings/change_email",
				pattern: /^\/account\/settings\/change_email\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(admin)/account/(menu)/settings/change_password",
				pattern: /^\/account\/settings\/change_password\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(admin)/account/(menu)/settings/delete_account",
				pattern: /^\/account\/settings\/delete_account\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(admin)/account/(menu)/settings/edit_profile",
				pattern: /^\/account\/settings\/edit_profile\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(admin)/account/(menu)/settings/reset_password",
				pattern: /^\/account\/settings\/reset_password\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(admin)/account/sign_out",
				pattern: /^\/account\/sign_out\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/(admin)/account/subscribe/[slug]",
				pattern: /^\/account\/subscribe\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/(marketing)/auth/callback",
				pattern: /^\/auth\/callback\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/(marketing)/auth/callback/_server.js'))
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
				page: { layouts: [0,4,], errors: [1,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/(marketing)/contact_us",
				pattern: /^\/contact_us\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/(marketing)/health-quiz",
				pattern: /^\/health-quiz\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/(marketing)/health-quiz/results",
				pattern: /^\/health-quiz\/results\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/(marketing)/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/(marketing)/login/current_password_error",
				pattern: /^\/login\/current_password_error\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/(marketing)/login/forgot_password",
				pattern: /^\/login\/forgot_password\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/(marketing)/login/sign_in",
				pattern: /^\/login\/sign_in\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/(marketing)/login/sign_up",
				pattern: /^\/login\/sign_up\/?$/,
				params: [],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/(marketing)/recipes",
				pattern: /^\/recipes\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/(marketing)/recipes/[id]",
				pattern: /^\/recipes\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/(marketing)/recovery",
				pattern: /^\/recovery\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 32 },
				endpoint: null
			},
			{
				id: "/(marketing)/recovery/[id]",
				pattern: /^\/recovery\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 33 },
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
				page: { layouts: [0,4,], errors: [1,,], leaf: 34 },
				endpoint: null
			},
			{
				id: "/(marketing)/workouts",
				pattern: /^\/workouts\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 35 },
				endpoint: null
			},
			{
				id: "/(marketing)/workouts/[id]",
				pattern: /^\/workouts\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,], errors: [1,,], leaf: 36 },
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
