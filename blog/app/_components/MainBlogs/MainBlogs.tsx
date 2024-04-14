import Welcome from "../Welcome/Welcome"
import Blogs from './Blogs'


const MainBlogs = () => {
  return (
    <div className="h-screen mt-3 lg:col-span-2">
      <Welcome/>
      <Blogs/>
    </div>
  )
}

export default MainBlogs