export default {
  initialColorModeName: "light",
  useColorSchemeMediaQuery: true,
  colors: {
    text: "#17171d",
    background: "#fff",
    primary: "#ec3750",
    muted: "#f6f6f6",
    modes: {
      dark: {
        text: "#f6f6f6",
        background: "#17171d",
        primary: "#ff4852",
        muted: "#23232b"
      }
    }
  },
  fonts: {
    body: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
  },
  buttons: {
    primary: {
      bg: "primary",
      color: "background",
      borderRadius: 999,
      fontWeight: "bold"
    },
    outline: {
      bg: "transparent",
      color: "background",
      border: "2px solid",
      borderColor: "background",
      borderRadius: 999,
      fontWeight: "bold"
    }
  }
};
