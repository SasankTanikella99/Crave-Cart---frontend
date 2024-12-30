import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";
import { Restaurant } from "@/types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const useCreateRestaurant = () => {
    const { getAccessTokenSilently } = useAuth0();

    const createRestaurantRequest = async (restaurantData: FormData): Promise<Restaurant> => {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                // 'Content-Type': 'application/json',
            },
            body: restaurantData,
        })

        if (!response.ok) {
            throw new Error('Failed to create restaurant')
        }
        return response.json()
    }

    const { mutate: createRestaurant, isLoading, isError, isSuccess} = useMutation(createRestaurantRequest)
    if(isSuccess){
        toast.success("Restaurant created successfully")
    }
    if(isError){
        toast.error(`Failed to create restaurant`);
    }
    return {
        createRestaurant,
        isLoading,
        // isError,
        // isSuccess,
    }
}

export const useGetRestaurant = () => {
    const { getAccessTokenSilently } = useAuth0();

    const getRestaurantRequest = async (): Promise<Restaurant> => {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })

        if (!response.ok) {
            throw new Error("Failed to fetch the restaurant")
        }
        return response.json()
    }

    const { data: restaurant, isLoading } = useQuery('currentRestaurant', getRestaurantRequest)
    return {
        restaurant,
        isLoading,
        
    }
}

export const useUpdateRestaurant = () => {
    const { getAccessTokenSilently } = useAuth0();
  
    const updateRestaurantRequest = async (
      restaurantFormData: FormData
    ): Promise<Restaurant> => {
      const accessToken = await getAccessTokenSilently();
  
      const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: restaurantFormData,
      });
  
      if (!response) {
        throw new Error("Failed to update restaurant");
      }
  
      return response.json();
    };
  
    const {
      mutate: updateRestaurant,
      isLoading,
      error,
      isSuccess,
    } = useMutation(updateRestaurantRequest);
  
    if (isSuccess) {
      toast.success("Restaurant Updated");
    }
  
    if (error) {
      toast.error("Unable to update restaurant");
    }
  
    return { updateRestaurant, isLoading };
  };
