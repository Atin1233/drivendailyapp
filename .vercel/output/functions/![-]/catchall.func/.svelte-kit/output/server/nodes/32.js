import stylesheet_32 from '../stylesheets/32.js';

export const index = 32;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(marketing)/gallery/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/32.BB_YeMT-.js","_app/immutable/chunks/hbSGsm1g.js","_app/immutable/chunks/DE-IBh8Z.js","_app/immutable/chunks/BFqC5wTN.js","_app/immutable/chunks/BV9qdzil.js","_app/immutable/chunks/BFf8dqXx.js","_app/immutable/chunks/C7Reg7aU.js","_app/immutable/chunks/Del82Ylf.js","_app/immutable/chunks/Cnl_p21v.js","_app/immutable/chunks/nYe6a6qS.js","_app/immutable/chunks/DnEdNRCS.js","_app/immutable/chunks/CzxBQJX9.js","_app/immutable/chunks/arHl35m2.js","_app/immutable/chunks/Bg8QSxDk.js"];
export const stylesheets = ["_app/immutable/assets/32.Dlu2OFz0.css"];
export const fonts = [];
export const inline_styles = () => ({
	"_app/immutable/assets/32.Dlu2OFz0.css": stylesheet_32
});
