import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import testimonialsData from './testimonialsData.js';

const ResponsiveSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 5000, // Slide every 5 seconds (5000 milliseconds)
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return <>
        <div className="my-[7em]">
            <p className="text-center font-bold tracking-wider text-[2em]">HAPPY CUSTOMER</p>
            <p className="text-center text-[1.3em] text-[#979797]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci.</p>

            <div className="slider-container mt-16">
                <Slider {...settings}>
                    {
                        testimonialsData.map((singleTestimony) => {
                            const { id, name, position, imageSrc } = singleTestimony;
                            return <>
                                <div key={id}>
                                    <div className=" p-8">
                                        <div className="text-center">
                                            <box-icon name='quote-alt-right' type='solid' size='md'></box-icon>
                                        </div>
                                        <p className="text-center text-[#979797] py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut leo, eget euismod orci.
                                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus ultricies aliquam convallis maecenas.
                                        </p>
                                        <div className="text-center">
                                            <img src={imageSrc} alt="" className="m-auto" />
                                            <p className="font-bold tracking-wider mt-5">{name}</p>
                                            <p className="font-bold text-[0.8em] text-[#979797]">{position}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        })
                    }

                </Slider>
            </div>
        </div>
    </>
}

export default ResponsiveSlider;