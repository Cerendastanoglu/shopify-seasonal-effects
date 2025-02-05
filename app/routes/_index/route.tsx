import { useState, useEffect } from "react";
import { Page, Layout, Card, Button, Text } from "@shopify/polaris";

export default function Index() {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Check if the effect is already enabled from the backend
    fetch("/api/effect-status")
      .then((res) => res.json())
      .then((data) => setIsEnabled(data.enabled));
  }, []);

  const handleToggle = () => {
    setIsEnabled(!isEnabled);

    // Send state to backend
    fetch("/api/toggle-effect", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ enabled: !isEnabled }),
    });
  };

  return (
    <Page title="Seasonal Effects">
      <Layout>
        <Layout.Section>
        <Card>
          <div style={{ padding: "16px" }}>
            <Text as="h2" variant="headingMd">
              Enable Glowing Stars Effect ✨
              </Text>
              <Button variant="primary" onClick={handleToggle}>
                {isEnabled ? "Disable Effect" : "Enable Effect"}
                </Button>
                </div>
                </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

