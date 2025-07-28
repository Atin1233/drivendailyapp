import { X as attr, S as pop, Q as push, Y as stringify } from "../../../../chunks/index.js";
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  let isEurope = false;
  try {
    isEurope = Intl.DateTimeFormat().resolvedOptions().timeZone.startsWith("Europe/");
  } catch (e) {
  }
  $$payload.out += `<div class="min-h-screen">`;
  children?.($$payload);
  $$payload.out += `<!----> <div${attr("class", `mt-8 text-center ${stringify(isEurope ? "block" : "hidden")}`)}>🍪 Logging in uses Cookies 🍪</div></div>`;
  pop();
}
export {
  _layout as default
};
