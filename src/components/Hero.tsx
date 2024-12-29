import hero from "../assets/hero.png"

const Hero = () => {
  return (
    <div className="relative">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img 
            src={hero} 
            className="w-full max-h-[600px] object-cover"
            alt="Delicious food selection" 
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="text-center text-white">
                <h1 className="text-5xl font-bold mb-4">
                    Delicious Food Delivered
                </h1>
                <p className="text-xl mb-8">
                    Order your favorite meals from the best restaurants
                </p>
               
            </div>
        </div>
    </div>
  )
}

export default Hero