import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

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

                <hr />

                <div className="py-[5em] max-w-[70%] m-auto">
                    <p className="font-bold text-center tracking-wider mb-3">SUBSCRIBE TO NEWSLETTER</p>
                    <p className="text-[#979797] text-center text-[1.8em]">Your brand's power lies in dominance. It is better to have 50% of one market, instead of 10% of five markets.</p>

                    <div className="sm:flex mt-14 max-w-[750px] m-auto">
                        <input placeholder="Email Address" type="email" id="default-input" className="py-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        <div className="mt-2 sm:mt-0 text-white bg-black px-12 py-5 text-center font-bold text-[0.8em]">
                            <button>SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>
}

export default GiftCards;