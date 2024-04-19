import contentInformation from "./ContentInformation";
const Content = () => {
    console.log(contentInformation)
    return <>
        <div>
            {
                contentInformation.map((singleContent) => {
                    const { id, title, text, num } = singleContent;
                    return <>
                        <div id={id} className="mb-8">
                            <p className="font-bold text-[1.1em] tracking-wider">{num}. {title}</p>
                            <p className="mt-1 text-[#979797] text-[1.1em]">{text}</p>
                        </div>
                    </>
                })
            }
        </div>
    </>
}

export default Content;