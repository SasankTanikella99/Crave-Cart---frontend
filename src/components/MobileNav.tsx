import { CircleUserRound, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import MobileNavLinks from "./MobileNavLinks"

const MobileNav = () => {
    const { isAuthenticated, loginWithRedirect, user } = useAuth0()
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-emerald-600 h-6 w-6" />
            </SheetTrigger>
            <SheetContent className="space-y-4">

                <SheetTitle className="text-2xl text-emerald-600">
                    {isAuthenticated ? (
                        <span className="flex items-center font-bold gap-2">
                            <CircleUserRound className="text-orange-600" />
                            {user?.email}
                        </span>
                    ) : (
                        <span> Welcome to Crave Cart! </span>
                    )}

                </SheetTitle>

                <Separator className="bg-emerald-200" />

                {isAuthenticated ? (
                    <MobileNavLinks />
                ) : (
                    <div className="flex flex-col gap-3">
                        <Button className="font-bold bg-emerald-600 hover:bg-emerald-700" onClick={() => loginWithRedirect()}>
                            Log In
                        </Button>
                        <Button variant="outline" className="font-bold border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                            Sign Up
                        </Button>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav