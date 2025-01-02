import {Navigate, Route, Routes}  from "react-router-dom"
import Layout from "./layouts/layout"
import HomePage from "./pages/HomePage"
import AuthCallBackPage from "./pages/AuthCallBackPage"
import UserProfilePage from "./pages/UserProfilePage"
import ProtectedRoute from "./auth/ProtectedRoute"
import ManageRestaurantPage from "./pages/ManageRestaurantPage"
import SearchBarPage from "./pages/SearchBarPage"

//  we're only going to have one group of routes which is going to contain all of the routes for our app so anytime we add a new route it's going to go in here 

const AppRoutes = () => {
  return (
    <Routes> 
        <Route path="/auth-callback" element={<AuthCallBackPage />} />
        <Route path="/search/:city" element={<Layout showHero={false}> <SearchBarPage /></Layout>} />
        <Route path="/" element={<Layout showHero> <HomePage /> </Layout>} />
        <Route element={<ProtectedRoute />}> 
          <Route path="/user-profile" element={<Layout> <UserProfilePage /></Layout>} />
          <Route path="/manage-restaurant" element={<Layout> <ManageRestaurantPage /></Layout>} />
        </Route>
        
        <Route path="*" element={<Navigate to= "/" />} />
    </Routes>
  )
}

export default AppRoutes