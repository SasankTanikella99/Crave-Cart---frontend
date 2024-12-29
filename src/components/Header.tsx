import { Link } from 'react-router-dom'
import MobileNav from './MobileNav'
import MainNav from './MainNav'

const Header = () => {
  return (
    <header className='sticky top-0 z-50 bg-white border-b-2 border-b-emerald-600 py-4 shadow-md'>
        <div className='container mx-auto flex justify-between items-center px-4'>
            <Link to="/" className='text-3xl font-bold tracking-tight text-emerald-600 hover:text-emerald-700 transition-colors'>
                Crave Cart
            </Link>
            <div className='md:hidden'>
                <MobileNav />
            </div>
            <div className='hidden md:block'>
                <MainNav />
            </div>
        </div>
    </header>
  )
}
export default Header