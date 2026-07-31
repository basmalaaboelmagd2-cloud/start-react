import React from 'react'
import "../../Components/styles/Hero.css"

export default function HeroSection() {
    return (
        <>
            <section className='hero py-20 flex justify-center'>
                  <div className="overlay"></div>
                <div className="content text-center px-4">
                    <div className="inline-flex items-center gap-2 border border-[#53331D] bg-[#25160B] rounded-full px-5 py-2">
                        <i className="fa-solid fa-circle text-[#FF6900] text-[8px]"></i>
                        <span className="text-white">
                            مرحباً بك في عدسة
                        </span>
                    </div>
                    <h1 className='text-white text-7xl font-extrabold pt-4 pb-5'>اكتشف <span className='text-orange'>فن</span>
                        <br /> التصوير الفوتوغرافي</h1>
                    <h2 className='text-gray-400 text-xl font-bold pt-4'>انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في <br /> التصوير.</h2>
                    <div className="flex items-center justify-center gap-6 mt-10">
                        <button className="bg-orange-500 hover:bg-[#e85f00] text-white font-bold text-lg px-9 py-3 rounded-full flex items-center gap-3 transition duration-300">  استكشف المقالات <i className="fa-solid fa-arrow-left "></i>
                        </button>
                        <button className="bg-transparent border border-[#3A3028] hover:border-[#FF6900] hover:bg-[#25160B] hover:text-[#FF6900] text-white font-bold text-lg px-9 py-3 rounded-full flex items-center gap-3 transition duration-300"> <i className="fa-solid fa-circle-info text-xl"></i> اعرف المزيد
                        </button>
                    </div>
                     <div className="grid grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
                            <div className="bg-[#181818] border border-[#262626] rounded-xl w-30 h-30 flex flex-col items-center justify-center hover:scale-105 transition-all duration-300">
                                <i className="fa-solid fa-newspaper text-orange-500 text-3xl mb-2 "></i>
                                <h2 className="text-xl font-bold text-orange-500 font-extrabold">50+</h2>
                                <p className="text-[#737373] mt-2">مقالة</p>
                            </div>
                            <div className="bg-[#181818] border border-[#262626] rounded-xl w-30 h-30 flex flex-col items-center justify-center hover:scale-105 transition-all duration-300">
                                <i className="fa-solid fa-users text-orange-500 text-3xl mb-2"></i>
                                <h2 className="text-[#FF6900] text-xl text-orange-500 font-extrabold ">10+ ألف</h2>
                                <p className="text-[#737373] mt-2">قارئ</p>
                            </div>
                            <div className="bg-[#181818] border border-[#262626] rounded-xl w-30 h-30 flex flex-col items-center justify-center hover:scale-105 transition-all duration-300">
                                <i className="fa-solid fa-folder text-orange-500 text-3xl mb-2"></i>
                                <h2 className="text-[#FF6900] text-xl text-orange-500 font-extrabold">4</h2>
                                <p className="text-[#737373] mt-2">تصنيفات</p>
                            </div>
                            <div className="bg-[#181818] border border-[#262626] rounded-xl w-30 h-30 flex flex-col items-center justify-center hover:scale-105 transition-all duration-300">
                                <i className="fa-solid fa-pen-nib text-orange-500 text-3xl mb-2"></i>
                                <h2 className="text-[#FF6900] text-xl text-orange-500 font-extrabold ">6</h2>
                                <p className="text-[#737373]  mt-2">كاتب</p>
                            </div>
                        </div>
                </div>
            </section >
        </>
    )
}
