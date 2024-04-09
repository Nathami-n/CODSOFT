 import Logo from './Logo'
 import NavLinks from './NavLinks'
import UserMenu from './UserMenu'
 const Navbar  = () => {
  return (
    <div
    className="w-full p-5 border-b flex items-center justify-between "
     >
       <Logo/> 
       <NavLinks/>
       <UserMenu/>
    </div>
  )
}

export default Navbar 