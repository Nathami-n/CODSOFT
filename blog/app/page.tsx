import {  MainBlogs, RestBlogs } from "./_components"



const Home = () => {
  return (
    <div className ="dark:bg-background dark:text-muted-foreground ">

      <div 
      
      className="min-h-screen  max-lg:px-3 mt-6 max-w-5xl mx-auto lg:gap-4  lg:grid lg:grid-cols-3 grid gap-6">
        <MainBlogs/>
        <RestBlogs/>
      </div>

    </div>
  )
}

export default Home