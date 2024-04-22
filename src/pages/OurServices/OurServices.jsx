import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import './OurServices.css';

import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const OurServices = () => {
    const WEB_DESIGN_DEFAULT_PERCENTAGE = 86;
    const DEVELOPMENT_DEFAULT_PERCENTAGE = 56;

    const [percentage, setPercentage] = useState({
        webDesign: 0,
        development: 0
    });

    function simulatePercentageLoading(setPercentage, defaultPercentage, typeOfPercentage) {
        const interval = setInterval(() => {
            setPercentage(prevPercentage => {
                if (prevPercentage[typeOfPercentage] === defaultPercentage) {
                    clearInterval(interval);
                    return prevPercentage;
                }
                return { ...prevPercentage, [typeOfPercentage]: prevPercentage[typeOfPercentage] + 1 }
            })
        }, 70);

        return () => clearInterval(interval)
    }

    useEffect(() => {
        simulatePercentageLoading(setPercentage, WEB_DESIGN_DEFAULT_PERCENTAGE, 'webDesign');
        simulatePercentageLoading(setPercentage, DEVELOPMENT_DEFAULT_PERCENTAGE, 'development');
    }, []);


    return <>
        <ChakraProvider>
            <NavBar />
        </ChakraProvider>
        <section>
            <div className="relative">
                <div id="background-img-container-1">
                </div>
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-center text-[1.8em] md:text-[2.5em] lg:text-[3em] tracking-wider">OUR SERVICES</p>
            </div>

            {/* mid content for lg size */}
            <div className="hidden lg:flex  max-w-[1300px] mx-auto my-[5em]  justify-between gap-[5.5em]">
                <div className="ml-5">
                    <div className="flex gap-5 mt-12 mb-20">
                        <div>
                            <p className="text-right mb-3 font-bold text-[18px]">FUTURE LEADERS</p>
                            <p className="text-right text-[#979797] text-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper</p>
                        </div>
                        <div>
                            <box-icon name='rocket' size='md'></box-icon>
                        </div>
                    </div>
                    <div className="flex gap-5 mt-12 mb-20">
                        <div>
                            <p className="text-right mb-3 font-bold text-[18px]">POWERFUL SOLUTIONS</p>
                            <p className="text-right text-[#979797] text-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper</p>
                        </div>
                        <div>
                            <box-icon name='message-rounded-dots' size='md'></box-icon>
                        </div>
                    </div>
                    <div className="flex gap-5 mt-12 mb-20">
                        <div>
                            <p className="text-right mb-3 font-bold text-[18px]">PROGRESSIVE TOOLS</p>
                            <p className="text-right text-[#979797] text-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper</p>
                        </div>
                        <div>
                            <box-icon name='bell' size='md'></box-icon>
                        </div>
                    </div>
                </div>

                <div>
                    <img src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/services-img-1.png" alt="" className="max-w-[700px] ml-9" />
                </div>

                <div className="mr-5">
                    <div className="flex gap-5 mt-12 mb-20">
                        <div>
                            <box-icon name='bookmark' size='md'></box-icon>
                        </div>
                        <div>
                            <p className="text-left mb-3 font-bold text-[18px]">LEADING STRATEGIES</p>
                            <p className="text-left text-[#979797] text-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper</p>
                        </div>

                    </div>
                    <div className="flex gap-5 mt-12 mb-20">
                        <div>
                            <box-icon name='diamond' size='md'></box-icon>
                        </div>
                        <div>
                            <p className="text-left mb-3 font-bold text-[18px]">INNOVATION EXPERTS</p>
                            <p className="text-left text-[#979797] text-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper</p>
                        </div>
                    </div>
                    <div className="flex gap-5 mt-12 mb-20">
                        <div>
                            <box-icon name='magic-wand' type='solid' size='md'></box-icon>
                        </div>
                        <div>
                            <p className="text-left mb-3 font-bold text-[18px]">CREATIVE PROJECTS</p>
                            <p className="text-left text-[#979797] text-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper</p>
                        </div>

                    </div>
                </div>
            </div>

            {/* mid content for md size */}
            <div className="grid lg:hidden hidden sm:grid">
                <div className="inline-block m-auto mt-[7em] mb-[2.5em]">
                    <img src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/services-img-1.png" alt="" className="w-auto ml-9" />
                </div>

                <div className=" max-w-[900px] m-auto">
                    <div className="mx-5 flex gap-[10em]">
                        <div>
                            <div className="flex gap-5 mt-12 mb-20">
                                <div>
                                    <p className="text-right mb-3 font-bold text-[18px]">FUTURE LEADERS</p>
                                    <p className="text-right text-[#979797] text-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper</p>
                                </div>
                                <div>
                                    <box-icon name='rocket' size='md'></box-icon>
                                </div>
                            </div>
                            <div className="flex gap-5 mt-12 mb-20">
                                <div>
                                    <p className="text-right mb-3 font-bold text-[18px]">POWERFUL SOLUTIONS</p>
                                    <p className="text-right text-[#979797] text-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper</p>
                                </div>
                                <div>
                                    <box-icon name='message-rounded-dots' size='md'></box-icon>
                                </div>
                            </div>
                            <div className="flex gap-5 mt-12 mb-20">
                                <div>
                                    <p className="text-right mb-3 font-bold text-[18px]">PROGRESSIVE TOOLS</p>
                                    <p className="text-right text-[#979797] text-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper</p>
                                </div>
                                <div>
                                    <box-icon name='bell' size='md'></box-icon>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <div className="flex gap-5 mt-12 mb-20">
                                <div>
                                    <box-icon name='bookmark' size='md'></box-icon>
                                </div>
                                <div>
                                    <p className="text-left mb-3 font-bold text-[18px]">LEADING STRATEGIES</p>
                                    <p className="text-left text-[#979797] text-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper</p>
                                </div>

                            </div>
                            <div className="flex gap-5 mt-12 mb-20">
                                <div>
                                    <box-icon name='diamond' size='md'></box-icon>
                                </div>
                                <div>
                                    <p className="text-left mb-3 font-bold text-[18px]">INNOVATION EXPERTS</p>
                                    <p className="text-left text-[#979797] text-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper</p>
                                </div>
                            </div>
                            <div className="flex gap-5 mt-12 mb-20">
                                <div>
                                    <box-icon name='magic-wand' type='solid' size='md'></box-icon>
                                </div>
                                <div>
                                    <p className="text-left mb-3 font-bold text-[18px]">CREATIVE PROJECTS</p>
                                    <p className="text-left text-[#979797] text-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* mid content for sm size */}
            <div className="grid sm:hidden">
                <div className="inline-block m-auto mt-[4em] mb-[2.5em]">
                    <img src="https://depot.qodeinteractive.com/wp-content/uploads/2017/01/services-img-1.png" alt="" className="w-auto ml-9" />
                </div>

                <div>
                    <div className="mx-10">
                        <div className="flex gap-5 mt-12 mb-20">
                            <div>
                                <p className="text-right mb-3 font-bold text-[18px]">FUTURE LEADERS</p>
                                <p className="text-right text-[#979797] text-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper</p>
                            </div>
                            <div>
                                <box-icon name='rocket' size='md'></box-icon>
                            </div>
                        </div>
                        <div className="flex gap-5 mt-12 mb-20">
                            <div>
                                <p className="text-right mb-3 font-bold text-[18px]">POWERFUL SOLUTIONS</p>
                                <p className="text-right text-[#979797] text-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper</p>
                            </div>
                            <div>
                                <box-icon name='message-rounded-dots' size='md'></box-icon>
                            </div>
                        </div>
                        <div className="flex gap-5 mt-12 mb-20">
                            <div>
                                <p className="text-right mb-3 font-bold text-[18px]">PROGRESSIVE TOOLS</p>
                                <p className="text-right text-[#979797] text-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper</p>
                            </div>
                            <div>
                                <box-icon name='bell' size='md'></box-icon>
                            </div>
                        </div>

                        <div className="flex gap-5 mt-12 mb-20">
                            <div>
                                <box-icon name='bookmark' size='md'></box-icon>
                            </div>
                            <div>
                                <p className="text-left mb-3 font-bold text-[18px]">LEADING STRATEGIES</p>
                                <p className="text-left text-[#979797] text-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper</p>
                            </div>

                        </div>
                        <div className="flex gap-5 mt-12 mb-20">
                            <div>
                                <box-icon name='diamond' size='md'></box-icon>
                            </div>
                            <div>
                                <p className="text-left mb-3 font-bold text-[18px]">INNOVATION EXPERTS</p>
                                <p className="text-left text-[#979797] text-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper</p>
                            </div>
                        </div>
                        <div className="flex gap-5 mt-12 mb-20">
                            <div>
                                <box-icon name='magic-wand' type='solid' size='md'></box-icon>
                            </div>
                            <div>
                                <p className="text-left mb-3 font-bold text-[18px]">CREATIVE PROJECTS</p>
                                <p className="text-left text-[#979797] text-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* 3rd content */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div id="background-img-container-2" className="h-[400px] lg:h-full">

                </div>
                <div className="p-[6em]">
                    <p className="font-bold mb-2">STRATEGY AND TIMING</p>
                    <p className="mb-10 text-[#979797]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes.</p>

                    <div className="flex justify-between mt-3 mb-3">
                        <p className="font-bold">WEB DESIGN</p>
                        <p className="font-bold">{percentage.webDesign}%</p>
                    </div>
                    <div className="relative">
                        <div className="bg-[#b4b4b4] p-1"></div>
                        <div className={`bg-[#080808] h-full absolute top-0 transition-width duration-500`} style={{ width: `${percentage.webDesign}%` }}></div>
                    </div>

                    <div className="flex justify-between mt-7 mb-3">
                        <p className="font-bold">DEVELOPMENT</p>
                        <p className="font-bold">{percentage.development}%</p>
                    </div>
                    <div className="relative">
                        <div className="bg-[#b4b4b4] p-1"></div>
                        <div className={`bg-[#080808] h-full absolute top-0 transition-width duration-500`} style={{ width: `${percentage.development}%` }}></div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>
}

export default OurServices;