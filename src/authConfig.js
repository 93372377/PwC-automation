export const msalConfig = {
  auth: {
    clientId: "YOUR_CLIENT_ID_HERE", // 🔁 Replace with your real Azure App ID
    authority: "https://login.microsoftonline.com/msdcloud.onmicrosoft.com",
    redirectUri: "https://pwcautomation.netlify.app"
  }
};

export const loginRequest = {
  scopes: ["Files.ReadWrite.All", "Sites.ReadWrite.All", "User.Read"]
};
