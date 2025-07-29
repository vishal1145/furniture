import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import blogData from "../../data/blog.json";
import furnitureData from "../../data/furnitureData.json";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Features from "../../components/Features";
import { Pagination, Stack } from "@mui/material";

const Blog = () => {
  const navigate = useNavigate();
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogData.blogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedBlogs = blogData.blogs.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleBlogClick = (slug) => {
    navigate(`/blogdetails/${slug}`);
  };

  const renderPageNumbers = () => {
    const pages = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }

    return pages.map((page, idx) =>
      typeof page === "string" ? (
        <span key={idx} className="mx-1 text-gray-600">
          ...
        </span>
      ) : (
        <button
          key={idx}
          onClick={() => handlePageChange(page)}
          className={`w-8 h-8 mx-1 rounded-full text-sm font-medium transition ${
            currentPage === page
              ? "bg-yellow-400 text-black"
              : "text-black hover:bg-gray-200"
          }`}
        >
          {page}
        </button>
      )
    );
  };

  return (
    <>
      <Navbar data={furnitureData.navigation} />
      <Header data={blogData} />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Blog Cards */}
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10">
            {selectedBlogs.map((blog, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() => handleBlogClick(blog.slug)}
              >
                <div className="relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-98 h-72 object-cover rounded-xl"
                  />
                  <div className="absolute bottom-0 left-32 bg-yellow-500 text-gray-900 text-sm px-4 py-2 rounded-t-lg rounded-b-none shadow border-t-4 border-l-4 border-r-4 border-white">
                    {blog.date}
                  </div>
                </div>
                <div className="mt-4 mb-4 p-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {blog.description}
                  </p>
                  <a
                    href="#"
                    className="text-green-700 font-semibold underline"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBlogClick(blog.slug);
                    }}
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination UI */}

          <Stack spacing={2} className="mt-10">
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={(e, value) => handlePageChange(value)}
              variant="outlined"
              className="flex justify-center"
            />
          </Stack>

          {/* <div className="flex justify-center items-center gap-3 mt-10 select-none">
            {/* Left Arrow 
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="text-2xl text-gray-700 disabled:text-gray-300 bg-transparent border-none"
              style={{ background: "none" }}
            >
              &lt;
            </button>
            {/* Static Page Numbers 
            {["1", "2", "3", "4", "...", "10"].map((page, idx) =>
              page === "..." ? (
                <span key={idx} className="px-2 text-gray-400">
                  ...
                </span>
              ) : (
                <button
                  key={page}
                  onClick={() => setCurrentPage(Number(page))}
                  className={`mx-1 ${
                    currentPage === Number(page)
                      ? "bg-yellow-500 text-black w-8 h-8 rounded-full font-semibold"
                      : "text-gray-700"
                  }`}
                  style={{
                    minWidth: currentPage === Number(page) ? "2.5rem" : "auto",
                    minHeight: currentPage === Number(page) ? "2.5rem" : "auto",
                  }}
                >
                  {page}
                </button>
              )
            )}
            {/* Right Arrow 
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="text-2xl text-gray-700 disabled:text-gray-300 bg-transparent border-none"
              style={{ background: "none" }}
            >
              &gt;
            </button>
          </div> */}
        </div>
      </section>

      <Features data={furnitureData.features} />
      <Footer data={furnitureData.footer} />
    </>
  );
};

export default Blog;
