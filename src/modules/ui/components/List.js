import { Center, UnorderedList } from "@chakra-ui/react";

export default function List({children, ...props}) {

    return (
        <Center mt='5'>
            <UnorderedList {...props}>
                {children}
            </UnorderedList>
        </Center>
    );
}