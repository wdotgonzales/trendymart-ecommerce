import './Payment.css';
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { ChakraProvider } from "@chakra-ui/react";

const Payment = () => {
    return <>
        <ChakraProvider>
            <NavBar />
        </ChakraProvider>
        <section className='max-w-[1210px] m-auto'>
            <div className='mx-4 my-2'>
                <img src="https://depot.qodeinteractive.com/wp-content/uploads/2017/02/payment-title-img.jpg" alt="" />

                <div className='py-[5em] grid grid-cols-1 lg:grid-cols-3 gap-5'>

                    <div className='pb-[0em] px-[0em] mb-5 lg:pb-[1.5em] lg:px-[1.5em]'>
                        <p className='font-bold text-[1.4em]'>PERFECT PLAN</p>
                        <p className='text-[#979797] mt-3 mb-8'>Successful brands get into the mind slowly. A blurb in a magazine.
                            A mention in a newspaper. A comment from a friend. A display in a retail
                        </p>
                        <p className='text-[#979797] mb-2'>Lorem ipsum dolor sit amet, consectetuut.</p>
                        <div className='flex'>
                            <p className='mt-[0.2em] font-bold text-[#979797] text-[0.9em]'>LEARN MORE</p>
                            <box-icon name='right-arrow-alt' color='#979797'></box-icon>
                        </div>
                    </div>


                    <div className='hidden lg:block text-center border-2 p-[4em]'>
                        <p className='font-bold text-[1.7em]'>PREMIUM</p>
                        <p className='text-[1.6em] mt-3 mb-5'>$12.99</p>
                        <p className='text-[#979797] text-[1.4em] my-7'>Lorem ipsum quenenan ullamcorper leo.</p>
                        <hr />
                        <div className='my-12 flex flex-col gap-5 justify-center'>
                            <div className='flex justify-center gap-2'>
                                <box-icon name='check' ></box-icon>
                                <p className='text-[#979797] text-[1.1em]'>Creative ideas</p>
                            </div>
                            <div className='flex justify-center gap-2'>
                                <box-icon name='check' ></box-icon>
                                <p className='text-[#979797] text-[1.1em]'>Extraordinary result</p>
                            </div>
                            <div className='flex justify-center gap-2'>
                                <box-icon name='check' ></box-icon>
                                <p className='text-[#979797] text-[1.1em]'>Flawless execution</p>
                            </div>
                        </div>

                        <button>
                            <div className='bg-black text-white font-bold px-16 py-6 text-[0.9em]'>
                                PURCHASE
                            </div>
                        </button>
                    </div>

                    <div className='hidden lg:block text-center border-2 bg-gray-100 p-[4em]'>
                        <p className='font-bold text-[1.7em]'>STARTER</p>
                        <p className='text-[1.6em] mt-3 mb-5'>$8.99</p>
                        <p className='text-[#979797] text-[1.4em] my-7'>Lorem ipsum quenenan ullamcorper leo.</p>
                        <hr />
                        <div className='my-12 flex flex-col gap-5 justify-center'>
                            <div className='flex justify-center gap-2'>
                                <box-icon name='check' ></box-icon>
                                <p className='text-[#979797] text-[1.1em]'>Creative ideas</p>
                            </div>
                            <div className='flex justify-center gap-2'>
                                <box-icon name='check' ></box-icon>
                                <p className='text-[#979797] text-[1.1em]'>Extraordinary result</p>
                            </div>
                            <div className='flex justify-center gap-2'>
                                <box-icon name='check' ></box-icon>
                                <p className='text-[#979797] text-[1.1em]'>Flawless execution</p>
                            </div>
                        </div>

                        <button>
                            <div className='bg-black text-white font-bold px-16 py-6 text-[0.9em]'>
                                PURCHASE
                            </div>
                        </button>
                    </div>


                    <div className='block lg:hidden grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div className='text-center border-2 p-[4em]'>
                            <p className='font-bold text-[1.7em]'>PREMIUM</p>
                            <p className='text-[1.6em] mt-3 mb-5'>$12.99</p>
                            <p className='text-[#979797] text-[1.4em] my-7'>Lorem ipsum quenenan ullamcorper leo.</p>
                            <hr />
                            <div className='my-12 flex flex-col gap-5 justify-center'>
                                <div className='flex justify-center gap-2'>
                                    <box-icon name='check' ></box-icon>
                                    <p className='text-[#979797] text-[1.1em]'>Creative ideas</p>
                                </div>
                                <div className='flex justify-center gap-2'>
                                    <box-icon name='check' ></box-icon>
                                    <p className='text-[#979797] text-[1.1em]'>Extraordinary result</p>
                                </div>
                                <div className='flex justify-center gap-2'>
                                    <box-icon name='check' ></box-icon>
                                    <p className='text-[#979797] text-[1.1em]'>Flawless execution</p>
                                </div>
                            </div>

                            <button>
                                <div className='bg-black text-white font-bold px-16 py-6 text-[0.9em]'>
                                    PURCHASE
                                </div>
                            </button>
                        </div>

                        <div className='text-center border-2 bg-gray-100 p-[4em]'>
                            <p className='font-bold text-[1.7em]'>STARTER</p>
                            <p className='text-[1.6em] mt-3 mb-5'>$8.99</p>
                            <p className='text-[#979797] text-[1.4em] my-7'>Lorem ipsum quenenan ullamcorper leo.</p>
                            <hr />
                            <div className='my-12 flex flex-col gap-5 justify-center'>
                                <div className='flex justify-center gap-2'>
                                    <box-icon name='check' ></box-icon>
                                    <p className='text-[#979797] text-[1.1em]'>Creative ideas</p>
                                </div>
                                <div className='flex justify-center gap-2'>
                                    <box-icon name='check' ></box-icon>
                                    <p className='text-[#979797] text-[1.1em]'>Extraordinary result</p>
                                </div>
                                <div className='flex justify-center gap-2'>
                                    <box-icon name='check' ></box-icon>
                                    <p className='text-[#979797] text-[1.1em]'>Flawless execution</p>
                                </div>
                            </div>

                            <button>
                                <div className='bg-black text-white font-bold px-16 py-6 text-[0.9em]'>
                                    PURCHASE
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

            </div>


        </section>
        <Footer />
    </>
}

export default Payment;