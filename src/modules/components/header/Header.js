import React from 'react';
import { Center, Flex, Spacer } from "@chakra-ui/react"

export default function Header() {

    return (
        <header>
            <Center mt='5'>
                <Flex w='50%'>
                    <a href='/'>Dashboard</a>
                    <Spacer/>
                    <a href='/users'>Users</a>
                    <Spacer/>
                    <a href='/albums'>Albums</a>
                </Flex>
            </Center>
        </header>
    )
}