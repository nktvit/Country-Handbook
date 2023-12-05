import { useCountryDetails } from "../services/apiService";
import { memo } from "react"
import { useNavigate } from 'react-router-dom';


interface CountryDetailsProps {
    country: string
}

const CountryDetails: React.FC<CountryDetailsProps> = memo(({ country }) => {
    const { data, loading, error } = useCountryDetails(country)

    const navigate = useNavigate();

    if (error) {
        navigate('/error');
        return null;
    }

    if (loading) return <span className="text-slate-100 text-center">Loading...</span>
    else if (data) return (
        <div id="details" className="bg-slate-100 border-0.5 border-slate-200 px-3 py-3 rounded-lg shadow-lg">
            <h2 className="px-5 mt-5 font-bold text-xl mb-4">Country details</h2>
            <div className="grid gap-3 grid-cols-2 md:grid-cols-3 md:grid-rows-3">
                <div className="col-start-1 row-start-1 bg-slate-300 p-4 rounded-xl border-0.5 border-slate-400 transition-colors hover:border-blue-600">
                    <h3 className="uppercase font-bold text-sm tracking-tight break-keep">Capital</h3>
                    <span className="text-lg align-top leading-6 ">{data.capital}</span>
                </div>
                <div className="col-start-2 row-start-1 bg-slate-300 p-4 rounded-xl border-0.5 border-slate-400 transition-colors hover:border-blue-600">
                    <h3 className="uppercase font-bold text-sm tracking-tight break-keep">Languages</h3>
                    {data.officialLanguages.split(", ").map(language => (
                        <><span className="text-lg align-top leading-6 ">{language}</span><br /></>
                    ))}
                </div>
                <div className="col-start-1 row-start-2 bg-slate-300 p-4 rounded-xl border-0.5 border-slate-400 transition-colors hover:border-blue-600">
                    <h3 className="uppercase font-bold text-sm tracking-tight break-keep">Government</h3>
                    <span className="text-lg align-top leading-6 ">{data.government}</span>
                </div>
                <div className="col-start-2 row-start-2 bg-slate-300 p-4 rounded-xl border-0.5 border-slate-400 transition-colors hover:border-blue-600">
                    <h3 className="uppercase font-bold text-sm tracking-tight break-keep">Population</h3>
                    <span className="text-lg align-top leading-6 ">{data.population}</span>
                    <h3 className="uppercase font-bold text-sm tracking-tight break-keep mt-2">Density</h3>
                    <span className="align-top">{data.populationDensityKm2} people per km<sup>2</sup></span><br/>
                    <span className="align-top">{data.populationDensitySqMi} people per mi<sup>2</sup></span>



                </div>
                <div className="col-start-1 row-start-3 col-span-2 md:col-span-1 md:row-span-3 md:col-start-3 bg-slate-300 py-4 rounded-xl border-0.5 border-slate-400 transition-colors hover:border-blue-600 grid grid-cols-1 grid-rows-none divide-y-0.5 divide-slate-400">
                    <h3 className="uppercase ml-4 font-bold text-sm tracking-tight break-keep flex mb-2">Neighbors</h3>
                    {data.neighborsList.length === 0 ? <span className="text-xl text-center font-md px-6">The country does not have direct neighbours</span> : null}
                    {data.neighborsList.map(neighbor => {                        
                        return <a key={String(neighbor)} className="py-0.5 px-4 cursor-pointer transition-colors hover:bg-slate-400" href={'/' + neighbor}>{String(neighbor)}</a>
                    })}
                </div>
                <div className="col-start-1 row-start-4 col-span-2 md:col-span-2 md:row-start-3 bg-slate-300 p-4 rounded-xl border-0.5 border-slate-400 transition-colors hover:border-blue-600">
                    <h3 className="uppercase ml-4 font-bold text-sm tracking-tight break-keep flex flex-col">Surface Area</h3>
                    <span className="text-lg align-top leading-6 ">{data.surfaceAreaKm2} km / {data.surfaceAreaSqMi} miles</span>
                    <h3 className="uppercase ml-4 font-bold text-sm tracking-tight break-keep flex flex-col mt-2">Border Length</h3>
                    <span className="text-lg align-top leading-6 ">{data.borderLength}</span>
                </div>
            </div>
        </div>
    );
    else return <div>Error</div>

})
export default CountryDetails;