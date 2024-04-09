import NavBar from "../../NavBar/NavBar";
import Carousel from "./Carousel/Carousel";
import PopularItems from "./PopularItems/PopularItems";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import Footer from "../../Footer/Footer";

import { ChakraProvider } from "@chakra-ui/react";

const HomePage = () => {
    return <>
        <ChakraProvider>
            <NavBar />
        </ChakraProvider>
        <Carousel />
        <PopularItems />
        <WhatWeDo />
        <Footer />
    </>
}

export default HomePage;