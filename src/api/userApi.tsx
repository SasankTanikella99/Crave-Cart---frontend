import { User } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query"
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

type CreateUserRequest = {
    auth0Id: string,
    email: string,
    name?: string,
    addressLine1?: string,
    city?: string,
}

export const useCreateUser = () => {

    const {getAccessTokenSilently} = useAuth0();

    const createnewUser = async (user: CreateUserRequest): Promise<any> => {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(`${API_BASE_URL}/api/my/user`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })

        if (!response.ok) {
            throw new Error('Failed to create user')
        }
    }

    const {mutateAsync: createUser, isLoading, isError, isSuccess} = useMutation(createnewUser)

    return {
        createUser,
        isLoading,
        isError,
        isSuccess,
    }
}

type UpdateUserRequest = {
    name: string;
    addressLine1?: string;
    city?: string;
    country?: string;
}

export const useUpdateUser = () => {
    const {getAccessTokenSilently} = useAuth0();
    
    const updateUserRequest = async (formData: UpdateUserRequest) => {
        const accessToken = await getAccessTokenSilently()
        const response = await fetch(`${API_BASE_URL}/api/my/user`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })

        if (!response.ok) {
            throw new Error('Failed to update user')
        }
        return response.json()
    } 

    const {mutateAsync: updateUser, isLoading, isError, isSuccess, error, reset} = useMutation(updateUserRequest)

    if(isSuccess){
        toast.success("User updated successfully")
    }
    if(isError){
        toast.error(`Failed to update user, ${error}.toString()`)
        reset()
    }

    return {
        updateUser,
        isLoading,
        // isError,
        // isSuccess,
        // error,
        // reset,
       
    }  
}

export const useGetUser = () => {
    const {getAccessTokenSilently} = useAuth0();

    const getUserRequest = async (): Promise<User> => {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(`${API_BASE_URL}/api/my/user`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        })

        if (!response.ok) {
            throw new Error('Failed to get user')
        }
        return response.json()
    }

    const {data: currentUser, isLoading, error} = useQuery("fetchCurrentUser", getUserRequest)

    if(error) {
        toast.error(`Failed to get user, ${error.toString()}`);
        
    }

    return {
        currentUser,
        isLoading,
        // error,
    }
    
}

const userApi = () => {
    return (
        <div>userApi</div>
    )
}

export default userApi