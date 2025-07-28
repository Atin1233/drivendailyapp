import { T as store_get, V as unsubscribe_stores, S as pop, Q as push } from "../../chunks/index.js";
/* empty css               */
import { n as navigating } from "../../chunks/stores.js";
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  let { children } = $$props;
  if (store_get($$store_subs ??= {}, "$navigating", navigating)) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="fixed w-full top-0 right-0 left-0 h-1 z-50 bg-primary"></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  children?.($$payload);
  $$payload.out += `<!---->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _layout as default
};
