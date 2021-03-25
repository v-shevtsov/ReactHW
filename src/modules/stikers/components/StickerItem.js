import { Box, CloseButton, Flex, Textarea } from "@chakra-ui/react"
import { useState } from "react";

export default function StickerItem({sticker, onDelete, onSave}) {
    const [newSticker, setNewSticker] = useState(sticker);

    function onDeleteBtn() {
        onDelete(sticker.id)
    }

    function onChangeValue(e) {
        setNewSticker({...sticker, description: e.target.value});
    }

    function onSaveSticker() {
        onSave(newSticker);
    }

    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m='5'>
            <Flex justify='flex-end' borderBottom='1px' borderColor="gray.200" bg='lightgray'>
                <CloseButton
                    size="sm"
                    onClick={onDeleteBtn}
                />
            </Flex>
            <Box p='3' bgGradient="linear(to-r,gray.300,yellow.400,pink.200)">
                <Textarea
                    bg='white'
                    placeholder='Enter description'
                    value={newSticker.description}
                    onChange={onChangeValue}
                    onBlur={onSaveSticker}
                />
            </Box>
        </Box>
    )
}