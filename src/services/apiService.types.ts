interface CountryDetailsResponse {
  countryName: string;
  continent: string;
  officialLanguages: string;
  capital: string
  government: string
  borderLength: string
  population: string
  surfaceAreaSqMi: string
  surfaceAreaKm2: string
  populationDensitySqMi: string
  populationDensityKm2: string
  neighborsList: Neighbor[]
}
interface Neighbor {
  countryName: string
}
interface CountryActivitiesResponse {
  data: {
    activities: Activity[];
  }
}

interface Activity {
  title: string;
  activity: string;
}

interface CountryInfoResponse {
  data: {
    info: string;
    image_url: string;
    country_images: CountryImage[];
  }

}

interface CountryImage {
  imageUrl: string;
  title: string;
}

export type {
  CountryDetailsResponse,
  CountryActivitiesResponse,
  CountryInfoResponse
}