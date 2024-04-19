import './CoverImage.css';

const CoverImage = () => {
    return <>
        <div className='relative'>
            <div className="coverimage-container-1"></div>
            <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-center md:text-[2.5em] text-[3em] tracking-wider'>FAQ</p>
        </div>
    </>
}

export default CoverImage;