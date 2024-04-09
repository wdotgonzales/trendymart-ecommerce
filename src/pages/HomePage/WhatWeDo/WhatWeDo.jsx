import content from './content.js';
const WhatWeDo = () => {
    console.log(content)
    return <>
        <article className="max-w-[1250px] mx-auto pb-[7em]">
            <div className="mx-5 mb-[5em]">
                <p className="text-center font-bold tracking-wider text-[31px] mt-[5em] mb-[1.2em]">WHAT CAN WE DO FOR YOU?</p>
                <p className="text-center text-[22px] text-[#979797]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mx-5'>
                {
                    content.map((item) => {
                        const { id, imgSrc, title, text } = item;
                        return <>
                            <div key={id}>
                                <img src={imgSrc} alt="" />
                                <p className='my-2 font-bold text-[18px] tracking-wider'>{title}</p>
                                <p>{text}</p>
                            </div>
                        </>
                    })
                }
            </div>
        </article>
    </>
}

export default WhatWeDo;