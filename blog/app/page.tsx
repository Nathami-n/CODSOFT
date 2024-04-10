import { Welcome, MainBlogs, RestBlogs } from "./_components"


const Home = () => {
  return (
    <div className ="dark:bg-black dark:text-white">

      <div 
      style={{
        gridTemplateColumns: "2fr 1fr"
      }}
      className="min-h-screen max-w-5xl mx-auto gap-4  grid ">
        <MainBlogs/>
        <RestBlogs/>

      </div>

    </div>
  )
}

export default Home