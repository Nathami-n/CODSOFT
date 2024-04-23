
import Button from "../common/Button"

const Welcome = () => {
    return (
        <div className=" p-3 lg:p-8 border dark:border-border lg:h-[320px] rounded-md">
            <div className=" lg:mt-12">
                <div className="flex flex-col justify-center gap-3">
                    <h1 
                    className="text-3xl dark:text-muted-foreground tracking-tight font-bold"
                    >Stay Informed, Stay relevant
                    </h1>
                    <p className="dark:text-muted-foreground"> Read, Write and Learn on NateLog.</p>
                </div>
               <div>
               
                <Button title="Get Started"/>
               </div>
            </div>
         
        </div>
    )
}

export default Welcome