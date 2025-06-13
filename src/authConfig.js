export const msalConfig = {
  auth: {
    clientId: "4d661288-c66e-45a8-a8a3-b76b795be7f9",
    authority: "https://login.microsoftonline.com/a00de4ec-48a8-43a6-be74-e31274e2060d",
    redirectUri: "https://pwcautomation.netlify.app"
  }
};

export const loginRequest = {
  scopes: ["Files.ReadWrite.All", "Sites.ReadWrite.All", "User.Read"]
};
