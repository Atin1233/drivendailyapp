import * as server from '../entries/pages/(admin)/account/(menu)/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(admin)/account/(menu)/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(admin)/account/(menu)/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.daUHkTC3.js","_app/immutable/chunks/Bra_S4fl.js","_app/immutable/chunks/BXvjSyo1.js","_app/immutable/chunks/DPuqt3Fs.js","_app/immutable/chunks/UyLqrWNA.js","_app/immutable/chunks/aTkPEtaN.js"];
export const stylesheets = [];
export const fonts = [];
