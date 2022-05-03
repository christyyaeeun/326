import { useAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";

import { Home } from "./Home";
import { SignIn } from "./components/login/SignIn";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

export default function App() {
    const { user } = useAuthenticator();

    if (user) {
        return <Home />;
        
    }

    return <SignIn />;
}
