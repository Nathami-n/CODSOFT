import Logo from './Logo'
import NavLinks from './NavLinks'
import UserMenu from './UserMenu'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
const Navbar =  async () => {
  const {getUser} = getKindeServerSession();
  const user = await getUser();

  return (
    <div
      className="w-full p-5 border-b dark:border-border flex items-center justify-between "
    >
      <Logo />
      <NavLinks />
      <UserMenu user={user}/>
    </div>
  )
}

export default Navbar 