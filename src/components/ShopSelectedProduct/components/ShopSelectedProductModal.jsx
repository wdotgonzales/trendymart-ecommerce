import {
    useEffect,
    useState
} from "react";

const ShopSelectedProductModal = ({ isModalHidden, setIsModalHidden, currentImageForDisplayInModal, selectedProductObject }) => {
    const { productImgs } = selectedProductObject;

    const [carouselNumber, setCarouselNumber] = useState(currentImageForDisplayInModal + 1);

    const [imageIndex, setImageIndex] = useState(currentImageForDisplayInModal)

    useEffect(() => {
        setCarouselNumber(currentImageForDisplayInModal + 1);
        setImageIndex(currentImageForDisplayInModal);
    }, [currentImageForDisplayInModal]);

    const chosenImageToDiplay = productImgs[imageIndex];
    return <>
        <div
            className={`absolute left-0 top-[0px] w-full h-full z-20 text-white ${isModalHidden && 'hidden'}`}
            style={{
                backgroundColor: "rgba(0, 0, 0, 0.7)", // Set background-color with opacity
            }}
        >
            {/* Inner content */}
            <div className="flex justify-center items-center h-screen mx-6">
                <div className="max-w-[620px]">
                    {/* Content */}
                    <img src={chosenImageToDiplay} alt=""  className="w-[500px]"/>
                    <div className="flex justify-between mx-2 my-2">
                        <div className="flex">
                            <div
                                onClick={() => {
                                    setCarouselNumber((previousValue) => previousValue === 1 ? productImgs.length : previousValue - 1);
                                    setImageIndex((previousValue) => previousValue === 0 ? productImgs.length - 1 : previousValue - 1);
                                }}
                                className="cursor-pointer">
                                <box-icon type='solid' name='chevron-left' color="white"></box-icon>
                            </div>
                            <div
                                onClick={() => {
                                    setCarouselNumber((previousValue) => previousValue === 5 ? 1 : previousValue + 1);
                                    setImageIndex((previousValue) => previousValue === productImgs.length - 1 ? 0 : previousValue + 1);
                                }}
                                className="cursor-pointer">
                                <box-icon name='chevron-right' type='solid' color="white"></box-icon>
                            </div>
                        </div>
                        <div>{carouselNumber} / {productImgs.length}</div>
                        <div
                            onClick={() => {
                                setIsModalHidden(true)
                            }}
                            className="cursor-pointer">
                            <box-icon name='x' size='sm' color='white'></box-icon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default ShopSelectedProductModal;