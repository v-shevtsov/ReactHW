import { Button } from "@chakra-ui/react"

export default function StickerButton({onClick}) {

    function onBtnClick() {
        const newSticker = {description: ''}
        onClick(newSticker);
    }

    return (
        <Button
            onClick={onBtnClick}
            colorScheme="blue"
            m='3'
        >
            Button
        </Button>
    )
}