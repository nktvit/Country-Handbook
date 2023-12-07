import { useState, useEffect, memo } from "react"
import { useNavigate } from 'react-router-dom';

import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import { useCountryInfo, useCountryDetails } from "./services/apiService"

import Preloader from "./components/Preloader";

interface CountryProps {
    country: string
}

const Country: React.FC<CountryProps> = ({ country }) => {
    const { data: countryInfo, loading: infoLoading, error: infoError } = useCountryInfo(country);
    const { data: countryDetails, loading: detailsLoading, error: detailsError } = useCountryDetails(country);
    const [isInfoFolded, setInfoFolded] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (infoError || detailsError) navigate('/error');
    }, [infoError, detailsError, navigate]);

    if (infoLoading || detailsLoading) return <Preloader />;

    if (infoError || detailsError) return <div>Error</div>;

    if (!countryInfo || !countryDetails) return null;

    const countryName = countryDetails.countryName || 'Unknown Country';

    const CountryDetails = memo(() => {
        return (
            <div id="details" className="bg-slate-100 border-0.5 border-slate-200 px-3 py-3 rounded-lg shadow-lg">
                <h2 className="px-5 mt-5 font-bold text-xl mb-4">Country details</h2>
                <div className="grid gap-3 grid-cols-2 md:grid-cols-3 md:grid-rows-3">
                    <div className="col-start-1 row-start-1 bg-slate-300 p-4 rounded-xl border-0.5 border-slate-400 transition-colors hover:border-indigo-700">
                        <h3 className="uppercase font-bold text-sm tracking-tight break-keep">Capital</h3>
                        <span className="text-lg align-top leading-6 ">{countryDetails.capital}</span>
                    </div>
                    <div className="col-start-2 row-start-1 bg-slate-300 p-4 rounded-xl border-0.5 border-slate-400 transition-colors hover:border-indigo-700">
                        <h3 className="uppercase font-bold text-sm tracking-tight break-keep">Languages</h3>
                        {countryDetails.officialLanguages.split(", ").map(language => (
                            <><span className="text-lg align-top leading-6 ">{language}</span><br /></>
                        ))}
                    </div>
                    <div className="col-start-1 row-start-2 bg-slate-300 p-4 rounded-xl border-0.5 border-slate-400 transition-colors hover:border-indigo-700">
                        <h3 className="uppercase font-bold text-sm tracking-tight break-keep">Government</h3>
                        <span className="text-lg align-top leading-6 ">{countryDetails.government}</span>
                    </div>
                    <div className="col-start-2 row-start-2 bg-slate-300 p-4 rounded-xl border-0.5 border-slate-400 transition-colors hover:border-indigo-700">
                        <h3 className="uppercase font-bold text-sm tracking-tight break-keep">Population</h3>
                        <span className="text-lg align-top leading-6 ">{countryDetails.population}</span>
                        <h3 className="uppercase font-bold text-sm tracking-tight break-keep mt-2">Density</h3>
                        <span className="align-top">{countryDetails.populationDensityKm2} people per km<sup>2</sup></span><br />
                        <span className="align-top">{countryDetails.populationDensitySqMi} people per mi<sup>2</sup></span>
    
    
    
                    </div>
                    <div className="col-start-1 row-start-3 col-span-2 md:col-span-1 md:row-span-3 md:col-start-3 bg-slate-300 py-4 rounded-xl border-0.5 border-slate-400 transition-colors hover:border-indigo-700 grid grid-cols-1 grid-rows-none divide-y-0.5 divide-slate-400">
                        <h3 className="uppercase ml-4 font-bold text-sm tracking-tight break-keep flex mb-2">Neighbors</h3>
                        {countryDetails.neighborsList.length === 0 ? <span className="text-xl text-center font-md px-6">The country does not have direct neighbours</span> : null}
                        {countryDetails.neighborsList.map(neighbor => {
                            return <a key={String(neighbor)} className="py-0.5 px-4 cursor-pointer transition-colors hover:bg-slate-400" href={'/' + neighbor}>{String(neighbor)}</a>
                        })}
                    </div>
                    <div className="col-start-1 row-start-4 col-span-2 md:col-span-2 md:row-start-3 bg-slate-300 p-4 rounded-xl border-0.5 border-slate-400 transition-colors hover:border-indigo-700">
                        <h3 className="uppercase ml-4 font-bold text-sm tracking-tight break-keep flex flex-col">Surface Area</h3>
                        <span className="text-lg align-top leading-6 ">{countryDetails.surfaceAreaKm2} km / {countryDetails.surfaceAreaSqMi} miles</span>
                        <h3 className="uppercase ml-4 font-bold text-sm tracking-tight break-keep flex flex-col mt-2">Border Length</h3>
                        <span className="text-lg align-top leading-6 ">{countryDetails.borderLength}</span>
                    </div>
                </div>
            </div>
        )
    });

    return (
        <div className="min-h-screen bg-slate-900 pb-16 font-light">

            <header
                className="z-10 h-[65vh] md:h-[65vh] w-full flex flex-col justify-center items-center bg-center bg-no-repeat bg-fixed bg-cover"
                style={{
                    backgroundImage: `url('${countryInfo.image_url}')`,
                }}
            >
                <Navbar country={countryName} />


                <div className="text-center p-10"> { }
                    <h1 className="capitalize text-slate-100 text-5xl font-bold"
                        style={{
                            textShadow: `2px 2px 1px #a19494`
                        }}>
                        {countryName.toLowerCase()}
                    </h1>
                </div>
            </header>



            <main className="z-30 w-full -mt-16 px-4 md:px-12 lg:px-20 xl:px-32 2xl:px-48">
                <div className="container mx-auto flex flex-grow flex-col gap-8 text-slate-800">
                    <div className="bg-slate-100 border-0.5 border-slate-200 px-8 py-5 md:px-12 md:py-8 rounded-lg shadow-lg">
                        <h2 className="font-bold text-xl mb-2">About</h2>
                        {isInfoFolded && countryInfo.info.length > 200
                            ? (
                                <>
                                    <p>{countryInfo.info.slice(0, 200) + "... "}
                                        <span onClick={() => setInfoFolded(false)} className="text-blue-600 cursor-pointer hover:underline">More</span>
                                    </p>
                                </>

                            )
                            : <p>{countryInfo.info}</p>
                        }

                    </div>

                    <div className="bg-slate-100 border-0.5 border-slate-200 px-3 py-5 rounded-lg shadow-lg">

                        <Gallery images={countryInfo.country_images.slice(1)} heading="Photos"
                            showThumbnails={true}
                            preventScroll={false} />
                    </div>
                    <CountryDetails />

                </div>
            </main>


        </div>
    )

}

export default Country;