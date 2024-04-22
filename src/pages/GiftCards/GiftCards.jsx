import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { ChakraProvider } from "@chakra-ui/react";

import cards from "./giftCardsData";

const GiftCards = () => {
    return <>
        <ChakraProvider>
            <NavBar />
        </ChakraProvider>
        <section className="max-w-[1250px] m-auto">
            <div className="mx-7">
                <div>
                    <p className="text-center font-bold text-[3.5em] mt-[1em]">GIFT CARDS</p>
                    <p className="text-center text-[1.3em] text-[#979797]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci.</p>
                </div>

                <div className="my-[6em] grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {
                        cards.map((card) => {
                            const { id, imgSrc, name } = card;
                            return <>
                                <div key={id} className="flex gap-7 flex-col sm:flex-row">
                                    <div>
                                        <img src={imgSrc} alt="" className="max-w-[180px] m-auto sm:m-0" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-[1.2em] mb-2">{name}</p>
                                        <p className="text-[#979797]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient.</p>
                                    </div>
                                </div>
                            </>
                        })
                    }
                </div>
            </div>
        </section>
        <Footer />
    </>
}

export default GiftCards;