 import Logo from './Logo'
 import Theme from './Theme'
 import NavLinks from './NavLinks'
 const Navbar  = () => {
  return (
    <div
    className="w-full  dark:bg-red-500 p-5 border-b shadow-md flex items-center justify-between "
     >
        <Logo/>
        <NavLinks/>
        <Theme/>
    </div>
  )
}

export default Navbar 