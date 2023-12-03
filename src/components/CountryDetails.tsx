import { useCountryDetails } from "../services/apiService";
import { useNavigate } from 'react-router-dom';


interface CountryDetailsProps {
    country: string
}

const CountryDetails: React.FC<CountryDetailsProps> = ({ country }) => {
    // const { data, loading, error } = useCountryDetails(country)
    const loading = false
    const error = null
    const data = {
        "countryName": "Ukraine",
        "continent": "Europe",
        "officialLanguages": "Ukrainian",
        "capital": "Kiev",
        "government": "Unitary semi-presidential constitutional republic",
        "borderLength": "4 663 km / 2 897 miles",
        "population": "44 033 874",
        "surfaceAreaSqMi": "233 013",
        "surfaceAreaKm2": "603 500",
        "populationDensitySqMi": "189",
        "populationDensityKm2": "73",
        "neighborsList": [
            "Belarus",
            "Hungary",
            "Moldova",
            "Poland",
            "Romania",
            "Russia",
            "Slovakia"
        ]
    }


    const navigate = useNavigate();


    if (error) {
        navigate('/error');
        return null;
    }

    if (loading) return <div className="min-h-screen text-center">Loading...</div>
    return (
        <div id="details" className="bg-slate-100 border-0.5 border-slate-200 px-3 py-5 rounded-lg shadow-lg">
            <h2 className="px-5 font-bold text-xl mb-4">Country details</h2>
            <div className="grid gap-3 grid-cols-2 md:grid-cols-3">
                <div className="col-start-1 row-start-1 bg-slate-300 p-4 rounded-xl border-0.5 border-slate-400">
                    <h3 className="uppercase font-bold text-sm tracking-tight break-keep">Capital</h3>
                    <span className="text-lg align-top leading-6 ">{data.capital}</span>
                </div>
                <div className="col-start-2 row-start-1 bg-slate-300 p-4 rounded-xl border-0.5 border-slate-400">
                    <h3 className="uppercase font-bold text-sm tracking-tight break-keep">Languages</h3>
                    <span className="text-lg align-top leading-6 ">{data.officialLanguages.replaceAll(", ", "\n")}</span>
                </div>
                <div className="col-start-1 row-start-2 bg-slate-300 p-4 rounded-xl border-0.5 border-slate-400">
                    <h3 className="uppercase font-bold text-sm tracking-tight break-keep">Government</h3>
                    <span className="text-lg align-top leading-6 ">{data.government}</span>
                </div>
                <div className="col-start-2 row-start-2 bg-slate-300 p-4 rounded-xl border-0.5 border-slate-400">
                    <h3 className="uppercase font-bold text-sm tracking-tight break-keep">Population</h3>
                    <span className="text-lg align-top leading-6 ">{data.population}</span>
                </div>
                <div className="col-start-1 row-start-3 col-span-2 md:col-span-1 md:row-span-2 md:col-start-3 bg-slate-300 p-4 rounded-xl border-0.5 border-slate-400">5</div>
                <div className="col-start-1 row-start-4 col-span-2 md:col-span-3 bg-slate-300 p-4 rounded-xl border-0.5 border-slate-400">5</div>
            </div>
        </div>
    );
}

export default CountryDetails;