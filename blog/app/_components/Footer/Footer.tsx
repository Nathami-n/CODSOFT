import { Facebook, FacebookIcon, Linkedin, TwitterIcon, XIcon } from 'lucide-react'
import Link from 'next/link'
const Footer = () => {
   return (
    <div className="bg-[#022140] text-white p-8">
        <div className="max-w-[1500px] mx-auto">

            <div 
            className="lg:grid flex items-center flex-wrap lg:gap-6 lg:grid-cols-4 mb-6"
            >
                <div className="lg:col-span-2 max-lg:mb-5 max-lg:border-b max-lg:pb-2">
                    <h1 className="text-3xl font-bold mb-2">Nate<span className="text-blue-600">Log.</span></h1>
                    <p>Get informed on diverse and relevant up-to-date stories written with a team of well informed scribes in the digital era. Connect with passionate developers today</p>
                </div>

                <div>
                    <h1 className="font-bold mb-3">Menu</h1>
                    <div className="font-bold flex flex-col gap-3">
                        <Link href='/'>Home</Link>
                        <Link href='/'>About us</Link>
                        <Link href='/'>Contact</Link>
                    </div>
                </div>
                {/* follow */}
                <div className='max-lg:ml-[60px]'>
                    <h1 className="font-bold mb-3">Follow us</h1>
                    <div className='flex flex-col gap-3'>
                        <Link href='/'><FacebookIcon className='text-blue-900 text-xl border rounded-full p-1 bg-white'/></Link>
                        <Link target='_blank'  href='https://x.com/NathanGeor69202?t=lWxt5wDH-HjvbCE9S2AEQg&s=08 '><TwitterIcon className='text-blue-900 text-xl border rounded-full p-1 bg-white'/></Link>
                        <Link  target="_blank" href='https://www.linkedin.com/in/nathan-george-mi'><Linkedin className='text-blue-900 text-xl border rounded-full p-1 bg-white'/></Link>
                    </div>
                </div>
            </div>
            <div className="border-t p-7">
                <h1 className='font-bold mb-8'>NateLog@2024. All rights reserved</h1>

                <div className="font-bold">Developed by Nathan <span className='text-blue-900'>George</span></div>
            </div>

        </div>
    </div>
   )
}

export default Footer