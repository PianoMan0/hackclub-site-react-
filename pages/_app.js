/** @jsxImportSource theme-ui */
import { ThemeProvider } from "theme-ui";
import { useState, useEffect } from "react";
import theme from "../theme";

export default function App({ Component, pageProps }) {
  // Local storage functionality cuz I'm just that cool
  const [colorMode, setColorMode] = useState("light");
  useEffect(() => {
    const saved = typeof window !== "undefined" && window.localStorage.getItem("color-mode");
    if (saved) setColorMode(saved);
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") window.localStorage.setItem("color-mode", colorMode);
  }, [colorMode]);

  return (
    <ThemeProvider theme={{ ...theme, initialColorModeName: "light" }} colorMode={colorMode} setColorMode={setColorMode}>
      <Component {...pageProps} colorMode={colorMode} setColorMode={setColorMode} />
    </ThemeProvider>
  );
}
