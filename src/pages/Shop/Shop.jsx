import NavBar from "../../components/NavBar/NavBar";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "../../components/Footer/Footer";

import SliderComponent from "./components/SliderComponent";
import Pagination from "./components/Pagination";
import products from '../../products';
import { useEffect, useState } from "react";
import Sorting from "./components/Sorting";
const Shop = () => {
    const [sliderValue, setSliderValue] = useState(460);
    const [sortingValue, setSortingValue] = useState('defaultSorting');

    const [productFilter, setProductFilter] = useState(products);

    useEffect(() => {
        switch (sortingValue) {
            case 'defaultSorting': {
                const filteredProducts = products.filter((product) => product.price <= sliderValue);
                setProductFilter(filteredProducts)
                break;
            }

            case 'sortPopularity': {
                const filteredProducts = products.filter((product) => product.price <= sliderValue);
                const filteredProductsWithSort = filteredProducts.sort((a, b) => b.reviews.length - a.reviews.length);
                setProductFilter(filteredProductsWithSort)
                break;
            }

            case 'sortAverageRating': {
                const filteredProducts = products.filter((product) => product.price <= sliderValue);
                const filteredProductsWithSort = filteredProducts.sort((a, b) => b.ratingAvg - a.ratingAvg);
                setProductFilter(filteredProductsWithSort)
                break;
            }

            case 'sortPriceLowToHigh': {
                const filteredProducts = products.filter((product) => product.price <= sliderValue);
                const filteredProductsWithSort = filteredProducts.sort((a, b) => a.price - b.price);
                setProductFilter(filteredProductsWithSort)
                break;
            }
            case 'sortPriceHighToLow': {
                const filteredProducts = products.filter((product) => product.price <= sliderValue);
                const filteredProductsWithSort = filteredProducts.sort((a, b) => b.price - a.price);
                setProductFilter(filteredProductsWithSort)
                break;
            }
        }

    }, [sliderValue, sortingValue])

    return <>
        <ChakraProvider>
            <NavBar />
        </ChakraProvider>
        <section className="max-w-[1220px] m-auto h-auto">
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
                        <Sorting
                            setSortingValue={setSortingValue}
                        />
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