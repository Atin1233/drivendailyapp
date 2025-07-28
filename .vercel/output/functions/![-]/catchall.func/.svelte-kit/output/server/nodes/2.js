import stylesheet_2 from '../stylesheets/2.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(marketing)/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.DsQZ6eBv.js","_app/immutable/chunks/CCXyYejH.js","_app/immutable/chunks/CddOsZcZ.js","_app/immutable/chunks/CgqW8zCW.js","_app/immutable/chunks/BllwhPDT.js","_app/immutable/chunks/B9QI8j-U.js","_app/immutable/chunks/lug5SI9j.js","_app/immutable/chunks/h12K--vQ.js","_app/immutable/chunks/Bg8QSxDk.js"];
export const stylesheets = ["_app/immutable/assets/2.uKOaqGYw.css","_app/immutable/assets/app.Bol5nAHv.css"];
export const fonts = [];
export const inline_styles = () => ({
	"_app/immutable/assets/2.uKOaqGYw.css": stylesheet_2
});
