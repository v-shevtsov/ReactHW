import React from 'react';
import { Box, Flex } from "@chakra-ui/react"
import StickerButton from "./StickerButton";

export default function Header({onCreate}) {

    return (
        <Flex justify='flex-end' bg='#ccc' boxShadow="md">
            <Box>
                <StickerButton onClick={onCreate}/>
            </Box>
        </Flex>
    )
}