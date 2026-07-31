import React from 'react'
import { Link } from 'react-router-dom'

export default function TipsSection() {
  return (
    <>
      <section className="bg-black py-20 flex justify-center">
        <div className="bg-[#161616] border border-[#2B2B2B] rounded-3xl w-[60%] w-4xl py-9 px-8 text-center">
          <div className="w-18 h-18 rounded-2xl bg-orange-500 mx-auto flex items-center justify-center">
            <i className="fa-regular fa-envelope text-white text-3xl"></i>
          </div>

          <h2 className="text-5xl font-bold text-white mt-10">
            اشترك في <span className="text-orange-400">نشرتنا الإخبارية</span>
          </h2>

          <p className="text-gray-400 text-xl mt-5">
            احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
          </p>

          <div className="flex flex-row-reverse justify-center items-center gap-4 mt-12">
            <Link to='/' className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-4 rounded-2xl"> اشترك الآن</Link>
            <input
              type="email" placeholder="أدخل بريدك الإلكتروني" className="w-[400px] bg-[#0F0F0F] border border-[#2B2B2B] rounded-2xl py-4 px-5 text-right text-white placeholder:text-gray-500 focus:outline-none focus:border-orange-500" />
          </div>

          <div className="flex justify-center gap-3 text-gray-500 mt-5 pl-20">
            <p> انضم ل <span className='text-white'>10,000+</span>مصور</p>
            <span>بدون إزعاج</span>
            <span>إلغاء الاشتراك في أي وقت</span>
            
          </div>

        </div>
      </section>
    </>
  )
}
