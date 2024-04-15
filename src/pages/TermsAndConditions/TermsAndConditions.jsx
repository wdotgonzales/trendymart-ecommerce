import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import { ChakraProvider } from "@chakra-ui/react";

import './TermsAndConditions.css';

const TermsAndConditions = () => {
    return <>
        <ChakraProvider>
            <NavBar />
        </ChakraProvider>
        <section>
            <div class="relative">
                <div class="img-container"></div>
                <p class="mx-5 text-[2.5em] md:text-[3em] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold tracking-wider">TERMS & CONDITIONS</p>
            </div>

            <div className="max-w-[1250px] m-auto my-[6em]">
                <div className="grid grid-cols-1 md:grid-cols-2 mx-7 gap-12">
                    <div>
                        <p className="font-bold tracking-wider mb-6 text-[1.3em]">QUALITY NEVER GOES OUT OF STYLE.</p>
                        <p className="text-[#979797] mb-6">Lorem Ipsuoin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo.</p>
                        <p className="text-[#979797] text-[1.3em] mb-6">Proin nibh vel velit auctor aliqnean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.</p>
                        <p className="text-[#979797] ">Lorem Ipsuoin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo.</p>
                    </div>
                    <div>
                        <p className="font-bold tracking-wider mb-6 text-[1.3em]">DISCOVER YOUR FAVORITE PLACE.</p>
                        <p className="mb-8 text-[#979797]">Lorem Ipsuoin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque condimentum .</p>
                        <p className="mb-7 text-[#979797]">Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque condimentum .</p>
                        <img src="https://depot.qodeinteractive.com/wp-content/uploads/2017/02/terms-conditions-signature.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>
}

export default TermsAndConditions;