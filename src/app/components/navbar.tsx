import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function NavbarPage() {
  return (
    <div>
        <div className='w-screen h-[92px] py-4 px-[220px] bg-[#043873] flex justify-between items-center'>

            <div className='w-[191px] h-[34px]'>
                <Image src="/logo.png" alt="Logo" width={192} height={34}/>
            </div>

            <div className='w-[737.5px] h-[60px] flex justify-between items-center'>
                <div className='w-[549px] h-[23px]'>
                    <ul className='flex flex-row justify-between text-[#ffffff]'>
                        <li className='hover:text-yellow-400'><Link href="">Products</Link></li>
                        <li className='hover:text-yellow-400'><Link href="">Solutions</Link></li>
                        <li className='hover:text-yellow-400'><Link href="">Resources</Link></li>
                        <li className='hover:text-yellow-400'><Link href="">Pricing</Link></li>
                    </ul>
                </div>

                    <div className='w-[126px] h-[60px]'>
                        <button className='px-10 py-4 rounded-lg bg-[#FFE492] hover:bg-yellow-400 ml-[60px]'>Login</button>
                    </div>

            </div>
        </div>

    </div>
  )
}
export default NavbarPage;
