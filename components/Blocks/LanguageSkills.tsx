import React from 'react'
import BlockTitle from '../BlockTitle'

const LanguageSkills = () => {
  return (
    <div className='px-[8%] py-[70px] border-t-[1px] border-[#585d65]'>
        <BlockTitle title='Language Skills' subtitle='Reading and writing' />
        <div className='w-full h-auto grid grid-cols-2 gap-x-10 gap-y-[50px]'>
            <div className='card w-full h-auto'>
                <h2 className='text-[18px] text-[#ffffff] font-bold mb-[30px]'>Russian</h2>
                <p className='text-[14px] text-[#ffffff] font-semibold mb-[30px]'>
                    Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                </p>
                <div className='w-full h-auto relative'>
                    <div className='w-full h-auto absolute top-0 left-0 flex gap-[20px]'>
                        <span className='w-[15px] h-[15px] rounded-full bg-[#585d65] inline-block'></span>
                        <span className='w-[15px] h-[15px] rounded-full bg-[#585d65] inline-block'></span>
                        <span className='w-[15px] h-[15px] rounded-full bg-[#585d65] inline-block'></span>
                        <span className='w-[15px] h-[15px] rounded-full bg-[#585d65] inline-block'></span>
                        <span className='w-[15px] h-[15px] rounded-full bg-[#585d65] inline-block'></span>
                    </div>
                    <div className='w-full h-auto absolute top-0 left-0 flex gap-[20px]'>
                        <span className='w-[15px] h-[15px] rounded-full bg-[#68e0cf] inline-block'></span>
                        <span className='w-[15px] h-[15px] rounded-full bg-[#68e0cf] inline-block'></span>
                        <span className='w-[15px] h-[15px] rounded-full bg-[#68e0cf] inline-block'></span>
                        <span className='w-[15px] h-[15px] rounded-full bg-[#68e0cf] inline-block'></span>
                        <span className='w-[15px] h-[15px] rounded-full bg-[#68e0cf] inline-block'></span>
                    </div>
                </div>
            </div>
            <div className='card w-full h-auto'>
                <h2 className='text-[18px] text-[#ffffff] font-bold mb-[30px]'>Ukrainian</h2>
                <p className='text-[14px] text-[#ffffff] font-semibold mb-[30px]'>
                    Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                </p>
                <div className='w-full h-auto relative'>
                    <div className='w-full h-auto absolute top-0 left-0 flex gap-[20px]'>
                        <span className='w-[15px] h-[15px] rounded-full bg-[#585d65] inline-block'></span>
                        <span className='w-[15px] h-[15px] rounded-full bg-[#585d65] inline-block'></span>
                        <span className='w-[15px] h-[15px] rounded-full bg-[#585d65] inline-block'></span>
                        <span className='w-[15px] h-[15px] rounded-full bg-[#585d65] inline-block'></span>
                        <span className='w-[15px] h-[15px] rounded-full bg-[#585d65] inline-block'></span>
                    </div>
                    <div className='w-full h-auto absolute top-0 left-0 flex gap-[20px]'>
                        <span className='w-[15px] h-[15px] rounded-full bg-[#68e0cf] inline-block'></span>
                        <span className='w-[15px] h-[15px] rounded-full bg-[#68e0cf] inline-block'></span>
                        <span className='w-[15px] h-[15px] rounded-full bg-[#68e0cf] inline-block'></span>
                        <span className='w-[15px] h-[15px] rounded-full bg-[#68e0cf] inline-block'></span>
                        <span className='w-[15px] h-[15px] rounded-full bg-[#68e0cf] inline-block'></span>
                    </div>
                </div>
            </div>
            <div className='card w-full h-auto'>
                <h2 className='text-[18px] text-[#ffffff] font-bold mb-[30px]'>English</h2>
                <p className='text-[14px] text-[#ffffff] font-semibold mb-[30px]'>
                    Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.
                </p>
                <div className='w-full h-auto relative'>
                    <div className='w-full h-auto absolute top-0 left-0 flex gap-[20px]'>
                        <span className='w-[15px] h-[15px] rounded-full bg-[#585d65] inline-block'></span>
                        <span className='w-[15px] h-[15px] rounded-full bg-[#585d65] inline-block'></span>
                        <span className='w-[15px] h-[15px] rounded-full bg-[#585d65] inline-block'></span>
                        <span className='w-[15px] h-[15px] rounded-full bg-[#585d65] inline-block'></span>
                        <span className='w-[15px] h-[15px] rounded-full bg-[#585d65] inline-block'></span>
                    </div>
                    <div className='w-full h-auto absolute top-0 left-0 flex gap-[20px]'>
                        <span className='w-[15px] h-[15px] rounded-full bg-[#68e0cf] inline-block'></span>
                        <span className='w-[15px] h-[15px] rounded-full bg-[#68e0cf] inline-block'></span>
                        <span className='w-[15px] h-[15px] rounded-full bg-[#68e0cf] inline-block'></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LanguageSkills