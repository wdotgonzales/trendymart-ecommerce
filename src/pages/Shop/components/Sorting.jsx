const Sorting = ({ setSortingValue }) => {
    return <>
        <div className='flex justify-end'>
            <div className='border-2 border-grey-500 my-4'>
                <select onChange={(e) => setSortingValue(e.target.value)} id="underline_select" className="block px-3 py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                    <option value="defaultSorting">Default Sorting</option>
                    <option value="sortPopularity">Sort by Popularity</option>
                    <option value="sortAverageRating">Sort by Average Rating</option>
                    <option value="sortPriceLowToHigh">Sort by Price: Low to High</option>
                    <option value="sortPriceHighToLow">Sort by Price: High to Low</option>
                </select>
            </div>
        </div>
    </>
}

export default Sorting;