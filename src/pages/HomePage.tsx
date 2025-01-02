import landingImage from "../assets/landing.png"
import appDownloadImage from "../assets/appDownload.png"
import SearchBar, { SearchForm } from "@/components/SearchBar"
import { useNavigate } from "react-router-dom"

const HomePage = () => {
    const navigate = useNavigate();
    const handleSearchSubmit = (searchFormValues: SearchForm) => {
        navigate({
            pathname:`/search/${searchFormValues.searchQuery}`
        })
    }
  return (
    <div className='flex flex-col gap-12'>
        <div className="md: px-32 bg-white rounded-lg shadow-md py-8 flex-col gap-5 text-center -mt-16 ">
            <h1 className="text-5xl font-bold tracking-tight text-orange-600">
                Add in the cart and takeaway!
            </h1>
            <SearchBar placeHolder="Search by city or town" onSubmit={handleSearchSubmit} onReset={function (): void {
                  throw new Error("Function not implemented.")
              } }/>
        </div>
         {/* content on landing page */}
        <div className="grid md:grid-cols-2 gap-5">
            <img src={landingImage} />
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <span className="font-bold text-3xl tracking-tighter">
                    Quick delivery to your Home! 
                </span>
                <span>
                    Download the app for recommendations and amazing deals!
                </span>
                <img src={appDownloadImage} />
            </div>
        </div>
    </div>
  )
}

export default HomePage