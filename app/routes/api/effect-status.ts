import { json } from "@remix-run/node";
import { isEffectEnabled } from "~/utils/state"; // ✅ Correct import

export async function loader() {
  return json({ enabled: isEffectEnabled });
}
