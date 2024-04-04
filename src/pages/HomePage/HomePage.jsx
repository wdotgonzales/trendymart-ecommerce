import NavBar from "../../NavBar/NavBar";
import Carousel from "./Carousel/Carousel";

import { ChakraProvider } from "@chakra-ui/react";

const HomePage = () => {
    return <>
        <ChakraProvider>
            <NavBar />
        </ChakraProvider>
        <Carousel />
    </>
}

export default HomePage;