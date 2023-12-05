import useFetch from "../hooks/useFetch";
import { CountryActivitiesResponse, CountryDetailsResponse, CountryInfoResponse } from "./apiService.types"

const url = process.env.REACT_APP_PUBLIC_URL

export const useCountryDetails = (countryName: string) => {
    const endpoint = `${url}/country-details?country=${countryName}`;
    return useFetch<CountryDetailsResponse>(endpoint);
};

export const useCountryActivities = (countryName: string) => {
    const endpoint = `${url}/country-activities?country=${countryName}`;
    const { data, loading, error } = useFetch<CountryActivitiesResponse>(endpoint);

    return {
        data: data ? data.data : null, 
        loading, 
        error
    };
};

export const useCountryInfo = (countryName: string) => {
    const endpoint = `${url}/country?country=${countryName}`;
    const { data, loading, error } = useFetch<CountryInfoResponse>(endpoint);

    return {
        data: data ? data.data : null, 
        loading, 
        error
    };
};
