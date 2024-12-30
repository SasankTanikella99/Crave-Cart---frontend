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
                // Add scope for refresh tokens
                scope: "openid profile email offline_access"
            }}
            onRedirectCallback={onRedirectCallback}
            // Add these important configurations
            useRefreshTokens={true}
            cacheLocation="localstorage"
            
        >
            {children}
        </OriginalAuth0Provider>
    );
};

export default CustomAuth0Provider;
