"use client"
import { useEffect } from 'react';

const GoftinoWidget = () => {
  useEffect(() => {
    const scriptId = "goftino-widget-script";
    const existingScript = document.getElementById(scriptId);

    if (!existingScript) {
      const i = "wECjcJ";
      const d = document;

      const loadScript = () => {
        if (!window.isGoftinoAdded) {
          window.isGoftinoAdded = 1;
          const g = d.createElement("script");
          const s = "https://www.goftino.com/widget/" + i;
          const l = localStorage.getItem("goftino_" + i);
          g.type = "text/javascript";
          g.async = true;
          g.src = l ? s + "?o=" + l : s;
          g.id = scriptId;
          d.getElementsByTagName("head")[0].appendChild(g);
        }
      };

      ["keydown", "touchmove", "touchstart", "mouseover"].forEach((event) => {
        window.addEventListener(event, loadScript, { once: true });
      });

      // Clean up event listeners when the component is unmounted
      return () => {
        ["keydown", "touchmove", "touchstart", "mouseover"].forEach((event) => {
          window.removeEventListener(event, loadScript);
        });
      };
    }
  }, []);

  return null; // این کامپوننت نیازی به رندر کردن چیزی ندارد
};

export default GoftinoWidget;
