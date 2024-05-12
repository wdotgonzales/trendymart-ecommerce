import NavBar from "../../components/NavBar/NavBar";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "../../components/Footer/Footer";
import { Input, Select } from '@chakra-ui/react'

import './styles/Checkout.css';

import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useState, useEffect } from "react";

import useFetchPlace from "./hooks/useFetchPlace";

const Checkout = () => {
    let temporaryProductOrder = [
        {}
    ];

    const [billingDetails, setBillingDetails] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        country: '',
        state: '',
        city: '',
        address: '',
        postalCode: ''
    });

    // This is for the select input's data.
    const [countries, setCountries] = useState(null);

    // This is the extracted country code from the country select input.
    const [extractedCountryCode, setExtractedCountryCode] = useState(null);

    // We will base the state to its country. That is why we need the extractedCountryCode.
    const [states, setStates] = useState(null);

    const GET_COUNTRY_URL = 'https://api.countrystatecity.in/v1/countries';
    const GET_STATE_URL = `https://api.countrystatecity.in/v1/countries/${extractedCountryCode}/states`
    const API_KEY = 'd2RrT1ZkTHBPSGtDMWhPSUlPbEVrdnhzZHJibVU2T1pkdTh4NHc0dg==';

    const { data: countryData } = useFetchPlace(GET_COUNTRY_URL, API_KEY);
    const { data: stateData } = useFetchPlace(GET_STATE_URL, API_KEY);


    // This will extract the data from api to countryData state.
    useEffect(() => {
        if (countryData?.length !== 0) {
            setCountries(countryData);
        }
    }, [countryData]);

    useEffect(() => {
        if (billingDetails.country !== '') {
            const { iso2: countryCode } = countries.find((country) => country.name === billingDetails.country);
            setExtractedCountryCode(countryCode)
        }
    }, [billingDetails.country]);

    useEffect(() => {
        if (extractedCountryCode !== null && stateData?.length > 0) {
            setStates(stateData);
        }
    }, [extractedCountryCode, stateData]);

    useEffect(() => {
        if (billingDetails.country === '') {
            setStates(null);
            setBillingDetails({ ...billingDetails, state: '' });
        }
    }, [billingDetails.country])

    useEffect(() => {
        setBillingDetails({ ...billingDetails, state: '' });
    }, [billingDetails.country])

    return <>
        <ChakraProvider>
            <NavBar />
        </ChakraProvider>
        <section className="">
            <ChakraProvider>
                <div className="relative">
                    <div className="bg-image-checkout"></div>
                    <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-center text-[1.8em] md:text-[2.5em] lg:text-[3em] tracking-wider">CHECKOUT</p>
                </div>

                <div className="max-w-[1250px] m-auto">
                    <div className="mx-[1.3em] my-[7em]">
                        {
                            temporaryProductOrder.length !== 0
                                ? <>

                                    <form className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                        {/* Grid Item 1 */}
                                        <div>
                                            <p className="font-bold tracking-wider text-[1.7em]">BILLING DETAILS</p>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-[2em]">
                                                <div>
                                                    <p className="mb-1">First Name *</p>
                                                    <Input size='md' style={{ padding: '1.4em', borderRadius: '0px' }} />
                                                </div>
                                                <div>
                                                    <p className="mb-1">Last Name *</p>
                                                    <Input size='md' style={{ padding: '1.4em', borderRadius: '0px' }} />
                                                </div>
                                            </div>

                                            <div className="mt-4">
                                                <p className="mb-1">Company Name (Optional)</p>
                                                <Input size='md' style={{ padding: '1.4em', borderRadius: '0px' }} />
                                            </div>

                                            <div className="mt-4">
                                                <p className="mb-1">Country / Region *</p>
                                                {
                                                    countries !== null
                                                        ? <Select
                                                            onChange={(e) => {
                                                                setBillingDetails({ ...billingDetails, country: e.target.value });
                                                            }}
                                                            placeholder='Select a Country / Region'
                                                            style={{ borderRadius: '0px' }}>
                                                            {
                                                                countries.map((country) => {
                                                                    const { id, name } = country
                                                                    return <>
                                                                        <option key={id} value={name}>{name}</option>
                                                                    </>
                                                                })
                                                            }
                                                        </Select>

                                                        : <Select placeholder='Select a Country / Region' style={{ borderRadius: '0px' }} disabled={true}>
                                                            <option value='option1'>Option 1</option>
                                                            <option value='option2'>Option 2</option>
                                                            <option value='option3'>Option 3</option>
                                                        </Select>
                                                }
                                            </div>

                                            <div className="mt-4">
                                                <p className="mb-1">State *</p>
                                                {
                                                    states !== null
                                                        ? <Select
                                                            onChange={(e) => {
                                                                setBillingDetails({ ...billingDetails, state: e.target.value });
                                                            }}
                                                            placeholder='Select a State'
                                                            style={{ borderRadius: '0px' }}>
                                                            {
                                                                states.map((state) => {
                                                                    const { id, name } = state
                                                                    return <>
                                                                        <option key={id} value={name}>{name}</option>
                                                                    </>
                                                                })
                                                            }
                                                        </Select>

                                                        : <Select placeholder='Select a State' style={{ borderRadius: '0px' }} disabled={true}>
                                                            <option value='option1'>Option 1</option>
                                                            <option value='option2'>Option 2</option>
                                                            <option value='option3'>Option 3</option>
                                                        </Select>
                                                }
                                            </div>

                                            <div className="mt-4">
                                                <p className="mb-1">City *</p>
                                                <Input size='md' style={{ padding: '1.4em', borderRadius: '0px' }} />
                                            </div>

                                            <div className="mt-4">
                                                <p className="mb-1">Address *</p>
                                                <Input size='md' style={{ padding: '1.4em', borderRadius: '0px' }} />
                                            </div>

                                            <div className="mt-4">
                                                <p className="mb-1">Postal Code *</p>
                                                <Input size='md' style={{ padding: '1.4em', borderRadius: '0px' }} type="number" />
                                            </div>
                                        </div>

                                        {/* Grid Item 2 */}
                                        <div>
                                            <p className="font-bold tracking-wider text-[1.7em] mb-[1.1em]">ORDER DETAILS</p>
                                            <div className="mb-5">
                                                <div className="grid grid-cols-2 mb-2">
                                                    <div className="font-bold">Product</div>
                                                    <div className="font-bold">Subtotal</div>
                                                </div>
                                                <div className="border-t border-black"></div>
                                            </div>

                                            <div className="mb-5">
                                                <div className="grid grid-cols-2 mb-2">
                                                    <div className="">Deco Accessory <span className="font-bold">x 2</span></div>
                                                    <div className="">$30</div>
                                                </div>
                                                <div className="border-t border-black"></div>
                                            </div>

                                            <div className="mb-5">
                                                <div className="grid grid-cols-2 mb-2">
                                                    <div className="">Deco Accessory Red <span className="font-bold">x 1</span></div>
                                                    <div className="">$15</div>
                                                </div>
                                                <div className="border-t border-black"></div>
                                            </div>

                                            <div className="mb-5">
                                                <div className="grid grid-cols-2 mb-2">
                                                    <div className="font-bold">Subtotal</div>
                                                    <div className="">$45</div>
                                                </div>
                                                <div className="border-t border-black"></div>
                                            </div>

                                            <div className="mb-5">
                                                <div className="grid grid-cols-2 mb-2 items-center">
                                                    <div className="font-bold">Shipping</div>
                                                    <div className="">
                                                        <RadioGroup defaultValue='1'>
                                                            <Stack>
                                                                <Radio value='1'>Free Shipping</Radio>
                                                                <Radio value='2'>Local Pickup</Radio>
                                                                <Radio value='3'>Flat Rate: $10</Radio>
                                                            </Stack>
                                                        </RadioGroup>
                                                    </div>
                                                </div>
                                                <div className="border-t border-black"></div>
                                            </div>

                                            <div className="mb-5">
                                                <div className="grid grid-cols-2 mb-2">
                                                    <div className="font-bold">Total</div>
                                                    <div className="">$45</div>
                                                </div>
                                                <div className="border-t border-black"></div>
                                            </div>

                                            <input type="submit" className="bg-black text-white text-center w-full py-3 font-bold cursor-pointer" value='PLACE ORDER' />
                                        </div>
                                    </form>
                                </>

                                : <div>
                                    <div className="border-2 border-gray-200 py-[2.2em]">
                                        <p className="text-center font-bold text-[1.5em] mx-[1.2em]">CHECKOUT IS NOT AVAILABLE FOR EMPTY CART.</p>

                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </ChakraProvider>
        </section >

        <Footer />
    </>
}

export default Checkout;