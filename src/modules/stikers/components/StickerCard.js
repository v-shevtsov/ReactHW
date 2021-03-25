import { Box, CloseButton, Flex, Textarea } from "@chakra-ui/react"

export default function StickerCard(description) {

    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m='5'>
            <Flex justify='flex-end' borderBottom='1px' borderColor="gray.200">
                <CloseButton size="sm" />
            </Flex>
            <Box p='3'>
                <Textarea
                    placeholder="Here is a sample placeholder"

                />
            </Box>
        </Box>
    )
}