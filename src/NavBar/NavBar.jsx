import './NavBar.css';
import 'boxicons';

import {
    Link,
    Routes,
    Route
} from "react-router-dom";

import { useRef, useState } from 'react';

import { useDisclosure } from '@chakra-ui/react';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    InputGroup,
    Input,
    InputRightElement
} from '@chakra-ui/react';

import { drawerImages } from './images';
import { links } from './links';


const NavBar = () => {
    // Separate state variables for each Drawer
    const { isOpen: isOpen1, onOpen: onOpen1, onClose: onClose1 } = useDisclosure();
    const { isOpen: isOpen2, onOpen: onOpen2, onClose: onClose2 } = useDisclosure();
    const { isOpen: isOpen3, onOpen: onOpen3, onClose: onClose3 } = useDisclosure();

    const btnForDrawer1 = useRef();
    const btnForDrawer2 = useRef();
    const btnForDrawer3 = useRef();

    // const imageContainerForDrawer1 = useRef();

    const imageContainerRefs = useRef([]);

    const showInstagramLogoInDrawer1 = (e) => {
        // Access the parent element of the image
        const parentDiv = e.target.parentNode;

        // Access Children[0] to remove or add a class
        parentDiv.children[0].classList.remove('hidden-default-css');
        parentDiv.children[0].classList.remove('hidden-css');
        parentDiv.children[0].classList.add('show-css');

    };

    const hideInstagramLogoInDrawer1 = (e) => {
        // Access the parent element of the image
        const parentDiv = e.target.parentNode;
        // Access Children[0] to remove or add a class
        parentDiv.children[0].classList.remove('show-css');
        parentDiv.children[0].classList.add('hidden-css');

    };

    const [isLinksInDrawer2Visible, setIsLinksInDrawer2Visible] = useState(false);
    const [isOthersNavLinkHovered, setIsOthersNavLinkHovered] = useState(false);
    const [isCartNavBarVisible, setIsCartNavBarVisible] = useState(false);
    const [isSearchNavBarVisible, setIsSearchNavBarVisible] = useState(false);

    const [searchValue, setSearchValue] = useState('');

    // Temporary Nav Items Cart (kay wala pa db , kung may ara delete nlng ni kag edit sa dalom)
    const temporaryCartNavItems = [
        { id: 1, imgSrc: "https://image.made-in-china.com/318f0j00SEpYGmTITHzg/VID-20210805-160415-mp4.webp", itemName: "FUCKING CHAIR", quantity: 1, price: "69" },
        { id: 2, imgSrc: "https://image.made-in-china.com/318f0j00SEpYGmTITHzg/VID-20210805-160415-mp4.webp", itemName: "FUCKING CHAIR", quantity: 1, price: "69" },
        { id: 3, imgSrc: "https://image.made-in-china.com/318f0j00SEpYGmTITHzg/VID-20210805-160415-mp4.webp", itemName: "HELLO WORLD ASD", quantity: 1, price: "69" }
    ];

    return <>
        <nav className='sticky top-0 z-50 bg-white'>
            <div
                className='mx-5 xl:mx-0'
                onMouseEnter={() => {
                    setIsOthersNavLinkHovered(false);
                    setIsCartNavBarVisible(false);
                }}
                onMouseLeave={() => {
                    setIsOthersNavLinkHovered(false);
                    setIsCartNavBarVisible(false);
                }}>
                <div className='flex justify-between max-w-[1200px] m-auto py-6'>
                    <ul className='hidden lg:flex gap-10 items-center'>
                        <li className='font-bold text-gray-500 hover:text-black'>
                            <Link
                                to="/"
                                onMouseEnter={() => {
                                    setIsOthersNavLinkHovered(false);
                                    setIsCartNavBarVisible(false);
                                }}>Home</Link>
                        </li>
                        <li className='font-bold text-gray-500 hover:text-black'>
                            <Link
                                to="/"
                                onMouseEnter={() => {
                                    setIsOthersNavLinkHovered(false);
                                    setIsCartNavBarVisible(false);
                                }}>Shop</Link>
                        </li>
                        <li className='font-bold text-gray-500 hover:text-black'>
                            <Link
                                to="/"
                                onMouseEnter={() => {
                                    setIsOthersNavLinkHovered(false);
                                    setIsCartNavBarVisible(false)
                                }}>About Us</Link>
                        </li>
                        <li className='font-bold text-gray-500'>
                            <Link
                                to="/"
                                className=' hover:text-black'
                                onMouseEnter={() => {
                                    setIsOthersNavLinkHovered(!isOthersNavLinkHovered);
                                    setIsCartNavBarVisible(false);
                                    setIsSearchNavBarVisible(false);
                                    setSearchValue('')
                                }}>Others</Link>
                            <div
                                className={`others-link-hover-element ${isOthersNavLinkHovered && 'showContent'}`}
                                onMouseLeave={() => setIsOthersNavLinkHovered(!isOthersNavLinkHovered)}>
                                {
                                    links.map((link) => {
                                        const { id, linkName, linkUrl } = link;
                                        return (
                                            <div key={id} className='mt-2 hover:text-gray-300'>
                                                <Link to={linkUrl}>{linkName}</Link>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </li>
                    </ul>
                    <div>
                        <p className='font-bold text-[28px]'>TrendyMart</p>
                    </div>

                    <ul className='flex gap-4 items-center'>
                        <li className='hidden sm:block' >
                            <Link
                                to="/"
                                className='flex gap-1'
                                onMouseEnter={() => {
                                    setIsOthersNavLinkHovered(false);
                                    setIsCartNavBarVisible(true);
                                    setIsSearchNavBarVisible(false);
                                    setSearchValue('')
                                }}>
                                <p>CART</p>
                                <p>($0)</p>
                            </Link>
                            <div
                                className={`cart-hover-element ${isCartNavBarVisible && 'showCartInNav'}`}
                                onMouseEnter={() => setIsCartNavBarVisible(true)}
                                onMouseLeave={() => setIsCartNavBarVisible(false)}>
                                <div className='cart-hover-body'>
                                    {
                                        temporaryCartNavItems.map((item) => {
                                            const { id, imgSrc, itemName, price, quantity } = item;
                                            const [toggleXIconInCartNavBar, setToggleXIconInCartNavBar] = useState(false);

                                            function truncateString(str, maxLength) {
                                                if (str.length <= maxLength) {
                                                    return str;
                                                } else {
                                                    return str.slice(0, maxLength) + "...";
                                                }
                                            }

                                            return <>
                                                <div key={id} className='cart-item'>
                                                    <div className='flex gap-2 items-center'>
                                                        <img src={imgSrc} alt="" className='w-[55px]' />
                                                        <div>
                                                            <p>{truncateString(itemName, 13)}</p>
                                                            <p>{quantity} x ${price}</p>
                                                        </div>
                                                    </div>
                                                    <div className='relative' style={{ left: "12.2em", top: "-2.7em" }}>
                                                        <button>
                                                            <box-icon
                                                                name='x'
                                                                color={`${toggleXIconInCartNavBar ? 'white' : 'grey'}`}
                                                                size="sm"
                                                                onMouseEnter={() => setToggleXIconInCartNavBar(true)}
                                                                onMouseLeave={() => setToggleXIconInCartNavBar(false)}>
                                                            </box-icon>
                                                        </button>
                                                    </div>
                                                </div>
                                            </>
                                        })
                                    }


                                    <div>
                                        <div className='flex justify-between'>
                                            <p>TOTAL :</p>
                                            <p>$69</p>
                                        </div>

                                        <Link to="/">
                                            <div className='font-bold text-[14px] my-3 text-center py-1 border-2 border-gray-600 hover:border-gray-300'>
                                                View Cart
                                            </div>
                                        </Link>

                                        <Link to="/">
                                            <div className='text-center text-[14px] font-bold py-1 bg-gray-800 hover:bg-gray-500'>
                                                Checkout
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>


                            {/* Search Nav */}
                            <div className={`search-nav-container ${isSearchNavBarVisible && 'showSearchNav'}`}>
                                <button
                                    className='absolute left-[15.7em] top-[4px]'
                                    onClick={() => {
                                        setIsSearchNavBarVisible(false);
                                        setSearchValue('');
                                    }}>
                                    <box-icon
                                        name='x'
                                        color='white'
                                        size="sm">
                                    </box-icon>
                                </button>
                                <div className='search-nav-bod mt-9 m-3'>
                                    <form onSubmit={(e) => e.preventDefault()}>
                                        <InputGroup>
                                            <Input
                                                placeholder="Search for a product"
                                                borderColor="black"
                                                value={searchValue}
                                                onChange={(e) => setSearchValue(e.target.value)}
                                            />
                                            <InputRightElement>
                                                <button
                                                    type="submit"
                                                    style={{
                                                        backgroundColor: "transparent",
                                                        border: "none",
                                                        cursor: "pointer"
                                                    }}>
                                                    <box-icon
                                                        type="solid"
                                                        name="right-arrow-alt"
                                                        color="white">
                                                    </box-icon>
                                                </button>
                                            </InputRightElement>
                                        </InputGroup>
                                    </form>
                                </div>
                            </div>
                        </li>

                        <li className='hidden sm:block'>
                            <Link
                                to="/"
                                className='flex gap-1'
                                onMouseEnter={() => {
                                    setIsOthersNavLinkHovered(false);
                                    setIsCartNavBarVisible(false)
                                }}>
                                <box-icon name='heart'></box-icon>
                                <p>(0)</p>
                            </Link>
                        </li>

                        <li className='hidden sm:block'>
                            <Link
                                to="/"
                                className='flex gap-1'
                                onMouseEnter={() => {
                                    setIsOthersNavLinkHovered(false);
                                    setIsCartNavBarVisible(false)
                                }}>
                                <box-icon name='user'></box-icon>
                                <p className='text-[12px] font-bold mt-1'>LOGIN</p>
                            </Link>
                        </li>

                        <li
                            className='mt-2 hidden sm:block'
                            onMouseEnter={() => {
                                setIsOthersNavLinkHovered(false);
                                setIsCartNavBarVisible(false)
                            }}>
                            <button onClick={() => setIsSearchNavBarVisible(true)}>
                                <box-icon
                                    name='search'
                                    rotate='90'>
                                </box-icon>
                            </button>
                        </li>

                        {/* Button for Drawer 1 */}
                        <li
                            className='mt-2 hidden lg:block'
                            ref={btnForDrawer1}
                            onClick={onOpen1}
                            onMouseEnter={() => {
                                setIsOthersNavLinkHovered(false);
                                setIsCartNavBarVisible(false)
                            }}>
                            <box-icon name='align-right'></box-icon>
                        </li>

                        {/* Button for Drawer 2 */}
                        <li
                            className='mt-2 block lg:hidden hidden sm:block'
                            ref={btnForDrawer2}
                            onClick={onOpen2}
                            onMouseEnter={() => {
                                setIsOthersNavLinkHovered(false);
                                setIsCartNavBarVisible(false)
                            }}>
                            <box-icon name='align-middle'></box-icon>
                        </li>

                        {/* Button for Drawer 3 */}
                        <li
                            className='mt-2 block sm:hidden'
                            ref={btnForDrawer3}
                            onClick={onOpen3}
                            onMouseEnter={() => {
                                setIsOthersNavLinkHovered(false);
                                setIsCartNavBarVisible(false)
                            }}>
                            <box-icon name='align-left'></box-icon>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >

        {/*  Drawer 1 */}
        <Drawer
            isOpen={isOpen1}
            placement='right'
            onClose={onClose1}
            finalFocusRef={btnForDrawer1}
            size="md"
            blockScrollOnMount={false}
        >
            <DrawerOverlay bg="rgba(0, 0, 0, 0.0)" />
            <DrawerContent
                bg="black"
                textColor="white">
                <DrawerCloseButton color="white" />
                <DrawerHeader></DrawerHeader>

                <DrawerBody>
                    <h6 className='text-center font-bold mt-16 text-[14px]'>WELCOME</h6>
                    <p className='text-center mt-5 text-[#929292] text-[24px] mb-10'>Advertising is the way great brands get to be great brands.</p>

                    <div className='grid grid-cols-4 gap-2 w-[85%] m-auto'>
                        {drawerImages.map((image) => {
                            const { id, imgUrl } = image;
                            const imageRef = useRef(null);
                            imageContainerRefs.current[id] = imageRef;

                            return (
                                <div
                                    key={id}
                                    ref={imageRef}
                                    onMouseEnter={(e) => showInstagramLogoInDrawer1(e)}
                                    onMouseOut={(e) => hideInstagramLogoInDrawer1(e)}>
                                    <div
                                        className="instagram-logo-container hidden-default-css"
                                        data-id={`${id}`}>
                                        <box-icon
                                            name='instagram'
                                            type='logo'
                                            className="instagram-logo"
                                            color='#ffffff'>
                                        </box-icon>
                                    </div>
                                    <img src={imgUrl} alt="" className='drawer-1-img' />
                                </div>
                            );
                        })}
                    </div>

                    <div>
                        <p
                            className='text-center font-bold text-[13px] text-[#929292]'
                            style={{ marginTop: "13.5em" }}>WE ARE AWESOME FOLOW US</p>
                    </div>

                    <div className='mt-5 flex justify-between w-[25%] m-auto'>
                        <box-icon
                            type='logo'
                            name='twitter'
                            color='#ffffff'>
                        </box-icon>
                        <box-icon
                            name='instagram'
                            type='logo'
                            color='#ffffff'>
                        </box-icon>
                        <box-icon
                            name='facebook'
                            type='logo'
                            color='#ffffff'>
                        </box-icon>
                    </div>
                </DrawerBody>
            </DrawerContent>
        </Drawer >


        {/*  Drawer 2 */}
        <Drawer
            isOpen={isOpen2}
            placement='right'
            onClose={onClose2}
            finalFocusRef={btnForDrawer2}
            size="xs"
            blockScrollOnMount={false}
        >
            <DrawerOverlay bg="rgba(0, 0, 0, 0.0)" />
            <DrawerContent
                bg="black"
                textColor="white">
                <DrawerCloseButton color="white" />
                <DrawerHeader></DrawerHeader>
                <DrawerBody>
                    <div
                        className={`w-[220px] m-auto mt-8 ${isLinksInDrawer2Visible && 'overflow-y-scroll'}`}
                        style={{
                            height: "420px",
                            scrollbarWidth: "none",
                            msOverflowStyle: "none"
                        }}>
                        <div
                            className=''
                            style={{ display: "block" }}>
                            <Link
                                to="/"
                                className='text-[25px]'>
                                <p className='mt-2'>HOME</p>
                            </Link>
                            <Link
                                to="/"
                                className='text-[25px]'>
                                <p className='mt-2'>SHOP</p>
                            </Link>
                            <Link
                                to="/"
                                className='text-[25px]'>
                                <p className='mt-2'>ABOUT US</p>
                            </Link>

                            <Link
                                to="/"
                                className='text-[25px] flex items-center gap-2'
                                onClick={() => setIsLinksInDrawer2Visible(!isLinksInDrawer2Visible)}>
                                <p className='mt-2'>OTHERS</p>
                                <div className={`right-arrow-logo-container ${!isLinksInDrawer2Visible && 'rotateThisBro'}`}>
                                    <box-icon
                                        type='solid'
                                        name='right-arrow'
                                        color='#ffffff'
                                        size='xs'>
                                    </box-icon>
                                </div>
                            </Link>

                            <div className={`ml-2 links-container ${isLinksInDrawer2Visible ? 'visible' : ''}`} >
                                {
                                    links.map((link) => {
                                        const { id, linkName, linkUrl } = link;
                                        return (
                                            <div key={id} className='mt-1'>
                                                <Link to={linkUrl}>{linkName}</Link>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <h1
                        className='text-center text-[28px] font-bold'
                        style={{ marginTop: "5em" }}>TrendyMart</h1>
                    <p className='text-center mt-1'>© 2024 TrendyMart Corporation</p>
                </DrawerBody>
            </DrawerContent>
        </Drawer >

        {/*  Drawer 3 */}
        <Drawer
            isOpen={isOpen3}
            placement='right'
            onClose={() => {
                onClose3();
                setSearchValue();
            }}
            finalFocusRef={btnForDrawer2}
            size="xs"
            blockScrollOnMount={false}
        >
            <DrawerOverlay bg="rgba(0, 0, 0, 0.0)" />
            <DrawerContent
                bg="black"
                textColor="white">
                <DrawerCloseButton color="white" />
                <DrawerHeader></DrawerHeader>
                <DrawerBody>
                    <div className={`w-[220px] m-auto mt-8 ${isLinksInDrawer2Visible && 'overflow-y-scroll'}`}
                        style={{
                            height: "420px",
                            scrollbarWidth: "none",
                            msOverflowStyle: "none"
                        }}>
                        <div
                            className=''
                            style={{ display: "block" }}>
                            <Link
                                to="/"
                                className='text-[25px]'>
                                <p className='mt-2'>HOME</p>
                            </Link>
                            <Link
                                to="/"
                                className='text-[25px]'>
                                <p className='mt-2'>SHOP</p>
                            </Link>
                            <Link
                                to="/"
                                className='text-[25px]'>
                                <p className='mt-2'>ABOUT US</p>
                            </Link>

                            <Link to="/"
                                className='text-[25px] flex items-center gap-2'
                                onClick={() => setIsLinksInDrawer2Visible(!isLinksInDrawer2Visible)}>
                                <p className='mt-2'>OTHERS</p>
                                <div className={`right-arrow-logo-container ${!isLinksInDrawer2Visible && 'rotateThisBro'}`}>
                                    <box-icon
                                        type='solid'
                                        name='right-arrow'
                                        color='#ffffff'
                                        size='xs'></box-icon>
                                </div>
                            </Link>

                            <div className={` ml-2 links-container ${isLinksInDrawer2Visible ? 'visible' : ''}`}>
                                {
                                    links.map((link) => {
                                        const { id, linkName, linkUrl } = link;
                                        return (
                                            <div key={id} className='mt-1'>
                                                <Link to={linkUrl}>{linkName}</Link>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <div className='ml-7 mt-16'>

                        <p>Not logged in yet? <Link to="/"><span className='hover:text-gray-400'>Login Here</span></Link></p>

                        <div className='search-nav-bod mt-4'>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <InputGroup>
                                    <Input
                                        placeholder="Search for a product"
                                        value={searchValue}
                                        onChange={(e) => setSearchValue(e.target.value)}
                                    />
                                </InputGroup>
                                <Button
                                    type='submit'
                                    colorScheme='gray'
                                    width='full'
                                    className='mt-2 mb-8'>
                                    Search
                                </Button>
                            </form>
                        </div>
                        <Link to='/'>
                            <div className='border-2 border-gray-600 text-center mt-2 p-1 hover:border-gray-300'>
                                <p className='mt-[4px] font-bold'>View Cart</p>
                            </div>
                        </Link>

                        <Link to="/">
                            <div className='border-2 text-center mt-2 p-1 bg-gray-800 hover:bg-gray-700 border-0'>
                                <p className='mt-[4px] font-bold'>Checkouts</p>
                            </div>
                        </Link>

                        <Link to="/">
                            <div className='border-2 text-center mt-2 p-1 bg-red-800 hover:bg-red-600 border-0'>
                                <p className='mt-[4px] font-bold'>Favorites</p>
                            </div>
                        </Link>

                    </div>
                </DrawerBody>
            </DrawerContent>
        </Drawer >

    </>
}

export default NavBar;









