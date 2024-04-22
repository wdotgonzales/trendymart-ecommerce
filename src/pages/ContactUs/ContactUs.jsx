import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

import MapComponent from "./components/MapComponent";
import MiddleContent from "./components/MiddleContent";
import Newsletter from "./components/Newsletter";

const ContactUs = () => {
    return <>
        <ChakraProvider>
            <NavBar />
        </ChakraProvider>
        <section className="max-w-[1250px] m-auto">
            <div className="mx-2">
                <MapComponent />
                <MiddleContent />
                <Newsletter />
            </div>
        </section>
        <Footer />
    </>
}

export default ContactUs;