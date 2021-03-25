import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import Stickers from "./modules/stikers/components/Stickers/Stickers";

function App() {
    return (
        <ChakraProvider>
            <Stickers/>
        </ChakraProvider>
    );
}

export default App;
