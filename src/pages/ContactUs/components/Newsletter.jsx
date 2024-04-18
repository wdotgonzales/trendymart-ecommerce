const Newsletter = () => {
    return <>
        <hr className="mt-[6em] mx-[3em]" />
        <div className="py-[5em] max-w-[70%] m-auto">
            <p className="font-bold text-center tracking-wider mb-3">SUBSCRIBE TO NEWSLETTER</p>
            <p className="text-[#979797] text-center text-[1.8em]">Your brand's power lies in dominance. It is better to have 50% of one market, instead of 10% of five markets.</p>

            <div className="sm:flex mt-14 max-w-[750px] m-auto">
                <input placeholder="Email Address" type="email" id="default-input" className="py-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                <div className="mt-2 sm:mt-0 text-white bg-black px-12 py-5 text-center font-bold text-[0.8em]">
                    <button>SUBSCRIBE</button>
                </div>
            </div>
        </div>
    </>
}

export default Newsletter;