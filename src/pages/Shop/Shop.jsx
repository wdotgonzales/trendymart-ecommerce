import NavBar from "../../components/NavBar/NavBar";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "../../components/Footer/Footer";

import SliderComponent from "./components/SliderComponent";
import Pagination from "./components/Pagination";
import products from '../../products';
import { useEffect, useState } from "react";

const Shop = () => {
    const [sliderValue, setSliderValue] = useState(460);

    const [productFilter, setProductFilter] = useState(products);

    useEffect(() => {
        const filteredProducts = products.filter((product) => product.price <= sliderValue);
        setProductFilter(filteredProducts)
    }, [sliderValue])

    return <>
        <ChakraProvider>
            <NavBar />
        </ChakraProvider>
        <section className="max-w-[1220px] m-auto h-[1500px]">
            <div className="mx-6 py-14">
                <p className="text-[2em] mb-5 font-bold">Shop</p>
                <div className="block xl:flex gap-10">
                    <div className="w-[1000px]  hidden xl:block">
                        <SliderComponent
                            sliderValue={sliderValue}
                            setSliderValue={setSliderValue}
                        />
                    </div>

                    <div className="mt-2">
                        <Pagination
                            data={productFilter}
                            itemsPerPage={8}
                        />
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </>
}

export default Shop;