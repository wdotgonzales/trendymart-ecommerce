import NavBar from "../../components/NavBar/NavBar";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "../../components/Footer/Footer";
import './styles/WishList.css';

import { useState } from "react";

import ItemModal from "../../components/Item/ItemModal";
import products from "../../products";

const WishList = () => {

    const [isQuickLookModalHidden, setIsQuickLookModalHidden] = useState(true);
    const [currentItemChosenForModalId, setCurrentItemChosenForModalId] = useState();

    const temporaryWishList = [{
        id: 1,
        name: "VARIABLE PRODUCT",
        price: 390,
        ratingAvg: 5.0,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, 
                      eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes 
                      nascetur ridiculus mus. Vestibulum ultricies aliquam convallis.`,
        productImgs: [
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/variable-product-img-505x505.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-3-gallery-5.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-3-gallery-6.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-3-gallery-1.jpg',
            'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/product-3-gallery-2.jpg'
        ],

        color: [
            'black',
            'white',
        ],

        material: [
            'chrome',
            'wood'
        ],
        weight: "2 kg",
        dimensions: "10 x 10 x 15 cm",

        reviews: [
            { forProductId: 1, reviewId: 1, rating: 5.0, reviewerName: "Mark Jackson", description: "asd", dateOfReview: "01/23/2024" },
        ],
        path: "variable-product"
    },
];


    return <>
        <ChakraProvider>
            <NavBar />
        </ChakraProvider>
        <section>
            <div className="relative">
                <div id="bg-image" className="h-[330px]"></div>
                <p className="mx-5 text-[2.5em] md:text-[3em] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold tracking-wider">WISHLIST</p>
            </div>

            <div className="mx-[1.5em] md:mx-[5em] my-[6.5em]">
                {/* Item 1 */}
                {
                    temporaryWishList.map((item) => {
                        const { id, name, productImgs } = item;
                        return <>
                            <div className="mt-4 shadow-lg relative">
                                <div className="cursor-pointer block md:hidden absolute right-1 top-3">
                                    <box-icon
                                        name='x'
                                        color='black'
                                    >
                                    </box-icon>
                                </div>
                                <div className="p-[2em] block justify-between sm:flex">
                                    {/* flex 1 */}
                                    <div className="flex items-center gap-2 flex-col md:flex-row">
                                        <div className="cursor-pointer hidden md:block">
                                            <box-icon
                                                name='x'
                                                color='black'
                                            >
                                            </box-icon>
                                        </div>
                                        <div>
                                            <img src={productImgs[0]} alt="" className="max-w-[120px] mt-5 sm:mt-0" />
                                        </div>
                                        <div>
                                            <p className="font-bold">{name}</p>
                                        </div>
                                        <div>
                                            <button
                                                onClick={() => {
                                                    setIsQuickLookModalHidden(false);
                                                    setCurrentItemChosenForModalId(id);
                                                }}
                                                className="bg-black text-white font-bold py-2 px-[3em] text-[0.8em]">QUICK VIEW</button>
                                        </div>
                                    </div>

                                    {/* flex 2 */}
                                    <div className="flex items-center gap-3 flex-col justify-center lg:flex-row">
                                        <div>
                                            <p className="mt-5 sm:mt-0" >$160</p>
                                        </div>
                                        <div>
                                            <p>In Stock</p>
                                        </div>
                                        <div>
                                            <button className="font-bold">ADD TO CART</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    })
                }
            </div>
            <ItemModal
                isQuickLookModalHidden={isQuickLookModalHidden}
                setIsQuickLookModalHidden={setIsQuickLookModalHidden}
                products={products}
                currentItemChosenForModalId={currentItemChosenForModalId}
                setCurrentItemChosenForModalId={setCurrentItemChosenForModalId}
            />

        </section>
        <Footer />
    </>
}

export default WishList;