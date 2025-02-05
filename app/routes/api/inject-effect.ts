import { json } from "@remix-run/node";
import shopify from "../../shopify.server";
import { authenticate } from "../../shopify.server";

export const action = async ({ request }) => {
  const { session } = await authenticate.admin(request);
  const shop = session.shop;
  const client = new shopify.clients.Rest({ session });

  // Inject the script inside theme.liquid (Only on the home page)
  await client.put({
    path: "themes",
    data: {
      theme: {
        liquid: `
          {{ content_for_header }}
          {% if template == 'index' %}
            <script src="https://seasonal-effects.vercel.app/storefront.js"></script>
          {% endif %}
        `,
      },
    },
  });

  return json({ success: true });
};
