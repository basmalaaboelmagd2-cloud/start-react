import React from 'react'

export default function CategoriesSection() {
  return (
    <>
      <section className='bg-black py-20 flex justify-center'>
        <div className='text-center px-4'>
          <hr className="border-t border-[#2B2B2B] my-20" />
          <div className="inline-flex items-center gap-2 border border-[#53331D] bg-[#25160B] rounded-full px-5 py-2">
            <i className="fa-solid fa-circle text-[#FF6900] text-[8px]"></i>
            <span className="text-white">
              التصنيفات
            </span>
          </div>
          <h2 className='font-bold text-white text-7xl mt-4'>
            استكشف حسب الموضوع
          </h2>
          <p className="text-gray-400 mt-5 text-xl mb-12">
            اعثر على محتوى مصمم حسب اهتماماتك
          </p>

          <div className='grid grid-cols-4 gap-6 mt-10'>

            <div className="group relative  w-64 h-40 p-5 bg-[#161616] rounded-xl border border-[#2B2B2B]  hover:-translate-y-2 transition-all duration-300 hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-400 hover:border-orange-400">
              <div className="absolute top-1/2 left-2 w-6 h-6 rounded-full bg-white/20  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <i className="fa-solid fa-angle-left text-white"></i>
              </div>
              <div className="w-9 h-9 p-5 rounded-xl bg-[#2A1A10] border border-[#53331D] flex items-center justify-center group-hover:border-transparent group-hover:bg-white/20 transition-all duration-500">
                <i className="fa-solid fa-sun text-orange-400 group-hover:text-white "></i>
              </div>
              <div className='text-right mt-4'>
                <h3 className="text-white text-xl font-bold">
                  إضاءة
                </h3>
                <p className="text-gray-400 group-hover:text-white ">
                  3 مقالة
                </p>
              </div>
            </div>

            <div className="group relative  w-64 h-40 p-5 bg-[#161616] rounded-xl border border-[#2B2B2B]  hover:-translate-y-2 transition-all duration-300 hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-400 hover:border-orange-400">
              <div className="absolute top-1/2 left-2 w-6 h-6 rounded-full bg-white/20  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <i className="fa-solid fa-angle-left text-white"></i>
              </div>
              <div className="w-9 h-9 p-5 rounded-xl bg-[#2A1A10] border border-[#53331D] flex items-center justify-center group-hover:border-transparent group-hover:bg-white/20 transition-all duration-500">
                <i className="fa-solid fa-user text-orange-400 group-hover:text-white "></i>
              </div>
              <div className='text-right mt-4'>
                <h3 className="text-white text-xl font-bold">
                  بورتريه
                </h3>
                <p className="text-gray-400 group-hover:text-white ">
                  3 مقالة
                </p>
              </div>
            </div>

            <div className="group relative  w-64 h-40 p-5 bg-[#161616] rounded-xl border border-[#2B2B2B]  hover:-translate-y-2 transition-all duration-300 hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-400 hover:border-orange-400">
              <div className="absolute top-1/2 left-2 w-6 h-6 rounded-full bg-white/20  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <i className="fa-solid fa-angle-left text-white"></i>
              </div>
              <div className="w-9 h-9 p-5 rounded-xl bg-[#2A1A10] border border-[#53331D] flex items-center justify-center group-hover:border-transparent group-hover:bg-white/20 transition-all duration-500">
                <i className="fa-solid fa-mountain-sun text-orange-400 group-hover:text-white "></i>
              </div>
              <div className='text-right mt-4'>
                <h3 className="text-white text-xl font-bold">
                  مناظر طبيعية
                </h3>
                <p className="text-gray-400 group-hover:text-white ">
                  2 مقالة
                </p>
              </div>
            </div>

            <div className="group relative  w-64 h-40 p-5 bg-[#161616] rounded-xl border border-[#2B2B2B]  hover:-translate-y-2 transition-all duration-300 hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-400 hover:border-orange-400">
              <div className="absolute top-1/2 left-2 w-6 h-6 rounded-full bg-white/20  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <i className="fa-solid fa-angle-left text-white"></i>
              </div>
              <div className="w-9 h-9 p-5 rounded-xl bg-[#2A1A10] border border-[#53331D] flex items-center justify-center group-hover:border-transparent group-hover:bg-white/20 transition-all duration-500">
                <i className="fa-solid fa-sliders text-orange-400 group-hover:text-white "></i>
              </div>
              <div className='text-right mt-4'>
                <h3 className="text-white text-xl font-bold">
                  تقنيات
                </h3>
                <p className="text-gray-400 group-hover:text-white ">
                  5 مقالة
                </p>
              </div>
            </div>

            <div className="group relative  w-64 h-40 p-5 bg-[#161616] rounded-xl border border-[#2B2B2B]  hover:-translate-y-2 transition-all duration-300 hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-400 hover:border-orange-400">
              <div className="absolute top-1/2 left-2 w-6 h-6 rounded-full bg-white/20  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <i className="fa-solid fa-angle-left text-white"></i>
              </div>
              <div className="w-9 h-9 p-5 rounded-xl bg-[#2A1A10] border border-[#53331D] flex items-center justify-center group-hover:border-transparent group-hover:bg-white/20 transition-all duration-500">
                <i className="fa-solid fa-sun text-orange-400 group-hover:text-white "></i>
              </div>
              <div className='text-right mt-4'>
                <h3 className="text-white text-xl font-bold">
                  معدات
                </h3>
                <p className="text-gray-400 group-hover:text-white ">
                  3 مقالة
                </p>
              </div>
            </div>

          </div>







        </div>
      </section></>
  )
}

