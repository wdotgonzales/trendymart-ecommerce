const MiddleContent = () => {
    return <>
        <div className="mx-4">
            <div className="flex flex-col gap-y-[2em] items-center sm:grid sm:gap-y-[2em] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-[3em]">
                <div className="flex gap-[1.5em] items-start">
                    <div className="border-2 border-gray-400 rounded-full px-[0.4em] mt-1">
                        <div className="mt-1"><box-icon name='check' size='md' color='gray'></box-icon></div>
                    </div>
                    <div>
                        <p className="font-bold">BERLIN STORE</p>
                        <div className="mt-2">
                            <p className="text-gray-400">6 Pl. de l'Hôtel de Ville, 75004 Paris, France</p>
                            <p className="text-gray-400">Monday to Friday: 9am to 8pm</p>
                            <p className="text-gray-400">wdotgonzales@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className="flex gap-[1.5em] items-start">
                    <div className="border-2 border-gray-400 rounded-full px-[0.4em] mt-1">
                        <div className="mt-1"><box-icon name='check' size='md' color='gray'></box-icon></div>
                    </div>
                    <div>
                        <p className="font-bold">PARIS STORE</p>
                        <div className="mt-2">
                            <p className="text-gray-400">6 Pl. de l'Hôtel de Ville, 75004 Paris, France</p>
                            <p className="text-gray-400">Monday to Friday: 9am to 8pm</p>
                            <p className="text-gray-400">wdotgonzales@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className="flex gap-[1.5em] items-start">
                    <div className="border-2 border-gray-400 rounded-full px-[0.4em] mt-1">
                        <div className="mt-1"><box-icon name='check' size='md' color='gray'></box-icon></div>
                    </div>
                    <div>
                        <p className="font-bold">MADRID STORE</p>
                        <div className="mt-2">
                            <p className="text-gray-400">6 Pl. de l'Hôtel de Ville, 75004 Paris, France</p>
                            <p className="text-gray-400">Monday to Friday: 9am to 8pm</p>
                            <p className="text-gray-400">wdotgonzales@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    </>
}

export default MiddleContent;