import React from 'react'
import Image from 'next/image'

function Page2() {
  return (
    <div>


        <div className='py-[140px] px-[220px] top-[921px] text-[#ffffff] flex items-center pb-0'>

            <div className='w-[672px] h-[411px]'>
                <div className='w-[656px] h-[238px]'>
                    <h2 className='font-bold text-[72px] text-[#212529] leading-[77.45px] tracking-[-0.02em] mb-6'>Project Management</h2>
                    <p className='font-normal text-lg leading-[30px text-[#212529] tracking-[-0.02em]'>Images, videos, PDFs and audio files are supported. Create math expressions and<br/> diagrams directly from the app. Take photos with the mobile app and save them<br/> to a note.</p>
                    <button className='bg-[#4F9CF9] w-[219px] h-[63px] rounded-lg p-5 mt-[60px] hover:bg-blue-700'>Get Started -&gt;</button>              
                </div>
            </div>

            <div className='w-[748px] h-[520px] bg-[#C4DEFD]'> </div>

        </div>

        {/* circle image part */}
        <div className='pt-0 py-[140px] px-[220px] top-[921px] text-[#ffffff] flex flex-row-reverse justify-center items-center gap-[100px] pb-0'>

            <div className='w-[672px] h-[411px]'>
                <div className='w-[656px] h-[238px]'>
                    <h2 className='font-bold text-[72px] text-[#212529] leadind-[77.45px] tracking-[-0.02em] mb-6'>Work Together</h2>

                    <p className='font-normal text-lg text-[#212529] leadind-[30px] tracking-[-0.02em]'>
                    With whitepace, share your notes with your colleagues and collaborate on them.<br/>
                    You can also publish a note to the internet and share the URL with others.
                    </p>

                    <button className='bg-[#4F9CF9] w-[219px] h-[63px] rounded-lg p-5 mt-[60px] hover:bg-blue-700'>Try it now -&gt;</button>

                </div>

            </div>

            <div className='w-[710px] h-[661px] mt-[100px]'>
                <Image src="/circle.jpg" alt="Image" width={710} height={661}/>
            </div>

        </div>


    </div>
  )
}

export default Page2