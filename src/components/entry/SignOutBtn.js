import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";

export const SignOutBtn = () => {
    const { push } = useHistory();
    const onButtonClick = async () => {
        await Auth.signOut();
        push("/public");
    };
    return <button onClick={ onButtonClick }>Sign Out</button>;
};