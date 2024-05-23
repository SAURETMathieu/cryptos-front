// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(
    () => {
      const height = Math.round(window.innerHeight * 0.9);
      const width = window.innerWidth;
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "width": "${width}",
          "height": "${height}",
          "symbol": "CRYPTOCAP:BTC",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "fr",
          "withdateranges": true,
          "range": "1M",
          "hide_side_toolbar": false,
          "allow_symbol_change": true,
          "watchlist": [
            "BITSTAMP:BTCUSD",
            "COINBASE:ETHUSD",
            "BITSTAMP:ETHUSD"
          ],
          "hotlist": true,
          "calendar": false,
          "studies": [
            "STD;Bollinger_Bands"
          ],
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container p-4 sm:pr-0" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"><a href="https://fr.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Suivre tous les marchés sur TradingView</span></a></div>
    </div>
  );
}

export default memo(TradingViewWidget);
