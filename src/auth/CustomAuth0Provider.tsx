import { useNavigate } from "react-router-dom";
import { Auth0Provider as OriginalAuth0Provider } from "@auth0/auth0-react";

type Props = {
  children: React.ReactNode;
};

const CustomAuth0Provider = ({ children }: Props) => {
  const navigate = useNavigate();
  
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

  if (!domain || !clientId || !redirectUri || !audience) {
    throw new Error('Missing Auth0 configuration');
  }

  const onRedirectCallback = () => {
    navigate("/auth-callback");
  };

  return (
    <OriginalAuth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
        audience,
        scope: "openid profile email",
        // Set max_age to enforce re-authentication after the specified time (in seconds)
        max_age: 1800 // 30 minutes
      }}
      onRedirectCallback={onRedirectCallback}
      useRefreshTokens={false}
      cacheLocation="memory"
      // Configure shorter session duration
      sessionCheckExpiryDays={0.0208} // Approximately 30 minutes (0.0208 days)
    >
      {children}
    </OriginalAuth0Provider>
  );
};

export default CustomAuth0Provider;