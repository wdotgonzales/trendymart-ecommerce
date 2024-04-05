import NavBar from "../../NavBar/NavBar";
import Carousel from "./Carousel/Carousel";
import PopularItems from "./PopularItems/PopularItems";

import { ChakraProvider } from "@chakra-ui/react";

const HomePage = () => {
    return <>
        <ChakraProvider>
            <NavBar />
        </ChakraProvider>
        <Carousel />
        <PopularItems />
    </>
}

export default HomePage;