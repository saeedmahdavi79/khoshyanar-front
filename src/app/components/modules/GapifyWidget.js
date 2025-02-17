"use client";

import React, { useEffect } from "react";

const GapifyWidget = () => {
  // Add Gapify Settings

  useEffect(() => {
    window.gapifySettings = {
      hideMessageBubble: false,
      position: "left", // This can be left or right
      locale: "fa-ir", // Language to be set
      type: "standard", // [standard, expanded_bubble]
      darkMode: "auto",
    };

    // Paste the script from inbox settings except the <script> tag
    (function (d, t) {
      var BASE_URL = "https://app.gapify.ai";
      var g = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
      g.src = BASE_URL + "/packs/js/sdk.js";
      s.parentNode.insertBefore(g, s);
      g.async = !0;
      g.onload = function () {
        window.gapifySDK.run({
          websiteToken: "1Frxc1Z6ZFt9WSACgpbfokNS",
          baseUrl: BASE_URL,
        });
      };
    })(document, "script");
  }, []);

  return null;
};

export default GapifyWidget;
