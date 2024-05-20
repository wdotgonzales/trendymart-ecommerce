import './styles/MyAccount.css';
import { ChakraProvider } from '@chakra-ui/react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

import './styles/MyAccount.css';

import Orders from './components/Orders';
import PersonalInformation from './components/PersonalInformation';
import { useState } from 'react';

const MyAccount = () => {

    const [toggleComponents, setToggleComponents] = useState({
        showOrders: true,
        showPersonalInformation: false
    });

    return <>
        <ChakraProvider>
            <NavBar />
        </ChakraProvider>
        <section className='max-w-[1250px] m-auto'>
            <div className='mx-[1.3em]'>
                <div className="relative">
                    <div className="background-img-container-myAccount-1">
                    </div>
                    <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-center text-[1.8em] md:text-[2.5em] lg:text-[3em] tracking-wider">MY ACCOUNT</p>
                </div>

                <div className='my-[6em]'>
                    <div className='grid grid-cols-1 gap-[2em] md:flex items-start'>
                        <div className='w-full md:w-[18%]'>
                            <div>
                                <img src="https://secure.gravatar.com/avatar/075d39e56dfb313aca5c10adc7d9cd44?s=96&d=mm&r=g" alt="" className='rounded-full' />
                                <p className='font-bold text-[1.4em] mt-3'>HELLO,</p>
                                <p className='text-[#979797]'>wdotgonzales@gmail.com</p>
                                <div className='mt-5'>
                                    <p onClick={() => setToggleComponents({ showOrders: true, showPersonalInformation: false })} className={`${toggleComponents.showOrders && 'font-bold'} cursor-pointer`}>Orders</p>
                                    <p onClick={() => setToggleComponents({ showOrders: false, showPersonalInformation: true })} className={`${toggleComponents.showPersonalInformation && 'font-bold'} cursor-pointer`}>Personal Information</p>
                                </div>
                            </div>
                        </div>

                        <div className='w-full md:w-[82%]'>
                            {
                                toggleComponents.showOrders && <Orders />
                            }
                            {
                                toggleComponents.showPersonalInformation && <PersonalInformation />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>
}

export default MyAccount;