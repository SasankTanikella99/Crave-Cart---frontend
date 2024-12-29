const Footer = () => {
    return (
      <footer className="bg-red-600 py-10">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 space-y-4 md:space-y-0">
              <div className="flex flex-col items-center md:items-start gap-2">
                  <span className="text-white text-2xl font-bold tracking-tight">
                      Crave Cart
                  </span>
                  <p className="text-red-100 text-sm">
                      Delivering happiness to your doorstep
                  </p>
              </div>
              <div className="flex gap-8">
                  <span className="text-white hover:text-red-200 cursor-pointer transition-colors">
                      Terms of Service
                  </span>
                  <span className="text-white hover:text-red-200 cursor-pointer transition-colors">
                      Privacy Policy
                  </span>
                  <span className="text-white hover:text-red-200 cursor-pointer transition-colors">
                      Contact Us
                  </span>
              </div>
          </div>
      </footer>
    )
  }
  
export default Footer