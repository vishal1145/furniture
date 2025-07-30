import React from "react";
import { useParams } from "react-router-dom";
import blogData from "../../data/blog.json";
import furnitureData from "../../data/furnitureData.json";
import Navbar from "../../components/Navbar";
import HeaderFile from '../../components/Header';
import Footer from "../../components/Footer";
import Features from "../../components/Features";
import Blog from "../../components/Blog";
import blognewsData from "../../data/furnitureData.json";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogData.blogDetails.find((b) => b.slug === slug);

  if (!blog) return <div className="text-center py-20">Blog not found.</div>;

  return (
    <>
      <Navbar data={furnitureData.navigation} />
      <HeaderFile data={blogData} />
      
      {/* Hero Image */}
      <div className="px-6 sm:px-12 lg:px-32 flex justify-center mt-6">
        <div className="max-w-7xl w-full rounded-2xl overflow-hidden">
          <img
            src={blog.heroImage}
            alt={blog.title}
            className="w-full h-[500px] object-cover"
          />
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-12 gap-10">
        {/* Left Share Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <h3 className="text-sm font-bold text-gray-400 mb-4 uppercase">Share</h3>
            <div className="flex flex-col gap-3">
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(blog.title || 'Check out this amazing blog post!')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-colors"
                title="Share on Facebook"
              >
                <FaFacebookF />
              </a>
              <a 
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(blog.title || 'Check out this amazing blog post!')}&hashtags=furniture,blog,home`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-colors"
                title="Share on Twitter"
              >
                <FaTwitter />
              </a>
              <a 
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(blog.title || 'Amazing blog post from AlgoFurnish!')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-colors"
                title="Share on LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-7">
          {/* Tags */}
          <div className="flex gap-2 mb-6 justify-center">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-green-800 text-white text-xs font-medium px-4 py-2 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            {blog.title}
          </h1>

          {/* Author Info */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <img
              src={blog.authorImage}
              className="w-8 h-8 rounded-full"
              alt="Author"
            />
            <div className="text-left">
              <div className="text-sm">
                <span className="text-gray-500">Written by </span>
                <span className="text-gray-700 font-medium ">{blog.author}</span>
              </div>
              <div className="text-xs text-gray-500 mt-2">
                {blog.date} | {blog.readTime}
              </div>
            </div>
          </div>

          {/* Introduction Paragraph with Drop Cap */}
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed">
              <span className="float-left w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-5xl font-bold text-black mr-4 leading-none">L</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>

          {/* Body Sections */}
          {blog.content.body.map((section, index) => (
            <div key={index} className="mb-10">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {section.heading}
              </h2>
              
              {/* Regular text content */}
              <p className="text-gray-600 leading-relaxed mb-4">{section.text}</p>

              {/* Images if any */}
              {section.images && (
                <div className="grid grid-cols-2 gap-6 mt-6 mb-6">
                  {section.images.map((img, idx) => (
                    <div key={idx} className="rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={img}
                        alt="Blog Visual"
                        className="w-full h-96 object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Text content after images */}
            </div>
          ))}

          {/* Also Read Section */}
          <div className="mb-10">
            <div className="bg-green-800 rounded-md p-6">
              <div className="text-yellow-400 text-sm font-medium mb-2">
                Also Read :
              </div>
              <div className="flex items-center">
                <div className="w-1 h-6 bg-yellow-400 mr-3"></div>
                <span className="text-green-100 text-lg font-medium">
                  "Revamping Your Entryway with Functional Furniture"
                </span>
              </div>
            </div>
          </div>

          {/* New Section: Cleaning and Maintenance Tips */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Cleaning and Maintenance Tips
            </h2>
            
            <div className="space-y-4">
          <div className="flex items-start gap-3 relative">
  <div className="relative w-4 h-4 bg-green-800 rounded-full mt-2 flex-shrink-0">
    <div className="absolute left-0 w-2 h-2 bg-yellow-400 rounded-full top-0.5"></div>
  </div>
  <p className="text-gray-600 leading-relaxed">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
  </p>
</div>

              
                   <div className="flex items-start gap-3 relative">
  <div className="relative w-4 h-4 bg-green-800 rounded-full mt-2 flex-shrink-0">
    <div className="absolute left-0 w-2 h-2 bg-yellow-400 rounded-full top-0.5"></div>
  </div>
  <p className="text-gray-600 leading-relaxed">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
  </p>
</div>
                        <div className="flex items-start gap-3 relative">
  <div className="relative w-4 h-4 bg-green-800 rounded-full mt-2 flex-shrink-0">
    <div className="absolute left-0 w-2 h-2 bg-yellow-400 rounded-full top-0.5"></div>
  </div>
  <p className="text-gray-600 leading-relaxed">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
  </p>
</div>
              
                     <div className="flex items-start gap-3 relative">
  <div className="relative w-4 h-4 bg-green-800 rounded-full mt-2 flex-shrink-0">
    <div className="absolute left-0 w-2 h-2 bg-yellow-400 rounded-full top-0.5"></div>
  </div>
  <p className="text-gray-600 leading-relaxed">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
  </p>
</div>
            </div>
          </div>

          {/* New Section: Protecting Your Investment */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Protecting Your Investment
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
            </p>
          </div>

          {/* Testimonial/Quote Block */}
          <div className="mb-10">
            <div className="bg-yellow-500 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <img
                    src="/images/Leslie .jpg"
                    alt="Jerome Bell"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Jerome Bell
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          {/* Filter by Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Filter by Categories</h3>
            <div className="grid grid-cols-3 gap-2">
              {[
                "Sofa", "Furniture", "Bed", "Offices", "Chair", "Lighting", 
                "Nightstand", "Office Table", "Decor", "Stool", "Dining Table", "Mirrors"
              ].map((cat, idx) => (
                <span
                  key={idx}
                  className="bg-gray-100 text-sm text-gray-700 px-3 py-2 rounded-full hover:bg-gray-200 transition-colors cursor-pointer text-center"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* Table of Content */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Table of Content</h3>
            <div className="space-y-3">
              {blog.content.body.map((section, index) => (
                <div key={index} className="text-sm text-gray-600 hover:text-green-700 cursor-pointer transition-colors">
                  {section.heading}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Promo */}
          <div className="relative">
            <img
              src="/images/blog3.png"
              className="w-full h-[500px] object-cover rounded-2xl"
              alt="Offer"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl"></div>
            <div className="absolute bottom-4 left-28 text-white text-center">
              <p className="text-sm font-medium"> — Latest Offers</p>
              <p className="text-lg font-bold mt-1"><span className="text-yellow-400">20% Off</span> on Latest</p>
              <p className="text-lg font-bold">Furniture</p>
              <a
                href="/shop"
                className="mt-3 inline-block bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-600 transition-colors"
              >
                Shop Now
              </a>
            </div>
          </div>
        </aside>
      </div>
  <Blog data={blognewsData}/>
      <Features data={furnitureData.features}/>
      <Footer data={furnitureData.footer} />
    </>
  );
};

export default BlogDetails;
