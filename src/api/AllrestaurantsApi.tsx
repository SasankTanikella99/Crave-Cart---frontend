import { SearchState } from "@/pages/SearchBarPage"
import { RestaurantSearchResponse } from "@/types"
import { useQuery } from "react-query"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const useSearchRestaurants = (searchState: SearchState, city?: string) => {
    const createSearchRequest = async (): Promise<RestaurantSearchResponse> => {
        const params = new URLSearchParams();
        params.set("serachQuery", searchState.searchQuery)
        params.set("page", searchState.page.toString())
        const response = await fetch(`${API_BASE_URL}/api/restaurants/search/${city}?${params.toString()}`)
        if (!response.ok) {
            throw new Error('Failed to search for restaurants')
        }
        return response.json()
    }

    const { data: results, isLoading } = useQuery(['searchRestaurants', searchState], createSearchRequest, {enabled: !!city})
    return { results, isLoading }
}