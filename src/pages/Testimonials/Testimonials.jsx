import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import ResponsiveSlider from "./ResponsiveSlider";

import './Testimonials.css';
const Testimonials = () => {
    return <>
        <ChakraProvider>
            <NavBar />
        </ChakraProvider>
        <section className="max-w-[1220px] m-auto">
            <div className="mx-5">
                <div className="img-element"></div>
                <ResponsiveSlider />
            </div>
        </section>
        <Footer />
    </>
}

export default Testimonials;