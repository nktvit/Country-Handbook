import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import CountryDetails from "./components/CountryDetails";
import InputBox from "./components/InputBox"
import { useCountryInfo } from "./services/apiService"

interface CountryProps {
    country: string
}

const Country: React.FC<CountryProps> = ({ country }) => {
    // const { data, loading, error } = useCountryInfo(country)
    const error = null
    const loading = false
    const data = {
        "info": "Vast and mysterious to many, Ukraine is barely known to outsiders despite being one of the largest countries in Europe. Long-associated with its colossal neighbour Russia, it's a country that stands out in its own right for its varied landscapes and surprising cultural diversity.To the majority of those visiting for the first time, the reputation of Ukraine's hardy inhabitants can seem formidable. But while, much like in neighbouring Russia, cracking a smile at a stranger in the street is deemed a sure sign of madness, locals tend to be a thoroughly welcoming lot once you've broken the ice. Before long they'll be showing you round the sights and inviting you to their home for a steaming borscht – the country's iconic beetroot soup. ",
        "image_url": "https://www.worldtravelguide.net/wp-content/uploads/2017/03/shu-Ukraine-Kiev-MonumentIndependence_1088907020-1440x823-EDITORIAL.jpg",
        "country_images": [
            {
                "imageUrl": "https://www.worldtravelguide.net/wp-content/themes/wtg/images/main-banner1.jpg",
                "title": ""
            },
            {
                "imageUrl": "https://worldtravelguide.net/sites/default/files/new-images/753x320/saint-sofia-cathedral-kie-9053.jpg",
                "title": "Saint Sofia Cathedral, Kiev"
            },
            {
                "imageUrl": "https://worldtravelguide.net/sites/default/files/new-images/753x320/st-michaels-church-kiev-9056.jpg",
                "title": "St Michael's Church, Kiev"
            },
            {
                "imageUrl": "https://worldtravelguide.net/sites/default/files/new-images/753x320/beach-life-crimea-9059.jpg",
                "title": "Beach life, Crimea"
            },
            {
                "imageUrl": "https://worldtravelguide.net/sites/default/files/new-images/753x320/swallows-nest-castle-yalt-9062.jpg",
                "title": "Swallow's Nest Castle, Yalta"
            },
            {
                "imageUrl": "https://worldtravelguide.net/sites/default/files/new-images/753x320/ukraines-carpathian-mount-9065.jpg",
                "title": "Ukraine's Carpathian Mountains"
            },
            {
                "imageUrl": "https://worldtravelguide.net/sites/default/files/new-images/753x320/beautiful-remote-monaster-9068.jpg",
                "title": "Beautiful remote monastery, Ukraine"
            },
            {
                "imageUrl": "https://worldtravelguide.net/sites/default/files/new-images/753x320/mountain-climbing-in-ukra-9071.jpg",
                "title": "Mountain climbing in Ukraine's Carpathian Mountains"
            },
            {
                "imageUrl": "https://worldtravelguide.net/sites/default/files/new-images/753x320/ukraines-lively-and-histo-9074.jpg",
                "title": "Ukraine's lively and historic capital Kiev"
            }
        ]
    }

    const [isInfoFolded, setInfoFolded] = useState(true)
    const navigate = useNavigate();

    if (error) {
        navigate('/error');
        return null;
    }

    if (loading) return <div className="min-h-screen text-center">Loading...</div>
    else if (data) return (
        <main className="min-h-screen bg-slate-900 font-light">

            <div
                className="fixed w-full flex justify-center items-center  bg-center bg-no-repeat bg-cover"
                style={{
                    backgroundImage: `url('${data.image_url}')`,
                    height: '50vh'
                }}
            >
                <div className="text-center p-10"> { }
                    <h1 className="capitalize text-slate-100 text-5xl font-bold"
                        style={{
                            textShadow: `2px 2px 1px #a19494`
                        }}>
                        {country}
                    </h1>
                </div>
            </div>



            <div className="absolute left-0 top-0 w-full md:px-12 flex flex-grow flex-col gap-64">
                <InputBox value={country} />
                <div className="container mx-auto flex flex-grow flex-col gap-8 px-4 text-slate-800">
                    <div className="bg-slate-100 border-0.5 border-slate-200 px-8 py-5 rounded-lg shadow-lg">
                        <h2 className="font-bold text-xl mb-2">About</h2>
                        {isInfoFolded && data.info.length > 150
                            ? (
                                <>
                                    <p>{data.info.slice(0, 150) + "... "}
                                        <span onClick={() => setInfoFolded(false)} className="text-blue-600 cursor-pointer hover:underline">More</span>
                                    </p>
                                </>

                            )
                            : <p>{data.info}</p>
                        }

                    </div>
                    <CountryDetails country={country}/>
                    
                </div>
            </div>


        </main>


    );
    else return <div>Error</div>
}

export default Country;