(async function () {
    // Fetch merchant's settings from Shopify Metafields
    const response = await fetch("/apps/seasonal-effects/api/effect-status");
    const data = await response.json();
  
    if (data.enabled !== "true") return;
  
    if (window.SeasonalEffectLoaded) return;
    window.SeasonalEffectLoaded = true;
  
    const effectContainer = document.createElement("div");
    effectContainer.style.position = "fixed";
    effectContainer.style.top = "0";
    effectContainer.style.left = "0";
    effectContainer.style.width = "100vw";
    effectContainer.style.height = "100vh";
    effectContainer.style.pointerEvents = "none";
    effectContainer.style.zIndex = "9999";
  
    document.body.appendChild(effectContainer);
  
    function createStar() {
      const star = document.createElement("div");
      star.innerHTML = "✨";
      star.style.position = "absolute";
      star.style.left = Math.random() * window.innerWidth + "px";
      star.style.top = "-10px";
      star.style.fontSize = "24px";
      star.style.color = "gold";
      star.style.opacity = "1";
      star.style.transition = "transform 2s ease-in, opacity 2s ease-in";
      effectContainer.appendChild(star);
  
      setTimeout(() => {
        star.style.transform = `translateY(${window.innerHeight}px)`;
        star.style.opacity = "0";
      }, 100);
  
      setTimeout(() => {
        effectContainer.removeChild(star);
      }, 2000);
    }
  
    setInterval(createStar, 500);
  })();
  