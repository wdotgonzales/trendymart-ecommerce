import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
} from '@chakra-ui/react';

import { ChakraProvider } from '@chakra-ui/react';

const SliderComponent = ({ sliderValue, setSliderValue }) => {

    function resetSliderValue() {
        setSliderValue(460);
    }

    return <>
        <ChakraProvider>
            <p className='font-bold mb-1 mt-[2.7em]'>PRICE FILTER </p>
            <Slider aria-label='slider-ex-1'
                value={sliderValue}
                min={24} max={460} step={1}
                onChange={(value) => setSliderValue(value)}
            >
                <SliderTrack >
                    <SliderFilledTrack style={{ backgroundColor: "black" }} />
                </SliderTrack>
                <SliderThumb style={{ backgroundColor: "black" }} />
            </Slider>
        </ChakraProvider>
        <div className='flex justify-between'>
            <div className='flex gap-2'>
                <button className={`${sliderValue === 460 && 'hidden'} font-bold text-[0.9em]`} onClick={resetSliderValue}>RESET</button>
            </div>
            <div className='flex gap-2'>
                <p className='text-[0.9em]'>$1</p>
                <p className='text-[0.9em]'>━</p>
                <p className='text-[0.9em]'>${sliderValue}</p>
            </div>
        </div>
    </>
}

export default SliderComponent;