import {
    Link,
} from "react-router-dom";

import Item from '../../../components/Item/Item';
import products from '../../../products'
const PopularItems = () => {
    const filteredProducts = products.sort((a, b) => (b.reviews?.length || 0) - (a.reviews?.length || 0)).slice(0, 4);
    return <>
        <section className='max-w-[1250px] m-auto'>
            <div className='mx-8'>
                <p className='font-bold text-[30px] tracking-wider text-1 mt-[3em] mb-[1.5em] text-center'>POPULAR ITEMS.</p>

                <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
                    {
                        filteredProducts.map((product, index) => (
                            <Item key={index} products={product} exitModalRoute={"/"} />
                        ))
                    }
                </div>
                <Link to="/">
                    <div className="text-center sm:text-left mt-[3em]">
                        <div className='inline-block text-left'>
                            <div className='flex gap-1'>
                                <p className='text-[21px] tracking-wider text-1 mt-[1em]'>Go To Shop</p>
                                <div className='mt-5 inline-block'>
                                    <box-icon name='right-arrow-alt' size="md"></box-icon>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </section >


    </>
}

export default PopularItems;




