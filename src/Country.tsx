import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';

import CountryDetails from "./components/CountryDetails";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import { useCountryInfo } from "./services/apiService"

import Preloader from "./components/Preloader";

interface CountryProps {
    country: string
}

const Country: React.FC<CountryProps> = ({ country }) => {
    const { data, loading, error } = useCountryInfo(country)


    const [isInfoFolded, setInfoFolded] = useState(true)
    const navigate = useNavigate();

    useEffect(() => {
        if (error) navigate('/error');
    }, [error, navigate]);


    if (loading) return <Preloader />
    else if (data) return (
        <div className="min-h-screen bg-slate-900 pb-16 font-light">

            <header
                className="z-10 h-[65vh] md:h-[65vh] w-full flex flex-col justify-center items-center bg-center bg-no-repeat bg-fixed bg-cover"
                style={{
                    backgroundImage: `url('${data.image_url}')`,
                }}
            >
               <Navbar country={country}/>


                <div className="text-center p-10"> { }
                    <h1 className="capitalize text-slate-100 text-5xl font-bold"
                        style={{
                            textShadow: `2px 2px 1px #a19494`
                        }}>
                        {country.toLowerCase()}
                    </h1>
                </div>
            </header>



            <main className="z-30 w-full -mt-16 px-4 md:px-12 lg:px-20 xl:px-32 2xl:px-48">
                <div className="container mx-auto flex flex-grow flex-col gap-8 text-slate-800">
                    <div className="bg-slate-100 border-0.5 border-slate-200 px-8 py-5 md:px-12 md:py-8 rounded-lg shadow-lg">
                        <h2 className="font-bold text-xl mb-2">About</h2>
                        {isInfoFolded && data.info.length > 200
                            ? (
                                <>
                                    <p>{data.info.slice(0, 200) + "... "}
                                        <span onClick={() => setInfoFolded(false)} className="text-blue-600 cursor-pointer hover:underline">More</span>
                                    </p>
                                </>

                            )
                            : <p>{data.info}</p>
                        }

                    </div>

                    <div className="bg-slate-100 border-0.5 border-slate-200 px-3 py-5 rounded-lg shadow-lg">

                        <Gallery images={data.country_images.slice(1)} heading="Photos"
                            showThumbnails={true}
                            preventScroll={false} />
                    </div>
                    <CountryDetails  country={country} />

                </div>
            </main>


        </div>


    );
    else return <div>Error</div>
}

export default Country;