import { Flex, Image, useTheme } from "@aws-amplify/ui-react";

export function Header() {
    const { tokens } = useTheme();

    return (
        <Flex justifyContent="center">
            <Image
                width="200px"
                alt="logo"
                src="https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/colorlogo%20.svg?alt=media&token=9b165963-e546-400d-9769-21406c9af10f"
                padding={ tokens.space.medium }
            />
        </Flex>
    );
}
