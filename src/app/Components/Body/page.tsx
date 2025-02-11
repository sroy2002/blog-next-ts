"use client";
import React, { useEffect, useState } from "react";

type BlogPost = {
  title: string;
  description: string;
  url: string;
  user: { name: string };
  published_at: string;
};

function Body() {
  const [data, setData] = useState<BlogPost[] | null>(null);
  const [currentPage,setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`https://dev.to/api/articles?page=${currentPage}&per_page=8`);
        if (!res.ok) throw new Error("Network response was not ok");
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPosts();
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10 w-full">
      <div className="w-full max-w-6xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Latest Blog Posts
        </h1>
        {data ? (
          <div className="grid grid-cols-4 gap-6">
            {data.map((post, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all"
              >
                <h2 className="text-xl font-semibold text-gray-900">{post.title}</h2>
                <p className="text-gray-600 mt-2 line-clamp-2">{post.description}</p>
                <p className="text-gray-500 text-sm mt-2">By {post.user.name}</p>
                <a
                  href={post.url}
                  target="_blank"
                  className="inline-block mt-4 text-blue-600 hover:underline font-medium"
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">Loading...</p>
        )}
      </div>
      <div className="my-8">
        <button onClick={()=>{
          if(currentPage==1)return;
          else {
           setCurrentPage(currentPage-1);
           
          }
        }}>Prev</button>
        {currentPage}
        <button onClick={()=>{
         
           setCurrentPage(currentPage+1);
          
        }}>next</button>
      </div>
    </div>
  );
}

export default Body;
