import { json } from "@remix-run/node";
import { isEffectEnabled } from "app/utils/state";

export async function loader() {
  if (!isEffectEnabled) {
    return json({ script: "" });
  }

  return json({
    script: `
      (function() {
        var script = document.createElement('script');
        script.src = 'https://https://v0-seasonal-effects.vercel.app//effects.js';
        document.head.appendChild(script);
      })();
    `,
  });
}
