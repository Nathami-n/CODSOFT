import Theme from "../common/Theme"
import SearchModal from '../common/SearchModal'
import type { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types"
import DropDown from "../common/DropDown"


const UserMenu = ({
  user
}:{
  user:KindeUser | null
}) => {
  return (
    <div>
        <div className="flex items-center gap-4 flex-1">
        <SearchModal/>
        <Theme user={user}/>
        <DropDown/>
        </div>
    </div>
  )
}

export default UserMenu