import UserProfileForm from "@/forms/user-profile-forms/UserProfileForm"
import { useGetUser, useUpdateUser } from "@/api/userApi";
 

const UserProfilePage = () => {
  const {updateUser, isLoading: isUpdateLoading} = useUpdateUser();
  const {currentUser, isLoading:isGetLoading } = useGetUser();

  if(isGetLoading){
    return <div>Loading...</div>
  }

  if(!currentUser){
    return <div>User not found</div>
  }
  return (
    <UserProfileForm currentUser={currentUser} onSave={updateUser} isLoading = {isUpdateLoading}/>
  )
}

export default UserProfilePage