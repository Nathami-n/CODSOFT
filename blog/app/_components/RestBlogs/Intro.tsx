import Link from 'next/link'
import Image from 'next/image'

const Intro =  () => {
    return (
        <><div
            className="p-8 flex flex-col justify-center mt-[13px] bg-[#EAE9E8] text-[#022140] border-b  "
        >
            <h1 className="font-bold  text-xl md:text-3xl flex-1">
                Nate<span className='text-blue-400'>Log.</span>

            </h1>

            <p className="font-semibold mt-1">Explore our carefully and critically curated hub for blogs and articles. Have a great time with content designed to inform and entertain on the global scale!</p>
            <div className="flex mt-1 gap-4 items-center">
                <Link href="/">
                    <Image
                        alt="social image"
                        src="https://assets-global.website-files.com/6564b53cf6c761cadcd23766/65658eda50fe4c108386e832_twitter.png" width={25} height={25} />
                </Link>
                <Link href="/">
                    <Image
                        alt="social image"
                        src="https://assets-global.website-files.com/6564b53cf6c761cadcd23766/65658edab4a890812e36b2d7_linkedin.png" width={25} height={25} />
                </Link>

            </div>

        </div>
        <div className="w-full border-t-2 h-1 mt-8" />
        </>
    )

}


export default Intro