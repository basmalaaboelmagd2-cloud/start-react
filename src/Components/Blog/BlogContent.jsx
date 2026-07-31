
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";



export default function BlogContent() {

    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const postsPerPage = 6;

    useEffect(() => {
        axios
            .get("/Data/Posts.json")
            .then((response) => {
                setPosts(response.data.posts);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const [searchParams] = useSearchParams();

    const category = searchParams.get("category");
    const search = searchParams.get("search") || "";


    let filteredPosts = posts;

    // Filter
    if (category && category !== "all") {
        filteredPosts = filteredPosts.filter(
            (post) => post.category === category
        );
    }

    // Search
    if (search) {
        filteredPosts = filteredPosts.filter((post) => {
            return (
                post.title.toLowerCase().includes(search.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
                post.category.toLowerCase().includes(search.toLowerCase()) ||
                post.tags.some((tag) =>
                    tag.toLowerCase().includes(search.toLowerCase())
                )
            );
        });
    }

    // Pagination
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    const startIndex = (currentPage - 1) * postsPerPage;

    const currentPosts = filteredPosts.slice(
        startIndex,
        startIndex + postsPerPage
    );

    return (

        <section className="bg-black py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className=" max-w-7xl mx-auto px-4 flex items-center justify-between mt-8 ">
                    <h3 className="text-gray-400"> عرض <span className="text-white">{filteredPosts.length}</span> مقالات</h3>
                    <div className="flex bg-[#161616] border border-[#2B2B2B] rounded-xl overflow-hidden">
                        <button className="bg-orange-500 px-2 py-2 text-white"> <i className="fa-solid fa-grip"></i> </button>
                        <button className="px-2 py-2 text-gray-400"> <i className="fa-solid fa-bars"></i> </button>
                    </div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 mt-6">
                    {currentPosts.map((post) => (
                        <div key={post.id}
                            className="group bg-[#161616] border border-[#2B2B2B] rounded-3xl overflow-hidden transition-all duration-500 hover:border-orange-400 hover:-translate-y-2">

                            <div className="relative overflow-hidden">
                                <img src={post.image} alt={post.title} className="w-full h-50 object-cover transition-transform duration-500 group-hover:scale-105" />
                                <span className="absolute top-5 right-5 bg-black/90 text-white px-5 py-2 rounded-full text-sm font-semibold">
                                    {post.category} </span>
                            </div>

                            <div className="p-4">
                                <div className="flex items-center justify-start gap-3 text-gray-500 text-sm mb-6">
                                    <i className="fa-regular fa-clock"></i>
                                    <span>{post.readTime}</span>
                                    <span>•</span>
                                    <span>{post.date}</span>
                                </div>
                                <h2 className="text-white text-2xl font-bold leading-tight group-hover:text-orange-400 transition-colors duration-300">
                                    {post.title}
                                </h2>
                                <p className="text-gray-400  leading-7 mt-3">
                                    {post.excerpt}
                                </p>
                                <hr className="border-[#2B2B2B] my-3" />
                                <div className="flex items-center justify-between">

                                    <div className="flex items-center gap-3">
                                        <img
                                            src={post.author.avatar}
                                            alt={post.author.name}
                                            className="w-10 h-10 rounded-full object-cover"
                                        />
                                        <div className="text-right">
                                            <h4 className="text-white font-bold">
                                                {post.author.name}
                                            </h4>
                                            <p className="text-gray-500">
                                                {post.author.role}
                                            </p>
                                        </div>
                                    </div>
                                    <Link
                                        to={`/blog/${post.slug}`} className="w-9 h-9 rounded-full border border-[#5A341B] text-orange-400 flex items-center justify-center transition-all duration-300 hover:bg-orange-500 hover:text-white">
                                        <i className="fa-solid fa-angle-left"></i>
                                    </Link>
                                </div>

                            </div>

                        </div>
                    ))}

                </div>

                <div className="flex justify-center items-center gap-1 mt-12">

                    <button
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="w-9 h-9 rounded-xl bg-[#161616] border border-[#2B2B2B] text-white disabled:opacity-40"
                    >
                        <i className="fa-solid fa-angle-right"></i>
                    </button>

                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`w-9 h-9 rounded-xl transition-all duration-300
            ${currentPage === index + 1
                                    ? "bg-orange-500 text-white"
                                    : "bg-[#161616] border border-[#2B2B2B] text-gray-300 hover:border-orange-500"
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="w-9 h-9 rounded-xl bg-[#161616] border border-[#2B2B2B] text-white disabled:opacity-40"
                    >
                        <i className="fa-solid fa-angle-left"></i>
                    </button>

                </div>

                <p className="text-center text-gray-400 mt-5">
                    صفحة {currentPage} من {totalPages}
                </p>


            </div>
        </section>
    );
}





