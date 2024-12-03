export const config = {
  appId: "gapsistore",
  siteConfig: {
    defaultTheme: 'light',
    allowBrowserTheme: false
  },
  endpoints: {
    mainBackendUrl: process.env.REACT_APP_API_URL,
    apiKey: process.env.REACT_APP_API_KEY
  },
};
