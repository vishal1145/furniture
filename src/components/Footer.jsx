import React from 'react';

const Footer = ({ data }) => {
  return (
    <footer className="bg-green-900 text-white pt-16 ">
      <div className=" px-6 sm:px-12 lg:px-32">
      <div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-5 gap-10 text-left">
        {/* Logo and Description */}
        <div className="text-center md:text-left">
          <div className="flex items-center mb-4 justify-center md:justify-start">
            <div className="bg-yellow-400 text-[#1e4d2b] w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
              {data.logo.icon}
            </div>
            <span className="ml-2 text-4xl ">
              {data.logo.text}<span className="text-yellow-400">{data.logo.accent}</span>
            </span>
          </div>
          <p className="text-sm text-gray-300 mb-4">{data.description}</p>
<div className="flex justify-center space-x-2 mt-2 ">
{[
  { name: 'Facebook', icon: 'fab fa-facebook-f', url: 'https://facebook.com/yourpage' },
  { name: 'Twitter', icon: 'fab fa-twitter', url: 'https://twitter.com/yourhandle' },
  { name: 'Pinterest', icon: 'fab fa-pinterest-p', url: 'https://pinterest.com/yourpage' },
  { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://instagram.com/yourprofile' },
  { name: 'YouTube', icon: 'fab fa-youtube', url: 'https://youtube.com/yourchannel' }
].map((item, index) => (
  <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
    {/* Outermost transparent circle like water */}
    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm">
      {/* Middle green circle */}
      <div className="w-10 h-10 rounded-full bg-[#1e4d2b] flex items-center justify-center shadow-md">
        {/* Inner white circle with icon */}
        <div className="bg-white w-6 h-6 rounded-full flex items-center justify-center">
          <i className={`${item.icon} text-[#1e4d2b] text-sm`}></i>
        </div>
      </div>
    </div>
  </a>
))}

</div>



        </div>

        {/* Company */}
        <div className="text-left">
          <h3 className="text-lg  mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {data.links.Company.map((link, index) => (
              <li key={index}><a href={link.href}>{link.name}</a></li>
            ))}
          </ul>
        </div>

        {/* Customer Services */}
        <div className="text-left">
          <h3 className="text-lg  mb-4">Customer Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {data.links['Customer Services'].map((link, index) => (
              <li key={index}><a href={link.href}>{link.name}</a></li>
            ))}
          </ul>
        </div>

        {/* Our Information */}
        <div className="text-left">
          <h3 className="text-lg  mb-4">Our Information</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {data.links['Our Information'].map((link, index) => (
              <li key={index}><a href={link.href}>{link.name}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-left">
          <h3 className="text-lg  mb-4">Contact Info</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {data.links['Contact Info'].map((link, index) => (
              <li key={index}>
                {link.href.startsWith('tel:') || link.href.startsWith('mailto:') ? (
                  <a href={link.href}>{link.name}</a>
                ) : (
                  <span>{link.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
</div>
      {/* Bottom Bar */}
      <div className="bg-yellow-400 text-sm text-gray-900 mt-12 py-4  px-6 sm:px-12 lg:px-32">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="mb-2 sm:mb-0">{data.copyright}</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center cursor-pointer">
              English
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"/>
              </svg>
            </div>
            <div className="flex items-center cursor-pointer">
              USD
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
