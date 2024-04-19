import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";

import CoverImage from "./components/CoverImage";
import FrequentlyAskedQuestions from "./components/FrequentlyAskedQuestions";
import Content from "./components/Content";

const FAQ = () => {
    return <>
        <ChakraProvider>
            <NavBar />
        </ChakraProvider>
        <section className="max-w-[1750px] m-auto">
            <div className="mx-2">
                <CoverImage />

                <div className="block lg:flex gap-[10em] p-[3em] md:p-[5em] lg:p-[8em]">
                    <div className="hidden lg:block">
                        <FrequentlyAskedQuestions />
                    </div>
                    <div>
                        <Content />
                    </div>
                </div>

            </div>
        </section>
        <Footer />
    </>
}

export default FAQ;