import { json } from "@remix-run/node";
import shopify from "../../shopify.server";
import { authenticate } from "../../shopify.server";

export const action = async ({ request }) => {
  const { session } = await authenticate.admin(request);
  const shop = session.shop;
  const client = new shopify.clients.Rest({ session });

  // Parse JSON from the request body
  const { effectEnabled } = await request.json();

  // Store effect status in Shopify Metafields
  await client.put({
    path: "metafields",
    data: {
      metafield: {
        namespace: "seasonal_effects",
        key: "glow_rain_enabled",
        value: effectEnabled ? "true" : "false",
        type: "string",
      },
    },
  });

  return json({ success: true });
};
