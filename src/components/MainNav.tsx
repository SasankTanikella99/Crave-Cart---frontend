import { useAuth0 } from "@auth0/auth0-react"
import { Button } from "./ui/button"
import UsernameMenu from "./UsernameMenu"


const MainNav = () => {
    const {loginWithRedirect, isAuthenticated} = useAuth0()
  return (
    <span className="flex space-x-2 items-centered">
        {isAuthenticated ? (<UsernameMenu />) : (
            <nav className="flex items-center gap-6">
        
            <Button variant="ghost" className="font-bold hover:text-emerald-600 hover:bg-emerald-50" onClick={async () => await loginWithRedirect()}>
                Log In
            </Button>
            <Button className="font-bold bg-emerald-600 hover:bg-emerald-700" onClick={async () => await loginWithRedirect()}>
                Sign Up
            </Button>
        </nav>
        )}
    </span>
    
  )
}
export default MainNav