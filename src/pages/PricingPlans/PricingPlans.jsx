import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import './PricingPlans.css'

const PricingPlans = () => {
    return <>
        <ChakraProvider>
            <NavBar />
        </ChakraProvider>
        <section>
            <div className="relative">
                <div className="background-img-container-1">
                </div>
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-center text-[1.8em] md:text-[2.5em] lg:text-[3em] tracking-wider">PRICING PLANS</p>
            </div>

            <div className="max-w-[1150px] m-auto py-16">
                {/* grid container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20 mx-10">

                    <div className="block md:flex gap-12">
                        <div className="hidden md:flex relative">
                            <p className="absolute top-9 text-[1.8em]">$</p>
                            <p className="relative left-5 text-[7em]">99</p>
                        </div>

                        <div className="flex justify-center md:hidden">
                            <div className="text-center relative">
                                <p className="text-[1.8em] absolute left-[-0.6em] top-8">$</p>
                                <p className="text-[7em]">99</p>
                            </div>
                        </div>


                        <div className="mt-3 md:mt-10">
                            <p className="font-bold">PREMIUM OFFER</p>
                            <p className="text-[1.2em] mt-2 mb-5 text-[#979797]">Lorem ipsum dolor sit amet, consectetur a elit. In ut ullamcorper leo, eget euismod orci. Cum sociis</p>
                            <div className="mt-10">
                                <div className="flex mb-3 gap-1">
                                    <box-icon name='check'></box-icon>
                                    <p className="text-[#979797] mt-1">Consectetur a elit nibh</p>
                                </div>
                                <div className="flex mb-3 gap-1">
                                    <box-icon name='check'></box-icon>
                                    <p className="text-[#979797] mt-1">Eget euismod orci aliquenean</p>
                                </div>
                                <div className="flex mb-3 gap-1">
                                    <box-icon name='check'></box-icon>
                                    <p className="text-[#979797] mt-1">Lorem ipsum meconsect</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="block md:flex gap-12">
                        <div className="hidden md:flex relative">
                            <p className="absolute top-9 text-[1.8em]">$</p>
                            <p className="relative left-5 text-[7em]">57</p>
                        </div>

                        <div className="flex justify-center md:hidden">
                            <div className="text-center relative">
                                <p className="text-[1.8em] absolute left-[-0.6em] top-8">$</p>
                                <p className="text-[7em]">57</p>
                            </div>
                        </div>


                        <div className="mt-3 md:mt-10">
                            <p className="font-bold">CORPORATE OFFER</p>
                            <p className="text-[1.2em] mt-2 mb-5 text-[#979797]">Lorem ipsum dolor sit amet, consectetur a elit. In ut ullamcorper leo, eget euismod orci. Cum sociis</p>
                            <div className="mt-10">
                                <div className="flex mb-3 gap-1">
                                    <box-icon name='check'></box-icon>
                                    <p className="text-[#979797] mt-1">Consectetur a elit nibh</p>
                                </div>
                                <div className="flex mb-3 gap-1">
                                    <box-icon name='check'></box-icon>
                                    <p className="text-[#979797] mt-1">Eget euismod orci aliquenean</p>
                                </div>
                                <div className="flex mb-3 gap-1">
                                    <box-icon name='check'></box-icon>
                                    <p className="text-[#979797] mt-1">Lorem ipsum meconsect</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="block md:flex gap-12">
                        <div className="hidden md:flex relative">
                            <p className="absolute top-9 text-[1.8em]">$</p>
                            <p className="relative left-5 text-[7em]">39</p>
                        </div>

                        <div className="flex justify-center md:hidden">
                            <div className="text-center relative">
                                <p className="text-[1.8em] absolute left-[-0.6em] top-8">$</p>
                                <p className="text-[7em]">39</p>
                            </div>
                        </div>


                        <div className="mt-3 md:mt-10">
                            <p className="font-bold">CLASSIC OFFER</p>
                            <p className="text-[1.2em] mt-2 mb-5 text-[#979797]">Lorem ipsum dolor sit amet, consectetur a elit. In ut ullamcorper leo, eget euismod orci. Cum sociis</p>
                            <div className="mt-10">
                                <div className="flex mb-3 gap-1">
                                    <box-icon name='check'></box-icon>
                                    <p className="text-[#979797] mt-1">Consectetur a elit nibh</p>
                                </div>
                                <div className="flex mb-3 gap-1">
                                    <box-icon name='check'></box-icon>
                                    <p className="text-[#979797] mt-1">Eget euismod orci aliquenean</p>
                                </div>
                                <div className="flex mb-3 gap-1">
                                    <box-icon name='check'></box-icon>
                                    <p className="text-[#979797] mt-1">Lorem ipsum meconsect</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="block md:flex gap-12">
                        <div className="hidden md:flex relative">
                            <p className="absolute top-9 text-[1.8em]">$</p>
                            <p className="relative left-5 text-[7em]">25</p>
                        </div>

                        <div className="flex justify-center md:hidden">
                            <div className="text-center relative">
                                <p className="text-[1.8em] absolute left-[-0.6em] top-8">$</p>
                                <p className="text-[7em]">25</p>
                            </div>
                        </div>


                        <div className="mt-3 md:mt-10">
                            <p className="font-bold">STARTUP OFFER</p>
                            <p className="text-[1.2em] mt-2 mb-5 text-[#979797]">Lorem ipsum dolor sit amet, consectetur a elit. In ut ullamcorper leo, eget euismod orci. Cum sociis</p>
                            <div className="mt-10">
                                <div className="flex mb-3 gap-1">
                                    <box-icon name='check'></box-icon>
                                    <p className="text-[#979797] mt-1">Consectetur a elit nibh</p>
                                </div>
                                <div className="flex mb-3 gap-1">
                                    <box-icon name='check'></box-icon>
                                    <p className="text-[#979797] mt-1">Eget euismod orci aliquenean</p>
                                </div>
                                <div className="flex mb-3 gap-1">
                                    <box-icon name='check'></box-icon>
                                    <p className="text-[#979797] mt-1">Lorem ipsum meconsect</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
        <Footer></Footer>
    </>
}

export default PricingPlans;