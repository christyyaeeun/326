import {
    Authenticator,
    Flex,
    Grid,
    Image,
    useTheme,
    View
} from "@aws-amplify/ui-react";

import { Header } from "./Header";
import { SignInHeader } from "./SignInHeader";
import { SignInFooter } from "./SignInFooter";

const components = {
    Header,
    SignIn: {
        Header: SignInHeader,
        Footer: SignInFooter
    },
};

export function SignIn() {
    const { tokens } = useTheme();

    return (
        <Grid templateColumns={ { base: "1fr 0", medium: "1fr 1fr" } }>
            <Flex background="white"
                justifyContent="center"
            >
                <Authenticator components={ components }>
                    { ({ signOut, user }) => (
                        <main>
                            <h1>Hello { user.username }</h1>
                            <button onClick={ signOut }>Sign out</button>
                        </main>
                    ) }
                </Authenticator>
            </Flex>
            <View height="100vh">
                <Image
                    src="https://firebasestorage.googleapis.com/v0/b/olt-react.appspot.com/o/olt%20photos%2Fdragonbreathe.jpeg?alt=media&token=c41c18eb-3eeb-4968-952d-d5fea78a5a2b"
                    width="100%"
                    height="100%"
                    opacity=".9"
                    objectFit="cover"
                />
            </View>
        </Grid>
    );
}
