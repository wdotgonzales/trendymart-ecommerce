import NavBar from "../NavBar/NavBar";
import { ChakraProvider } from "@chakra-ui/react";
import Footer from "../Footer/Footer";
import { Rating } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Textarea, Input } from "@chakra-ui/react";

import products from "../../products";
import Item from "../Item/Item";
import ItemModal from "../Item/ItemModal";
import { useEffect } from "react";

import ShopSelectedProductModal from "./components/ShopSelectedProductModal";
const ShopSelectedProduct = () => {
    const path = window.location.pathname;
    const segments = path.split('/');
    // Example : shop/variable-products -> variable-products
    const lastSegment = segments[segments.length - 1];

    const selectedProductObject = products.find((product) => product.path === lastSegment);

    const removeFirstImageArr = selectedProductObject.productImgs.slice(1);

    const [quantity, setQuantity] = useState(1);

    const [contentToggle, setContentToggle] = useState({
        description: true,
        additionalInformation: false,
        reviews: false
    });

    const [isModalHidden, setIsModalHidden] = useState(true);
    useEffect(() => {
        if (isModalHidden) {
            document.body.classList.remove('overflow-hidden');
        } else {
            document.body.classList.add('overflow-hidden');
        }
    }, [isModalHidden])

    const [currentImageForDisplayInModal, setCurrentImageForDisplayInModal] = useState();

    // Top 4 Popular Items
    const filteredProducts = products.sort((a, b) => (b.reviews?.length || 0) - (a.reviews?.length || 0)).slice(0, 4);


    const [reviewInputs, setReviewInputs] = useState({
        rating: null,
        review: "",
        name: "",
        email: ""
    });

    const [errorHandlers, setErrorHandlers] = useState({
        ratingNullError: false,
        reviewNullError: false,
        nameNullError: false,
        emailNullError: false,
        emailSyntaxError: false
    })

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation
        return emailRegex.test(email);
    }

    const handleSubmit = () => {
        const newErrorHandlers = {
            ratingNullError: reviewInputs.rating === null,
            reviewNullError: reviewInputs.review === "",
            nameNullError: reviewInputs.name === "",
            emailNullError: reviewInputs.email === "",
            emailSyntaxError: !isValidEmail(reviewInputs.email)
        };

        setErrorHandlers(newErrorHandlers);

        // Success
        if (!newErrorHandlers.ratingNullError
            && !newErrorHandlers.reviewNullError
            && !newErrorHandlers.nameNullError
            && !newErrorHandlers.emailNullError
            && !newErrorHandlers.emailSyntaxError) {
            alert('Success')
        }
    };

    return <>
        <ChakraProvider>
            <NavBar />
        </ChakraProvider>
        <section className="">
            <div className="">
                <div className="max-w-[1243px] m-auto">
                    <div className="mx-5 pt-[5em]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2em] items-start pb-[5em]">
                            {/* child 1 */}
                            <div className="flex gap-2">
                                <div className="grid grid-cols-1 gap-y-2">
                                    {
                                        removeFirstImageArr.map((img, index) => {
                                            return <>
                                                <div>
                                                    <img
                                                        className="w-[129px] md:w-[100px] cursor-pointer"
                                                        src={img}
                                                        alt=""
                                                        onClick={() => {
                                                            setCurrentImageForDisplayInModal(index + 1);
                                                            setIsModalHidden(false);
                                                        }} />
                                                </div>
                                            </>
                                        })
                                    }
                                </div>
                                <div >
                                    <img
                                        className="w-[565px] sm:w-[550px] md:w-[430px] cursor-pointer"
                                        src={selectedProductObject.productImgs[0]}
                                        alt=""
                                        onClick={() => {
                                            setCurrentImageForDisplayInModal(0);
                                            setIsModalHidden(false);
                                        }}
                                    />
                                </div>
                            </div>
                            {/* child 2 */}
                            <div>
                                <div>
                                    <p className="font-bold text-[1.2em]">{selectedProductObject.name}</p>
                                    <p className="text-[1.2em] text-[#979797]">${selectedProductObject.price}</p>
                                    <div className="flex items-center gap-1 mt-7">
                                        <Rating
                                            key={selectedProductObject.ratingAvg}
                                            name="half-rating-read"
                                            defaultValue={selectedProductObject.ratingAvg != null ? selectedProductObject.ratingAvg : 0}
                                            precision={0.5}
                                            size="small"
                                            readOnly
                                        />
                                        <p className="text-[0.8em] mt-[0.2em] text-[#979797]">( <span className="text-[1.2em]">{selectedProductObject.reviews.length}</span> CUSTOMER REVIEW )</p>
                                    </div>

                                    <div className="w-[100%] md:w-[80%] mt-2">
                                        <p className="text-[#979797] text-[0.8em]">{selectedProductObject.description}</p>
                                    </div>

                                    <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-[100%] sm:max-w-[350px]'>

                                        <div className="w-full">
                                            <p className='text-[12px] text-[#979797]'>Quantity:</p>
                                            <div className="flex items-center">
                                                <button onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)} type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                                    <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" d="M1 1h16" />
                                                    </svg>
                                                </button>
                                                <input type="text" value={quantity} id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="999" required />
                                                <button onClick={() => setQuantity(quantity + 1)} type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                                                    <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" d="M9 1v16M1 9h16" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>

                                        <Link to='/' className="mt-0 sm:mt-[1.1em]">
                                            <div onClick={() => alert(selectedProductObject.id)} className='bg-black text-white text-center tracking-wider p-[12.9px] text-[12px]'>
                                                ADD TO CART
                                            </div>
                                        </Link>
                                    </div>

                                    <button>
                                        <div className='mt-8 flex gap-2 items-center'>
                                            <box-icon name='heart' type='solid' color='red'></box-icon>
                                            <p className='text-[#979797] tracking-wider text-[12.5px] mt-1'>ADD TO FAVORITES</p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* toggles */}
                        <div>
                            <div className="grid grid-cols-1 md:flex">
                                <div
                                    onClick={() => setContentToggle({ ...contentToggle, description: true, additionalInformation: false, reviews: false })}
                                    className={`text-[0.8em] font-bold border border-t border-b border-l border-[#979797] py-5 text-center md:text-left md:px-[3em] cursor-pointer ${contentToggle.description && 'bg-black text-white border-black'}`}>DESCRIPTION</div>
                                <div
                                    onClick={() => setContentToggle({ ...contentToggle, description: false, additionalInformation: true, reviews: false })}
                                    className={`text-[0.8em] font-bold border border-t border-b border-l border-[#979797] py-5 text-center md:text-left md:px-[3em] cursor-pointer ${contentToggle.additionalInformation && 'bg-black text-white border-black'}`}>ADDITIONAL INFORMATION</div>
                                <div
                                    onClick={() => setContentToggle({ ...contentToggle, description: false, additionalInformation: false, reviews: true })}
                                    className={`text-[0.8em] font-bold border border-t border-b border-l border-[#979797] py-5 text-center md:text-left md:px-[3em] cursor-pointer ${contentToggle.reviews && 'bg-black text-white border-black'}`}>REVIEWS ({selectedProductObject.reviews.length})</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="max-w-[1237px] m-auto">
                    <div className={`mx-5 py-[6em]`}>
                        <div className={`${!contentToggle.description && 'hidden'}`}>
                            <p className="font-bold text-[1.3em] tracking-wider mb-3">DESCRIPTION</p>
                            <p className="text-[#979797]">{selectedProductObject.description}</p>
                        </div>

                        <div className={`${!contentToggle.additionalInformation && 'hidden'}`}>
                            <p className="font-bold text-[1.3em] tracking-wider mb-[1.2em]">ADDITIONAL INFORMATION</p>
                            <div className="max-w-[240px]">
                                <div className="grid grid-cols-2 mb-2 text-[#979797]">
                                    <p className="font-bold">Weight</p>
                                    <p>${selectedProductObject.weight}</p>
                                </div>
                                <div className="grid grid-cols-2 mb-2 text-[#979797]">
                                    <p className="font-bold">Dimensions</p>
                                    <p>${selectedProductObject.dimensions}</p>
                                </div>
                                <div className="grid grid-cols-2 mb-2 text-[#979797]">
                                    <p className="font-bold">Color</p>
                                    <p>
                                        {
                                            selectedProductObject.color.map((color, index) => {
                                                return index === selectedProductObject.color.length - 1
                                                    ? color  // No comma and space for the last item
                                                    : color + ", ";
                                            })
                                        }
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 mb-2 text-[#979797]">
                                    <p className="font-bold">Material</p>
                                    <p>
                                        {
                                            selectedProductObject.material.map((material, index) => {
                                                return index === selectedProductObject.material.length - 1
                                                    ? material  // No comma and space for the last item
                                                    : material + ", ";
                                            })
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={`${!contentToggle.reviews && 'hidden'}`}>
                            <p className="font-bold text-[1.3em] tracking-wider mb-3">{selectedProductObject.reviews.length} REVIEW FOR {selectedProductObject.name}</p>
                            {
                                selectedProductObject.reviews.map((review) => {
                                    const {
                                        dateOfReview,
                                        description,
                                        rating,
                                        reviewId,
                                        reviewImg,
                                        reviewerName
                                    } = review
                                    return <div key={reviewId} className="flex gap-3 mb-[1.5em] mt-5">
                                        <div className="">
                                            <img src={reviewImg} alt="" className="w-[70px]" />
                                        </div>
                                        <div>
                                            <Rating
                                                key={reviewId}
                                                name="half-rating-read"
                                                defaultValue={rating != null ? rating : 0}
                                                precision={0.5}
                                                size="small"
                                                readOnly
                                            />
                                            <div className="ml-1">
                                                <div className="flex gap-2 text-[#979797]">
                                                    <p className="font-bold">{reviewerName}</p>
                                                    <p>-</p>
                                                    <p>{dateOfReview}</p>
                                                </div>
                                                <p className="text-[#979797]">{description}</p>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }

                            <div className="mt-[4em]">
                                <p className="font-bold tracking-wider">ADD A REVIEW</p>
                                <p className="mt-4 text-[#979797]">Your email address will not be published. Required fields are marked*</p>

                                <div className="my-4">
                                    <p className="mb-2">Your Rating*</p>
                                    <Rating
                                        name="half-rating-read"
                                        defaultValue={reviewInputs.rating}
                                        precision={0.5}
                                        size="small"
                                        onChange={(e) => setReviewInputs({ ...reviewInputs, rating: e.target.value })}
                                    />
                                    {errorHandlers.ratingNullError
                                        &&
                                        <p className="text-red-700 text-[0.9em]">Please enter a start rating.</p>
                                    }
                                </div>

                                <div>
                                    <div className="max-w-[100%] md:max-w-[50%] mb-4">
                                        <p className="mb-2">Your Review * </p>
                                        <Textarea
                                            width="100%"
                                            padding="1em"
                                            height="220px"
                                            value={reviewInputs.review}
                                            onChange={(e) => setReviewInputs({ ...reviewInputs, review: e.target.value })}
                                        />
                                        {errorHandlers.reviewNullError
                                            &&
                                            <p className="text-red-700 text-[0.9em]">Please give a review.</p>
                                        }
                                    </div>

                                    <div className="max-w-[100%] md:max-w-[50%] mb-4">
                                        <p className="mb-2">Name * </p>
                                        <Input
                                            width="100%"
                                            border="1px solid black"
                                            padding="1em"
                                            type="text"
                                            value={reviewInputs.name}
                                            onChange={(e) => setReviewInputs({ ...reviewInputs, name: e.target.value })}
                                        />
                                        {errorHandlers.nameNullError
                                            &&
                                            <p className="text-red-700 text-[0.9em]">Please enter your name.</p>
                                        }
                                    </div>

                                    <div className="max-w-[100%] md:max-w-[50%] mb-4">
                                        <p className="mb-2">Email * </p>
                                        <Input
                                            width="100%"
                                            border="1px solid black"
                                            padding="1em"
                                            type="email"
                                            value={reviewInputs.email}
                                            onChange={(e) => setReviewInputs({ ...reviewInputs, email: e.target.value })}
                                        />
                                        {errorHandlers.emailNullError
                                            &&
                                            <p className="text-red-700 text-[0.9em]">Please enter your email.</p>
                                        }

                                        {errorHandlers.emailNullError === false && errorHandlers.emailSyntaxError
                                            &&
                                            <p className="text-red-700 text-[0.9em]">Please enter a correct email.</p>
                                        }
                                    </div>

                                    <button
                                        onClick={handleSubmit}
                                        className="bg-black text-white w-[150px] py-[0.8em] font-bold text-[0.9em] mt-[1em]"
                                    >SUBMIT</button>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <hr className="my-[2.5em]" style={{ border: "1px solid #979797" }} />

            <div className="max-w-[1243px] m-auto">
                <div className="mx-4 pt-[3em] pb-[7em]">
                    <p className="mb-4 font-bold tracking-wider text-[1.2em] text-center md:text-left">POPULAR PRODUCTS</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1.5em]">
                        {
                            filteredProducts.map((product, index) => {
                                return <Item key={index} products={product} exitModalRoute={path} />
                            })
                        }
                    </div>
                </div>
            </div>

        </section >
        <Footer />

        <ShopSelectedProductModal
            isModalHidden={isModalHidden}
            setIsModalHidden={setIsModalHidden}
            currentImageForDisplayInModal={currentImageForDisplayInModal}
            selectedProductObject={selectedProductObject}
        />
    </>
}

export default ShopSelectedProduct;