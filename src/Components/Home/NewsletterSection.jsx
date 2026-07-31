import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function NewsletterSection() {

  const [posts, setPosts] = useState([]);

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

  const latestPosts = posts.filter((post) =>
    [4, 5, 6].includes(post.id)
  );

  return (
    <>
      <section className="bg-black py-20">
        <div className="text-right ">
          <hr className="border-t border-[#2B2B2B] my-20" />
          <div className="inline-block p-1 ms-16 text-orange-400 border border-[#53331D] rounded-full bg-[#25160B]">
            <span className="flex items-center gap-2 text-center">
              <i className="fa-solid fa-circle text-orange-400 mr-3 text-[8px]"></i>
              الاحداث
            </span>
          </div>
          <h1 className="font-bold text-white text-5xl ms-16 mt-10">
            أحدث المقالات
          </h1>
        </div>
        <div className="flex  items-center justify-between ">
          <p className="text-gray-400 mt-7 ms-16 text-xl mb-12">
            محتوى جديد طازج من المطبعة          </p>
          <Link to={"/blog"} className="text-orange-400 me-16 p-2 text-left  font-bold  "> عرض الكل{" "}
            <i className="fa-solid fa-arrow-left text-orange-400 text-[15px]"></i>
          </Link>
        </div>






        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">

          {latestPosts.map((post) => (
            <div key={post.id}
              className="group bg-[#161616] border border-[#2B2B2B] rounded-3xl overflow-hidden transition-all duration-500 hover:border-orange-400 hover:-translate-y-2">

              <div className="relative overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-50 object-cover transition-transform duration-500 group-hover:scale-105"/>
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







      </section >
    </>
  )
}
