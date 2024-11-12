import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function FooterPage() {
  return (
    <div>

        <div className='h-[461px] py-[144px] px-[220px] top-[4080px] bg-[#043873]'>
            <div className='flex w-[1500px] h-[200px] text-[#ffffff]'>

            <div className='w-[295px] h-[180px] ml-0'>
                 <Image src="/logo.png" alt="Logo" width={192} height={34}/><br/>
                   <p className='font-sans'>whitepace was created for<br/> the new ways we live and<br/> work. We make a better<br/> workspace around the world</p>
                </div>

            <div className='w-[295px] h-[180px] pl-[100px]'>
                    <h3 className='font-bold'>Product</h3>
                    <ul className='mt-[25px] font-sans leading-5 tracking-[-0.02em] h-[127px]'>
                        <li className='mt-[15px] text-[#FFE492]'><Link href="">Overview</Link></li>
                        <li className='mt-[15px]'><Link href="">Pricing</Link></li>
                        <li className='mt-[15px]'><Link href="">Customer stories</Link></li>
                    </ul>
                </div>

            <div className='w-[295px] h-[180px] pl-[140px]'>
                    <h3 className='font-bold'>Resources</h3>
                    <ul className='mt-[25px] font-sans leading-5 tracking-[-0.02em] h-[127px]'>
                        <li className='mt-[15px]'><Link href="">Blog</Link></li>
                        <li className='mt-[15px]'><Link href="">Guides & tutorials</Link></li>
                        <li className='mt-[15px]'><Link href="">Help center</Link></li>
                    </ul>
                </div>

                <div className='w-[350px] h-[180px] pl-[250px]'>
                    <h3 className='font-bold'>Company</h3>
                    <ul className='mt-[25px]  font-sans leading-5 tracking-[-0.02em] h-[127px]'>
                        <li className='mt-[15px]'><Link href="">About us</Link></li>
                        <li className='mt-[15px]'><Link href="">Careers</Link></li>
                        <li className='mt-[15px]'><Link href="">Media kit</Link></li>
                    </ul>
                </div>

            </div>

            <div className='flex flex-col items-center w-full py-4 mt-[25px]'>
                <hr className='w-3/4 border-t-2 my-4 border-[#2E4E73]'></hr>
                <p className='font-normal text-lg text-[#ffffff]'>©2021 Whitepace LLC.</p>
            </div>

        </div>
    </div>
  )
}

export default FooterPage