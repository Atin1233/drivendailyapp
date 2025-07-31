import stylesheet_2 from '../stylesheets/2.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(marketing)/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.Cm_YymRU.js","_app/immutable/chunks/hbSGsm1g.js","_app/immutable/chunks/BV9qdzil.js","_app/immutable/chunks/BFqC5wTN.js","_app/immutable/chunks/C7Reg7aU.js","_app/immutable/chunks/Cnl_p21v.js","_app/immutable/chunks/nYe6a6qS.js","_app/immutable/chunks/vRHDVAvX.js","_app/immutable/chunks/CzxBQJX9.js","_app/immutable/chunks/arHl35m2.js","_app/immutable/chunks/CW8lhDXW.js","_app/immutable/chunks/YpQPQr3W.js","_app/immutable/chunks/BPOv3CGS.js","_app/immutable/chunks/C1KtLt0P.js","_app/immutable/chunks/Bg8QSxDk.js"];
export const stylesheets = ["_app/immutable/assets/2.QvDqfMSk.css","_app/immutable/assets/app.BUwd43HA.css"];
export const fonts = [];
export const inline_styles = () => ({
	"_app/immutable/assets/2.QvDqfMSk.css": stylesheet_2
});
