import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import data from "./data";

const OurTeam = () => {
    return <>
        <NavBar />
        <p className="text-center mt-[2em] font-bold text-[2.5em] tracking-wider mx-10">MEET OUR TEAM EXPERTS</p>
        <p className="text-center mt-[1em] text-[1.3em] text-[#979797] mx-10 mb-[4.5em]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci.
        </p>
        <div className="max-w-[1500px] mt-10 mb-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[3em] gap-y-[7em] pb-[8em]">
            {
                data.map((singleData) => {
                    const { id, imgSrc, name, position, description } = singleData;
                    return <>
                        <div key={id} className="text-center">
                            <img src={imgSrc} alt="" className="max-w-[200px] m-auto rounded-full" />
                            <p className="font-bold tracking-wider text-[1.2em] mt-5">{name}</p>
                            <p className="my-5 font-bold text-[#979797]">{position}</p>
                            <p className="text-[#979797] mb-5 mx-10">
                                {description}
                            </p>
                            <div className="flex justify-between item-center w-[120px] m-auto">
                                <div>
                                    <box-icon type='logo' name='skype' size='sm'></box-icon>
                                </div>
                                <div>
                                    <box-icon name='linkedin' type='logo' size='sm'></box-icon>
                                </div>
                                <div>
                                    <box-icon name='facebook' type='logo' size='sm'></box-icon>
                                </div>
                            </div>
                        </div>
                    </>
                })
            }
        </div>
        <Footer />
    </>
}

export default OurTeam;