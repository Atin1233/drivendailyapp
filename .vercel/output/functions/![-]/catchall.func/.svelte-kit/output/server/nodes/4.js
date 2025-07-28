import stylesheet_4 from '../stylesheets/4.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(marketing)/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.c8LhqeQN.js","_app/immutable/chunks/Bra_S4fl.js","_app/immutable/chunks/BXvjSyo1.js","_app/immutable/chunks/MyLDiW2X.js","_app/immutable/chunks/B-Owt90U.js","_app/immutable/chunks/CkAdDOH0.js","_app/immutable/chunks/BIYmJOqi.js","_app/immutable/chunks/DmsxExlk.js","_app/immutable/chunks/B492L24E.js"];
export const stylesheets = ["_app/immutable/assets/4.uKOaqGYw.css","_app/immutable/assets/app.CbW61kbW.css"];
export const fonts = [];
export const inline_styles = () => ({
	"_app/immutable/assets/4.uKOaqGYw.css": stylesheet_4
});
