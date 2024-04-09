 import Logo from './Logo'
 import NavLinks from './NavLinks'
 const Navbar  = () => {
  return (
    <div
    className="w-full p-5 border-b shadow-md flex items-center justify-between "
     >
        <Logo/>
        <NavLinks/>
    </div>
  )
}

export default Navbar 