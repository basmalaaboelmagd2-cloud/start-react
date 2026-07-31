import React, { use, useState } from "react";
import Blog from './Blog';
import { Link } from "react-router-dom";
import { NavLink, useSearchParams } from "react-router-dom";

export default function BlogNavbar() {
    const [searchParams, setSearchParams] = useSearchParams();
    const category = searchParams.get("category")
    return (
        <section className="bg-black border-y border-[#2B2B2B] py-2">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between">
                    <div className="relative w-[300px]">
                        <input
                            type="text"
                            placeholder="ابحث في المقالات..."
                            value={searchParams.get("search") || ""}
                            onChange={(e) => {
                                const params = new URLSearchParams(searchParams);

                                if (e.target.value) {
                                    params.set("search", e.target.value);
                                } else {
                                    params.delete("search");
                                }

                                setSearchParams(params);
                            }}
                            className="w-full bg-[#161616] border border-[#2B2B2B] rounded-xl py-2 pl-14 pr-5 text-white text-right outline-none focus:border-orange-500"
                        />                    <i className="fa-solid fa-magnifying-glass absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"></i>
                    </div>

                    <div className="flex gap-3">
                        <NavLink
                            to="/blog?category=all"
                            className={`px-4 py-2 rounded-2xl transition-all ${category === "all"
                                ? "bg-orange-500 text-white"
                                : "bg-[#161616] border border-[#2B2B2B] text-gray-400"
                                }`} >   جميع المقالات</NavLink>


                        <NavLink
                            to="/blog?category=إضاءة"
                            className={`px-4 py-2 rounded-2xl transition-all duration-300 ${category === "إضاءة"
                                ? "bg-orange-500 text-white"
                                : "bg-[#161616] border border-[#2B2B2B] text-gray-400 hover:text-white"
                                }`}
                        >
                            إضاءة
                        </NavLink>



                        <NavLink
                            to="/blog?category=بورتريه"
                            className={`px-4 py-2 rounded-2xl transition-all duration-300 ${category === "بورتريه"
                                ? "bg-orange-500 text-white"
                                : "bg-[#161616] border border-[#2B2B2B] text-gray-400 hover:text-white"
                                }`}
                        >
                            بورتريه
                        </NavLink>


                        <NavLink
                            to="/blog?category=مناظر طبيعية"
                            className={`px-4 py-2 rounded-2xl transition-all duration-300 ${category === "مناظر طبيعية"
                                ? "bg-orange-500 text-white"
                                : "bg-[#161616] border border-[#2B2B2B] text-gray-400 hover:text-white"
                                }`}
                        >
                            مناظر طبيعية
                        </NavLink>


                        <NavLink
                            to="/blog?category=تقنيات"
                            className={`px-4 py-2 rounded-2xl transition-all duration-300 ${category === "تقنيات"
                                ? "bg-orange-500 text-white"
                                : "bg-[#161616] border border-[#2B2B2B] text-gray-400 hover:text-white"
                                }`}
                        >
                            تقنيات
                        </NavLink>


                        <NavLink
                            to="/blog?category=معدات"
                            className={`px-4 py-2 rounded-2xl transition-all duration-300 ${category === "معدات"
                                ? "bg-orange-500 text-white"
                                : "bg-[#161616] border border-[#2B2B2B] text-gray-400 hover:text-white"
                                }`}
                        >
                            معدات
                        </NavLink>
                    </div>
                </div>





            </div>
        </section>
    );
}