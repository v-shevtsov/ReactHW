import React from 'react';
import { Flex, Box } from "@chakra-ui/react"
import StickerButton from "../Button/StickerButton";

export default function Header() {
    return (
        <Flex justify='flex-end' bg='#ccc' boxShadow="md">
            <Box>
                <StickerButton />
            </Box>
        </Flex>
    )
}