import React from 'react'
import "../../Components/styles/Hero.css"

export default function BlogHero() {
    return (
        <>
            <section className='hero flex justify-center items-center'>
                <div className="overlay"></div>
                <div className='content text-center px-4'>
                    <div className="inline-flex items-center gap-2 border border-[#53331D] bg-[#25160B] rounded-full px-5 py-2">
                        <i className="fa-solid fa-circle text-[#FF6900] text-[8px]"></i>
                        <i className="fa-solid fa-newspaper text-[#FF6900] text-[8px] text-xl"></i>

                        <span className="text-white">
                            مدونتنا
                        </span>
                    </div>
                    <h2 className='font-bold text-white text-7xl mt-4'>
                        استكشف <span className='text-orange-500'>مقالاتنا</span>
                    </h2>
                    <p className="text-gray-400 mt-5 text-xl mb-12">
                        اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
                    </p>


                </div>
            </section>
        </>
    )
}
