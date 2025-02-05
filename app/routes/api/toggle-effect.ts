import { json } from "@remix-run/node";
import { isEffectEnabled, setEffectState } from "~/utils/state"; // ✅ Import fixed

export async function action({ request }: { request: Request }) {
  const { enabled } = await request.json();
  setEffectState(enabled); // ✅ Update state using function
  return json({ success: true, enabled: isEffectEnabled });
}

export async function loader() {
  return json({ enabled: isEffectEnabled });
}
