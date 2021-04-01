import React, { useContext } from 'react';
import { Button, Center } from "@chakra-ui/react";
import { themeContext } from "../contects/themeContext";

export default function ChangeTheme() {
    const {theme, changeTheme} = useContext(themeContext);

    function onChangeTheme() {
        changeTheme(theme);
    }


    return (
        <Center m='5'>
            <Button onClick={onChangeTheme}>
                Change theme
            </Button>
        </Center>
    )
}