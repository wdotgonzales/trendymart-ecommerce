const FrequentlyAskedQuestions = () => {
    const criterias = [
        { id: "#CompanyPolicy", text: "Company Policy" },
        { id: "#PaymentOptions", text: "Payment Options" },
        { id: "#Terms&Conditions", text: "Terms & Conditions" },
        { id: "#Positioning", text: "Positioning" },
        { id: "#Efficient", text: "Efficient" },
        { id: "#Marketplace", text: "Marketplace" },
        { id: "#Conditions", text: "Conditions" },
        { id: "#MindProcedure", text: "Mind Procedure" },
        { id: "#DeliveryJob", text: "Delivery Job" },
    ];

    return <>
        <div>
            <p className="font-bold text-[1.3em] tracking-wider">FREQUENTLY ASKED QUESTIONS</p>
            <p className="text-[#979797] mt-3 mb-10">Successful brands get into the mind slowly. A blurb in a magazine. A mention in a newspaper. A comment from a friend. A display in a retail</p>
            <div className="mb-10">
                {
                    criterias.map((criteria) => {
                        const { id, text } = criteria;
                        return <>
                            <div key={id} className="mt-[0.2em]">
                                <a href={id}  className="text-[#979797]">{text}</a>
                            </div>
                        </>
                    })
                }
            </div>

            <div class="relative">
                <input placeholder="Enter your keyword.." type="text" id="default-input" class="block w-full p-2 pr-10 text-black border border-gray-300 bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 " />
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <box-icon name='search' rotate='90' color='grey'></box-icon>
                </div>
            </div>
        </div>
    </>
}

export default FrequentlyAskedQuestions;