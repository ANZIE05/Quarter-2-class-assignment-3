import React from 'react'
import Image from 'next/image'

function SponsorPage() {
  return (
    <div>

      <div className=' px-[220px] py-[140px]'>
        <div className='w-[1482px] h-[80px] flex justify-center'>
          <h2 className='text-[72px] font-bold'>Our sponsors</h2>
        </div>

        <div>
          <Image src="/sponsors1.png" alt="Sponsor Names" width={1482} height={71} className='mt-[100px]'/>
        </div>

      </div>


    </div>
  )
}

export default SponsorPage