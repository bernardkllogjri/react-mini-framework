import getTokens from "@kiwicom/orbit-components/lib/getTokens";
const unsplashClientTokens = getTokens({
  palette: {
    product: {
      light: "#9ae5da",
      lightHover: "#7fded0",
      lightActive: "#64d7c6",
      normal: "#00a991",
      normalHover: "#009882",
      normalActive: "#008f7b",
      dark: "#005448"
    }
  }
});

export default {
  orbit: unsplashClientTokens
};
