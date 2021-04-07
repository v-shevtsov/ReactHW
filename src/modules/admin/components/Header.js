import React from 'react';
import { Center, Flex, Spacer } from "@chakra-ui/react"
import { Link } from "react-router-dom";

export default function Header() {

    return (
        <header>
            <Center mt='5'>
                <Flex w='50%'>
                    <Link>Dashboard</Link>
                    <Spacer/>
                    <Link>Users</Link>
                    <Spacer/>
                    <Link>Albums</Link>
                </Flex>
            </Center>
        </header>
    )
}