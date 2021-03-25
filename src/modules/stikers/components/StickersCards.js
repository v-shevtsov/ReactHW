import { Wrap } from "@chakra-ui/react"
import StickerItem from "./StickerItem";

export default function StickerCards({stickers, onDelete, onSave}) {

    return (
        <Wrap p='5'>
            {stickers.map((sticker) => (
                <StickerItem
                    key={sticker.id}
                    sticker={sticker}
                    onDelete={onDelete}
                    onSave={onSave}
                />
            ))}
        </Wrap>
    )
}