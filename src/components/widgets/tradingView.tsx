import { useEffect, useRef } from "react";

const TradingViewWidget = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const height = Math.round(window.innerHeight * 0.9);
    const width = window.innerWidth;
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: width,
      height: height,
      defaultColumn: "overview",
      screener_type: "crypto_mkt",
      displayCurrency: "USD",
      colorTheme: "dark",
      locale: "en",
    });

    const container = containerRef.current;

    // Nettoyer le contenu du conteneur avant d'ajouter un nouveau script
    while (container?.firstChild) {
      container.removeChild(container.firstChild);
    }

    container?.appendChild(script);

    // Nettoyer le script précédent lorsque le composant est démonté
    return () => {
      while (container?.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container p-4 sm:pr-0" ref={containerRef}>
      <div id="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default TradingViewWidget;
