import Theme from "../common/Theme"
import SearchModal from '../common/SearchModal'


const UserMenu = () => {
  return (
    <div>
        <div className="flex items-center gap-4 flex-1">
        <SearchModal/>
        <Theme/>
        </div>
    </div>
  )
}

export default UserMenu