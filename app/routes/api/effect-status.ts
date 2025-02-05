import { json } from "@remix-run/node";
import shopify from "../../shopify.server";
import { authenticate } from "../../shopify.server";

export const loader = async ({ request }) => {
  const { session } = await authenticate.admin(request);
  const shop = session.shop;
  const client = new shopify.clients.Rest({ session });

  // Fetch metafield to check if the effect is enabled
  const response = await client.get({
    path: "metafields",
    query: {
      namespace: "seasonal_effects",
      key: "glow_rain_enabled",
    },
  });

  const metafield = response.body.metafield;
  return json({ enabled: metafield?.value || "false" });
};
